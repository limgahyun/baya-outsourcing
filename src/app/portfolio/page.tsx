"use client";

import { categories, Category } from "@/app/portfolio/data";
import ProjectCarousel from "@/components/portfolio/ProjectCarousel";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          포트폴리오
        </h1>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          우리는 다양한 웹사이트, 커머스 플랫폼, 그리고 혁신적인 프로젝트들을
          만들어왔습니다. 각 프로젝트는 최신 기술과 사용자 중심 디자인을
          바탕으로 제작되었습니다.
        </p>

        {/* Categories */}
        <div className="space-y-32">
          {categories.map((category: Category) => (
            <div key={category.id} className="scroll-mt-16" id={category.id}>
              <h2 className="text-3xl font-bold text-gray-900 mb-12 max-w-6xl mx-auto">
                {category.name}
              </h2>
              <ProjectCarousel projects={category.projects} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
