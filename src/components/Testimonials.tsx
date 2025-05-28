"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { testimonials, PatternType } from "@/data/testimonials";
import "swiper/css";
import "swiper/css/pagination";

interface PatternElementProps {
  pattern: PatternType;
  className?: string;
}

const PatternElement = ({ pattern, className = "" }: PatternElementProps) => {
  switch (pattern) {
    case "circle":
      return (
        <div
          className={`absolute right-4 top-4 w-20 h-20 rounded-full opacity-10 ${className}`}
        />
      );
    case "dots":
      return (
        <div className={`absolute right-4 top-4 opacity-10 ${className}`}>
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full inline-block m-1"
              style={{
                backgroundColor: "currentColor",
                transform: i % 3 === 0 ? "translateY(2px)" : "none",
              }}
            />
          ))}
        </div>
      );
    case "wave":
      return (
        <svg
          className={`absolute right-4 top-4 w-20 h-20 opacity-10 ${className}`}
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
        >
          <path d="M10 50 Q 25 30 40 50 T 70 50 T 100 50" strokeWidth="4" />
        </svg>
      );
    case "zigzag":
      return (
        <svg
          className={`absolute right-4 top-4 w-20 h-20 opacity-10 ${className}`}
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
        >
          <path d="M10 30 L 30 70 L 50 30 L 70 70 L 90 30" strokeWidth="4" />
        </svg>
      );
    default:
      return null;
  }
};

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-gmarket mb-4 text-blue-1000">
              고객 후기
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-pretendard">
              뚝딱랩과 함께한 고객들의 이야기
            </p>
          </div>

          {/* Testimonial Carousel */}
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
            className="testimonial-swiper !pb-14"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div
                  className={`${testimonial.bgColor} p-6 md:p-8 rounded-2xl shadow-lg h-full min-h-[320px] flex flex-col relative overflow-hidden transition-transform duration-300 hover:scale-[1.02] group`}
                >
                  {/* Background Pattern */}
                  <PatternElement
                    pattern={testimonial.pattern}
                    className={testimonial.accentColor}
                  />

                  {/* Quote Icon */}
                  <div className="mb-6 relative z-10">
                    <svg
                      className={`w-8 h-8 ${testimonial.accentColor}`}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Testimonial Content */}
                  <p className="text-gray-600 mb-6 flex-grow font-pretendard text-lg leading-relaxed relative z-10">
                    {testimonial.content}
                  </p>

                  {/* Author Info */}
                  <div className="mt-auto relative z-10">
                    <p
                      className={`font-gmarket ${testimonial.accentColor} text-lg`}
                    >
                      {testimonial.author}
                    </p>
                    <p className="text-gray-500 font-pretendard">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
