"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/app/portfolio/data";

interface ProjectCarouselProps {
  projects: Project[];
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const paginate = (newDirection: number) => {
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = projects.length - 1;
      if (nextIndex >= projects.length) nextIndex = 0;
      return nextIndex;
    });
  };

  if (!projects.length) return null;

  const project = projects[currentIndex];

  return (
    <div className="relative max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left side - Project Image */}
        <div className="flex justify-center">
          <div className="relative w-full aspect-[4/3] bg-gray-50 rounded-xl overflow-hidden">
            <Image
              src={project.images}
              alt={project.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Right side - Project Info */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center space-y-6"
        >
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {project.title}
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 bg-gray-100 rounded-full text-sm text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              프로젝트 보기
            </a>
          </div>
        </motion.div>
      </div>

      {/* Navigation Phone Images */}
      <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-24 h-80 flex items-center justify-center">
        <motion.button
          className="w-full h-full cursor-pointer"
          whileHover={{ scale: 1.05 }}
          style={{ transformOrigin: "center center" }}
          onClick={() => paginate(-1)}
        >
          <div className="relative w-full h-full opacity-60">
            <Image
              src="/portfolio/black_view_left.png"
              alt="Previous"
              fill
              className="object-contain"
            />
          </div>
        </motion.button>
      </div>

      <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-24 h-80 flex items-center justify-center">
        <motion.button
          className="w-full h-full cursor-pointer"
          whileHover={{ scale: 1.05 }}
          style={{ transformOrigin: "center center" }}
          onClick={() => paginate(1)}
        >
          <div className="relative w-full h-full opacity-60">
            <Image
              src="/portfolio/black_view_right.png"
              alt="Next"
              fill
              className="object-contain"
            />
          </div>
        </motion.button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
