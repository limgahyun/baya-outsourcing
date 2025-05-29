"use client";

import Image from "next/image";

export default function CTA() {
  return (
    <section className="relative h-[400px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/pictures/cta.jpeg"
        alt="CTA Background"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full container mx-auto px-4">
        <div className="flex flex-col items-center justify-center h-full text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-gmarket text-white mb-8">
            <div>막막하고 어려울 때,</div>
            <div>함께 해답을 찾아봐요.</div>
          </h2>

          <button
            onClick={() => {
              window.open("https://tally.so/r/mVyWdy", "_blank");
            }}
            className="bg-white hover:bg-gray-200 text-blue-1000 px-8 py-3 rounded-lg font-pretendard font-medium transition-all duration-300 hover:shadow-lg text-lg break-keep"
          >
            프로젝트 문의하기
          </button>
        </div>
      </div>
    </section>
  );
}
