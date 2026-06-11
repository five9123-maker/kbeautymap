#!/usr/bin/env node
/* 대시보드 데이터·구성 무결성 검증
 * 사용: node scripts/validate.js
 * CI와 분기 인사이트 갱신 루틴의 배포 게이트로 사용된다. 실패 시 exit 1.
 */
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');

global.window = {};
require(path.join(root, 'data/data.js'));
const D = window.DASHBOARD_DATA;
const errs = [];
const ok = (m) => console.log('  ✓ ' + m);

/* ---------- 수출 데이터 ---------- */
{
  for (const [y, yd] of Object.entries(D.exportYears)) {
    const sum = yd.countries.reduce((s, c) => s + c.value, 0);
    if (sum > yd.total) errs.push(`${y}: 국가 합계(${sum.toFixed(1)})가 총액(${yd.total}) 초과`);
    for (const c of yd.countries) {
      if (!c.name || !c.nameKo || !c.flag || c.value == null) errs.push(`${y}/${c.nameKo ?? c.name}: 필드 누락`);
    }
  }
  // 2025 YoY는 2024 값 대비 계산값과 ±1.5%p 이내여야 함
  const y24 = Object.fromEntries(D.exportYears[2024].countries.map(c => [c.name, c.value]));
  for (const c of D.exportYears[2025].countries) {
    if (!(c.name in y24)) continue;
    const calc = (c.value / y24[c.name] - 1) * 100;
    if (Math.abs(calc - c.yoy) > 1.5) errs.push(`${c.nameKo} 2025 YoY 불일치: 표기 ${c.yoy} vs 계산 ${calc.toFixed(1)}`);
  }
  // 추이 마지막 값 = 2025 총액
  const last = D.exportTrend[D.exportTrend.length - 1];
  if (last.value !== D.exportYears[2025].total) errs.push('exportTrend 마지막 값이 2025 총액과 다름');
  // 권역 합계 ≈ 2024 총액
  const rs = D.regionShare.reduce((s, r) => s + r.value, 0);
  if (Math.abs(rs - D.exportYears[2024].total) > 30) errs.push(`권역 합계(${rs}) ≠ 2024 총액`);
  ok(`수출: ${Object.keys(D.exportYears).length}개 연도, 추이 ${D.exportTrend.length}년, YoY 교차검증`);
}

/* ---------- 지도 국가명 정합성 ---------- */
{
  let geo = fs.readFileSync(path.join(root, 'assets/world.js'), 'utf8');
  const json = JSON.parse(geo.slice(geo.indexOf('=') + 1, geo.lastIndexOf(';')));
  const names = new Set(json.features.map(f => f.properties.name));
  for (const yd of Object.values(D.exportYears))
    for (const c of yd.countries)
      if (!names.has(c.name)) errs.push(`GeoJSON에 없는 국가명: ${c.name}`);
  ok(`지도: GeoJSON 피처 ${json.features.length}개, 수출 국가명 전수 매칭`);
}

/* ---------- 브랜드 ---------- */
{
  for (const b of D.brands) {
    if (!b.display || !b.revenueKRW || !b.year || !b.group || !b.domain || !b.products?.length)
      errs.push(`브랜드 필드 누락: ${b.display ?? '?'}`);
    if (!['house', 'odm', 'sub'].includes(b.group)) errs.push(`브랜드 group 오류: ${b.display}`);
  }
  if (D.brands.length < 25) errs.push(`브랜드 수 부족: ${D.brands.length}`);
  ok(`브랜드: ${D.brands.length}개`);
}

