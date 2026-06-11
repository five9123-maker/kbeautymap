/* K-Beauty 인디 브랜드 워치 데이터 — 자동 병합 생성 (scripts/merge_indie.js)
 * 매출 단위: 억원 (연결 기준 우선, 일부 별도/회사발표 혼재 — note 참고)
 * null = 해당 연도 미공시·미확인. 출처: 감사보고서·공시·실적 분석 보도 종합 */
window.INDIE_DATA = {
  meta: {
    updated: "2026-06-11",
    sources: [
      { label: "코스모닝 연간 기획 — 화장품 기업 403개사(2025)·406개사(2024)·402개사(2023) 경영실적 분석 (감사보고서 기반)", url: "https://www.cosmorning.com/news/article.html?no=52923" },
      { label: "뷰티누리·코스인코리아·더벨·THE VC·사람인/캐치 기업 재무정보, 각사 공시·IR·IPO 증권신고서 보도 (기업별 출처는 행 호버 툴팁)", url: "https://thevc.kr" },
    ],
  },
  defaultSelection: ["구다이글로벌", "에이피알", "더파운더즈", "달바글로벌", "토리든"],
  series: [
    {
      "company": "에이피알",
      "brands": [
        "메디큐브",
        "에이프릴스킨"
      ],
      "revenues": {
        "2021": 2591,
        "2022": 3977,
        "2023": 5238,
        "2024": 7228,
        "2025": 15273
      },
      "note": "뷰티 디바이스(에이지알)+더마, 2025년 1조 클럽 입성",
      "source": "코스모닝 403개사 2025년 실적 분석",
      "sourceUrl": "https://www.cosmorning.com/news/article.html?no=52923"
    },
    {
      "company": "구다이글로벌",
      "brands": [
        "조선미녀",
        "티르티르",
        "라카",
        "라운드랩"
      ],
      "revenues": {
        "2021": 117,
        "2022": 413,
        "2023": 1396,
        "2024": 3731,
        "2025": 14718
      },
      "note": "연쇄 인수(애그리게이터), IPO 추진 — 연결 기준이라 2025 급증에 인수효과 포함",
      "source": "코스모닝 403개사 2025년 실적 분석",
      "sourceUrl": "https://www.cosmorning.com/news/article.html?no=52923"
    },
    {
      "company": "더파운더즈",
      "brands": [
        "아누아"
      ],
      "revenues": {
        "2021": 299,
        "2022": 576,
        "2023": 1432,
        "2024": 4278,
        "2025": 7177
      },
      "note": "어성초 스킨케어, 해외 매출 비중 약 90%",
      "source": "코스모닝 403개사 2025년 실적 분석",
      "sourceUrl": "https://www.cosmorning.com/news/article.html?no=52923"
    },
    {
      "company": "크레이버코퍼레이션",
      "brands": [
        "스킨1004",
        "커먼랩스"
      ],
      "revenues": {
        "2021": null,
        "2022": 456,
        "2023": 930,
        "2024": 3210,
        "2025": 6780
      },
      "note": "센텔라 글로벌 히트, 2024년 구다이글로벌 계열 편입",
      "source": "코스모닝 403개사 2025년 실적 분석",
      "sourceUrl": "https://www.cosmorning.com/news/article.html?no=52923"
    },
    {
      "company": "코스알엑스",
      "brands": [
        "코스알엑스"
      ],
      "revenues": {
        "2021": null,
        "2022": 2044,
        "2023": 4862,
        "2024": 5898,
        "2025": null
      },
      "note": "스네일 에센스 글로벌 히트 — 인디 출신, 2024년 아모레퍼시픽 그룹 편입",
      "source": "코스모닝·한국금융신문",
      "sourceUrl": "https://www.cosmorning.com/news/article.html?no=48159"
    },
    {
      "company": "파마리서치",
      "brands": [
        "리쥬란"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": null,
        "2024": 3501,
        "2025": 5363
      },
      "note": "리쥬란 급성장 — 매출에 의약품·의료기기 포함 주의",
      "source": "코스모닝 403개사 2025년 실적 분석",
      "sourceUrl": "https://www.cosmorning.com/news/article.html?no=52923"
    },
    {
      "company": "달바글로벌",
      "brands": [
        "달바"
      ],
      "revenues": {
        "2021": 692,
        "2022": 1452,
        "2023": 2008,
        "2024": 3090,
        "2025": 5197
      },
      "note": "비건 미스트 세럼 히트, 2025년 코스피 상장",
      "source": "코스모닝 403개사 2025년 실적 분석",
      "sourceUrl": "https://www.cosmorning.com/news/article.html?no=52923"
    },
    {
      "company": "브이티",
      "brands": [
        "VT (리들샷)"
      ],
      "revenues": {
        "2021": 2267,
        "2022": 2404,
        "2023": 2955,
        "2024": 4317,
        "2025": 4372
      },
      "note": "리들샷 일본 히트 후 미국·중국 확장",
      "source": "뉴스타운 (잠정실적)",
      "sourceUrl": "https://www.newstown.co.kr/news/articleView.html?idxno=697626"
    },
    {
      "company": "엘앤피코스메틱",
      "brands": [
        "메디힐"
      ],
      "revenues": {
        "2021": 2642,
        "2022": null,
        "2023": 2817,
        "2024": 3880,
        "2025": null
      },
      "note": "마스크팩 1세대 메가 브랜드, 2024년 +37.7%",
      "source": "코스모닝 406개사 2024년 실적 분석",
      "sourceUrl": "https://www.cosmorning.com/news/article.html?no=50584"
    },
    {
      "company": "클리오",
      "brands": [
        "클리오",
        "페리페라",
        "구달"
      ],
      "revenues": {
        "2021": 2327,
        "2022": 2725,
        "2023": 3306,
        "2024": 3514,
        "2025": 3289
      },
      "note": "색조 1세대 인디, 2025년 역성장",
      "source": "코스인코리아 공개기업 76개사 2025년 실적",
      "sourceUrl": "https://www.cosinkorea.com/news/article.html?no=57129"
    },
    {
      "company": "토리든",
      "brands": [
        "토리든"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": 673,
        "2024": 1860,
        "2025": 2743
      },
      "note": "다이브인 세럼 등 저자극 스킨케어",
      "source": "코스모닝 403개사 2025년 실적 분석",
      "sourceUrl": "https://www.cosmorning.com/news/article.html?no=52923"
    },
    {
      "company": "티르티르",
      "brands": [
        "티르티르"
      ],
      "revenues": {
        "2021": 465,
        "2022": 1237,
        "2023": 1719,
        "2024": 2736,
        "2025": null
      },
      "note": "쿠션 미국·일본 히트, 2024년 구다이글로벌 인수 후 연결 편입 (단독 실적 비공개)",
      "source": "브릿지경제",
      "sourceUrl": "https://www.viva100.com/article/20250415500295"
    },
    {
      "company": "비나우",
      "brands": [
        "넘버즈인",
        "퓌"
      ],
      "revenues": {
        "2021": 1145,
        "2022": 592,
        "2023": 1140,
        "2024": 2664,
        "2025": null
      },
      "note": "2024년 +133.6%, IPO 준비 (기업가치 1조 거론)",
      "source": "코스인코리아 인디 메가브랜드 25곳",
      "sourceUrl": "https://cosinkorea.com/news/article.html?no=55237"
    },
    {
      "company": "에이블씨엔씨",
      "brands": [
        "미샤",
        "어퓨"
      ],
      "revenues": {
        "2021": 2629,
        "2022": 2479,
        "2023": 2736,
        "2024": 2640,
        "2025": 2420
      },
      "note": "로드숍 출신, 글로벌 전환 중 (IMM PE 소유)",
      "source": "코스인코리아 공개기업 76개사",
      "sourceUrl": "https://www.cosinkorea.com/news/article.html?no=57129"
    },
    {
      "company": "브랜드501",
      "brands": [
        "닥터멜락신"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": null,
        "2024": 800,
        "2025": 2337
      },
      "note": "더마 브랜드, 2025년 +192% 고성장 (TikTok 히트)",
      "source": "코스모닝 403개사 2025년 실적 분석",
      "sourceUrl": "https://www.cosmorning.com/news/article.html?no=52923"
    },
    {
      "company": "카버코리아",
      "brands": [
        "AHC"
      ],
      "revenues": {
        "2021": null,
        "2022": 3144,
        "2023": 2782,
        "2024": 2320,
        "2025": null
      },
      "note": "2017년 유니레버 3조원 인수 — 중국 의존 후유증으로 역성장 지속",
      "source": "뉴스워커 (감사보고서)",
      "sourceUrl": "http://www.newsworker.co.kr/news/articleView.html?idxno=194925"
    },
    {
      "company": "고운세상코스메틱",
      "brands": [
        "닥터지",
        "비비드로우"
      ],
      "revenues": {
        "2021": 1731,
        "2022": 1971,
        "2023": 1984,
        "2024": 2261,
        "2025": null
      },
      "note": "더마, 2024년 해외 +67% — 2024년 말 로레알 인수 계약",
      "source": "사람인 기업정보",
      "sourceUrl": "https://www.saramin.co.kr/zf_user/company-info/view/csn/aWczaXdCaW5GbzIzMlk4NzkxYlpGZz09"
    },
    {
      "company": "아이패밀리에스씨",
      "brands": [
        "롬앤",
        "누즈"
      ],
      "revenues": {
        "2021": null,
        "2022": 851,
        "2023": 1487,
        "2024": 2049,
        "2025": 2241
      },
      "note": "색조(립) 중심, 일본 등 수출 다각화",
      "source": "FnGuide",
      "sourceUrl": "https://comp.fnguide.com/SVO2/ASP/SVD_Main.asp?gicode=A114840"
    },
    {
      "company": "토니모리",
      "brands": [
        "토니모리"
      ],
      "revenues": {
        "2021": 1089,
        "2022": 1267,
        "2023": 1511,
        "2024": 1770,
        "2025": 2203
      },
      "note": "로드숍 출신, 채널 전환·해외 확장으로 반등",
      "source": "코스인코리아 공개기업 76개사",
      "sourceUrl": "https://www.cosinkorea.com/news/article.html?no=57129"
    },
    {
      "company": "서린컴퍼니",
      "brands": [
        "라운드랩"
      ],
      "revenues": {
        "2021": 530,
        "2022": 573,
        "2023": 1156,
        "2024": 1961,
        "2025": null
      },
      "note": "독도토너, 2025년 구다이글로벌 인수 (~6,000억대)",
      "source": "데일리패션뉴스",
      "sourceUrl": "https://dafanew.com/Bnews/?idx=165552459&bmode=view"
    },
    {
      "company": "에프앤코",
      "brands": [
        "바닐라코"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": null,
        "2024": 1946,
        "2025": null
      },
      "note": "클렌징밤 글로벌 스테디셀러",
      "source": "사람인 기업정보",
      "sourceUrl": "https://www.saramin.co.kr/zf_user/company-info/view/csn/NXprMTRkWHR5cVRHUlJjOWs0WnJTZz09"
    },
    {
      "company": "해브앤비",
      "brands": [
        "닥터자르트"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": 3327,
        "2024": 2329,
        "2025": 1788
      },
      "note": "에스티로더 1.3조 인수 — 6월 결산 법인 (FY는 7월~6월), 2년 연속 영업적자",
      "source": "이코노미조선·뉴데일리",
      "sourceUrl": "https://biz.newdaily.co.kr/site/data/html/2025/10/17/2025101700123.html"
    },
    {
      "company": "올리브인터내셔널",
      "brands": [
        "성분에디터",
        "밀크터치"
      ],
      "revenues": {
        "2021": 272,
        "2022": 210,
        "2023": 608,
        "2024": 1109,
        "2025": 1757
      },
      "note": "그린토마토 모공앰플 히트, 멀티 브랜드",
      "source": "코스모닝 403개사 2025년 실적 분석",
      "sourceUrl": "https://www.cosmorning.com/news/article.html?no=52923"
    },
    {
      "company": "디엔코스메틱스",
      "brands": [
        "이지듀"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": null,
        "2024": 672,
        "2025": 1746
      },
      "note": "DN그룹 더마, 2025년 +160%",
      "source": "코스모닝 403개사 2025년 실적 분석",
      "sourceUrl": "https://www.cosmorning.com/news/article.html?no=52923"
    },
    {
      "company": "앱솔브랩",
      "brands": [
        "셀리맥스"
      ],
      "revenues": {
        "2021": 109,
        "2022": 172,
        "2023": null,
        "2024": 462,
        "2025": 1742
      },
      "note": "비타민 잡티 세럼, 2025년 +277%",
      "source": "코스모닝 403개사 2025년 실적 분석",
      "sourceUrl": "https://www.cosmorning.com/news/article.html?no=52923"
    },
    {
      "company": "아이리스브라이트",
      "brands": [
        "하아르",
        "씨퓨리"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": null,
        "2024": 949,
        "2025": 1709
      },
      "note": "D2C 브랜드 하우스, 70여 개국 진출",
      "source": "코스모닝 403개사 2025년 실적 분석",
      "sourceUrl": "https://www.cosmorning.com/news/article.html?no=52923"
    },
    {
      "company": "포컴퍼니",
      "brands": [
        "아비브"
      ],
      "revenues": {
        "2021": 460,
        "2022": 502,
        "2023": 600,
        "2024": 846,
        "2025": 1658
      },
      "note": "어성초 진정 스킨케어, 2025년 +96%",
      "source": "코스모닝 403개사 2025년 실적 분석",
      "sourceUrl": "https://www.cosmorning.com/news/article.html?no=52923"
    },
    {
      "company": "지피클럽",
      "brands": [
        "제이엠솔루션"
      ],
      "revenues": {
        "2021": 5355,
        "2022": 2725,
        "2023": 1997,
        "2024": 1655,
        "2025": null
      },
      "note": "마스크팩 중국 특수 이후 사업 재편 중",
      "source": "사람인 재무정보",
      "sourceUrl": "https://www.saramin.co.kr/zf_user/company-info/view-inner-finance/csn/NVcrR3Q5Rk5BU1BFaWpDYUJsanZFZz09"
    },
    {
      "company": "잇츠한불",
      "brands": [
        "잇츠스킨"
      ],
      "revenues": {
        "2021": 1402,
        "2022": 1307,
        "2023": 1392,
        "2024": 1424,
        "2025": 1534
      },
      "note": "로드숍 출신 (달팽이크림), 네오팜 모회사",
      "source": "코스인코리아 공개기업 76개사",
      "sourceUrl": "https://www.cosinkorea.com/news/article.html?no=57129"
    },
    {
      "company": "부스터스",
      "brands": [
        "이퀄베리",
        "코스노리"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": null,
        "2024": 728,
        "2025": 1527
      },
      "note": "브랜드 인수·육성형(애그리게이터)",
      "source": "코스모닝 403개사 2025년 실적 분석",
      "sourceUrl": "https://www.cosmorning.com/news/article.html?no=52923"
    },
    {
      "company": "뷰티셀렉션",
      "brands": [
        "바이오던스"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": 416,
        "2024": 1357,
        "2025": null
      },
      "note": "콜라겐 마스크 Amazon 히트, 2024년 +226%",
      "source": "코스인코리아 인디 메가브랜드 25곳",
      "sourceUrl": "https://cosinkorea.com/news/article.html?no=55237"
    },
    {
      "company": "Glow Recipe",
      "brands": [
        "글로우 레시피"
      ],
      "revenues": {
        "2021": 1145,
        "2022": null,
        "2023": 1306,
        "2024": null,
        "2025": null
      },
      "foreign": true,
      "hq": "미국 뉴욕",
      "founders": "Sarah Lee·Christine Chang (한국계 미국)",
      "note": "워터멜론 글로우. 실매출(net revenue) 보수 하한 기준 — 2023 retail sales는 $300M이지만 실매출은 $100~125M (Fortune). Sephora US 스킨케어 1위",
      "source": "Fortune·CNBC",
      "sourceUrl": "https://fortune.com/2024/02/13/loreal-alums-skincare-brand-glow-recipe/"
    },
    {
      "company": "Peach & Lily",
      "brands": [
        "피치앤릴리",
        "Peach Slices"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": 1306,
        "2024": null,
        "2025": null
      },
      "foreign": true,
      "hq": "미국 뉴욕",
      "founders": "Alicia Yoon (한국계 미국)",
      "note": "글래스스킨 세럼, Ulta 중심. 2023 두 브랜드 합산 net sales $100M 돌파 (업계 소식통 기준)",
      "source": "WWD",
      "sourceUrl": "https://wwd.com/beauty-industry-news/beauty-features/peach-lily-glass-skin-ulta-beauty-100-million-sales-1235849916/"
    },
    {
      "company": "네오팜",
      "brands": [
        "아토팜",
        "리얼베리어"
      ],
      "revenues": {
        "2021": null,
        "2022": 850,
        "2023": 971,
        "2024": 1190,
        "2025": 1300
      },
      "note": "더마(민감피부), 잇츠한불 자회사 — 2025는 잠정",
      "source": "하나증권 프리뷰",
      "sourceUrl": "https://www.hanaw.com/main/research/research/download.cmd?bbsSeq=1283493&attachFileSeq=1"
    },
    {
      "company": "이삼오구",
      "brands": [
        "셀라딕스",
        "메디온"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": null,
        "2024": 1294,
        "2025": null
      },
      "note": "더마 멀티 브랜드, 2024년 +89.7%",
      "source": "코스모닝 406개사 2024년 실적 분석",
      "sourceUrl": "https://www.cosmorning.com/news/article.html?no=50584"
    },
    {
      "company": "더스킨팩토리",
      "brands": [
        "쿤달"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": null,
        "2024": 1200,
        "2025": null
      },
      "note": "헤어·바디, 2024년 회사 발표 기준 (해외 560억)",
      "source": "코스모닝",
      "sourceUrl": "https://www.cosmorning.com/news/article.html?no=49556"
    },
    {
      "company": "네이처리퍼블릭",
      "brands": [
        "네이처리퍼블릭"
      ],
      "revenues": {
        "2021": 1255,
        "2022": 1449,
        "2023": 1439,
        "2024": 1141,
        "2025": null
      },
      "note": "로드숍 출신, 2024년 -20.8%·영업손실",
      "source": "뷰티누리",
      "sourceUrl": "https://www.beautynury.com/news/view/107496/cat/10"
    },
    {
      "company": "마녀공장",
      "brands": [
        "마녀공장",
        "노머시"
      ],
      "revenues": {
        "2021": 626,
        "2022": 1018,
        "2023": 1050,
        "2024": 1279,
        "2025": 1130
      },
      "note": "클렌징 강자, 2025년 해외 부진 역성장",
      "source": "디지털투데이 (공시)",
      "sourceUrl": "https://www.digitaltoday.co.kr/news/articleView.html?idxno=635086"
    },
    {
      "company": "정샘물뷰티",
      "brands": [
        "정샘물"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": 707,
        "2024": 1109,
        "2025": null
      },
      "note": "아티스트 브랜드, 2024년 +56.8%",
      "source": "사람인 재무정보",
      "sourceUrl": "https://m.saramin.co.kr/job-search/company-info-view/finance?csn=SmtuY0l4Y0dvcm5GQmtHY3N2Z2N3Zz09"
    },
    {
      "company": "스킨이데아",
      "brands": [
        "메디필",
        "데이지크"
      ],
      "revenues": {
        "2021": null,
        "2022": 699,
        "2023": 740,
        "2024": 1056,
        "2025": null
      },
      "note": "더마+색조 듀얼, 2024년 모건스탠리PE 인수",
      "source": "코공고",
      "sourceUrl": "https://www.cogonggo.co/company/skinidea"
    },
    {
      "company": "페렌벨",
      "brands": [
        "썸바이미"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": null,
        "2024": 963,
        "2025": null
      },
      "note": "AHA·BHA·PHA 글로벌 더마 — 영업이익 325억, M&A 몸값 6,000억 거론",
      "source": "서울경제 시그널",
      "sourceUrl": "https://www.sedaily.com/NewsView/2GV9PKVT3M"
    },
    {
      "company": "Yepoda",
      "brands": [
        "예포다"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": 408,
        "2024": 963,
        "2025": null
      },
      "foreign": true,
      "hq": "독일 베를린",
      "founders": "V. Strotmann(독일)·S. van Bladel(네덜란드)",
      "note": "한국 제조 D2C (net revenue 기준, €→원 환산). 2024 €65.3M(+126%), 2025 Sephora Europe 100+ 매장 입점",
      "source": "deutsche-startups.de·Beauty Independent",
      "sourceUrl": "https://www.deutsche-startups.de/2026/06/03/heyjobs-yepoda-caresyntax-visionhealth-coachbetter-dfb/"
    },
    {
      "company": "와이어트",
      "brands": [
        "닥터포헤어",
        "어노브"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": null,
        "2024": 955,
        "2025": null
      },
      "note": "헤어케어(탈모·손상모) 전문",
      "source": "코스인코리아 인디 메가브랜드 25곳",
      "sourceUrl": "https://cosinkorea.com/news/article.html?no=55237"
    },
    {
      "company": "코스모코스",
      "brands": [
        "꽃을든남자",
        "다나한"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": null,
        "2024": 942,
        "2025": null
      },
      "note": "1세대 로드숍형 (코스모그룹 계열 중견)",
      "source": "사람인 재무정보",
      "sourceUrl": "https://www.saramin.co.kr/zf_user/company-info/view-inner-finance/csn/cWMrdjZFWWhFRDl6K2tVRHhsT2hMdz09"
    },
    {
      "company": "엔프라니",
      "brands": [
        "홀리카홀리카"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": null,
        "2024": 940,
        "2025": null
      },
      "note": "로드숍 출신, 해외 비중 약 40%",
      "source": "사람인 재무정보",
      "sourceUrl": "https://www.saramin.co.kr/zf_user/company-info/view-inner-finance/csn/NmcwQ3laSUphbTlmVUY5ei9uUjhCUT09"
    },
    {
      "company": "모먼츠컴퍼니",
      "brands": [
        "비플레인"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": null,
        "2024": 550,
        "2025": 891
      },
      "note": "진정 스킨케어, 2025년 서울리거 인수 (2025 잠정)",
      "source": "머니투데이",
      "sourceUrl": "https://www.mt.co.kr/future/2025/12/18/2025121809354974851"
    },
    {
      "company": "위시컴퍼니",
      "brands": [
        "클레어스"
      ],
      "revenues": {
        "2021": null,
        "2022": 554,
        "2023": 722,
        "2024": 857,
        "2025": null
      },
      "note": "콘텐츠 기반 글로벌 D2C",
      "source": "코스인코리아",
      "sourceUrl": "https://www.cosinkorea.com/news/article.html?no=50993"
    },
    {
      "company": "메디테라피",
      "brands": [
        "메디테라피"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": null,
        "2024": 816,
        "2025": null
      },
      "note": "바디·스킨케어 D2C, 2024년 +38.6%",
      "source": "THE VC 재무",
      "sourceUrl": "https://thevc.kr/meditherapy/financials"
    },
    {
      "company": "씨엠에스랩",
      "brands": [
        "셀퓨전씨"
      ],
      "revenues": {
        "2021": 900,
        "2022": 518,
        "2023": 682,
        "2024": 788,
        "2025": null
      },
      "note": "더마 선케어 (병원 채널 출신), 2024년 +16.3%",
      "source": "캐치 재무평가",
      "sourceUrl": "https://www.catch.co.kr/Comp/CompInfo/F37176"
    },
    {
      "company": "스킨푸드",
      "brands": [
        "스킨푸드"
      ],
      "revenues": {
        "2021": null,
        "2022": 375,
        "2023": 589,
        "2024": 780,
        "2025": null
      },
      "note": "로드숍 출신, 회생 후 2024년 +33%",
      "source": "한국섬유신문",
      "sourceUrl": "https://www.ktnews.com/news/articleView.html?idxno=143151"
    },
    {
      "company": "투쿨포스쿨",
      "brands": [
        "투쿨포스쿨"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": null,
        "2024": 762,
        "2025": null
      },
      "note": "색조(쉐딩), 2024년 +35%",
      "source": "캐치 재무평가",
      "sourceUrl": "https://www.catch.co.kr/Comp/CompInfo/H23986"
    },
    {
      "company": "코리아테크",
      "brands": [
        "가히"
      ],
      "revenues": {
        "2021": 2513,
        "2022": 1944,
        "2023": null,
        "2024": 743,
        "2025": null
      },
      "note": "멀티밤 신화 후 축소 — 2021 2,513억 → 2024 743억",
      "source": "사람인 재무정보",
      "sourceUrl": "https://www.saramin.co.kr/zf_user/company-info/view-inner-finance/csn/ZzZ0TldDTnYyTUw5UXBsSGFkSThCQT09"
    },
    {
      "company": "코리아나화장품",
      "brands": [
        "코리아나"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": null,
        "2024": 825,
        "2025": 737
      },
      "note": "1세대 중견, 2025년 영업손실 전환",
      "source": "FnGuide",
      "sourceUrl": "https://comp.fnguide.com/SVO2/ASP/SVD_Main.asp?gicode=A027050"
    },
    {
      "company": "리더스코스메틱",
      "brands": [
        "리더스"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": null,
        "2024": 730,
        "2025": null
      },
      "note": "마스크팩, 2024년 영업손실 14억",
      "source": "데일리인베스트",
      "sourceUrl": "http://www.dailyinvest.kr/news/articleView.html?idxno=65129"
    },
    {
      "company": "더샘인터내셔날",
      "brands": [
        "더샘"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": null,
        "2024": 723,
        "2025": null
      },
      "note": "로드숍 출신, 한국화장품 자회사",
      "source": "사람인 기업정보",
      "sourceUrl": "https://m.saramin.co.kr/job-search/company-info-view?csn=Qm00c2ZkK3RTQTVCVkxxQzY1UWxNQT09"
    },
    {
      "company": "본느",
      "brands": [
        "터치인솔"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": null,
        "2024": 687,
        "2025": null
      },
      "note": "자사 브랜드+ODM 병행 상장사",
      "source": "뷰티누리",
      "sourceUrl": "https://www.beautynury.com/news/view/107495/cat/10"
    },
    {
      "company": "글루가",
      "brands": [
        "오호라"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": null,
        "2024": 674,
        "2025": null
      },
      "note": "셀프 젤네일 — 2024 연결 674억, 영업이익 +1,141%",
      "source": "한국경제",
      "sourceUrl": "https://www.hankyung.com/article/202504213622P"
    },
    {
      "company": "원진",
      "brands": [
        "원진이펙트"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": null,
        "2024": 668,
        "2025": null
      },
      "note": "성형외과 기반 더마, 중국 왕홍 채널 강세",
      "source": "사람인 재무정보",
      "sourceUrl": "https://www.saramin.co.kr/zf_user/company-info/view-inner-finance/csn/clQxQ2ZPYmN0cjRBTHBneXIxUHd2UT09"
    },
    {
      "company": "이즈앤트리",
      "brands": [
        "이즈앤트리"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": 347,
        "2024": 615,
        "2025": null
      },
      "note": "선케어 수출 강자 (ULTA, UAE Amazon 선크림 1위) — 영업이익 149억",
      "source": "사람인 재무정보",
      "sourceUrl": "https://www.saramin.co.kr/zf_user/company-info/view-inner-finance/csn/dFpza2ZVSE1ua0hvUlduK2h5d2t5dz09"
    },
    {
      "company": "삐아",
      "brands": [
        "삐아",
        "어바웃톤"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": 379,
        "2024": 576,
        "2025": null
      },
      "note": "색조 코스닥 상장사 (2024), 2025년 3Q 누적 +28.5%",
      "source": "뷰티누리",
      "sourceUrl": "https://www.beautynury.com/news/view/107468/cat/10"
    },
    {
      "company": "웰코스",
      "brands": [
        "프루디아"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": null,
        "2024": 562,
        "2025": null
      },
      "note": "과일 성분 스킨케어 수출 중심",
      "source": "사람인 기업정보",
      "sourceUrl": "https://www.saramin.co.kr/zf_user/company-info/view/csn/Z01DRVcwbFcyZzF1M09NRVJOZTFCdz09"
    },
    {
      "company": "아이소이",
      "brands": [
        "아이소이"
      ],
      "revenues": {
        "2021": null,
        "2022": 383,
        "2023": 550,
        "2024": null,
        "2025": null
      },
      "note": "잡티세럼 올리브영 장기 1위 (2024·25 미공개)",
      "source": "롱블랙",
      "sourceUrl": "https://www.longblack.co/note/1054"
    },
    {
      "company": "아로마티카",
      "brands": [
        "아로마티카"
      ],
      "revenues": {
        "2021": null,
        "2022": 359,
        "2023": 445,
        "2024": 525,
        "2025": null
      },
      "note": "클린뷰티, 2025년 11월 코스닥 상장",
      "source": "이데일리",
      "sourceUrl": "https://www.edaily.co.kr/News/Read?newsId=02040166642040016"
    },
    {
      "company": "어뮤즈",
      "brands": [
        "어뮤즈"
      ],
      "revenues": {
        "2021": null,
        "2022": 233,
        "2023": 368,
        "2024": 520,
        "2025": null
      },
      "note": "비건 색조, 2024년 신세계인터내셔날 인수",
      "source": "사람인 재무정보",
      "sourceUrl": "https://www.saramin.co.kr/zf_user/company-info/view-inner-finance/csn/SzhKZzZNbzVNN0poRVhWZDBscE9XUT09"
    },
    {
      "company": "데이지크",
      "brands": [
        "데이지크"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": 510,
        "2024": null,
        "2025": null
      },
      "note": "색조(섀도 팔레트) 일본 인기 — 2024 1,000억 근접 보도 (확정치 미공시)",
      "source": "사람인·캐치",
      "sourceUrl": "https://www.saramin.co.kr/zf_user/company-info/view-inner-finance/csn/aGF1bzBKMktRUmhMcnFISk1LQytzUT09"
    },
    {
      "company": "제닉",
      "brands": [
        "셀더마"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": null,
        "2024": 499,
        "2025": null
      },
      "note": "하이드로겔 마스크 원천기술 — 자체 브랜드+ODM 병행",
      "source": "FnGuide",
      "sourceUrl": "https://comp.fnguide.com/SVO2/ASP/SVD_Main.asp?gicode=A123330"
    },
    {
      "company": "논픽션",
      "brands": [
        "논픽션"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": null,
        "2024": 480,
        "2025": null
      },
      "note": "프리미엄 향수·바디케어 — 영업이익 +72.5%",
      "source": "캐치 재무평가",
      "sourceUrl": "https://www.catch.co.kr/Comp/CompInfo/JN9660"
    },
    {
      "company": "파켓",
      "brands": [
        "믹순"
      ],
      "revenues": {
        "2021": null,
        "2022": 120,
        "2023": 210,
        "2024": 479,
        "2025": null
      },
      "note": "에코마케팅 투자, 수출 비중 약 81%",
      "source": "THE VC",
      "sourceUrl": "https://thevc.kr/parket"
    },
    {
      "company": "듀이트리",
      "brands": [
        "듀이트리"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": null,
        "2024": 454,
        "2025": null
      },
      "note": "마스크팩·스킨케어, 영업이익률 24%",
      "source": "사람인 재무정보",
      "sourceUrl": "https://www.saramin.co.kr/zf_user/company-info/view-inner-finance/csn/YUZaRERXYlBEM3lkZEF2bXlSTEZEZz09"
    },
    {
      "company": "비바웨이브",
      "brands": [
        "힌스"
      ],
      "revenues": {
        "2021": null,
        "2022": 218,
        "2023": 276,
        "2024": 452,
        "2025": null
      },
      "note": "색조 (일본 강세), 2025년 LG생활건강 인수 (425억)",
      "source": "인사이트코리아",
      "sourceUrl": "https://www.insightkorea.co.kr/news/articleView.html?idxno=221617"
    },
    {
      "company": "더퓨어랩",
      "brands": [
        "닥터엘시아",
        "디어에이"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": null,
        "2024": 450,
        "2025": null
      },
      "note": "Amazon 톱셀러 비건 스킨케어 — 2025 상반기에만 1,200억 보도 (연간 확정치는 미공시)",
      "source": "매거진한경",
      "sourceUrl": "https://magazine.hankyung.com/business/article/202507161362b"
    },
    {
      "company": "세화피앤씨",
      "brands": [
        "모레모",
        "리체나"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": null,
        "2024": 439,
        "2025": null
      },
      "note": "헤어케어 상장사, 일본·중동 수출",
      "source": "FnGuide",
      "sourceUrl": "https://comp.fnguide.com/SVO2/ASP/SVD_Main.asp?gicode=A252500"
    },
    {
      "company": "다슈코리아",
      "brands": [
        "다슈"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": 419,
        "2024": null,
        "2025": null
      },
      "note": "남성 토탈 뷰티 1위권",
      "source": "사람인 재무정보",
      "sourceUrl": "https://www.saramin.co.kr/zf_user/company-info/view-inner-finance/csn/VURZNk9GanN1TDZiRGJCRXZXdE9JZz09"
    },
    {
      "company": "악시스와이",
      "brands": [
        "악시스와이"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": null,
        "2024": 409,
        "2025": null
      },
      "foreign": true,
      "hq": "한국 서울 (국제 팀)",
      "founders": "Maggie Yue 등 외국인 포함 팀",
      "note": "외국인 포함 팀이 한국에서 창업한 동남아·글로벌 타깃 브랜드. 4년간 +530% 성장 (한국 법인 공시 기반)",
      "source": "Tracxn",
      "sourceUrl": "https://tracxn.com/d/companies/axis-y/__ycr4FffjvMzyiCOCL-qsoYdmmBi3mXNL28nuaFRF4UY"
    },
    {
      "company": "랩앤컴퍼니",
      "brands": [
        "아임프롬",
        "스킨앤랩"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": null,
        "2024": 395,
        "2025": null
      },
      "note": "자연 성분 스킨케어 (피그 마스크) — 2024 +49%",
      "source": "캐치 재무평가",
      "sourceUrl": "https://www.catch.co.kr/Comp/CompInfo/H08658"
    },
    {
      "company": "더마펌",
      "brands": [
        "더마펌"
      ],
      "revenues": {
        "2021": 527,
        "2022": 476,
        "2023": 1073,
        "2024": 383,
        "2025": null
      },
      "note": "더마, 중국 의존 매출 급감 (2023 1,073억 → 2024 영업적자)",
      "source": "사람인 재무정보",
      "sourceUrl": "https://www.saramin.co.kr/zf_user/company-info/view-inner-finance/csn/S3NsL1VuMTF6REN4ZXlpbWJUdDR3Zz09"
    },
    {
      "company": "시드물",
      "brands": [
        "시드물"
      ],
      "revenues": {
        "2021": null,
        "2022": 383,
        "2023": 381,
        "2024": null,
        "2025": null
      },
      "note": "자연주의 D2C 스킨케어",
      "source": "사람인 재무정보",
      "sourceUrl": "https://www.saramin.co.kr/zf_user/company-info/view-inner-finance/csn/d3BKRFJBT1ByK3NCeXdSNGRuTVBtUT09"
    },
    {
      "company": "참존",
      "brands": [
        "참존"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": 711,
        "2024": 373,
        "2025": null
      },
      "note": "1세대 기초 명가 — 매출 급감·완전자본잠식 (하락 사이클 사례)",
      "source": "넘버스",
      "sourceUrl": "https://www.numbers.co.kr/news/articleView.html?idxno=10855"
    },
    {
      "company": "씨에스에이코스믹",
      "brands": [
        "조성아뷰티",
        "16브랜드"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": null,
        "2024": 364,
        "2025": null
      },
      "note": "2024년 영업손실, 2025년 경영권 매각 진행",
      "source": "뷰티누리",
      "sourceUrl": "https://www.beautynury.com/news/view/105614/cat/10"
    },
    {
      "company": "아우딘퓨쳐스",
      "brands": [
        "네오젠"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": null,
        "2024": 347,
        "2025": null
      },
      "note": "더마 네오젠 중심 상장사",
      "source": "뷰티누리",
      "sourceUrl": "https://www.beautynury.com/news/view/107313/cat/10"
    },
    {
      "company": "에스디생명공학",
      "brands": [
        "SNP"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": null,
        "2024": 345,
        "2025": null
      },
      "note": "마스크팩 SNP, 회생 후 정상화 진행",
      "source": "톱데일리",
      "sourceUrl": "https://www.topdaily.kr/articles/105680"
    },
    {
      "company": "바람인터내셔날",
      "brands": [
        "디어달리아"
      ],
      "revenues": {
        "2021": 316,
        "2022": 201,
        "2023": null,
        "2024": 336,
        "2025": null
      },
      "note": "비건 럭셔리 색조, IPO 준비",
      "source": "뷰페이퍼",
      "sourceUrl": "https://www.threads.com/@beaupapermag/post/DQDrI_IgUMQ"
    },
    {
      "company": "제이피프로페셔널",
      "brands": [
        "라도르"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": null,
        "2024": 326,
        "2025": null
      },
      "note": "살롱 헤어케어 수출 (러시아·동유럽 강세)",
      "source": "잡코리아",
      "sourceUrl": "https://www.jobkorea.co.kr/recruit/co_read/c/lador0303"
    },
    {
      "company": "태남생활건강",
      "brands": [
        "밀크바오밥"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": null,
        "2024": 323,
        "2025": null
      },
      "note": "헤어·바디, 일본 확장 중",
      "source": "사람인 기업정보",
      "sourceUrl": "https://www.saramin.co.kr/zf_user/company-info/view/csn/WGdYWVJURnVlYm1BOHNiUXlaUDRqZz09"
    },
    {
      "company": "명인화장품",
      "brands": [
        "팜스테이"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": null,
        "2024": 276,
        "2025": 314
      },
      "note": "70여 개국 수출 중저가 스킨케어",
      "source": "나이스비즈인포",
      "sourceUrl": "https://www.nicebizinfo.com/ep/EP0100M002GE.nice?kiscode=C69460"
    },
    {
      "company": "그랑핸드",
      "brands": [
        "그랑핸드"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": null,
        "2024": 310,
        "2025": null
      },
      "note": "서울 오프라인 중심 니치 향수, 최근 2년 폭발 성장",
      "source": "서울경제",
      "sourceUrl": "https://news.nate.com/view/20250506n16167"
    },
    {
      "company": "TS트릴리온",
      "brands": [
        "TS샴푸"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": 400,
        "2024": 308,
        "2025": null
      },
      "note": "탈모케어 샴푸 상장사 — 역성장·순손실",
      "source": "뷰티누리",
      "sourceUrl": "https://www.beautynury.com/news/view/107600/cat/10"
    },
    {
      "company": "미미박스",
      "brands": [
        "컬러그램",
        "아임미미"
      ],
      "revenues": {
        "2021": null,
        "2022": 208,
        "2023": 330,
        "2024": 303,
        "2025": null
      },
      "note": "국내 법인 기준 (해외 비중 높음)",
      "source": "사람인 재무정보",
      "sourceUrl": "https://www.saramin.co.kr/zf_user/company-info/view-inner-finance/csn/bkhCblFObWUxaVk1N3JIaTVNVkhmQT09"
    },
    {
      "company": "히로익스",
      "brands": [
        "토코보"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": null,
        "2024": 292,
        "2025": null
      },
      "note": "비건 선케어, 3년 연평균 +332%·아기유니콘",
      "source": "지이코노미",
      "sourceUrl": "https://www.geconomy.co.kr/news/article.html?no=307194"
    },
    {
      "company": "코스토리",
      "brands": [
        "파파레시피"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": 291,
        "2024": null,
        "2025": null
      },
      "note": "봄비 꿀단지 마스크 — 중국 특수 이후 축소",
      "source": "사람인 재무정보",
      "sourceUrl": "https://www.saramin.co.kr/zf_user/company-info/view-inner-finance/csn/SC9PZ2hNaDVUd0VHWUx3QUhwY0loUT09"
    },
    {
      "company": "매그니프",
      "brands": [
        "메이크프렘"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": 190,
        "2024": 287,
        "2025": null
      },
      "note": "저자극·선케어, 수출국 28개",
      "source": "코스인코리아",
      "sourceUrl": "https://cosinkorea.com/news/article.html?no=52918"
    },
    {
      "company": "두리화장품",
      "brands": [
        "댕기머리"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": null,
        "2024": 270,
        "2025": null
      },
      "note": "한방 샴푸, 39개국 수출",
      "source": "사람인 기업정보",
      "sourceUrl": "https://www.saramin.co.kr/zf_user/company-info/view/csn/cmxFYVdtbzB4VjVpaXA2L1FlWkpJUT09"
    },
    {
      "company": "아미코스메틱",
      "brands": [
        "BRTC",
        "퓨어힐스"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": null,
        "2024": 270,
        "2025": null
      },
      "note": "더마, 일본 QVC·대만 채널 — 2024 +18.2%",
      "source": "캐치",
      "sourceUrl": "https://www.catch.co.kr/Comp/CompInfo/H14359"
    },
    {
      "company": "트렌드메이커",
      "brands": [
        "딘토"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": null,
        "2024": 250,
        "2025": null
      },
      "note": "비건 색조, 다이소 뷰티 최대 매출",
      "source": "바이라인네트워크",
      "sourceUrl": "https://byline.network/2025/12/04_129874/"
    },
    {
      "company": "세이션",
      "brands": [
        "그라펜",
        "줄라이미"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": 248,
        "2024": 225,
        "2025": null
      },
      "note": "남성 그루밍+퍼퓸, 동남아 크로스보더",
      "source": "THE VC",
      "sourceUrl": "https://thevc.kr/xation"
    },
    {
      "company": "노드메이슨",
      "brands": [
        "헉슬리"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": null,
        "2024": 217,
        "2025": null
      },
      "note": "2024 연결 217억·흑자전환 (해외 49%), 재무구조 취약",
      "source": "사람인·뉴스스페이스",
      "sourceUrl": "https://www.newsspace.kr/news/article.html?no=6417"
    },
    {
      "company": "아렌시아",
      "brands": [
        "아렌시아"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": null,
        "2024": 213,
        "2025": null
      },
      "note": "'떡솝' 클렌저 아르티장 비건, 100여 개국",
      "source": "THE VC",
      "sourceUrl": "https://thevc.kr/arencia"
    },
    {
      "company": "퓨리토",
      "brands": [
        "퓨리토"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": 201,
        "2024": null,
        "2025": null
      },
      "note": "해외 직판 중심 클린 스킨케어",
      "source": "딜사이트",
      "sourceUrl": "https://dealsite.co.kr/articles/139656"
    },
    {
      "company": "라카코스메틱스",
      "brands": [
        "라카"
      ],
      "revenues": {
        "2021": null,
        "2022": 96,
        "2023": 186,
        "2024": null,
        "2025": null
      },
      "note": "젠더뉴트럴 색조, 2024년 구다이글로벌 인수·실적 비공개",
      "source": "THE VC",
      "sourceUrl": "https://thevc.kr/lakacosmetics"
    },
    {
      "company": "KraveBeauty",
      "brands": [
        "크레이브뷰티"
      ],
      "revenues": {
        "2021": null,
        "2022": null,
        "2023": 131,
        "2024": null,
        "2025": null
      },
      "foreign": true,
      "hq": "미국",
      "founders": "Liah Yoo (유튜버 출신)",
      "note": "한국 제조 부트스트랩 D2C. 2023 연매출 약 $10M (업계 추정치)",
      "source": "chaileedo·Beauty Independent",
      "sourceUrl": "https://chaileedo.com/with-annual-sales-of-perhaps-10-million-slow-skincare-brand-kravebeauty-enters-southeast-asia/"
    }
  ],
};
