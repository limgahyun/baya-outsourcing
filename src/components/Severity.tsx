"use client";

import React from "react";
import Lottie from "lottie-react";
import clientAnimation from "../../public/lottie/client.json";
import companyAnimation from "../../public/lottie/company.json";
import severityAnimation1 from "../../public/lottie/severity1.json";
import severityAnimation2 from "../../public/lottie/severity2.json";

interface ChatBubbleProps {
  isClient: boolean;
  speaker: string;
  message: string;
  animationData: object;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({
  isClient,
  speaker,
  message,
  animationData,
}) => (
  <div
    className={`w-full flex ${
      isClient ? "flex-row" : "flex-row-reverse"
    } items-start gap-5 ${!isClient ? "self-end" : ""}`}
  >
    <div className="w-[64px] h-[64px] flex-shrink-0">
      <Lottie animationData={animationData} loop={true} />
    </div>
    <div className={`flex flex-col items-${isClient ? "start" : "end"}`}>
      <div className="font-bold text-lg text-gray-800 mb-2.5">{speaker}</div>
      <div
        className={`relative ${
          isClient ? "bg-[#007AFF] text-white" : "bg-[#E9ECEF] text-gray-800"
        } ${
          isClient
            ? "rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px]"
            : "rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px]"
        } p-4 max-w-full`}
      >
        {message}
      </div>
    </div>
  </div>
);

interface SeverityContentProps {
  animationData: object;
}

const SeverityContent: React.FC<SeverityContentProps> = ({ animationData }) => (
  <section className="relative bg-gray-800 h-40vh py-20 px-5 text-center text-white">
    <div className="absolute left-1/2 -translate-x-1/2 -top-[60px] w-[120px] h-[120px]">
      <Lottie animationData={animationData} loop={true} />
    </div>
    <div className="max-w-3xl mx-auto pt-[60px]">
      <h2 className="font-gmarket text-4xl mb-5 break-keep">
        피같은 돈을 투자해 밀고 맡겼던 외주 개발
      </h2>
      <p className="text-xl leading-relaxed break-keep">
        기획한 방향과{" "}
        <span className="bg-[#333333] py-1 mx-1">전혀 다른 결과물</span>
        <br />
        돌아오는 <span className="bg-[#333333] py-1 mx-1">책임 회피</span>에
        말문이 턱.
      </p>
    </div>
  </section>
);

interface ChatSectionProps {
  conversations: {
    isClient: boolean;
    speaker: string;
    message: string;
    animationData: object;
  }[];
}

const ChatSection: React.FC<ChatSectionProps> = ({ conversations }) => (
  <section className="w-full h-60vh bg-white py-28 px-5">
    <div className="max-w-6xl mx-auto flex flex-col gap-5">
      {conversations.map((conv, index) => (
        <ChatBubble key={index} {...conv} />
      ))}
    </div>
  </section>
);

const Severity: React.FC = () => {
  const firstConversation = [
    {
      isClient: true,
      speaker: "클라이언트",
      message: "저희 회의 때 이 기능 말씀드렸는데..",
      animationData: clientAnimation,
    },
    {
      isClient: false,
      speaker: "외주사",
      message: "시도해보겠다고 했지, 반영은 못했습니다.",
      animationData: companyAnimation,
    },
  ];

  const secondConversation = [
    {
      isClient: true,
      speaker: "클라이언트",
      message: "저희가 의도했던 디자인이랑 다른데.. 수정 부탁드려요",
      animationData: clientAnimation,
    },
    {
      isClient: false,
      speaker: "외주사",
      message: "수정하려면 추가금 지불해주셔야 가능합니다.",
      animationData: companyAnimation,
    },
  ];

  return (
    <>
      <section className="w-full h-100vh">
        <ChatSection conversations={firstConversation} />
        <SeverityContent animationData={severityAnimation1} />
      </section>

      <section className="w-full h-100vh">
        <ChatSection conversations={secondConversation} />
        <SeverityContent animationData={severityAnimation2} />
      </section>
    </>
  );
};

export default Severity;
