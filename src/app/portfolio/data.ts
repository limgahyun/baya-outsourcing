export interface Project {
  id: string;
  title: string;
  description: string;
  images: string;
  tags: string[];
  link: string;
  modalContent: {
    src?: string;
    alt?: string;
  };
}

export interface Category {
  id: string;
  name: string;
  color: string;
  projects: Project[];
}

export const PROJECTS: Project[] = [
  {
    id: "bogeopung",
    title: "복어펑",
    description:
      "내 손 안의 불안 퇴치제. 복어핑은 게이미피케이션 기반의 감정 기록 앱입니다. 복어를 생성하여 감정을 기록하고 표현할 수 있습니다.",
    images: "/portfolio/bogeopung/bogeopung.png",
    tags: [
      "일반로그인/회원가입",
      "온보딩 (추가정보)",
      "홈 화면 구성",
      "일반 게시글",
      "콘텐츠 저장",
      "리뷰/평가",
      "AI",
      "푸시 알림",
    ],
    link: "/portfolio/bogeopung",
    modalContent: {
      src: "/portfolio/bogeopung/detail.png",
      alt: "Bogeopung Detail",
    },
  },
  {
    id: "sasohan",
    title: "사소한",
    description:
      "사회적 기업 중개와 소비관리 서비스. 개인의 지출을 관리할 수 있는 가계부 기록 서비스를 제공하면서 동시에 사회적 기업을 소개 및 주개해주는 플랫폼입니다.",
    images: "/portfolio/sasohan/sasohan.png",
    tags: [
      "소셜로그인",
      "온보딩 (추가정보)",
      "홈 화면 구성",
      "검색",
      "일반 게시글",
      "댓글/답글",
      "좋아요",
      "콘텐츠 저장",
      "리뷰/평가",
      "푸시 알림",
    ],
    link: "/portfolio/sasohan",
    modalContent: {
      src: "/portfolio/sasohan/detail.png",
      alt: "Sasohan Detail",
    },
  },
  {
    id: "perfumory",
    title: "perfumory",
    description:
      "커스텀 향수 제작 및 기록 서비스, perfumory. 퍼퓨모리는 커스텀 향수를 제작할 수 있도록 돕는 플랫폼입니다.",
    images: "/portfolio/perfumory/perfumory.png",
    tags: [
      "소셜로그인",
      "온보딩 (추가정보)",
      "홈 화면 구성",
      "검색",
      "장바구니",
      "결제하기",
      "주문/배송",
      "리뷰/평가",
      "푸시 알림",
    ],
    link: "/portfolio/perfumory",
    modalContent: {
      src: "/portfolio/perfumory/detail.png",
      alt: "Perfumory Detail",
    },
  },
  {
    id: "insightful",
    title: "Insightful",
    description:
      "데이터로 팀의 성장 곡선을 그리세요. 매출과 팀 성과의 흐름을 투명하게 보여주는 대시보드 서비스입니다.",
    images: "/portfolio/insightful/insightful.png",
    tags: [
      "일반로그인/회원가입",
      "홈 화면 구성",
      "검색",
      "대시보드",
      "리뷰/평가",
      "푸시 알림",
    ],
    link: "/portfolio/insightful",
    modalContent: {
      src: "/portfolio/insightful/detail.png",
      alt: "Insightful Detail",
    },
  },
  {
    id: "notello",
    title: "Notello",
    description: "나를 성장시키는 기록, Notello에서 시작하세요.",
    images: "/portfolio/notello/notello.png",
    tags: [
      "소셜로그인",
      "온보딩 (추가정보)",
      "홈 화면 구성",
      "검색",
      "일반 게시글",
      "콘텐츠 저장",
      "리뷰/평가",
      "푸시 알림",
    ],
    link: "/portfolio/notello",
    modalContent: {
      src: "/portfolio/notello/detail.png",
      alt: "Notello Detail",
    },
  },
  {
    id: "trackly",
    title: "Trackly",
    description:
      "진짜 운동, 진짜 코치와 함께 시작해보세요. 운동을 더 제대로, 더 전문적으로 하고 싶은 분들을 위한 스포츠 코칭 & 공간 매칭 플릿폼입니다.",
    images: "/portfolio/trackly/trackly.png",
    tags: [
      "소셜로그인",
      "온보딩 (추가정보)",
      "홈 화면 구성",
      "검색",
      "매칭",
      "예약하기",
      "채팅방",
      "푸시 알림",
    ],
    link: "/portfolio/trackly",
    modalContent: {
      src: "/portfolio/trackly/detail.png",
      alt: "Trackly Detail",
    },
  },
  {
    id: "gymnetic",
    title: "Gymnetic",
    description:
      "운동의 모든 순간을 데이터와 연결하다. 운동의 모든 순간을 이 앱에서 경험해보세요.",
    images: "/portfolio/gymnetic/gymnetic.png",
    tags: [
      "일반로그인/회원가입",
      "온보딩 (추가정보)",
      "홈 화면 구성",
      "검색",
      "매칭",
      "예약하기",
      "AI",
      "푸시 알림",
    ],
    link: "/portfolio/gymnetic",
    modalContent: {
      src: "/portfolio/gymnetic/detail.png",
      alt: "Gymnetic Detail",
    },
  },
  {
    id: "spotly",
    title: "Spotly",
    description: "우리의 취향을 아우르는, 똑똑한 로컬 맛집 지도.",
    images: "/portfolio/spotly/spotly.png",
    tags: [
      "일반로그인/회원가입",
      "홈 화면 구성",
      "검색",
      "지도보기",
      "GPS추적",
      "리뷰/평가",
      "푸시 알림",
    ],
    link: "/portfolio/spotly",
    modalContent: {
      src: "/portfolio/spotly/detail.png",
      alt: "Spotly Detail",
    },
  },
  {
    id: "nutrilog",
    title: "Nutrilog",
    description:
      "하루의 건강을 데이터로 기록하고, 맞춤형 영양 솔루션까지 한 번에.",
    images: "/portfolio/nutrilog/nutrilog.png",
    tags: [
      "일반로그인/회원가입",
      "온보딩 (추가정보)",
      "홈 화면 구성",
      "검색",
      "콘텐츠 저장",
      "리뷰/평가",
      "푸시 알림",
    ],
    link: "/portfolio/nutrilog",
    modalContent: {
      src: "/portfolio/nutrilog/detail.png",
      alt: "Nutrilog Detail",
    },
  },
  {
    id: "coinsight",
    title: "Coinsight",
    description:
      "내 모든 코인, 한 눈에. 자산부터 세금까지 완벽하게 관리합니다.",
    images: "/portfolio/coinsight/coinsight.png",
    tags: [
      "일반로그인/회원가입",
      "홈 화면 구성",
      "검색",
      "블록체인",
      "마이 데이터",
      "푸시 알림",
    ],
    link: "/portfolio/coinsight",
    modalContent: {
      src: "/portfolio/coinsight/detail.png",
      alt: "Coinsight Detail",
    },
  },
  {
    id: "humance",
    title: "Humance",
    description: "모든 HR, 한 곳에서 - 팀의 시간을 더 가치있게.",
    images: "/portfolio/humance/humance.png",
    tags: [
      "소셜로그인",
      "온보딩 (추가정보)",
      "홈 화면 구성",
      "검색",
      "일반 게시글",
      "댓글/답글",
      "리뷰/평가",
      "푸시 알림",
    ],
    link: "/portfolio/humance",
    modalContent: {
      src: "/portfolio/humance/detail.png",
      alt: "Humance Detail",
    },
  },
  {
    id: "cyclink",
    title: "Cyclink",
    description:
      "더 자유로운 이동, 더 스마트한 라이딩. cyclink로 즐거운 여정이 더욱 안전하고 특별해집니다.",
    images: "/portfolio/cyclink/cyclink.png",
    tags: [
      "일반로그인/회원가입",
      "홈 화면 구성",
      "검색",
      "매칭",
      "지도보기",
      "GPS추적",
      "푸시 알림",
    ],
    link: "/portfolio/cyclink",
    modalContent: {
      src: "/portfolio/cyclink/detail.png",
      alt: "Cyclink Detail",
    },
  },
  {
    id: "defina",
    title: "Defina",
    description:
      "미래를 정의하고, 비전에 투자합니다. 글로벌 무대에서 도전적인 아이디어와 탁월한 팀을 발굴합니다.",
    images: "/portfolio/defina/defina.png",
    tags: [
      "일반로그인/회원가입",
      "홈 화면 구성",
      "검색",
      "블록체인",
      "NFT",
      "결제하기",
      "푸시 알림",
    ],
    link: "/portfolio/defina",
    modalContent: {
      src: "/portfolio/defina/detail.png",
      alt: "Defina Detail",
    },
  },
  {
    id: "plantelligence",
    title: "Plantelligence",
    description:
      "식물의 건강, 데이터로 더 스마트하게. 토양과 식물 상태를 손쉽게 스캔하면 AI가 맞춤형 진단과 관리 팁을 제공합니다.",
    images: "/portfolio/plantelligence/plantelligence.png",
    tags: ["일반로그인/회원가입", "홈 화면 구성", "검색", "AI", "푸시 알림"],
    link: "/portfolio/plantelligence",
    modalContent: {
      src: "/portfolio/plantelligence/detail.png",
      alt: "Plantelligence Detail",
    },
  },
  {
    id: "rumor",
    title: "Rumor",
    description:
      "공실 해소 수요조사 플랫폼. 주민은 원하는 가게로 주변을 채우고, 창업자는 수요에 기반해 입지를 선정하는, 주민과 창업자 모두에게 WIN-WIN 솔루션",
    images: "/portfolio/rumor/rumor.png",
    tags: [
      "일반로그인/회원가입",
      "홈 화면 구성",
      "검색",
      "일반 게시글",
      "댓글/답글",
      "투표하기",
      "푸시 알림",
    ],
    link: "/portfolio/rumor",
    modalContent: {
      src: "/portfolio/rumor/detail.png",
      alt: "Rumor Detail",
    },
  },
  {
    id: "mooplanner",
    title: "Mooplanner",
    description:
      "휴식에 집중하는 워케이션 솔루션. 일과 휴식의 완벽한 밸런스, 낯선 곳에서도 익숙한 편안함을 누리세요.",
    images: "/portfolio/mooplanner/mooplanner.png",
    tags: [
      "일반로그인/회원가입",
      "온보딩 (추가정보)",
      "홈 화면 구성",
      "검색",
      "일정관리",
      "예약하기",
      "푸시 알림",
    ],
    link: "/portfolio/mooplanner",
    modalContent: {
      src: "/portfolio/mooplanner/detail.png",
      alt: "Mooplanner Detail",
    },
  },
];

