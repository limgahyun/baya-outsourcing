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
              // Smooth scroll to contact form or open modal
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-4 rounded-lg 
              transition-all duration-300 transform hover:scale-105 hover:shadow-lg
              text-lg md:text-xl"
          >
            프로젝트 문의하기
          </button>
        </div>
      </div>
    </section>
  );
}
