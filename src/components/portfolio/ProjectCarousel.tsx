"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/app/portfolio/data";

interface ProjectCarouselProps {
  projects: Project[];
  color: string;
}

export default function ProjectCarousel({
  projects,
  color,
}: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [modalOpen, setModalOpen] = useState(false);

  // Touch swipe state
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

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

  // Swipe handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (window.innerWidth < 768) {
      touchStartX.current = e.touches[0].clientX;
    }
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (window.innerWidth < 768) {
      touchEndX.current = e.touches[0].clientX;
    }
  };
  const handleTouchEnd = () => {
    if (
      window.innerWidth < 768 &&
      touchStartX.current !== null &&
      touchEndX.current !== null
    ) {
      const distance = touchStartX.current - touchEndX.current;
      if (distance > 50) {
        paginate(1); // swipe left, next
      } else if (distance < -50) {
        paginate(-1); // swipe right, previous
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (!projects.length) return null;

  const project = projects[currentIndex];
  const prevProject = projects[getPreviousIndex()];
  const nextProject = projects[getNextIndex()];

  const hasDetail = project.modalContent.src !== undefined || null;

  return (
    <div className="relative">
      {/* Previous Project Preview (background) */}
      <motion.button
        className="absolute -left-32 top-1/2 -translate-y-1/2 z-0 w-[220px] h-[360px] md:w-[200px] md:h-[300px]"
        whileHover={{ opacity: 0.9 }}
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 0.2 }}
        onClick={() => paginate(-1)}
        style={{}}
        tabIndex={-1}
        aria-label={`이전 프로젝트: ${prevProject.title}`}
      >
        <div className="bg-gray-50/80 rounded-xl shadow-md overflow-hidden flex flex-col items-center justify-center h-full w-full border border-gray-50 pointer-events-none">
          <div className="relative w-full h-72 md:h-40">
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
        className="absolute -right-32 top-1/2 -translate-y-1/2 z-0 w-[220px] h-[360px] md:w-[200px] md:h-[300px]"
        whileHover={{ opacity: 0.9 }}
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 0.2 }}
        onClick={() => paginate(1)}
        style={{}}
        tabIndex={-1}
        aria-label={`다음 프로젝트: ${nextProject.title}`}
      >
        <div className="bg-gray-50/80 rounded-xl shadow-md overflow-hidden flex flex-col items-center justify-center h-full w-full border border-gray-50 pointer-events-none">
          <div className="relative w-full h-72 md:h-40">
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
        className="flex flex-col md:flex-row gap-12 items-center p-6 sm:p-12 bg-gray-50 rounded-2xl shadow-xl border-gray-200 z-10"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
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
          className="flex flex-col justify-center space-y-0 sm:space-y-6 w-full h-full"
        >
          <div>
            <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-4">
              {project.title}
            </h2>
            <p className="hidden sm:block text-gray-600 mb-6 text-lg leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-8 lg:mb-12">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-gray-100 rounded-full text-xs sm:text-sm text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="w-full flex justify-center sm:justify-start">
            {hasDetail && (
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="inline-block text-gray-700 hover:text-gray-900 hover:border-gray-600 border-b-2 border-gray-200 px-0.5 py-1 font-medium transition-colors text-center"
              >
                프로젝트 보기
              </button>
            )}
          </div>
        </motion.div>
      </motion.div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-8 lg:mt-12">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === currentIndex
                ? `bg-${color}-500`
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Modal for project detail */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-4 text-gray-500 text-2xl font-medium"
              onClick={() => setModalOpen(false)}
              aria-label="Close"
            >
              ×
            </button>
            <div className="w-full">
              {project.modalContent.src && (
                <Image
                  src={project.modalContent.src}
                  alt={project.modalContent.alt || ""}
                  width={1000}
                  height={1000}
                  className="w-full h-auto rounded-lg"
                  style={{ maxWidth: "100%" }}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
