/* 성분 레이더 데이터 — PubMed E-utilities(논문 수, 수집 2026-06-11) + 웹 리서치 정성 판정
 * stage: ①시술·학술 → ②원료·특허 → ③신제품 베팅 → ④수요 폭발 → ⑤메인스트림/포화 */
window.TRENDS_DATA = {
  meta: {
    updated: "2026-06-11",
    sources: [
      { label: "PubMed (NCBI E-utilities) — 성분×피부 문맥 연도별 논문 수 (2026-06-11 수집)", url: "https://pubmed.ncbi.nlm.nih.gov" },
      { label: "웹 리서치 — NBC Select, Cosmetics Business, Happi, Spate 등 (성분별 출처는 카드 하단 링크)", url: null },
    ],
  },
  ingredients: [
  {
    "key": "pdrn",
    "name": "PDRN",
    "nameEn": "Polydeoxyribonucleotide",
    "stage": "④수요 폭발",
    "stageReason": "리쥬란 '연어주사' 시술에서 출발해 2025~26 홈케어 세럼으로 대량 이동, 영국 최고속 성장 검색어",
    "demandSignal": "영국서 가장 빠르게 성장한 K-beauty 검색어 · Medicube PDRN 세럼 TikTok 바이럴",
    "supplySignal": "메디큐브 PDRN 핑크 펩타이드 라인, VT PDRN 리들샷 등 비건 PDRN 신제품 다수",
    "heroProducts": [
      "메디큐브 PDRN 핑크 펩타이드 세럼",
      "VT PDRN 리들샷 100",
      "리쥬란 홈케어"
    ],
    "outlook": "수요 폭발 정점 — 브랜드 난립, 곧 가격·농도 경쟁 진입",
    "firstSeen": 2024,
    "sources": [
      {
        "name": "Cosmetics Business",
        "url": "https://cosmeticsbusiness.com/snail-mucin-is-out-tiktok-famous-pdrn-is"
      }
    ],
    "pubmed": {
      "2019": 4,
      "2020": 3,
      "2021": 2,
      "2022": 4,
      "2023": 9,
      "2024": 9,
      "2025": 26
    }
  },
  {
    "key": "exosome",
    "name": "엑소좀",
    "nameEn": "Exosome",
    "stage": "③신제품 베팅",
    "stageReason": "2023 임상 프로토콜 표준화 후 2026 피부과 메인스트림화, 리테일 막 진입",
    "demandSignal": "NBC가 '모두가 말하는 바이럴 뷰티 트렌드'로 보도 — 클리닉→홈케어 이동 대표 사례",
    "supplySignal": "콜마·코스맥스 등 ODM이 엑소좀 바이오 액티브 빠르게 개발 중",
    "heroProducts": [
      "VT 시카 리들샷 (엑소좀 배합)",
      "엑소코바이오 ASCE+ (클리닉)"
    ],
    "outlook": "차기 주자 — 임상 근거·원료 표준화 축적 중, 규제가 관건",
    "firstSeen": 2023,
    "sources": [
      {
        "name": "NBC Select",
        "url": "https://www.nbcnews.com/select/shopping/exosomes-skin-care-rcna206299"
      }
    ],
    "pubmed": {
      "2019": 71,
      "2020": 104,
      "2021": 136,
      "2022": 162,
      "2023": 170,
      "2024": 235,
      "2025": 360
    }
  },
  {
    "key": "spicule",
    "name": "스피큘",
    "nameEn": "Spicule / Microneedle",
    "stage": "④수요 폭발",
    "stageReason": "VT 리들샷 TikTok 바이럴로 '바르는 마이크로니들' 카테고리 자체를 대중화",
    "demandSignal": "VT 리들샷 TikTok 바이럴 · NBC '액상 마이크로니들' 별도 보도",
    "supplySignal": "리들샷 50/100/300/700 농도 라인 + PDRN·콜라겐·시카 파생 확장",
    "heroProducts": [
      "VT 시카 리들샷 100",
      "VT PDRN 리들샷",
      "VT 콜라겐 리들샷"
    ],
    "outlook": "VT 단일 브랜드 의존 — 미투 확산 시 포화 빠를 것",
    "firstSeen": 2023,
    "sources": [
      {
        "name": "NBC Select",
        "url": "https://www.nbcnews.com/select/shopping/spicules-skin-care-rcna264100"
      }
    ],
    "pubmed": {
      "2019": 43,
      "2020": 38,
      "2021": 40,
      "2022": 48,
      "2023": 51,
      "2024": 71,
      "2025": 89
    }
  },
  {
    "key": "glutathione",
    "name": "글루타치온",
    "nameEn": "Glutathione",
    "stage": "③신제품 베팅",
    "stageReason": "IV '백옥주사'에서 2026 토픽컬 앰플·파우더로 일상 제품화 시작",
    "demandSignal": "글로벌 글루타치온 브라이트닝 시장 2025년 ~$1.5B (CAGR 9%)",
    "supplySignal": "온도감응 파우더→크림 변환 등 신제형 출시 (Lubylab 등)",
    "heroProducts": [
      "루비랩 글루타치온 콜라겐 파우더 앰플",
      "썸바이미 글루타치온 라인"
    ],
    "outlook": "차기 주자 — 미백 리포지셔닝과 결합해 베팅 확대",
    "firstSeen": 2024,
    "sources": [
      {
        "name": "Future Data Stats",
        "url": "https://www.futuredatastats.com/glutathione-skin-brightening-market"
      }
    ],
    "pubmed": {
      "2019": 6,
      "2020": 10,
      "2021": 13,
      "2022": 6,
      "2023": 7,
      "2024": 13,
      "2025": 13
    }
  },
  {
    "key": "nad",
    "name": "NAD+",
    "nameEn": "NAD+ / NMN",
    "stage": "①시술·학술",
    "stageReason": "안정화 난제로 NMN·리포좀 포뮬레이션 R&D 단계, longevity 학술 담론 중심",
    "demandSignal": "2026 'skin longevity' 메가트렌드 핵심 키워드 — 넘버즈인 9번 NAD 에센스 등장",
    "supplySignal": "순수 NAD+ 안정화 난제 → NMN·리포좀 우회 배합 개발 중",
    "heroProducts": [
      "넘버즈인 9번 NAD 바이오 리프팅-실 에센스",
      "Medik8 NAD+ 라인"
    ],
    "outlook": "차기 주자 — 안정화·전달 기술이 상용화 병목",
    "firstSeen": 2025,
    "sources": [
      {
        "name": "NBC Select",
        "url": "https://www.nbcnews.com/select/shopping/nad-skin-care-rcna259545"
      }
    ],
    "pubmed": {
      "2019": 7,
      "2020": 10,
      "2021": 13,
      "2022": 14,
      "2023": 5,
      "2024": 10,
      "2025": 20
    }
  },
  {
    "key": "retinal",
    "name": "레티날",
    "nameEn": "Retinaldehyde",
    "stage": "④수요 폭발",
    "stageReason": "레티놀 대비 빠른 효과+저자극으로 K-뷰티 적극 채택, 검색·판매 급증",
    "demandSignal": "Spate 기준 레티날 세럼 검색 +182.4% YoY",
    "supplySignal": "민감성 타깃 0.1% 레티날 세럼 다수 출시 — 레티놀 업그레이드 포지셔닝",
    "heroProducts": [
      "셀리맥스 레티날 샷 부스터",
      "조선미녀 리바이브 아이세럼"
    ],
    "outlook": "수요 폭발 — 레티놀 대체재로 확산, 곧 메인스트림 합류",
    "firstSeen": 2024,
    "sources": [
      {
        "name": "Happi",
        "url": "https://www.happi.com/breaking-news/tranexamic-acid-cream-retinal-serums-lead-k-beauty-skincare-trends/"
      }
    ],
    "pubmed": {
      "2019": 5,
      "2020": 3,
      "2021": 4,
      "2022": 3,
      "2023": 3,
      "2024": 7,
      "2025": 4
    }
  },
  {
    "key": "heartleaf",
    "name": "어성초",
    "nameEn": "Heartleaf (Houttuynia)",
    "stage": "⑤메인스트림/포화",
    "stageReason": "아누아 토너가 글로벌 베스트셀러로 자리잡아 진정 성분의 표준이 됨",
    "demandSignal": "아누아 어성초 77 토너 Amazon 토너 베스트셀러 1위 지속",
    "supplySignal": "거의 모든 K-뷰티 진정 라인이 어성초 채택 (아비브 패드 등)",
    "heroProducts": [
      "아누아 어성초 77% 토너",
      "아비브 어성초 스팟 패드"
    ],
    "outlook": "메인스트림 안착 — 시카와 진정 양강, 차별화 어려움",
    "firstSeen": 2022,
    "sources": [
      {
        "name": "Corea Skincare",
        "url": "https://coreaskincare.com/blog/top-10-k-beauty-best-sellers-2025"
      }
    ],
    "pubmed": {
      "2019": 3,
      "2020": 3,
      "2021": 2,
      "2022": 3,
      "2023": 3,
      "2024": 3,
      "2025": 3
    }
  },
  {
    "key": "cica",
    "name": "시카",
    "nameEn": "Cica / Centella",
    "stage": "⑤메인스트림/포화",
    "stageReason": "한국 브랜드 90% 이상이 센텔라 배합 — 포화·성분 피로 신호 명확",
    "demandSignal": "시카 힐링크림 시장 2025년 ~$2.2B — 성장은 지속되나 차별화 소멸",
    "supplySignal": "전 카테고리 확산 완료, 신제형·신지역으로만 다변화",
    "heroProducts": [
      "스킨1004 센텔라 앰플",
      "닥터자르트 시카페어",
      "VT 시카 라인"
    ],
    "outlook": "포화 — 가격 경쟁 + 성분 피로, 복합 배합으로만 차별화",
    "firstSeen": 2019,
    "sources": [
      {
        "name": "Future Market Insights",
        "url": "https://www.futuremarketinsights.com/reports/centella-asiatica-extract-market"
      }
    ],
    "pubmed": {
      "2019": 12,
      "2020": 12,
      "2021": 13,
      "2022": 12,
      "2023": 19,
      "2024": 24,
      "2025": 46
    }
  },
  {
    "key": "mucin",
    "name": "스네일 뮤신",
    "nameEn": "Snail Mucin",
    "stage": "⑤메인스트림/포화",
    "stageReason": "COSRX 96 에센스가 글로벌 표준 제품으로 정착, 신규 진입은 미투 경쟁",
    "demandSignal": "글로벌 스네일 뮤신 시장 2025년 ~$989M · 'Snail mucin is out, PDRN is in' 보도 등장",
    "supplySignal": "고농도·안티에이징 등 니치 변형만 증가 — 경쟁 심화",
    "heroProducts": [
      "COSRX 스네일 96 에센스",
      "조선미녀 스네일 라인"
    ],
    "outlook": "포화 — 시장은 유지되나 COSRX 외 차별화 난도 높음",
    "firstSeen": 2018,
    "sources": [
      {
        "name": "Future Market Insights",
        "url": "https://www.futuremarketinsights.com/reports/snail-mucin-market"
      }
    ],
    "pubmed": {
      "2019": 0,
      "2020": 1,
      "2021": 1,
      "2022": 0,
      "2023": 0,
      "2024": 2,
      "2025": 3
    }
  },
  {
    "key": "collagen",
    "name": "저분자 콜라겐",
    "nameEn": "Low-MW Collagen",
    "stage": "④수요 폭발",
    "stageReason": "메디큐브 콜라겐 젤리크림·랩핑 마스크 바이럴로 카테고리 폭발",
    "demandSignal": "메디큐브 2025 Prime Day 뷰티 1위 · TikTok Shop 100만 개 판매",
    "supplySignal": "동결건조 가수분해 콜라겐+엘라스틴 신제형 확산 (바이오던스 하이드로겔 등)",
    "heroProducts": [
      "메디큐브 콜라겐 나이트 랩핑 마스크",
      "바이오던스 콜라겐 마스크",
      "VT 콜라겐 리들샷"
    ],
    "outlook": "수요 폭발 — 글로우/플럼핑 소구로 확산 중",
    "firstSeen": 2023,
    "sources": [
      {
        "name": "NewBeauty",
        "url": "https://www.newbeauty.com/view/medicube-review-collagen-jelly-cream"
      }
    ],
    "pubmed": {
      "2019": 7,
      "2020": 10,
      "2021": 13,
      "2022": 12,
      "2023": 17,
      "2024": 13,
      "2025": 8
    }
  },
  {
    "key": "ceramide",
    "name": "세라마이드",
    "nameEn": "Ceramide",
    "stage": "⑤메인스트림/포화",
    "stageReason": "2020~24 사이 니치→메인스트림 전환 완료, 장벽 케어 표준 성분",
    "demandSignal": "세라마이드 보습 시장 2025년 ~$2.9B — 장벽 리페어가 50.5% 점유",
    "supplySignal": "일리윤 캡슐화 세라마이드 등 서방형/특허 기술 경쟁",
    "heroProducts": [
      "일리윤 세라마이드 아토 크림",
      "에스트라 아토베리어365",
      "닥터자르트 세라마이딘"
    ],
    "outlook": "포화 — 캡슐화·특허 농도로만 프리미엄 차별화",
    "firstSeen": 2020,
    "sources": [
      {
        "name": "Future Market Insights",
        "url": "https://www.futuremarketinsights.com/reports/ceramide-infused-moisturizers-market"
      }
    ],
    "pubmed": {
      "2019": 42,
      "2020": 51,
      "2021": 74,
      "2022": 53,
      "2023": 57,
      "2024": 67,
      "2025": 74
    }
  },
  {
    "key": "ferment",
    "name": "비피다/발효",
    "nameEn": "Bifida / Ferment",
    "stage": "⑤메인스트림/포화",
    "stageReason": "비피다·갈락토미세스가 K-뷰티 포뮬레이션 '메인스테이'로 정착",
    "demandSignal": "프로바이오틱 스킨케어 수요 지속 — 단 신선함은 소진",
    "supplySignal": "포스트바이오틱(균체 제거, 대사산물만) 2세대 개발 진행",
    "heroProducts": [
      "넘버즈인 3번 세럼 (비피다 42%)",
      "미샤 타임레볼루션"
    ],
    "outlook": "포화 — 포스트바이오틱·마이크로바이옴 2세대로 재포지셔닝 중",
    "firstSeen": 2017,
    "sources": [
      {
        "name": "XJ Beauty",
        "url": "https://www.xj-beauty.com/blog/2025-forecast-the-growing-demand-for-probiotic-skincare"
      }
    ],
    "pubmed": {
      "2019": 4,
      "2020": 1,
      "2021": 4,
      "2022": 5,
      "2023": 6,
      "2024": 6,
      "2025": 5
    }
  }
],
  emerging: [
  {
    "name": "엑토인 (Ectoin)",
    "reason": "검색 +86% 급증 — 신흥 장벽/항스트레스 성분, ①~②단계",
    "source": "Luxury London",
    "sourceUrl": "https://luxurylondon.co.uk/wellbeing/the-trending-skincare-ingredients-to-have-on-your-radar-in-2026/"
  },
  {
    "name": "폴리뉴클레오타이드 (PN)",
    "reason": "PDRN의 고순도 후속 — 클리닉 스킨부스터 주도, 홈케어 진입 초기 ②단계",
    "source": "Marques Therapy",
    "sourceUrl": "https://www.marquestherapy.com/post/pdrn-polynucleotide-skin-boosters-the-regenerative-treatment-london-is-turning-to-in-2026"
  },
  {
    "name": "블루 카퍼 펩타이드 (GHK-Cu)",
    "reason": "2026.6 사설라벨 제조 론칭 — 주름 부피 -55.8% 임상 근거 축적, ②~③단계",
    "source": "FinancialContent",
    "sourceUrl": "https://markets.financialcontent.com/stocks/article/abnewswire-2026-6-7-moes-group-launches-blue-copper-peptide-ghk-cu-skincare-and-haircare-manufacturing-for-private-label-brands"
  },
  {
    "name": "포스트바이오틱",
    "reason": "발효 트렌드의 차세대 분기 — 대사산물만 활용, ①~②단계",
    "source": "Alma Esthetics",
    "sourceUrl": "https://www.almaesthetics.com/blog/the-science-of-peptides-rebuilding-your-skins-foundation-for-2026-and-beyond"
  },
  {
    "name": "리포좀 NAD+/NMN",
    "reason": "longevity 연구 급증 — 안정화·침투 기술 개발 단계 ①",
    "source": "Korean Skincare Coach",
    "sourceUrl": "https://www.koreanskincarecoach.com/blog/top-skincare-trends-for-2026-and-the-ingredients-driving-the-shift"
  }
],
};
