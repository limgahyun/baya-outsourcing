"use client";

import React, { useRef } from "react";
import Lottie from "lottie-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import clientAnimation from "../../public/lottie/client.json";
import companyAnimation from "../../public/lottie/company.json";
import severityAnimation1 from "../../public/lottie/severity1.json";
import severityAnimation2 from "../../public/lottie/severity2.json";
import severityAnimation3 from "../../public/lottie/severity3.json";

// Define a more specific type for Lottie animation data
interface LottieAnimationData {
  v: string;
  fr: number;
  ip: number;
  op: number;
  w: number;
  h: number;
  nm: string;
  ddd: number;
  assets: Record<string, unknown>[];
  layers: {
    ddd: number;
    ind: number;
    ty: number;
    nm: string;
    sr: number;
    ks: Record<string, unknown>;
    ao: number;
    ip: number;
    op: number;
    st: number;
    bm: number;
    [key: string]: unknown;
  }[];
}

interface ChatBubbleProps {
  isClient: boolean;
  speaker: string;
  message: string;
  animationData: LottieAnimationData;
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
    } items-start gap-5`}
  >
    <div className="w-[64px] h-[64px] flex-shrink-0">
      <Lottie animationData={animationData} loop={true} />
    </div>
    <div className={`flex flex-col ${isClient ? "items-start" : "items-end"}`}>
      <div className="font-bold text-lg text-gray-800 mb-2.5">{speaker}</div>
      <div
        className={`relative ${
          isClient ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-800"
        } ${
          isClient
            ? "rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px]"
            : "rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px]"
        } py-4 px-6 sm:pr-10 sm:pl-6 max-w-full text-lg md:text-xl`}
      >
        {message}
      </div>
    </div>
  </div>
);

interface ChatSectionProps {
  conversations: {
    isClient: boolean;
    speaker: string;
    message: string;
    animationData: LottieAnimationData;
  }[];
  opacity: number;
}

const ChatSection: React.FC<ChatSectionProps> = ({
  conversations,
  opacity,
}) => (
  <motion.section
    style={{ opacity }}
    className="w-full min-h-[60vh] bg-white py-28 px-5 flex items-center"
  >
    <div className="max-w-6xl mx-auto w-full flex flex-col gap-5">
      {conversations.map((conv, index) => (
        <ChatBubble key={index} {...conv} />
      ))}
    </div>
  </motion.section>
);

const Severity: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 20,
    stiffness: 100,
  });

  // Update position transforms to include pause points
  const firstAnimationX = useTransform(
    smoothProgress,
    [0, 0.15, 0.15, 0.25, 0.3],
    ["0%", "-50%", "-50%", "-50%", "-100%"] // Adjusted to account for transform
  );

  const secondAnimationX = useTransform(
    smoothProgress,
    [0.4, 0.5, 0.5, 0.6, 0.7],
    ["0%", "-50%", "-50%", "-50%", "-100%"] // Adjusted to account for transform
  );

  const thirdAnimationX = useTransform(
    smoothProgress,
    [0.8, 0.85, 0.85, 0.95, 1.0],
    ["0%", "-50%", "-50%", "-50%", "-100%"] // Adjusted to account for transform
  );

  // Update opacity transforms to match pause points
  const firstAnimationOpacity = useTransform(
    smoothProgress,
    [0, 0.1, 0.15, 0.25, 0.3], // Extended full opacity during pause
    [0, 1, 1, 1, 0]
  );

  const secondAnimationOpacity = useTransform(
    smoothProgress,
    [0.4, 0.45, 0.5, 0.6, 0.7], // Extended full opacity during pause
    [0, 1, 1, 1, 0]
  );

  const thirdAnimationOpacity = useTransform(
    smoothProgress,
    [0.8, 0.83, 0.85, 0.95, 1.0], // Extended full opacity during pause
    [0, 1, 1, 1, 0]
  );

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
  const thirdConversation = [
    {
      isClient: true,
      speaker: "클라이언트",
      message: "이 기능은 왜 안되는거죠?",
      animationData: clientAnimation,
    },
    {
      isClient: false,
      speaker: "외주사",
      message: "의뢰서에 써있는대로 개발해 드렸는데요?",
      animationData: companyAnimation,
    },
  ];

  return (
    <div ref={containerRef} className="relative w-full h-[600vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Chat sections */}
        <div className="absolute inset-0 lg:w-[60vw] lg:mx-auto">
          <ChatSection
            conversations={firstConversation}
            opacity={firstAnimationOpacity as unknown as number}
          />
        </div>
        <div className="absolute inset-0 lg:w-[60vw] lg:mx-auto">
          <ChatSection
            conversations={secondConversation}
            opacity={secondAnimationOpacity as unknown as number}
          />
        </div>
        <div className="absolute inset-0 lg:w-[60vw] lg:mx-auto">
          <ChatSection
            conversations={thirdConversation}
            opacity={thirdAnimationOpacity as unknown as number}
          />
        </div>

        {/* Fixed severity content at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <section className="relative bg-gray-800 h-40vh py-20 px-5 text-center text-white">
            {/* First animation */}
            <motion.div
              style={{
                x: firstAnimationX,
                opacity: firstAnimationOpacity,
              }}
              className="absolute left-1/2 -translate-x-1/2 -top-[60px] w-[120px] h-[120px]"
            >
              <Lottie animationData={severityAnimation1} loop={true} />
            </motion.div>

            {/* Second animation */}
            <motion.div
              style={{
                x: secondAnimationX,
                opacity: secondAnimationOpacity,
              }}
              className="absolute left-1/2 -translate-x-1/2 -top-[60px] w-[120px] h-[120px]"
            >
              <Lottie animationData={severityAnimation2} loop={true} />
            </motion.div>

            {/* Third animation */}
            <motion.div
              style={{
                x: thirdAnimationX,
                opacity: thirdAnimationOpacity,
              }}
              className="absolute left-1/2 -translate-x-1/2 -top-[60px] w-[140px] h-[140px]"
            >
              <Lottie animationData={severityAnimation3} loop={true} />
            </motion.div>

            <div className="mx-auto pt-[60px]">
              <h2 className="font-gmarket text-2xl md:text-3xl lg:text-4xl mb-5">
                <span className="text-red-500">피같은 돈</span>을 투자해 믿고
                맡겼던 외주 개발
              </h2>
              <p className="text-xl md:text-2xl lg:text-3xl mb-3 md:mb-4">
                기획한 방향과{" "}
                <span className="bg-red-800">전혀 다른 결과물</span>
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl">
                돌아오는 <span className="bg-red-800">책임 회피</span>에 말문이
                턱.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Severity;
