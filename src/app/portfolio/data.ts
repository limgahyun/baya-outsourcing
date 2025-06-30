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

export const categories: Category[] = [
  {
    id: "website",
    name: "웹사이트",
    color: "blue",
    projects: [
      {
        id: "sasohan",
        title: "사소한",
        description:
          "사회적 기업 중개와 소비관리 서비스. 개인의 지출을 관리할 수 있는 가계부 기록 서비스를 제공하면서 동시에 사회적 기업을 소개 및 주개해주는 플랫폼입니다.",
        images: "/portfolio/sasohan/sasohan.png",

        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
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

        tags: ["Next.js", "TypeScript", "Redux", "Tailwind CSS"],
        link: "/portfolio/perfumory",
        modalContent: {
          src: "/portfolio/perfumory/detail.png",
          alt: "Perfumory Detail",
        },
      },
      {
        id: "bogeopung",
        title: "복어펑",
        description:
          "내 손 안의 불안 퇴치제. 복어핑은 게이미피케이션 기반의 감정 기록 앱입니다. 복어를 생성하여 감정을 기록하고 표현할 수 있습니다.",
        images: "/portfolio/bogeopung/bogeopung.png",

        tags: ["Vue.js", "JavaScript", "SCSS"],
        link: "/portfolio/bogeopung",
        modalContent: {
          src: "/portfolio/bogeopung/detail.png",
          alt: "Bogeopung Detail",
        },
      },
      {
        id: "insightful",
        title: "Insightful",
        description:
          "인사이트풀은 데이터 기반 인사이트를 제공하는 서비스입니다.",
        images: "/portfolio/insightful/insightful.png",
        tags: ["Web", "Service"],
        link: "/portfolio/insightful",
        modalContent: {
          src: "/portfolio/insightful/detail.png",
          alt: "Insightful Detail",
        },
      },
      {
        id: "notello",
        title: "Notello",
        description: "노텔로는 효율적인 노트 및 일정 관리를 지원합니다.",
        images: "/portfolio/notello/notello.png",
        tags: ["Web", "Service"],
        link: "/portfolio/notello",
        modalContent: {
          src: "/portfolio/notello/detail.png",
          alt: "Notello Detail",
        },
      },
      {
        id: "trackly",
        title: "Trackly",
        description: "트랙리는 프로젝트 및 작업 추적을 위한 플랫폼입니다.",
        images: "/portfolio/trackly/trackly.png",
        tags: ["Web", "Service"],
        link: "/portfolio/trackly",
        modalContent: {
          src: "/portfolio/trackly/detail.png",
          alt: "Trackly Detail",
        },
      },
      {
        id: "gymnetic",
        title: "Gymnetic",
        description: "짐네틱은 개인 맞춤형 피트니스 관리 서비스를 제공합니다.",
        images: "/portfolio/gymnetic/gymnetic.png",
        tags: ["Web", "Service"],
        link: "/portfolio/gymnetic",
        modalContent: {
          src: "/portfolio/gymnetic/detail.png",
          alt: "Gymnetic Detail",
        },
      },
      {
        id: "spotly",
        title: "Spotly",
        description: "스팟리는 위치 기반 추천 서비스를 제공합니다.",
        images: "/portfolio/spotly/spotly.png",
        tags: ["Web", "Service"],
        link: "/portfolio/spotly",
        modalContent: {
          src: "/portfolio/spotly/detail.png",
          alt: "Spotly Detail",
        },
      },
      {
        id: "nutrilog",
        title: "Nutrilog",
        description: "뉴트릴로그는 영양 및 식단 관리를 돕는 서비스입니다.",
        images: "/portfolio/nutrilog/nutrilog.png",
        tags: ["Web", "Service"],
        link: "/portfolio/nutrilog",
        modalContent: {
          src: "/portfolio/nutrilog/detail.png",
          alt: "Nutrilog Detail",
        },
      },
      {
        id: "coinsight",
        title: "Coinsight",
        description: "코인사이트는 암호화폐 시장 분석 도구입니다.",
        images: "/portfolio/coinsight/coinsight.png",
        tags: ["Web", "Service"],
        link: "/portfolio/coinsight",
        modalContent: {
          src: "/portfolio/coinsight/detail.png",
          alt: "Coinsight Detail",
        },
      },
      {
        id: "humance",
        title: "Humance",
        description: "휴맨스는 인사 및 조직 관리를 위한 솔루션입니다.",
        images: "/portfolio/humance/humance.png",
        tags: ["Web", "Service"],
        link: "/portfolio/humance",
        modalContent: {
          src: "/portfolio/humance/detail.png",
          alt: "Humance Detail",
        },
      },
      {
        id: "cyclink",
        title: "Cyclink",
        description: "사이클링크는 자전거 라이프스타일 플랫폼입니다.",
        images: "/portfolio/cyclink/cyclink.png",
        tags: ["Web", "Service"],
        link: "/portfolio/cyclink",
        modalContent: {
          src: "/portfolio/cyclink/detail.png",
          alt: "Cyclink Detail",
        },
      },
      {
        id: "defina",
        title: "Defina",
        description: "데피나는 디지털 파이낸스 관리 서비스입니다.",
        images: "/portfolio/defina/defina.png",
        tags: ["Web", "Service"],
        link: "/portfolio/defina",
        modalContent: {
          src: "/portfolio/defina/detail.png",
          alt: "Defina Detail",
        },
      },
      {
        id: "plantelligence",
        title: "Plantelligence",
        description: "플랜텔리전스는 스마트 플랜트 관리 솔루션입니다.",
        images: "/portfolio/plantelligence/plantelligence.png",
        tags: ["Web", "Service"],
        link: "/portfolio/plantelligence",
        modalContent: {
          src: "/portfolio/plantelligence/detail.png",
          alt: "Plantelligence Detail",
        },
      },
      {
        id: "rumor",
        title: "Rumor",
        description: "루머는 소문 및 정보 공유 커뮤니티입니다.",
        images: "/portfolio/rumor/rumor.png",
        tags: ["Web", "Service"],
        link: "/portfolio/rumor",
        modalContent: {
          src: "/portfolio/rumor/detail.png",
          alt: "Rumor Detail",
        },
      },
      {
        id: "mooplanner",
        title: "Mooplanner",
        description: "무플래너는 일정 및 목표 관리를 지원합니다.",
        images: "/portfolio/mooplanner/mooplanner.png",
        tags: ["Web", "Service"],
        link: "/portfolio/mooplanner",
        modalContent: {
          src: "/portfolio/mooplanner/detail.png",
          alt: "Mooplanner Detail",
        },
      },
    ],
  },
  {
    id: "landing",
    name: "랜딩페이지",
    color: "yellow",
    projects: [
      {
        id: "sasohan",
        title: "사소한",
        description:
          "사회적 기업 중개와 소비관리 서비스. 개인의 지출을 관리할 수 있는 가계부 기록 서비스를 제공하면서 동시에 사회적 기업을 소개 및 주개해주는 플랫폼입니다.",
        images: "/portfolio/sasohan/sasohan.png",

        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
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

        tags: ["Next.js", "TypeScript", "Redux", "Tailwind CSS"],
        link: "/portfolio/perfumory",
        modalContent: {
          src: "/portfolio/perfumory/detail.png",
          alt: "Perfumory Detail",
        },
      },
      {
        id: "bogeopung",
        title: "복어펑",
        description:
          "내 손 안의 불안 퇴치제. 복어핑은 게이미피케이션 기반의 감정 기록 앱입니다. 복어를 생성하여 감정을 기록하고 표현할 수 있습니다.",
        images: "/portfolio/bogeopung/bogeopung.png",

        tags: ["Vue.js", "JavaScript", "SCSS"],
        link: "/portfolio/bogeopung",
        modalContent: {
          src: "/portfolio/bogeopung/detail.png",
          alt: "Bogeopung Detail",
        },
      },
    ],
  },
  {
    id: "commerce",
    name: "커머스",
    color: "green",
    projects: [
      {
        id: "perfumory",
        title: "perfumory",
        description:
          "커스텀 향수 제작 및 기록 서비스, perfumory. 퍼퓨모리는 커스텀 향수를 제작할 수 있도록 돕는 플랫폼입니다.",
        images: "/portfolio/perfumory/perfumory.png",

        tags: ["Next.js", "TypeScript", "Redux", "Tailwind CSS"],
        link: "/portfolio/perfumory",
        modalContent: {
          src: "/portfolio/perfumory/detail.png",
          alt: "Perfumory Detail",
        },
      },
    ],
  },
  {
    id: "community",
    name: "커뮤니티",
    color: "gray",
    projects: [
      {
        id: "sasohan",
        title: "사소한",
        description:
          "사회적 기업 중개와 소비관리 서비스. 개인의 지출을 관리할 수 있는 가계부 기록 서비스를 제공하면서 동시에 사회적 기업을 소개 및 주개해주는 플랫폼입니다.",
        images: "/portfolio/sasohan/sasohan.png",

        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
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

        tags: ["Next.js", "TypeScript", "Redux", "Tailwind CSS"],
        link: "/portfolio/perfumory",
        modalContent: {
          src: "/portfolio/perfumory/detail.png",
          alt: "Perfumory Detail",
        },
      },
      {
        id: "bogeopung",
        title: "복어펑",
        description:
          "내 손 안의 불안 퇴치제. 복어핑은 게이미피케이션 기반의 감정 기록 앱입니다. 복어를 생성하여 감정을 기록하고 표현할 수 있습니다.",
        images: "/portfolio/bogeopung/bogeopung.png",

        tags: ["Vue.js", "JavaScript", "SCSS"],
        link: "/portfolio/bogeopung",
        modalContent: {
          src: "/portfolio/bogeopung/detail.png",
          alt: "Bogeopung Detail",
        },
      },
    ],
  },
  {
    id: "order",
    name: "예약/신청/오더",
    color: "red",
    projects: [
      {
        id: "sasohan",
        title: "사소한",
        description:
          "사회적 기업 중개와 소비관리 서비스. 개인의 지출을 관리할 수 있는 가계부 기록 서비스를 제공하면서 동시에 사회적 기업을 소개 및 주개해주는 플랫폼입니다.",
        images: "/portfolio/sasohan/sasohan.png",

        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
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

        tags: ["Next.js", "TypeScript", "Redux", "Tailwind CSS"],
        link: "/portfolio/perfumory",
        modalContent: {
          src: "/portfolio/perfumory/detail.png",
          alt: "Perfumory Detail",
        },
      },
      {
        id: "bogeopung",
        title: "복어펑",
        description:
          "내 손 안의 불안 퇴치제. 복어핑은 게이미피케이션 기반의 감정 기록 앱입니다. 복어를 생성하여 감정을 기록하고 표현할 수 있습니다.",
        images: "/portfolio/bogeopung/bogeopung.png",

        tags: ["Vue.js", "JavaScript", "SCSS"],
        link: "/portfolio/bogeopung",
        modalContent: {
          src: "/portfolio/bogeopung/detail.png",
          alt: "Bogeopung Detail",
        },
      },
    ],
  },
  {
    id: "video",
    name: "강의/영상/OTT",
    color: "blue",
    projects: [
      {
        id: "sasohan",
        title: "사소한",
        description:
          "사회적 기업 중개와 소비관리 서비스. 개인의 지출을 관리할 수 있는 가계부 기록 서비스를 제공하면서 동시에 사회적 기업을 소개 및 주개해주는 플랫폼입니다.",
        images: "/portfolio/sasohan/sasohan.png",

        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
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

        tags: ["Next.js", "TypeScript", "Redux", "Tailwind CSS"],
        link: "/portfolio/perfumory",
        modalContent: {
          src: "/portfolio/perfumory/detail.png",
          alt: "Perfumory Detail",
        },
      },
      {
        id: "bogeopung",
        title: "복어펑",
        description:
          "내 손 안의 불안 퇴치제. 복어핑은 게이미피케이션 기반의 감정 기록 앱입니다. 복어를 생성하여 감정을 기록하고 표현할 수 있습니다.",
        images: "/portfolio/bogeopung/bogeopung.png",

        tags: ["Vue.js", "JavaScript", "SCSS"],
        link: "/portfolio/bogeopung",
        modalContent: {
          src: "/portfolio/bogeopung/detail.png",
          alt: "Bogeopung Detail",
        },
      },
    ],
  },
  {
    id: "others",
    name: "기타",
    color: "yellow",
    projects: [
      {
        id: "other1",
        title: "기타 프로젝트 1",
        description:
          "첫 번째 기타 프로젝트입니다. 혁신적인 솔루션을 제공합니다.",
        images: "/portfolio/sasohan/sasohan.png",
        tags: ["React Native", "TypeScript", "Firebase"],
        link: "/portfolio/sasohan",
        modalContent: {},
      },
    ],
  },
];
