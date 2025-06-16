"use client";

import Image from "next/image";
import { FadeInSection, SlideFromLeft, SlideFromRight } from "../FadeInSection";

export default function Problem() {
  return (
    <section className="py-12 md:py-20 bg-gray-800 text-white">
      <FadeInSection>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Main Problem Statement */}
            <div className="text-center mb-10 md:mb-16">
              <p className="text-xl md:text-2xl lg:text-3xl font-pretendard mb-3 md:mb-4 text-white/90">
                런칭 지연에 더불어 최악의 경우 처음부터 다시 개발,
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl font-pretendard">
                사업가에게는{" "}
                <span className="text-red-500 font-bold">수천만원의 손해</span>
                로 이어집니다
              </p>
            </div>

            {/* News Articles Stack */}
            <div className="space-y-8 md:space-y-12">
              {[1, 2, 3].map((index) =>
                index % 2 === 0 ? (
                  <SlideFromLeft key={index} delay={index * 0.2}>
                    <div
                      className={`w-full md:w-[40vw] transition-all duration-300 ease-in-out
                        md:ml-0
                        hover:scale-[1.02]`}
                    >
                      <Image
                        src={`/news/news${index}.png`}
                        alt={`외주 개발 관련 뉴스 ${index}`}
                        width={200}
                        height={0}
                        className="w-full h-auto rounded-lg shadow-lg"
                        priority={index === 1}
                        unoptimized
                      />
                    </div>
                  </SlideFromLeft>
                ) : (
                  <SlideFromRight key={index} delay={index * 0.2}>
                    <div
                      className={`w-full md:w-[40vw] transition-all duration-300 ease-in-out
                        md:ml-auto
                        hover:scale-[1.02]`}
                    >
                      <Image
                        src={`/news/news${index}.png`}
                        alt={`외주 개발 관련 뉴스 ${index}`}
                        width={200}
                        height={0}
                        className="w-full h-auto rounded-lg shadow-lg"
                        priority={index === 1}
                        unoptimized
                      />
                    </div>
                  </SlideFromRight>
                )
              )}
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
