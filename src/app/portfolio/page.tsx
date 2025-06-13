"use client";

import ProjectCarousel from "@/components/portfolio/ProjectCarousel";
import { categories } from "@/app/portfolio/data";
import Image from "next/image";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      {/* Header Section */}
      <section className="relative w-full h-[464px] pt-16 flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/portfolio/portfolio_header.png"
            alt="Portfolio Header Background"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-6">포트폴리오</h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            우리는 다양한 웹사이트, 커머스 플랫폼, 그리고 혁신적인 프로젝트들을
            만들어왔습니다. 각 프로젝트는 최신 기술과 사용자 중심 디자인을
            바탕으로 제작되었습니다.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 max-w-6xl mx-auto">
        {categories.map((category) => (
          <div key={category.id} className="mb-32">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              {category.name}
            </h2>
            <ProjectCarousel projects={category.projects} />
          </div>
        ))}
      </section>
    </main>
  );
}
