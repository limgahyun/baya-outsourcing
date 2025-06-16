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
      {
        id: "commerce2",
        title: "커머스 프로젝트 2",
        description:
          "두 번째 커머스 프로젝트입니다. 최적화된 결제 프로세스를 구현했습니다.",
        images: "/portfolio/sasohan/sasohan.png",

        tags: ["React", "Node.js", "MongoDB"],
        link: "/portfolio/sasohan",
        modalContent: {},
      },
      {
        id: "commerce3",
        title: "커머스 프로젝트 3",
        description:
          "세 번째 커머스 프로젝트입니다. AI 기반 상품 추천 시스템을 도입했습니다.",
        images: "/portfolio/bogeopung/bogeopung.png",

        tags: ["Vue.js", "Python", "TensorFlow"],
        link: "/portfolio/bogeopung",
        modalContent: {},
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
      {
        id: "other2",
        title: "기타 프로젝트 2",
        description: "두 번째 기타 프로젝트입니다. 사용자 경험을 개선했습니다.",
        images: "/portfolio/perfumory/perfumory.png",

        tags: ["Flutter", "Dart", "GraphQL"],
        link: "/portfolio/perfumory",
        modalContent: {},
      },
      {
        id: "other3",
        title: "기타 프로젝트 3",
        description: "세 번째 기타 프로젝트입니다. 새로운 기술을 도입했습니다.",
        images: "/portfolio/bogeopung/bogeopung.png",

        tags: ["Angular", "TypeScript", "AWS"],
        link: "/portfolio/bogeopung",
        modalContent: {
          src: "/portfolio/bogeopung/detail.png",
          alt: "Perfumory Detail",
        },
      },
    ],
  },
];
