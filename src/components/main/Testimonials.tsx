"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { testimonials } from "@/data/testimonials";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  QuoteIcon,
  ClipPatternIcon,
} from "@/components/icons";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ClipPattern = ({ className = "" }: { className?: string }) => (
  <div className="absolute -right-8 bottom-0 w-48 h-48 transform rotate-12 opacity-10">
    <ClipPatternIcon className={className} />
  </div>
);

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title with Navigation */}
          <div className="relative flex items-center justify-between mb-12 h-auto">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-gmarket mb-4 text-blue-1000">
                고객 후기
              </h2>
              <p className="text-lg md:text-xl text-gray-600 font-pretendard">
                바야와 함께한 고객들의 이야기
              </p>
            </div>
            <div className="absolute bottom-0 right-0 gap-8 hidden sm:flex">
              <button className="custom-swiper-button-prev w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-50 transition-colors">
                <ChevronLeftIcon className="w-6 h-6 text-blue-1000" />
              </button>
              <button className="custom-swiper-button-next w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-50 transition-colors">
                <ChevronRightIcon className="w-6 h-6 text-blue-1000" />
              </button>
            </div>
          </div>

          {/* Testimonial Carousel */}
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={16}
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
            navigation={{
              prevEl: ".custom-swiper-button-prev",
              nextEl: ".custom-swiper-button-next",
            }}
            loop={true}
            className="testimonial-swiper !pb-14 !mx-[-4px]"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="h-auto p-2">
                <div
                  className={`${testimonial.bgColor} p-6 md:p-8 rounded-2xl shadow-lg h-full min-h-[320px] flex flex-col relative overflow-hidden transition-transform duration-300 hover:scale-[1.02] group`}
                >
                  {/* Background Clip Pattern */}
                  <ClipPattern className={testimonial.accentColor} />

                  {/* Quote Icon */}
                  <div className="mb-6 relative z-10">
                    <QuoteIcon
                      className={`${testimonial.accentColor} w-8 h-8`}
                    />
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
