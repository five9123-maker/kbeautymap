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

/* ---------- 인디 브랜드 워치 (indie.html) ---------- */
{
  const w2 = {};
  const g = global.window; global.window = w2;
  require(path.join(root, 'data/indie.js'));
  const I = w2.INDIE_DATA;
  global.window = g;
  if (!I?.series?.length) errs.push('INDIE_DATA 누락');
  else {
    if (I.series.length < 90 || I.series.length > 100) errs.push(`인디 기업 수 이상: ${I.series.length}`);
    const names = new Set();
    for (const c of I.series) {
      if (!c.company || !c.revenues) { errs.push(`인디 필드 누락: ${c.company ?? '?'}`); continue; }
      if (names.has(c.company)) errs.push(`인디 기업명 중복: ${c.company}`);
      names.add(c.company);
      const vals = [2021, 2022, 2023, 2024, 2025].map(y => c.revenues[y]);
      if (!vals.some(v => v != null)) errs.push(`인디 매출 전무: ${c.company}`);
      for (const v of vals)
        if (v != null && (typeof v !== 'number' || v < 10 || v > 50000)) errs.push(`인디 매출 이상치: ${c.company} ${v}`);
    }
    for (const n of I.defaultSelection ?? [])
      if (!names.has(n)) errs.push(`defaultSelection에 없는 기업: ${n}`);
    const cov24 = I.series.filter(c => c.revenues[2024] != null).length;
    if (cov24 < 60) errs.push(`인디 2024 커버리지 부족: ${cov24}`);
    if (!I.series.some(c => c.foreign)) errs.push('외국인 창업 브랜드(foreign) 누락');
    ok(`인디: ${I.series.length}개사 (2024 커버리지 ${cov24}, 해외 법인 ${I.series.filter(c => c.foreign).length})`);
  }
  const ih = fs.readFileSync(path.join(root, 'indie.html'), 'utf8');
  const iv = [...ih.matchAll(/\?v=(\d+)/g)].map(m => +m[1]);
  if (new Set(iv).size > 1) errs.push(`indie.html 캐시버스트 불일치: ${iv.join(',')}`);
}

/* ---------- 신규 탭 데이터 (deals/markets/trends/calendar) ---------- */
{
  const load = (file, key) => {
    const w = {}; const g = global.window; global.window = w;
    require(path.join(root, file));
    global.window = g;
    return w[key];
  };
  const DL = load('data/deals.js', 'DEALS_DATA');
  if (!(DL?.deals?.length >= 20)) errs.push(`딜 수 부족: ${DL?.deals?.length ?? 0}`);
  for (const d of DL?.deals ?? []) {
    if (!d.date || !d.acquirer || !d.target || !d.source || !d.sourceUrl) errs.push(`딜 필드 누락: ${d.target ?? '?'}`);
    if (d.priceKRW != null && (d.priceKRW < 10 || d.priceKRW > 100000)) errs.push(`딜 가격 이상치: ${d.target} ${d.priceKRW}`);
    if (d.stakePct != null && (d.stakePct <= 0 || d.stakePct > 100)) errs.push(`지분율 오류: ${d.target}`);
  }
  if (!(DL?.ipos?.length >= 8)) errs.push('IPO 수 부족');
  ok(`딜 워치: ${DL.deals.length}딜 + ${DL.ipos.length} IPO`);

  const MK = load('data/markets.js', 'MARKETS_DATA');
  if (!(MK?.markets?.length >= 5)) errs.push('마켓 수 부족');
  for (const m of MK?.markets ?? []) {
    if (!m.key || !m.channels?.length || !m.regulations?.length || !m.playbook || !m.stat || !m.sources?.length)
      errs.push(`마켓 필드 누락: ${m.name ?? '?'}`);
    for (const r of m.regulations) if (r.deadline && isNaN(new Date(r.deadline))) errs.push(`마켓 규제 날짜 오류: ${m.name}/${r.name}`);
  }
  ok(`마켓: ${MK.markets.length}개 시장`);

  const TR = load('data/trends.js', 'TRENDS_DATA');
  if (!(TR?.ingredients?.length >= 10)) errs.push('성분 수 부족');
  for (const g of TR?.ingredients ?? []) {
    if (!g.key || !g.stage || !g.stageReason || !g.outlook || !g.sources?.length) errs.push(`성분 필드 누락: ${g.name ?? '?'}`);
    if (g.pubmed) for (const [y, v] of Object.entries(g.pubmed))
      if (typeof v !== 'number' || v < 0 || v > 100000) errs.push(`PubMed 수치 오류: ${g.name}/${y}`);
  }
  if (!(TR?.emerging?.length >= 3)) errs.push('신흥 성분 부족');
  ok(`성분 레이더: ${TR.ingredients.length}성분 + ${TR.emerging.length}신흥`);

  const CA = load('data/calendar.js', 'CALENDAR_DATA');
  if (!(CA?.events?.length >= 15)) errs.push('캘린더 이벤트 부족');
  const VALID_CATS = new Set(['규제', 'IPO', '세일', '전시', '실적']);
  for (const e of CA?.events ?? []) {
    if (!e.date || !e.title || !VALID_CATS.has(e.category) || e.confirmed == null || !e.sourceUrl) errs.push(`이벤트 필드 누락: ${e.title ?? '?'}`);
    if (isNaN(new Date(e.date.length === 7 ? e.date + '-15' : e.date))) errs.push(`이벤트 날짜 오류: ${e.title}`);
  }
  ok(`캘린더: ${CA.events.length}개 이벤트`);

  // 신규 페이지 캐시버스트 일관성
  for (const f of ['deals.html', 'markets.html', 'trends.html', 'calendar.html', 'indie.html']) {
    const h = fs.readFileSync(path.join(root, f), 'utf8');
    const vs = [...h.matchAll(/\?v=(\d+)/g)].map(x => +x[1]);
    if (new Set(vs).size > 1) errs.push(`${f} 캐시버스트 불일치: ${vs.join(',')}`);
  }
}

