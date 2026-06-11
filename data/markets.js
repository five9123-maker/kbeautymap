/* 마켓 딥다이브 데이터 — 웹 리서치 (2026-06-11). 수출 수치는 data.js exportYears와 연동 */
window.MARKETS_DATA = {
  "meta": {
    "updated": "2026-06-11"
  },
  "markets": [
    {
      "key": "us",
      "name": "미국",
      "flag": "🇺🇸",
      "channels": [
        {
          "name": "TikTok Shop",
          "role": "바이럴 검증 무대 (1차 진입)",
          "fact": "2025년 뷰티 매출 +107.7% YoY, 카테고리 매출 $2.7B"
        },
        {
          "name": "Amazon",
          "role": "검색 수요 흡수·스케일업",
          "fact": "뷰티 +23.9% YoY — TikTok 바이럴 → Amazon 구매 전환"
        },
        {
          "name": "Ulta Beauty",
          "role": "메인스트림 오프라인 관문",
          "fact": "1Q25 한국 스킨케어 매출 +38%"
        },
        {
          "name": "Costco · Target · Walmart",
          "role": "대중화·볼륨 단계",
          "fact": "Costco.com K-뷰티 브랜드 50개+ 입점"
        },
        {
          "name": "Sephora",
          "role": "프리미엄 검증·독점 런칭",
          "fact": "한율·에스트라 미국 독점 론칭"
        }
      ],
      "regulations": [
        {
          "name": "MoCRA",
          "deadline": null,
          "summary": "시설등록·제품리스팅·미국 대리인 의무 — 한국 시설 617개 등록",
          "severity": "필수"
        },
        {
          "name": "상호관세 15%",
          "deadline": "2025-08-07",
          "summary": "한국산 화장품 15% 관세 — 마진 구조 재설계 필요",
          "severity": "필수"
        },
        {
          "name": "주별 성분 규제 (CA PFAS 등)",
          "deadline": "2025-01-01",
          "summary": "캘리포니아 등 PFAS 금지 주법 확산 — 주별 체크 필요",
          "severity": "주의"
        }
      ],
      "playbook": "TikTok Shop 바이럴 검증 → Amazon 스케일업 → Ulta·Sephora·Costco 오프라인 메인스트림화",
      "topKBrands": [
        "메디큐브",
        "아누아",
        "코스알엑스",
        "바이오던스",
        "조선미녀"
      ],
      "risks": "관세 15%발 가격 경쟁력 약화 + TikTok 바이럴 모델의 휘발성. MoCRA 미준수 시 판매 차단.",
      "stat": {
        "label": "미국 수입화장품 내 한국 점유율",
        "value": "22.4% 1위 (프랑스 추월)"
      },
      "sources": [
        {
          "name": "CNBC",
          "url": "https://www.cnbc.com/2025/11/27/k-beauty-tiktok-makeup.html"
        },
        {
          "name": "코스모닝",
          "url": "https://cosmorning.com/news/article.html?no=50865"
        }
      ]
    },
    {
      "key": "jp",
      "name": "일본",
      "flag": "🇯🇵",
      "channels": [
        {
          "name": "Qoo10 (메가와리)",
          "role": "K-뷰티 등용문·검증 무대",
          "fact": "일본 온라인 뷰티 점유율 30%+, 회원 2,800만"
        },
        {
          "name": "드럭스토어",
          "role": "대중화·전국 유통",
          "fact": "VT 리들샷 취급 현지 매장 8,000개+"
        },
        {
          "name": "돈키호테",
          "role": "관광·버라이어티 채널",
          "fact": "티르티르 쿠션 전국 입점 — '국민 쿠션'"
        },
        {
          "name": "편의점 (CVS)",
          "role": "초대중화 최종 단계",
          "fact": "롬앤, 일본 편의점 진출"
        },
        {
          "name": "Rakuten · Amazon JP",
          "role": "상시 온라인 보완",
          "fact": "주요 브랜드 역직구 병행 운영"
        }
      ],
      "regulations": [
        {
          "name": "약기법 (의약품의료기기법)",
          "deadline": null,
          "summary": "현지 제조판매업 허가 보유 책임판매업자 필요, 광고 표현 제한",
          "severity": "필수"
        },
        {
          "name": "의약부외품 승인",
          "deadline": null,
          "summary": "미백·주름 기능성 소구는 별도 승인 (수년 소요)",
          "severity": "주의"
        }
      ],
      "playbook": "Qoo10 메가와리 랭킹 검증 → 드럭스토어·돈키호테 전국 확장 → 편의점 초대중화",
      "topKBrands": [
        "VT (리들샷)",
        "티르티르",
        "롬앤",
        "아누아",
        "넘버즈인"
      ],
      "risks": "수입 증가율 40%→5.6% 급락 (포화 신호). 메가와리 광고·인플루언서 비용 급등으로 수익성 악화.",
      "stat": {
        "label": "일본 수입화장품 내 한국 점유율",
        "value": "30.8% — 4년 연속 1위"
      },
      "sources": [
        {
          "name": "한국섬유신문",
          "url": "https://www.ktnews.com/news/articleView.html?idxno=145359"
        },
        {
          "name": "한국일보",
          "url": "https://www.hankookilbo.com/News/Read/A2025010114250004576"
        }
      ]
    },
    {
      "key": "cn",
      "name": "중국",
      "flag": "🇨🇳",
      "channels": [
        {
          "name": "더우인 (Douyin)",
          "role": "콘텐츠 커머스 주전장",
          "fact": "2025년 뷰티 GMV 티몰 첫 추월"
        },
        {
          "name": "티몰 글로벌 (크로스보더)",
          "role": "NMPA 등록 없이 테스트하는 우회로",
          "fact": "크로스보더 모델은 사전 등록 면제"
        },
        {
          "name": "티몰 · 광군제",
          "role": "브랜드 플래그십·대형 행사",
          "fact": "중국 뷰티 시장 $92.3B, +8.4% 반등"
        },
        {
          "name": "JD.com",
          "role": "신뢰 기반 정품 채널",
          "fact": "더우인·핀둬둬 고성장으로 전통 채널 비중 하락"
        }
      ],
      "regulations": [
        {
          "name": "NMPA 안전성평가 완전판",
          "deadline": "2025-05-01",
          "summary": "간소화판 종료 — 완전판 안전성 평가 의무, 등록 비용·기간 급증",
          "severity": "필수"
        },
        {
          "name": "NMPA 허가·등록 (CSAR)",
          "deadline": null,
          "summary": "일반 등록·특수 허가 필수, 효능 실증 강화",
          "severity": "필수"
        },
        {
          "name": "신규 원료 관리 강화",
          "deadline": null,
          "summary": "원료 안전 정보 코드 등 관리 지속 강화",
          "severity": "주의"
        }
      ],
      "playbook": "티몰 글로벌 크로스보더로 무등록 테스트 → 반응 확인 후 NMPA 정식 등록 → 더우인 콘텐츠 커머스 승부",
      "topKBrands": [
        "더후",
        "설화수",
        "라네즈",
        "메디힐",
        "조선미녀 (크로스보더)"
      ],
      "risks": "2025년 대중 수출 -19% 구조적 하락. C-beauty가 자국 시장 57.4% 장악 — 가격·마케팅 모두 열세.",
      "stat": {
        "label": "2025년 대중국 수출 증감",
        "value": "-19% (1위 자리를 미국에 내줌)"
      },
      "sources": [
        {
          "name": "서울경제",
          "url": "https://www.sedaily.com/article/20047188"
        },
        {
          "name": "Jing Daily",
          "url": "https://jingdaily.com/posts/emerging-e-commerce-giants-challenge-china-legacy-platforms"
        }
      ]
    },
    {
      "key": "eu",
      "name": "유럽",
      "flag": "🇪🇺",
      "channels": [
        {
          "name": "Notino",
          "role": "유럽 온라인 뷰티 검증 무대",
          "fact": "2025년 유럽 뷰티 이커머스 성장률 1위"
        },
        {
          "name": "Douglas",
          "role": "독일권 프리미엄 오프라인 관문",
          "fact": "오프라인 K-뷰티 어소트 확대 중"
        },
        {
          "name": "Boots (영국)",
          "role": "영국 대중화 채널",
          "fact": "'Skincare under £20' 섹션에 K-뷰티 주요 노출"
        },
        {
          "name": "Rossmann · dm",
          "role": "폴란드·독일 드럭스토어 볼륨",
          "fact": "폴란드 +112% 성장의 유통 기반"
        },
        {
          "name": "폴란드 물류 허브",
          "role": "유럽 전역 유통 거점",
          "fact": "2025.3 폴란드 월간 수입 $2,000만 첫 돌파"
        }
      ],
      "regulations": [
        {
          "name": "EU 1223/2009 (RP·CPNP·PIF)",
          "deadline": null,
          "summary": "역내 책임자 + CPNP 신고 + PIF 보관 — 1회 신고로 전 회원국 유통",
          "severity": "필수"
        },
        {
          "name": "PPWR (포장재 규정)",
          "deadline": "2026-08-12",
          "summary": "지속가능성·라벨링 미충족 포장재 EU 출시 금지, 유예 없음",
          "severity": "필수"
        },
        {
          "name": "마이크로플라스틱 제한 (REACH)",
          "deadline": "2027-10-17",
          "summary": "린스오프 합성 폴리머 미세입자 금지 단계 적용",
          "severity": "주의"
        },
        {
          "name": "영국 별도 체계 (SCPN)",
          "deadline": null,
          "summary": "브렉시트 이후 UK RP + SCPN 신고 별도 필요",
          "severity": "주의"
        }
      ],
      "playbook": "RP·CPNP 선행 → 폴란드·네덜란드 허브 경유 → Notino·Douglas·Boots 리테일 진입",
      "topKBrands": [
        "조선미녀",
        "아누아",
        "코스알엑스",
        "스킨1004",
        "미샤"
      ],
      "risks": "PPWR(2026-08)·미세플라스틱 규제 비용 급증 — 중소 브랜드 진입장벽. 국가별 언어·리테일 파편화.",
      "stat": {
        "label": "2025년 폴란드 수출 증가율",
        "value": "+111.7% ($2.82억, 수출국 9위)"
      },
      "sources": [
        {
          "name": "KED Global",
          "url": "https://www.kedglobal.com/beauty-cosmetics/newsView/ked202505230006"
        },
        {
          "name": "coslaw.eu",
          "url": "https://coslaw.eu/eu-ppwr-new-eu-packaging-regulation-from-august-2026/"
        }
      ]
    },
    {
      "key": "me",
      "name": "중동",
      "flag": "🇦🇪",
      "channels": [
        {
          "name": "Noon",
          "role": "걸프권 토종 1위 이커머스",
          "fact": "UAE·사우디 중심 현지 최대 플랫폼"
        },
        {
          "name": "Amazon.ae / .sa",
          "role": "글로벌 셀러 표준 진입로",
          "fact": "아누아 등 K-브랜드 공식 입점 확대"
        },
        {
          "name": "Sephora Middle East",
          "role": "프리미엄 오프라인 관문",
          "fact": "올리브영×세포라 K-뷰티 존 전개"
        },
        {
          "name": "Faces",
          "role": "럭셔리·인디 도입 채널",
          "fact": "인디·럭셔리 브랜드 도입 증가"
        },
        {
          "name": "두바이 재수출 허브",
          "role": "GCC·아프리카 재수출 거점",
          "fact": "2025년 대UAE 수출 $2.9억"
        }
      ],
      "regulations": [
        {
          "name": "UAE 제품 등록 (Montaji)",
          "deadline": null,
          "summary": "두바이시청 Montaji 등 현지 등록 후 유통 가능",
          "severity": "필수"
        },
        {
          "name": "사우디 SFDA (eCosma)",
          "deadline": null,
          "summary": "금지·제한 성분 준수 + 제품 등록 필수",
          "severity": "필수"
        },
        {
          "name": "할랄 인증",
          "deadline": null,
          "summary": "법적 의무는 아니나 사실상 유통 경쟁력 표준 — 돼지·알코올 유래 회피",
          "severity": "주의"
        },
        {
          "name": "GSO 표준·아랍어 라벨",
          "deadline": null,
          "summary": "GCC 표준 + 아랍어 병기 라벨 요구",
          "severity": "주의"
        }
      ],
      "playbook": "두바이서 등록·할랄 선제 대응 → Noon·Amazon + Sephora/Faces 병행 → GCC 재수출 확장",
      "topKBrands": [
        "아누아",
        "코스알엑스",
        "조선미녀",
        "메디큐브",
        "스킨1004"
      ],
      "risks": "할랄·아랍어 라벨 등 인증 비용과 국가별 등록 파편화. 지정학 리스크 상존.",
      "stat": {
        "label": "2025년 대UAE 수출 증가율",
        "value": "+67.2% ($2.87억)"
      },
      "sources": [
        {
          "name": "코스모닝",
          "url": "https://www.cosmorning.com/news/article.html?no=52883"
        },
        {
          "name": "KOCCA",
          "url": "https://welcon.kocca.kr/en/info/trend/1955661"
        }
      ]
    },
    {
      "key": "sea",
      "name": "동남아",
      "flag": "🌏",
      "channels": [
        {
          "name": "Shopee",
          "role": "동남아 1위 검증·볼륨 채널",
          "fact": "이커머스 GMV 점유율 45%, 월 방문 ~3억"
        },
        {
          "name": "TikTok Shop",
          "role": "라이브·바이럴 커머스",
          "fact": "인니·태국 뷰티 라이브 핵심 채널"
        },
        {
          "name": "Lazada",
          "role": "신뢰 기반 브랜드몰",
          "fact": "공식 브랜드 구매 선호 플랫폼"
        },
        {
          "name": "Watsons · Guardian",
          "role": "오프라인 H&B 확장",
          "fact": "역내 수천 개 매장망"
        }
      ],
      "regulations": [
        {
          "name": "인니 할랄 의무화 (BPJPH)",
          "deadline": "2026-10-17",
          "summary": "화장품 할랄 인증 의무화 — 미인증 시 Non-Halal 표기 강제",
          "severity": "필수"
        },
        {
          "name": "BPOM 등록 (인니)",
          "deadline": null,
          "summary": "현지 책임 수입자 통한 notifikasi 필수",
          "severity": "필수"
        },
        {
          "name": "ASEAN 화장품 디렉티브",
          "deadline": null,
          "summary": "국가별 신고제 기반 공통 규정 — 세부 요건 상이",
          "severity": "주의"
        }
      ],
      "playbook": "Shopee·TikTok Shop 가성비 진입 검증 → Watsons·Guardian 오프라인 확장 (인니는 할랄 선취득 선결)",
      "topKBrands": [
        "코스알엑스",
        "메디큐브",
        "스킨1004",
        "조선미녀",
        "VDL"
      ],
      "risks": "인니 할랄(2026-10) 미대응 시 최대 시장 진입 불가. 로컬 브랜드(Skintific 등) 저가 공세.",
      "stat": {
        "label": "인니 할랄 의무화 시행",
        "value": "2026-10-17 (최대 할랄 시장)"
      },
      "sources": [
        {
          "name": "CMN",
          "url": "https://www.cmn.kr/mobile/sub_view.asp?news_idx=31622&flag=h"
        },
        {
          "name": "Shopee Korea",
          "url": "https://shopee.kr/blog/detail.php?seq=756"
        }
      ]
    }
  ]
};