export const categories: Category[] = [
  {
    id: "website",
    name: "웹사이트",
    color: "blue",
    projects: [
      ...PROJECTS.filter((p) =>
        [
          "sasohan",
          "perfumory",
          "bogeopung",
          "insightful",
          "notello",
          "gymnetic",
          "spotly",
          "nutrilog",
          "coinsight",
          "humance",
          "cyclink",
          "defina",
          "plantelligence",
          "rumor",
          "mooplanner",
          "trackly",
        ].includes(p.id)
      ),
    ],
  },
  {
    id: "landing",
    name: "랜딩페이지",
    color: "yellow",
    projects: [
      ...PROJECTS.filter((p) =>
        [
          "perfumory",
          "insightful",
          "notello",
          "spotly",
          "rumor",
          "mooplanner",
        ].includes(p.id)
      ),
    ],
  },
  {
    id: "commerce",
    name: "커머스",
    color: "green",
    projects: [
      ...PROJECTS.filter((p) =>
        [
          "perfumory",
          "nutrilog",
          "coinsight",
          "defina",
          "gymnetic",
          "spotly",
        ].includes(p.id)
      ),
    ],
  },
  {
    id: "community",
    name: "커뮤니티",
    color: "gray",
    projects: [
      ...PROJECTS.filter((p) =>
        [
          "sasohan",
          "notello",
          "rumor",
          "humance",
          "spotly",
          "mooplanner",
        ].includes(p.id)
      ),
    ],
  },
  {
    id: "order",
    name: "예약/신청/오더",
    color: "red",
    projects: [
      ...PROJECTS.filter((p) =>
        [
          "trackly",
          "gymnetic",
          "mooplanner",
          "plantelligence",
          "spotly",
          "nutrilog",
        ].includes(p.id)
      ),
    ],
  },
  {
    id: "video",
    name: "강의/영상/OTT",
    color: "blue",
    projects: [
      ...PROJECTS.filter((p) =>
        ["gymnetic", "trackly", "perfumory", "insightful"].includes(p.id)
      ),
    ],
  },
  {
    id: "others",
    name: "기타",
    color: "yellow",
    projects: [
      ...PROJECTS.filter((p) =>
        ["cyclink", "plantelligence", "rumor", "mooplanner", "defina"].includes(
          p.id
        )
      ),
    ],
  },
];
