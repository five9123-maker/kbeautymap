#!/usr/bin/env node
/* 인디 브랜드 리서치 결과(연도별 수집분)를 data/indie.js로 병합
 * 사용: node scripts/merge_indie.js /tmp/indie_a.json /tmp/indie_b.json /tmp/indie_c.json [/tmp/indie_d.json]
 * a: FY2024-25 메인 리스트 / b: FY2022-23 / c: FY2021 + 보정 / d: 롱테일 추가분 (옵션)
 */
const fs = require('fs');
const path = require('path');
const [, , fa, fb, fc, fd, fe] = process.argv;
const A = JSON.parse(fs.readFileSync(fa, 'utf8'));
const B = JSON.parse(fs.readFileSync(fb, 'utf8'));
const C = JSON.parse(fs.readFileSync(fc, 'utf8'));
const Dx = fd && fs.existsSync(fd) ? JSON.parse(fs.readFileSync(fd, 'utf8')) : [];
const E = fe && fs.existsSync(fe) ? JSON.parse(fs.readFileSync(fe, 'utf8')) : []; // 외국인 창업·해외 법인

const EXCLUDE = new Set(['스킨천사', '원씽', '그레이스클럽']); // 크레이버 산하 / 대기업 자회사 / 부스터스에 흡수
const canon = (name) => {
  const n = name.replace(/\s*[\(（].*$/, '').trim();
  const ALIAS = {
    'APR': '에이피알', '비모뉴먼트': '달바글로벌', '셀리맥스': '앱솔브랩',
    '셀퓨전씨': '씨엠에스랩', '라카': '라카코스메틱스', '라카코스메틱': '라카코스메틱스',
    '히로익스(힌스)': '비바웨이브', '토코보': '히로익스', '퓨리토서울': '퓨리토',
    '디어달리아': '바람인터내셔날', 'CSA코스믹': '씨에스에이코스믹', '이삼오구(2359)': '이삼오구',
    '엠비엑스': '미미박스', '코리아나': '코리아나화장품',
  };
  return ALIAS[n] ?? n;
};

const map = new Map();
const ensure = (name) => {
  const key = canon(name);
  if (!map.has(key)) map.set(key, { company: key, brands: [], revenues: {} });
  return map.get(key);
};

for (const r of A) {
  const e = ensure(r.company);
  if (r.brands?.length) e.brands = r.brands;
  if (r.rev2024 != null) e.revenues[2024] = r.rev2024;
  if (r.rev2025 != null) e.revenues[2025] = r.rev2025;
  if (r.note) e.note = r.note;
  if (r.source) { e.source = r.source; e.sourceUrl = r.sourceUrl; }
}
for (const r of B) {
  const e = ensure(r.company);
  if (r.rev2022 != null) e.revenues[2022] = r.rev2022;
  if (r.rev2023 != null) e.revenues[2023] = r.rev2023;
}
for (const r of C.rev2021) {
  const e = ensure(r.company);
  if (r.rev2021 != null) e.revenues[2021] = r.rev2021;
}
for (const r of C.extraRev ?? []) {
  const e = ensure(r.company);
  for (const y of [2021, 2022, 2023, 2024, 2025])
    if (r['rev' + y] != null) e.revenues[y] = r['rev' + y];
}
for (const r of C.extraMeta ?? []) {
  const e = ensure(r.company);
  if (!e.brands.length && r.brands) e.brands = r.brands;
  if (!e.note && r.note) e.note = r.note;
  if (!e.source && r.source) { e.source = r.source; e.sourceUrl = r.sourceUrl; }
}
for (const r of Dx) {
  const e = ensure(r.company);
  if (!e.brands.length && r.brands?.length) e.brands = r.brands;
  for (const y of [2021, 2022, 2023, 2024, 2025])
    if (r['rev' + y] != null && e.revenues[y] == null) e.revenues[y] = r['rev' + y];
  if (!e.note && r.note) e.note = r.note;
  if (!e.source && r.source) { e.source = r.source; e.sourceUrl = r.sourceUrl; }
}

for (const r of E) {
  const e = ensure(r.company);
  e.foreign = true;
  e.hq = r.hq;
  e.founders = r.founders;
  if (r.brands?.length) e.brands = r.brands;
  for (const y of [2021, 2022, 2023, 2024, 2025])
    if (r.revKRW?.[y] != null) e.revenues[y] = Math.round(r.revKRW[y]);
  if (r.note) e.note = r.note;
  if (r.source) { e.source = r.source; e.sourceUrl = r.sourceUrl; }
}

let series = [...map.values()].filter(e => !EXCLUDE.has(e.company));
// 매출이 한 해라도 있는 기업만, 최신 매출 기준 상위 100
// 외국인 창업·해외 법인(foreign)은 커버리지 보장 차원에서 컷 면제
const latest = e => { for (const y of [2025, 2024, 2023, 2022, 2021]) if (e.revenues[y] != null) return e.revenues[y]; return null; };
series = series.filter(e => latest(e) != null);
const foreign = series.filter(e => e.foreign);
const domestic = series.filter(e => !e.foreign).sort((a, b) => latest(b) - latest(a)).slice(0, 100 - foreign.length);
series = [...domestic, ...foreign].sort((a, b) => latest(b) - latest(a));
for (const e of series) for (const y of [2021, 2022, 2023, 2024, 2025]) if (!(y in e.revenues)) e.revenues[y] = null;

const out = `/* K-Beauty 인디 브랜드 워치 데이터 — 자동 병합 생성 (scripts/merge_indie.js)
 * 매출 단위: 억원 (연결 기준 우선, 일부 별도/회사발표 혼재 — note 참고)
 * null = 해당 연도 미공시·미확인. 출처: 감사보고서·공시·실적 분석 보도 종합 */
window.INDIE_DATA = {
  meta: {
    updated: "${new Date().toISOString().slice(0, 10)}",
    sources: [
      { label: "코스모닝 연간 기획 — 화장품 기업 경영실적 분석 (감사보고서 기반)", url: "https://www.cosmorning.com/news/article.html?no=52923" },
      { label: "뷰티누리·코스인코리아·더벨·THE VC·사람인/캐치 기업 재무정보 (기업별 출처는 행 호버 툴팁)", url: "https://thevc.kr" },
    ],
  },
  defaultSelection: ["구다이글로벌", "에이피알", "더파운더즈", "달바글로벌", "토리든"],
  series: ${JSON.stringify(series, null, 2).replace(/^/gm, '  ').trim()},
};
`;
fs.writeFileSync(path.join(__dirname, '../data/indie.js'), out);
const cov = y => series.filter(e => e.revenues[y] != null).length;
console.log(`기업 ${series.length}개 | 연도별 커버리지: 2021 ${cov(2021)} / 2022 ${cov(2022)} / 2023 ${cov(2023)} / 2024 ${cov(2024)} / 2025 ${cov(2025)}`);
console.log(`시계열 2년+: ${series.filter(e => Object.values(e.revenues).filter(v => v != null).length >= 2).length}개`);
