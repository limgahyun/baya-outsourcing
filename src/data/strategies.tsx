import { ReactNode } from "react";

export interface Strategy {
  title: string;
  content: ReactNode;
  image: string;
}

export const strategies: Strategy[] = [
  {
    title: "기획-디자인-개발 원스톱",
    content: (
      <>
        <span className="text-blue-500 font-medium">
          디자인만, 개발만, 또는 처음부터 끝까지도
        </span>{" "}
        가능합니다. 필요하신 만큼만, 원하시는 것을 모두 맡겨주세요.
      </>
    ),
    image: "/pictures/strategy1.jpeg",
  },
  {
    title: "주 1회 이상 미팅 & 데일리 보고",
    content: (
      <>
        단순 개발사를 넘어{" "}
        <span className="text-blue-500 font-medium">
          파트너처럼 함께하기 위해 주간 정기 미팅은 기본
        </span>
        , 매일의 진행 상황도 투명하게 공유합니다.{"\n"}
        <span className="text-blue-500 font-medium">
          불필요한 개발 용어 대신, 명료한 비즈니스 언어
        </span>
        로 소통합니다.
      </>
    ),
    image: "/pictures/strategy2.jpeg",
  },
  {
    title: "개발 이후까지 책임지는",
    content: (
      <>
        개발은 한 번 만들면 끝나는 것이 아니라{" "}
        <span className="text-blue-500 font-medium">
          사업과 함께 지속적으로 진화되어야하는 생명체
        </span>
        와 같습니다.{"\n"}
        <span className="text-blue-500">✓</span> 디자인 원본 제공{"\n"}
        <span className="text-blue-500">✓</span> 운영&유지 가이드 제공{"\n"}
        <span className="text-blue-500">✓</span>{" "}
        <span className="text-blue-500 font-medium">3개월 무료 수정&보수</span>
      </>
    ),
    image: "/pictures/strategy3.png",
  },
];