/* ---------- 제품 ---------- */
{
  const CATS = ['토너·패드', '에센스·세럼', '크림·로션', '선케어', '쿠션·베이스', '립', '마스크팩', '디바이스', '클렌징'];
  const ranks = D.products.map(p => p.rank).sort((a, b) => a - b);
  if (ranks.join() !== Array.from({ length: D.products.length }, (_, i) => i + 1).join())
    errs.push('제품 rank 누락/중복');
  for (const p of D.products) {
    if (!CATS.includes(p.cat)) errs.push(`제품 cat 비정규: ${p.name} / ${p.cat}`);
    if (!p.sourceName || !p.sourceUrl || !p.region || !p.salesMetric) errs.push(`제품 필드 누락: ${p.name}`);
    if (!Array.isArray(p.benefits) || !Array.isArray(p.keyIngredients) || !Array.isArray(p.awards))
      errs.push(`제품 배열 필드 오류: ${p.name}`);
    if (p.priceKRW != null && (typeof p.priceKRW !== 'number' || p.priceKRW < 1000 || p.priceKRW > 2e6))
      errs.push(`제품 가격 이상: ${p.name} ${p.priceKRW}`);
    for (const r of ['ratingAmazon', 'ratingOliveYoung', 'ratingHwahae'])
      if (p[r] != null && (p[r] < 3 || p[r] > 5)) errs.push(`제품 평점 범위 오류: ${p.name} ${r}`);
    if (p.cumUnits != null && !p.unitsSuffix) errs.push(`제품 단위 누락: ${p.name}`);
    if (p.annualRevenueKRW != null && !p.revenueYear) errs.push(`제품 매출연도 누락: ${p.name}`);
  }
  if (D.products.length < 25) errs.push(`제품 수 부족: ${D.products.length}`);
  ok(`제품: ${D.products.length}개 (판매량 차트 ${D.products.filter(p => p.cumUnits != null).length}, 매출 차트 ${D.products.filter(p => p.annualRevenueKRW != null).length})`);
}

/* ---------- 플랫폼 실측 랭킹 ---------- */
{
  const PR = D.platformRanks;
  if (!PR) errs.push('platformRanks 누락');
  else {
    const oy = PR.oliveYoungGlobal;
    if (!oy?.snapshotDate || !oy?.sourceUrl || !(oy?.items?.length >= 10)) errs.push('올리브영 글로벌 랭킹 불완전');
    for (const it of oy?.items ?? []) {
      if (!it.rank || !it.brand || !it.name || it.priceUSD == null || it.rating == null) errs.push(`OY 항목 필드 누락: #${it.rank}`);
      if (it.rating < 3 || it.rating > 5) errs.push(`OY 평점 범위 오류: #${it.rank}`);
    }
    const q = PR.qoo10jp;
    if (!q?.month || !q?.sourceUrl || !q?.basis || !(q?.categories?.length >= 1)) errs.push('Qoo10 월간 랭킹 불완전');
    for (const cat of q?.categories ?? [])
      for (const it of cat.items ?? [])
        if (!it.rank || !it.brand || !it.name) errs.push(`Qoo10 항목 필드 누락: ${cat.category} #${it.rank}`);
    ok(`플랫폼 랭킹: 올리브영 ${oy?.items?.length ?? 0}개 (${oy?.snapshotDate}), Qoo10 ${q?.categories?.length ?? 0}개 카테고리 (${q?.month})`);
  }
}

/* ---------- 인사이트 ---------- */
{
  const I = D.insights;
  if (!Array.isArray(I) || I.length < 8) errs.push(`인사이트 카드 부족: ${I?.length ?? 0}`);
  for (const it of I ?? []) {
    if (!it.tag || !it.title || !(it.facts?.length >= 2) || !it.why || !it.sourceUrl)
      errs.push(`인사이트 필드 누락: ${it.title ?? '?'}`);
    for (const f of it.facts ?? [])
      if (/<(?!\/?b>)/.test(f)) errs.push(`인사이트 facts에 <b> 외 HTML: ${it.title}`);
  }
  ok(`인사이트: ${I.length}개 카드`);
}

/* ---------- index.html 캐시버스트 일관성 ---------- */
{
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  const vers = [...html.matchAll(/\?v=(\d+)/g)].map(m => +m[1]);
  if (vers.length < 3) errs.push(`캐시버스트 누락: ?v= ${vers.length}곳 (3곳이어야 함)`);
  if (new Set(vers).size > 1) errs.push(`캐시버스트 버전 불일치: ${vers.join(',')}`);
  for (const f of ['assets/echarts.min.js', 'assets/world.js', 'data/data.js'])
    if (!fs.existsSync(path.join(root, f))) errs.push(`에셋 누락: ${f}`);
  ok(`index.html: 캐시버스트 v=${vers[0]} 일관, 에셋 존재`);
}

if (errs.length) {
  console.error('\n❌ 검증 실패 ' + errs.length + '건:\n' + errs.map(e => '  - ' + e).join('\n'));
  process.exit(1);
}
console.log('\n✅ 전체 검증 통과');
