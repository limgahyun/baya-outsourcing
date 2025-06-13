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
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const getPreviousIndex = () =>
    currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
  const getNextIndex = () =>
    currentIndex === projects.length - 1 ? 0 : currentIndex + 1;

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = projects.length - 1;
      if (nextIndex >= projects.length) nextIndex = 0;
      return nextIndex;
    });
  };

  if (!projects.length) return null;

  const project = projects[currentIndex];
  const prevProject = projects[getPreviousIndex()];
  const nextProject = projects[getNextIndex()];

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Previous Project Preview (background) */}
      <motion.button
        className="absolute -left-28 top-1/2 -translate-y-1/2 z-0"
        whileHover={{ opacity: 0.9 }}
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 0.2 }}
        onClick={() => paginate(-1)}
        style={{ width: "180px", height: "220px", filter: "blur(1px)" }}
        tabIndex={-1}
        aria-label={`이전 프로젝트: ${prevProject.title}`}
      >
        <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center justify-center h-full w-full border border-gray-100 pointer-events-none">
          <div className="relative w-full h-32">
            <Image
              src={prevProject.images}
              alt={prevProject.title}
              fill
              className="object-contain"
            />
          </div>
          <div className="p-3 w-full text-center">
            <span className="block text-sm font-semibold text-gray-700 truncate">
              {prevProject.title}
            </span>
          </div>
        </div>
      </motion.button>

      {/* Next Project Preview (background) */}
      <motion.button
        className="absolute -right-28 top-1/2 -translate-y-1/2 z-0"
        whileHover={{ opacity: 0.9 }}
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 0.2 }}
        onClick={() => paginate(1)}
        style={{ width: "180px", height: "220px", filter: "blur(1px)" }}
        tabIndex={-1}
        aria-label={`다음 프로젝트: ${nextProject.title}`}
      >
        <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center justify-center h-full w-full border border-gray-100 pointer-events-none">
          <div className="relative w-full h-32">
            <Image
              src={nextProject.images}
              alt={nextProject.title}
              fill
              className="object-contain"
            />
          </div>
          <div className="p-3 w-full text-center">
            <span className="block text-sm font-semibold text-gray-700 truncate">
              {nextProject.title}
            </span>
          </div>
        </div>
      </motion.button>

      {/* Project card (foreground) */}
      <motion.div
        key={currentIndex}
        initial={{
          opacity: 0,
          x: direction === 1 ? 100 : -100,
          z: 10,
        }}
        animate={{
          opacity: 1,
          x: 0,
          z: 10,
        }}
        exit={{
          opacity: 0,
          x: direction === 1 ? -100 : 100,
          z: 10,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex flex-col md:flex-row gap-12 items-center max-w-6xl mx-auto p-12 bg-white rounded-2xl shadow-lg z-10"
      >
        {/* Left side - Project Image */}
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          <Image
            src={project.images}
            alt={project.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Right side - Project Info */}
        <motion.div
          key={currentIndex}
          initial={{
            opacity: 0,
            x: direction === 1 ? 100 : -100,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: direction === 1 ? -100 : 100,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex flex-col justify-center space-y-6 w-full h-full"
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
      </motion.div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
