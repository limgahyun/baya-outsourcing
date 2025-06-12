export interface Project {
  id: string;
  title: string;
  description: string;
  images: string;
  tags: string[];
  link: string;
}

export interface Category {
  id: string;
  name: string;
  projects: Project[];
}

export const categories: Category[] = [
  {
    id: "website",
    name: "웹사이트",
    projects: [
      {
        id: "sasohan",
        title: "사소한",
        description:
          "사소한 일상의 변화를 만드는 웹사이트입니다. 사용자들이 일상 속 작은 실천을 통해 더 나은 삶을 만들어갈 수 있도록 돕습니다.",
        images: "/portfolio/sasohan/sasohan.png",

        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        link: "https://sasohan.com",
      },
      {
        id: "portfolio1",
        title: "포트폴리오 1",
        description:
          "첫 번째 포트폴리오 프로젝트입니다. 현대적인 디자인과 사용자 경험을 중심으로 제작되었습니다.",
        images: "/portfolio/sasohan/sasohan_view1.png",

        tags: ["React", "TypeScript", "Styled Components"],
        link: "https://portfolio1.com",
      },
      {
        id: "portfolio2",
        title: "포트폴리오 2",
        description:
          "두 번째 포트폴리오 프로젝트입니다. 혁신적인 기능과 세련된 UI를 제공합니다.",
        images: "/portfolio/sasohan/sasohan_view1.png",

        tags: ["Vue.js", "JavaScript", "SCSS"],
        link: "https://portfolio2.com",
      },
    ],
  },
  {
    id: "commerce",
    name: "커머스",
    projects: [
      {
        id: "commerce1",
        title: "커머스 프로젝트 1",
        description:
          "첫 번째 커머스 프로젝트입니다. 사용자 중심의 쇼핑 경험을 제공합니다.",
        images: "/portfolio/sasohan/sasohan.png",

        tags: ["Next.js", "TypeScript", "Redux"],
        link: "https://commerce1.com",
      },
      {
        id: "commerce2",
        title: "커머스 프로젝트 2",
        description:
          "두 번째 커머스 프로젝트입니다. 최적화된 결제 프로세스를 구현했습니다.",
        images: "/portfolio/sasohan/sasohan.png",

        tags: ["React", "Node.js", "MongoDB"],
        link: "https://commerce2.com",
      },
      {
        id: "commerce3",
        title: "커머스 프로젝트 3",
        description:
          "세 번째 커머스 프로젝트입니다. AI 기반 상품 추천 시스템을 도입했습니다.",
        images: "/portfolio/sasohan/sasohan.png",

        tags: ["Vue.js", "Python", "TensorFlow"],
        link: "https://commerce3.com",
      },
    ],
  },
  {
    id: "others",
    name: "기타",
    projects: [
      {
        id: "other1",
        title: "기타 프로젝트 1",
        description:
          "첫 번째 기타 프로젝트입니다. 혁신적인 솔루션을 제공합니다.",
        images: "/portfolio/sasohan/sasohan.png",

        tags: ["React Native", "TypeScript", "Firebase"],
        link: "https://other1.com",
      },
      {
        id: "other2",
        title: "기타 프로젝트 2",
        description: "두 번째 기타 프로젝트입니다. 사용자 경험을 개선했습니다.",
        images: "/portfolio/sasohan/sasohan.png",

        tags: ["Flutter", "Dart", "GraphQL"],
        link: "https://other2.com",
      },
      {
        id: "other3",
        title: "기타 프로젝트 3",
        description: "세 번째 기타 프로젝트입니다. 새로운 기술을 도입했습니다.",
        images: "/portfolio/sasohan/sasohan.png",

        tags: ["Angular", "TypeScript", "AWS"],
        link: "https://other3.com",
      },
    ],
  },
];
