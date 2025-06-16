"use client";

import Image from "next/image";
import { strategies } from "@/data/strategies";
import { FadeInSection } from "../FadeInSection";

export default function Strategy() {
  return (
    <section className="py-20 bg-gray-50">
      <FadeInSection>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Title */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-gmarket text-blue-1000">
                바야의 성공전략
              </h2>
            </div>

            {/* Strategy Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {strategies.map((strategy, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
                >
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={strategy.image}
                      alt={strategy.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                  </div>

                  {/* Content Container */}
                  <div className="p-6">
                    <h3 className="text-xl md:text-2xl font-gmarket text-blue-1000 mb-4">
                      {strategy.title}
                    </h3>
                    <div className="text-gray-600 font-pretendard whitespace-pre-line leading-relaxed">
                      {strategy.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
