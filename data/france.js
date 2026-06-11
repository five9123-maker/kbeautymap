/* 프랑스 케이스 스터디 데이터 — FEBEA·UN Comtrade·각사 IR (웹 리서치 2026-06-12)
 * 시계열: USD 십억 (HS33 계열, 2025 프랑스는 FEBEA 환산 — note 참고). 경쟁국은 UN Comtrade HS3303~3307 */
window.FRANCE_DATA = {
  "meta": {
    "updated": "2026-06-12",
    "sources": [
      {
        "label": "FEBEA(프랑스화장품협회) 보도자료 — 2024 수출 €22.5B 사상 최대 / 2025 첫 감소",
        "url": "https://www.febea.fr/sites/default/files/2025-02/CP%20FEBEA%20EXPORT%202024%20VDEF.pdf"
      },
      {
        "label": "UN Comtrade — France HS33 수출 2005~2024 (시계열 기준)",
        "url": "https://comtradeplus.un.org/"
      },
      {
        "label": "경쟁국(미국·독일·이탈리아·스페인·일본): UN Comtrade HS 3303~3307 합계, 명목 USD — K-STAT 앵커와 교차 검증",
        "url": "https://comtradeplus.un.org/TradeFlow"
      },
      {
        "label": "L'Oréal Finance·LVMH·Pierre Fabre 등 각사 IR (기업 매출)",
        "url": "https://www.loreal-finance.com/eng/press-release/2025-annual-results"
      },
      {
        "label": "Premium Beauty News·Cosmetics Business 등 (배경·트렌드, 카드별 개별 링크)",
        "url": null
      }
    ]
  },
  "stats": [
    {
      "label": "세계 수출 1위",
      "value": "$24.3B (2025)",
      "sub": "20여 년 만의 첫 감소 (-0.1%)",
      "tip": "기준: FEBEA €22.4B 환산<br>2025년 미국 관세·달러 약세로 사상 첫 후퇴 — 그래도 2위 한국($11.4B)의 2배 이상"
    },
    {
      "label": "1위 구매국",
      "value": "미국 $3.2B",
      "sub": "11.7% — 단, 2025년 -19%",
      "tip": "2024 UN Comtrade 기준. 대미 수출의 52.4%가 향수<br>2025년 관세 쇼크로 급감"
    },
    {
      "label": "간판 기업",
      "value": "로레알 €44B",
      "sub": "세계 1위 뷰티 기업 (마진 20.2%)",
      "tip": "FY2025 매출 — 한국 전체 수출($11.4B≈€10B)의 4배가 넘는 단일 기업"
    },
    {
      "label": "성장 엔진",
      "value": "향수 €8B",
      "sub": "수출의 35% · 5년 새 2배",
      "tip": "FEBEA 2024 — 한국 수출의 75%가 스킨케어인 것과 대비되는 카테고리 구조"
    },
    {
      "label": "산업 클러스터",
      "value": "3,200개사",
      "sub": "코스메틱 밸리 (일자리 24.6만)",
      "tip": "1994년 출범한 세계 최대 향수·화장품 클러스터 — 생산의 60%가 수출"
    }
  ],
  "series": [
    {
      "year": 2005,
      "valueB": 11.52
    },
    {
      "year": 2006,
      "valueB": 12.45
    },
    {
      "year": 2007,
      "valueB": 14.56
    },
    {
      "year": 2008,
      "valueB": 16.12
    },
    {
      "year": 2009,
      "valueB": 13.65,
      "note": "글로벌 금융위기"
    },
    {
      "year": 2010,
      "valueB": 14.45
    },
    {
      "year": 2011,
      "valueB": 16.79
    },
    {
      "year": 2012,
      "valueB": 15.81
    },
    {
      "year": 2013,
      "valueB": 16.66
    },
    {
      "year": 2014,
      "valueB": 17.32
    },
    {
      "year": 2015,
      "valueB": 15.12,
      "note": "유로 약세 환산 효과"
    },
    {
      "year": 2016,
      "valueB": 15.56
    },
    {
      "year": 2017,
      "valueB": 17.76
    },
    {
      "year": 2018,
      "valueB": 19.7
    },
    {
      "year": 2019,
      "valueB": 20.12
    },
    {
      "year": 2020,
      "valueB": 17.97,
      "note": "코로나"
    },
    {
      "year": 2021,
      "valueB": 21.07
    },
    {
      "year": 2022,
      "valueB": 23.1
    },
    {
      "year": 2023,
      "valueB": 25.92,
      "note": "FEBEA 첫 €20B 돌파"
    },
    {
      "year": 2024,
      "valueB": 27.52,
      "note": "UN Comtrade HS33 — K-STAT(화장품 한정) 기준은 $23.3B"
    },
    {
      "year": 2025,
      "valueB": 24.28,
      "note": "FEBEA €22.4B 환산 (-0.1%, 20년 만의 첫 감소) — HS33 미발표라 직접 비교 주의"
    }
  ],
  "destinations": {
    "year": 2024,
    "items": [
      {
        "country": "미국",
        "countryEn": "United States of America",
        "valueB": 3.22,
        "sharePct": 11.7
      },
      {
        "country": "독일",
        "countryEn": "Germany",
        "valueB": 2.68,
        "sharePct": 9.7
      },
      {
        "country": "스페인",
        "countryEn": "Spain",
        "valueB": 2.56,
        "sharePct": 9.3
      },
      {
        "country": "중국",
        "countryEn": "China",
        "valueB": 1.93,
        "sharePct": 7
      },
      {
        "country": "이탈리아",
        "countryEn": "Italy",
        "valueB": 1.66,
        "sharePct": 6
      },
      {
        "country": "싱가포르",
        "countryEn": "Singapore",
        "valueB": 1.54,
        "sharePct": 5.6
      },
      {
        "country": "영국",
        "countryEn": "United Kingdom",
        "valueB": 1.5,
        "sharePct": 5.5
      },
      {
        "country": "아랍에미리트",
        "countryEn": "United Arab Emirates",
        "valueB": 1.07,
        "sharePct": 3.9
      },
      {
        "country": "네덜란드",
        "countryEn": "Netherlands",
        "valueB": 0.79,
        "sharePct": 2.9
      },
      {
        "country": "폴란드",
        "countryEn": "Poland",
        "valueB": 0.78,
        "sharePct": 2.8
      },
      {
        "country": "벨기에",
        "countryEn": "Belgium",
        "valueB": 0.76,
        "sharePct": 2.7
      },
      {
        "country": "홍콩",
        "countryEn": "Hong Kong",
        "valueB": 0.43,
        "sharePct": 1.6
      },
      {
        "country": "한국",
        "countryEn": "South Korea",
        "valueB": 0.43,
        "sharePct": 1.6
      },
      {
        "country": "스위스",
        "countryEn": "Switzerland",
        "valueB": 0.41,
        "sharePct": 1.5
      },
      {
        "country": "러시아",
        "countryEn": "Russia",
        "valueB": 0.41,
        "sharePct": 1.5
      }
    ]
  },
  "trends": [
    {
      "title": "미국 부상 — 그리고 2025년 관세 쇼크",
      "fact": "미국은 2015년 $1.4B(2위) → 2024년 $3.2B 단일국 1위 구매국. 그러나 2025년 관세+달러 약세로 대미 -19% — 20년 만의 첫 수출 감소(-0.1%)의 주원인"
    },
    {
      "title": "중국 — 한국식 차이나 쇼크는 없었다",
      "fact": "대중 수출 2021년 정점 $2.1B(~8%) → 2024년 $1.9B(-8.9%). 의존도가 정점에도 ~8%라 (한국의 과거 ~50%와 달리) 구조적 쇼크가 아닌 완만한 조정"
    },
    {
      "title": "EU가 안정판",
      "fact": "EU 수출 2024년 €9.1B(+8.2%) → 2025년 비중 54.3%로 확대 — 미·중 변동성을 유럽이 흡수하는 구조 (독일·스페인·이탈리아가 1~5위권 고정)"
    },
    {
      "title": "향수가 성장 엔진 — 5년 만에 2배",
      "fact": "향수 수출 2024년 €8B (전체의 35%, +13.6%) — 그해 성장분의 대부분을 담당. 대미 수출의 52.4%가 향수"
    },
    {
      "title": "중동 리바운드",
      "fact": "2024년 중동 +12.3% (UAE $1.07B) — 화장품 무역흑자 €17.6B로 항공기 다음 프랑스 무역수지 2위 기여 산업"
    }
  ],
  "catShare": [
    {
      "name": "메이크업·스킨케어",
      "sharePct": 49
    },
    {
      "name": "향수",
      "sharePct": 35
    },
    {
      "name": "헤어",
      "sharePct": 6.2
    },
    {
      "name": "위생·기타",
      "sharePct": 9.8
    }
  ],
  "factors": [
    {
      "key": "luxury_houses",
      "icon": "💎",
      "title": "럭셔리 하우스 생태계 — 100년 헤리티지가 곧 브랜드 자산",
      "facts": [
        "LVMH 향수·화장품 부문 2024년 매출 €8.4B(+2%), 디올 Sauvage는 세계 1위 향수",
        "샤넬 No.5는 1921년 출시 후 100년 넘게 판매 중 — 샤넬 2024년 전사 매출 $18.7B",
        "디올·겔랑·지방시·에르메스 등 패션 하우스가 향수·뷰티를 직접 운영"
      ],
      "why": "패션 럭셔리의 브랜드 프리미엄이 화장품에 전이돼 고가 수출 단가를 정당화",
      "source": "LVMH 2024 Annual Results",
      "sourceUrl": "https://www.lvmh.com/en/publications/lvmh-achieves-a-solid-performance-despite-an-unfavorable-global-economic-environment"
    },
    {
      "key": "loreal",
      "icon": "🧪",
      "title": "로레알 — 세계 1위 뷰티 기업의 본거지",
      "facts": [
        "2024년 매출 €43.48B(+5.6%) — 압도적 세계 1위",
        "37개 글로벌 브랜드를 150여 개국에 판매 (랑콤·메이블린·키엘·CeraVe)",
        "연 R&I 투자 €1.3B+ — 업계 최대 연구 조직을 프랑스에 둠"
      ],
      "why": "단일 기업이 매스부터 럭셔리까지 전 가격대를 커버하며 수출 물량을 견인",
      "source": "L'Oréal Finance 2024",
      "sourceUrl": "https://www.loreal-finance.com/eng/press-release/2024-annual-results"
    },
    {
      "key": "cosmetic_valley",
      "icon": "🏭",
      "title": "코스메틱 밸리 — 세계 최대 향수·화장품 클러스터",
      "facts": [
        "1994년 장폴 겔랑 주도로 샤르트르에서 출범한 국가 지정 클러스터",
        "기업 약 3,200개·일자리 24만 6천 개 집적",
        "원료–포장–제조–시험 풀 밸류체인이 한 지역에 — 생산의 60%가 수출"
      ],
      "why": "공급망 집적으로 개발·생산 속도와 'Made in France' 물량을 동시 확보",
      "source": "Cosmetic Valley",
      "sourceUrl": "https://en.wikipedia.org/wiki/Cosmetic_Valley"
    },
    {
      "key": "grasse",
      "icon": "🌸",
      "title": "향수의 수도 그라스 — 원료부터 조향까지 400년 노하우",
      "facts": [
        "2018년 그라스 향수 노하우가 유네스코 인류무형문화유산 등재",
        "향료 전문 기업 ~60개 집적 (Mane·Robertet) — 세계 향료 매출의 ~10%",
        "재스민·5월 장미 등 최고급 원료는 kg당 수만 달러"
      ],
      "why": "최고급 천연 향료와 조향 인력의 원천지로 향수 품질 우위를 떠받침",
      "source": "UNESCO (2018)",
      "sourceUrl": "https://ich.unesco.org/en/RL/the-skills-related-to-perfume-in-pays-de-grasse-the-cultivation-of-perfume-plants-the-knowledge-and-processing-of-natural-raw-materials-and-the-art-of-perfume-composition-01207"
    },
    {
      "key": "dermo_pharmacy",
      "icon": "💊",
      "title": "더마코스메틱·약국 채널 — '의사가 추천하는 화장품'의 발상지",
      "facts": [
        "로레알 더마 부문 2024년 첫 €7B 돌파(+9.8%) — 라로슈포제 주도, CeraVe €2B+",
        "피에르 파브르는 세계 2위 더마 기업 — 아벤느 등 더마 매출 €1.7B (전체의 55%)",
        "라로슈포제·비쉬·아벤느 모두 온천수 기반 + 약국 유통 + 피부과 추천 모델"
      ],
      "why": "'약국에서 파는 과학적 화장품' 신뢰 모델이 글로벌 더마 수출을 개척",
      "source": "L'Oréal Finance·Pierre Fabre",
      "sourceUrl": "https://www.loreal-finance.com/en/annual-report-2024/dermatological-beauty/"
    },
    {
      "key": "sephora",
      "icon": "🛍️",
      "title": "세포라 — 프랑스가 쥔 글로벌 뷰티 유통 파워",
      "facts": [
        "LVMH 소유 — 35개국 3,000여 개 매장, 세계 최대 뷰티 전문 리테일러",
        "2024년 글로벌 소매 매출 ~$17B 사상 최대",
        "1969년 프랑스 창업 — 셀프·체험형 뷰티 매장 포맷을 세계 표준으로"
      ],
      "why": "제조뿐 아니라 글로벌 유통망까지 장악해 자국 브랜드의 해외 진열대를 보장",
      "source": "Statista·Glossy",
      "sourceUrl": "https://www.statista.com/statistics/1445562/retail-sales-of-sephora-globally/"
    },
    {
      "key": "made_in_france",
      "icon": "✈️",
      "title": "'Made in France' 프리미엄 — 관광 대국의 국가 브랜드",
      "facts": [
        "2024년 외국인 관광객 1억 명 세계 1위 — 국제 관광 수입 €71B",
        "화장품 수출 €22.5B(+6.8%) 사상 최대 — 무역흑자 €17.6B, 항공기 다음 2위 효자",
        "향수 수출만 €8B(+13.6%) — 5년 만에 2배"
      ],
      "why": "파리·관광이라는 국가 브랜드가 원산지 프리미엄을 만들어 단가를 끌어올림",
      "source": "FEBEA·Premium Beauty News",
      "sourceUrl": "https://www.premiumbeautynews.com/en/france-sets-new-record-for,25205"
    },
    {
      "key": "institutions",
      "icon": "🎓",
      "title": "제도와 교육 — 유럽 최초 화장품법과 조향사 사관학교",
      "facts": [
        "1975년 화장품법 — 유럽 최초의 화장품 전문 규제, EU 규정의 토대",
        "1972년 탤크 참사 후 금지성분 목록·안전 파일 의무화 도입",
        "ISIPCA(1970, 베르사유) — 세계적 향수·화장품 교육기관"
      ],
      "why": "엄격한 규제 전통이 '프랑스산=안전·품질' 신뢰를, 교육이 인재 파이프라인을 수출 경쟁력으로 전환",
      "source": "The Conversation·ISIPCA",
      "sourceUrl": "https://theconversation.com/joyeux-anniversaire-notre-reglementation-cosmetique-a-40-ans-62309"
    }
  ],
  "companies": [
    {
      "company": "로레알 (L'Oréal)",
      "revenueB_EUR": 44.05,
      "year": 2025,
      "note": "세계 1위 뷰티 기업 — 영업이익 €8.9B (마진 20.2%), 37개 브랜드 (랑콤·키엘·라로슈포제·CeraVe)",
      "source": "L'Oréal Finance 2025",
      "sourceUrl": "https://www.loreal-finance.com/eng/press-release/2025-annual-results"
    },
    {
      "company": "샤넬 (전사)",
      "revenueB_EUR": 17.1,
      "year": 2025,
      "note": "전사 $19.3B (+2%) — 뷰티 부문 별도 공시 없음 (업계 추정 ~30%), No.5·향수가 성장 견인",
      "source": "Cosmetics Business",
      "sourceUrl": "https://cosmeticsbusiness.com/chanel-sales-hit-19-billion-in-2025"
    },
    {
      "company": "LVMH 향수·화장품 부문",
      "revenueB_EUR": 8.17,
      "year": 2025,
      "note": "Dior Beauty·Guerlain·Fenty — Sauvage 세계 1위 남성 향수, 부문 영업이익 +8%",
      "source": "LVMH FY2025",
      "sourceUrl": "https://www.cosmeticsdesign-europe.com/Article/2026/01/28/lvmh-boosts-beauty-profit-despite-zero-sales-growth-in-2025/"
    },
    {
      "company": "피에르 파브르",
      "revenueB_EUR": 3.1,
      "year": 2024,
      "note": "세계 2위 더마 그룹 — 아벤느 단일 브랜드 €1B+ (해외 매출 70%)",
      "source": "Pierre Fabre",
      "sourceUrl": "https://www.pierre-fabre.com/en/news/avene-billion-euros-revenue"
    },
    {
      "company": "록시땅 그룹",
      "revenueB_EUR": 2.8,
      "year": 2025,
      "note": "록시땅 + Sol de Janeiro·ELEMIS — 고정환율 +11.7%, 2024 상폐 후 비공개",
      "source": "Moodie Davitt",
      "sourceUrl": "https://moodiedavittreport.com/loccitane-group-reports-e2-8-million-sales-in-fy2025-following-transition-to-private-ownership/"
    },
    {
      "company": "그룹 로쉐 (이브로쉐)",
      "revenueB_EUR": 2.2,
      "year": 2024,
      "note": "이브로쉐가 그룹의 53% — 식물 원료 자체 재배·생산 수직계열화",
      "source": "Groupe Rocher",
      "sourceUrl": "https://groupe-rocher.com/sites/default/files/2025-01/2025-01-15%20-%20Communique%CC%81%20de%20Presse%20-%20Groupe%20Rocher.pdf"
    },
    {
      "company": "클라란스",
      "revenueB_EUR": 1.7,
      "year": 2024,
      "note": "가족 소유 스킨케어 명가 (1954) — +3.4%",
      "source": "WWD·Businesscoot",
      "sourceUrl": "https://www.businesscoot.com/en/company/sisley"
    },
    {
      "company": "시슬리",
      "revenueB_EUR": 1,
      "year": 2023,
      "note": "도르나노 가문 초고가 피토코스메틱 — €1B 달성",
      "source": "Le JDD",
      "sourceUrl": "https://www.businesscoot.com/en/company/sisley"
    },
    {
      "company": "NAOS (바이오더마)",
      "revenueB_EUR": 0.9,
      "year": 2024,
      "note": "바이오더마 단독 €720M+ — 파마시 더마 강자",
      "source": "Global Cosmetics News",
      "sourceUrl": "https://www.globalcosmeticsnews.com/naos-company-profile/"
    },
    {
      "company": "인터파르팽",
      "revenueB_EUR": 0.9,
      "year": 2025,
      "note": "라이선스 향수 전문 (몽블랑·지미추·코치)",
      "source": "Interparfums 2025",
      "sourceUrl": "https://www.modaes.com/global/companies/interparfums-to-increase-sales-by-21-in-2025-and-reach-900-million-euros-despite-dollar-hit"
    }
  ],
  "comparison": [
    {
      "axis": "핵심 카테고리",
      "france": "향수·럭셔리 중심 — 수출 최대 품목이 향수, 더마(파마시)도 강함",
      "korea": "스킨케어·선케어 중심 — 수출의 ~75%가 스킨케어"
    },
    {
      "axis": "가격 포지션",
      "france": "프레스티지~울트라 럭셔리 (로레알 영업마진 20.2%)",
      "korea": "미드~매스 가성비 ($10~30대) — 물량 기반 성장"
    },
    {
      "axis": "브랜드 역사",
      "france": "겔랑 1828·로레알 1909·샤넬 1910 — 평균 업력 ~100년",
      "korea": "주력 인디 대부분 업력 10년 미만 (아모레 1945 등 예외)"
    },
    {
      "axis": "생산 구조",
      "france": "자체 공장·산지 기반 수직계열화 (그라스 향료, 아벤느 온천수)",
      "korea": "콜마·코스맥스 ODM 분업 — 공장 없이 창업 가능한 초저진입장벽"
    },
    {
      "axis": "혁신 사이클",
      "france": "수십 년 가는 클래식 SKU (No.5, Sauvage) — 느린 주기",
      "korea": "6~12개월 트렌드 회전 (PDRN·시카·콜라겐) — 초고속 출시"
    },
    {
      "axis": "유통",
      "france": "세포라(LVMH)·백화점·파마시 3축 + 면세",
      "korea": "올리브영 + Amazon·TikTok Shop·Qoo10 크로스보더"
    },
    {
      "axis": "마케팅",
      "france": "셀럽 앰배서더·오트쿠튀르 연계 — 전통 미디어 중심",
      "korea": "인플루언서 시딩·틱톡 바이럴 — 저비용 고회전"
    },
    {
      "axis": "국가 브랜드",
      "france": "'파리 = 럭셔리' — 수세기 축적된 원산지 프리미엄",
      "korea": "한류 동반 성장 — 효능·재미·신뢰의 신흥 국가 브랜드"
    },
    {
      "axis": "수출 규모",
      "france": "$24.3B 세계 1위 — 단 2025년 미국 관세로 20여 년 만의 첫 감소 국면 (미국 -18%)",
      "korea": "$11.4B 세계 2위 등극 — 202개국, 미·중 의존 36.7%로 하락"
    },
    {
      "axis": "M&A 방향",
      "france": "로레알·LVMH가 글로벌 인수자 (Aesop·Sol de Janeiro) — 자본 수출국",
      "korea": "인디가 피인수 대상 (구다이·마녀공장) — 엑시트형 생태계"
    }
  ],
  "lessons": [
    {
      "title": "헤리티지가 마진을 만든다",
      "detail": "로레알 영업마진 20.2%, 샤넬·시슬리의 초고가 포지션은 100년 브랜드 자산에서 나옴 — 6개월 트렌드 회전 모델의 한국 인디는 대표 SKU를 클래식으로 키우는 장기 브랜딩이 필요"
    },
    {
      "title": "카테고리 다변화 — 스킨케어 75% 편중 해소",
      "detail": "프랑스는 향수(고마진)·더마(신뢰 채널)·메이크업이 균형 — 니치 향수와 '약국 더모' 모델은 한국이 비어 있는 고수익 카테고리"
    },
    {
      "title": "피인수 생태계에서 자본 수출국으로",
      "detail": "로레알·LVMH는 외부 브랜드를 사들여 글로벌 유통에 태우는 플랫폼 — 구다이글로벌 등 '한국판 로레알'이 형성돼야 수출 호황이 산업 자산으로 누적"
    }
  ],
  "competitors": {
    "미국": [
      {
        "year": 2005,
        "valueB": 4.4
      },
      {
        "year": 2006,
        "valueB": 5.01
      },
      {
        "year": 2007,
        "valueB": 5.65
      },
      {
        "year": 2008,
        "valueB": 6.35
      },
      {
        "year": 2009,
        "valueB": 5.97
      },
      {
        "year": 2010,
        "valueB": 6.76
      },
      {
        "year": 2011,
        "valueB": 7.14
      },
      {
        "year": 2012,
        "valueB": 7.74
      },
      {
        "year": 2013,
        "valueB": 8.26
      },
      {
        "year": 2014,
        "valueB": 8.6
      },
      {
        "year": 2015,
        "valueB": 8.76
      },
      {
        "year": 2016,
        "valueB": 8.87
      },
      {
        "year": 2017,
        "valueB": 9.55
      },
      {
        "year": 2018,
        "valueB": 10.11
      },
      {
        "year": 2019,
        "valueB": 10.36
      },
      {
        "year": 2020,
        "valueB": 8.81
      },
      {
        "year": 2021,
        "valueB": 9.57
      },
      {
        "year": 2022,
        "valueB": 10.38
      },
      {
        "year": 2023,
        "valueB": 11.08
      },
      {
        "year": 2024,
        "valueB": 11.2
      },
      {
        "year": 2025,
        "valueB": 10.75
      }
    ],
    "독일": [
      {
        "year": 2005,
        "valueB": 4.65
      },
      {
        "year": 2006,
        "valueB": 5.38
      },
      {
        "year": 2007,
        "valueB": 6.54
      },
      {
        "year": 2008,
        "valueB": 7.5
      },
      {
        "year": 2009,
        "valueB": 6.61
      },
      {
        "year": 2010,
        "valueB": 7.15
      },
      {
        "year": 2011,
        "valueB": 8.03
      },
      {
        "year": 2012,
        "valueB": 7.89
      },
      {
        "year": 2013,
        "valueB": 8.24
      },
      {
        "year": 2014,
        "valueB": 8.22
      },
      {
        "year": 2015,
        "valueB": 7.09
      },
      {
        "year": 2016,
        "valueB": 7.34
      },
      {
        "year": 2017,
        "valueB": 7.64
      },
      {
        "year": 2018,
        "valueB": 8.4
      },
      {
        "year": 2019,
        "valueB": 8.47
      },
      {
        "year": 2020,
        "valueB": 7.09
      },
      {
        "year": 2021,
        "valueB": 8.48
      },
      {
        "year": 2022,
        "valueB": 8.91
      },
      {
        "year": 2023,
        "valueB": 9.98
      },
      {
        "year": 2024,
        "valueB": 8.86
      },
      {
        "year": 2025,
        "valueB": 9.86
      }
    ],
    "이탈리아": [
      {
        "year": 2005,
        "valueB": 2.52
      },
      {
        "year": 2006,
        "valueB": 2.68
      },
      {
        "year": 2007,
        "valueB": 2.98
      },
      {
        "year": 2008,
        "valueB": 3.27
      },
      {
        "year": 2009,
        "valueB": 2.67
      },
      {
        "year": 2010,
        "valueB": 3
      },
      {
        "year": 2011,
        "valueB": 3.51
      },
      {
        "year": 2012,
        "valueB": 3.46
      },
      {
        "year": 2013,
        "valueB": 3.9
      },
      {
        "year": 2014,
        "valueB": 4.06
      },
      {
        "year": 2015,
        "valueB": 3.88
      },
      {
        "year": 2016,
        "valueB": 4.42
      },
      {
        "year": 2017,
        "valueB": 4.91
      },
      {
        "year": 2018,
        "valueB": 5.43
      },
      {
        "year": 2019,
        "valueB": 5.3
      },
      {
        "year": 2020,
        "valueB": 4.57
      },
      {
        "year": 2021,
        "valueB": 5.58
      },
      {
        "year": 2022,
        "valueB": 5.95
      },
      {
        "year": 2023,
        "valueB": 7.39
      },
      {
        "year": 2024,
        "valueB": 8.05
      },
      {
        "year": 2025,
        "valueB": 8.99
      }
    ],
    "스페인": [
      {
        "year": 2005,
        "valueB": 1.64
      },
      {
        "year": 2006,
        "valueB": 1.8
      },
      {
        "year": 2007,
        "valueB": 2.14
      },
      {
        "year": 2008,
        "valueB": 2.48
      },
      {
        "year": 2009,
        "valueB": 2.27
      },
      {
        "year": 2010,
        "valueB": 2.59
      },
      {
        "year": 2011,
        "valueB": 2.96
      },
      {
        "year": 2012,
        "valueB": 2.86
      },
      {
        "year": 2013,
        "valueB": 3.31
      },
      {
        "year": 2014,
        "valueB": 3.43
      },
      {
        "year": 2015,
        "valueB": 3.08
      },
      {
        "year": 2016,
        "valueB": 3.26
      },
      {
        "year": 2017,
        "valueB": 3.7
      },
      {
        "year": 2018,
        "valueB": 4.31
      },
      {
        "year": 2019,
        "valueB": 4.51
      },
      {
        "year": 2020,
        "valueB": 3.69
      },
      {
        "year": 2021,
        "valueB": 4.84
      },
      {
        "year": 2022,
        "valueB": 5.26
      },
      {
        "year": 2023,
        "valueB": 6.46
      },
      {
        "year": 2024,
        "valueB": 8
      },
      {
        "year": 2025,
        "valueB": 9.05
      }
    ],
    "일본": [
      {
        "year": 2005,
        "valueB": 0.78
      },
      {
        "year": 2006,
        "valueB": 0.83
      },
      {
        "year": 2007,
        "valueB": 0.9
      },
      {
        "year": 2008,
        "valueB": 1.1
      },
      {
        "year": 2009,
        "valueB": 1.19
      },
      {
        "year": 2010,
        "valueB": 1.49
      },
      {
        "year": 2011,
        "valueB": 1.65
      },
      {
        "year": 2012,
        "valueB": 1.6
      },
      {
        "year": 2013,
        "valueB": 1.42
      },
      {
        "year": 2014,
        "valueB": 1.46
      },
      {
        "year": 2015,
        "valueB": 1.74
      },
      {
        "year": 2016,
        "valueB": 2.49
      },
      {
        "year": 2017,
        "valueB": 3.35
      },
      {
        "year": 2018,
        "valueB": 4.81
      },
      {
        "year": 2019,
        "valueB": 5.33
      },
      {
        "year": 2020,
        "valueB": 6.2
      },
      {
        "year": 2021,
        "valueB": 7.26
      },
      {
        "year": 2022,
        "valueB": 5.79
      },
      {
        "year": 2023,
        "valueB": 4.37
      },
      {
        "year": 2024,
        "valueB": 3.48
      },
      {
        "year": 2025,
        "valueB": 3.88
      }
    ]
  }
};