/* ---------- 프랑스 케이스 (france.html) ---------- */
{
  const w = {}; const g = global.window; global.window = w;
  require(path.join(root, 'data/france.js'));
  global.window = g;
  const F = w.FRANCE_DATA;
  if (!F) errs.push('FRANCE_DATA 누락');
  else {
    if (!(F.series?.length >= 15)) errs.push('프랑스 시계열 부족');
    for (const s of F.series) if (!s.year || s.valueB == null || s.valueB < 5 || s.valueB > 60) errs.push(`프랑스 시계열 이상치: ${s.year}`);
    if (!(F.destinations?.items?.length >= 10)) errs.push('프랑스 대상국 부족');
    // GeoJSON 국가명 정합성
    let geo = fs.readFileSync(path.join(root, 'assets/world.js'), 'utf8');
    const names = new Set(JSON.parse(geo.slice(geo.indexOf('=') + 1, geo.lastIndexOf(';'))).features.map(f => f.properties.name));
    for (const d of F.destinations.items) if (!names.has(d.countryEn)) errs.push(`프랑스 대상국 GeoJSON 불일치: ${d.countryEn}`);
    for (const sec of ['factors', 'companies', 'comparison', 'lessons', 'trends', 'catShare', 'stats'])
      if (!(F[sec]?.length >= 3)) errs.push(`프랑스 ${sec} 부족`);
    for (const f of F.factors) if (!f.title || !f.facts?.length || !f.why || !f.sourceUrl) errs.push(`프랑스 factor 필드 누락: ${f.key}`);
    const comp = F.competitors ?? {};
    if (Object.keys(comp).length < 4) errs.push('프랑스 경쟁국 시계열 부족');
    for (const [c, arr] of Object.entries(comp)) {
      if (arr.length < 15) errs.push(`경쟁국 시계열 부족: ${c}`);
      for (const p of arr) if (p.valueB < 0.3 || p.valueB > 30) errs.push(`경쟁국 이상치: ${c} ${p.year}`);
    }
    const catSum = F.catShare.reduce((a, c) => a + c.sharePct, 0);
    if (Math.abs(catSum - 100) > 2) errs.push(`프랑스 카테고리 합 이상: ${catSum}`);
    ok(`프랑스: 시계열 ${F.series.length}년, 대상국 ${F.destinations.items.length}, 배경 ${F.factors.length}, 경쟁국 ${Object.keys(F.competitors ?? {}).length}`);
  }
}

if (errs.length) {
  console.error('\n❌ 검증 실패 ' + errs.length + '건:\n' + errs.map(e => '  - ' + e).join('\n'));
  process.exit(1);
}
console.log('\n✅ 전체 검증 통과');
