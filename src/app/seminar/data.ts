export interface Seminar {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  date: string;
  duration: string;
  speaker: string;
  tags: string[];
  isUpcoming: boolean;
}

export const seminars: Seminar[] = [
  {
    id: "nextjs-best-practices",
    title: "Next.js 14 최신 기능과 베스트 프랙티스",
    description:
      "Next.js 14의 새로운 기능들을 소개하고, 실제 프로젝트에서 활용할 수 있는 베스트 프랙티스를 공유합니다. App Router, Server Components, 그리고 성능 최적화에 대해 다룹니다.",
    thumbnail: "/seminar/offTheRecord.png",
    date: "2024.01.15",
    duration: "2시간",
    speaker: "김개발",
    tags: ["Next.js", "React", "TypeScript"],
    isUpcoming: false,
  },
  {
    id: "ai-web-development",
    title: "AI를 활용한 웹 개발 트렌드",
    description:
      "ChatGPT, GitHub Copilot 등 AI 도구들을 활용한 웹 개발 방법론을 소개합니다. 개발 생산성 향상과 코드 품질 개선에 대한 실전 팁을 제공합니다.",
    thumbnail: "/seminar/offTheRecord.png",
    date: "2024.01.22",
    duration: "1.5시간",
    speaker: "이AI",
    tags: ["AI", "개발도구", "생산성"],
    isUpcoming: true,
  },
];
