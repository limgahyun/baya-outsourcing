"use client";

import Image from "next/image";

export default function Necessity() {
  return (
    <section className="py-20 bg-blue-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(0deg, transparent 24%, #000 25%, #000 26%, transparent 27%, transparent 74%, #000 75%, #000 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #000 25%, #000 26%, transparent 27%, transparent 74%, #000 75%, #000 76%, transparent 77%, transparent)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <div className="mb-16 font-gmarket">
            <h2 className="text-lg md:text-xl lg:text-2xl mb-4">그래서</h2>
            <p className="text-2xl md:text-3xl lg:text-4xl">
              <span className="bg-blue-500 text-white py-1">
                사업을 경험해본 개발팀
              </span>
              이 필요합니다
            </p>
          </div>

          {/* Icon */}
          <div className="mb-16 w-[200px] md:w-[250px] lg:w-[300px] mx-auto">
            <div className="relative w-full" style={{ paddingTop: "100%" }}>
              <Image
                src="/icons/business.png"
                alt="비즈니스 아이콘"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 200px, (max-width: 1024px) 250px, 300px"
              />
            </div>
          </div>

          {/* Bottom Text */}
          <div>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-pretendard mb-2 sm:mb-4">
              그냥 시킨 대로만 개발하는 것이 아니라,
            </p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-pretendard">
              <span className="text-blue-500">사업가의 시선</span>에서
              개발합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
