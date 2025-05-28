"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Split images into three columns
  const columnImages = {
    left: ["/portfolio/portfolio1_2.png", "/portfolio/portfolio4_2.png"],
    middle: ["/portfolio/portfolio2_2.png", "/portfolio/portfolio5_2.png"],
    right: ["/portfolio/portfolio3_2.png", "/portfolio/portfolio6_2.png"],
  };

  if (!mounted) return null;

  return (
    <section className="py-20 md:pt-20 bg-blue-1000 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title and CTA */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-gmarket mb-8 text-white">
              믿고 맡겨주신 결과들
            </h2>
            <Link
              href="/portfolio"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-pretendard px-8 py-4 rounded-full transition-colors duration-300"
            >
              포트폴리오 보러가기
            </Link>
          </div>

          {/* Portfolio Grid with Animations */}
          <div className="grid grid-cols-3 gap-4">
            {/* Left Column - Moving Down */}
            <div className="relative overflow-hidden h-[40vh] md:h-screen">
              <div className="absolute w-full animate-scroll-down">
                {[...columnImages.left, ...columnImages.left].map(
                  (image, index) => (
                    <div key={index} className="mb-4">
                      <Image
                        src={image}
                        alt={`포트폴리오 이미지 ${index + 1}`}
                        width={400}
                        height={0}
                        className="w-full h-auto rounded-lg"
                        sizes="(max-width: 768px) 33vw, 400px"
                        unoptimized
                      />
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Middle Column - Moving Up Slower */}
            <div className="relative overflow-hidden h-[40vh] md:h-screen">
              <div className="absolute w-full animate-scroll-up-slow">
                {[...columnImages.middle, ...columnImages.middle].map(
                  (image, index) => (
                    <div key={index} className="mb-4">
                      <Image
                        src={image}
                        alt={`포트폴리오 이미지 ${index + 1}`}
                        width={400}
                        height={0}
                        className="w-full h-auto rounded-lg"
                        sizes="(max-width: 768px) 33vw, 400px"
                        unoptimized
                      />
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Right Column - Moving Down Fast */}
            <div className="relative overflow-hidden h-[40vh] md:h-screen">
              <div className="absolute w-full animate-scroll-down-fast">
                {[...columnImages.right, ...columnImages.right].map(
                  (image, index) => (
                    <div key={index} className="mb-4">
                      <Image
                        src={image}
                        alt={`포트폴리오 이미지 ${index + 1}`}
                        width={400}
                        height={0}
                        className="w-full h-auto rounded-lg"
                        sizes="(max-width: 768px) 33vw, 400px"
                        unoptimized
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
