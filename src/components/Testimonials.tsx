"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { testimonials } from "@/data/testimonials";
import "swiper/css";
import "swiper/css/pagination";

const ClipPattern = ({ className = "" }: { className?: string }) => (
  <div className="absolute -right-8 bottom-0 w-48 h-48 transform rotate-12 opacity-10">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0,0,256,256"
      className={className}
    >
      <g fill="currentColor" fillRule="nonzero">
        <g transform="scale(5.12,5.12)">
          <path d="M38.1875,6.71875c-1.92578,0.09375 -3.84375,0.92969 -5.34375,2.375c-0.03125,0.03125 -0.0625,0.0625 -0.09375,0.09375c-0.00391,0.00391 -0.02734,-0.00391 -0.03125,0c-0.04297,0.05078 -0.08594,0.10156 -0.125,0.15625c-0.04297,0.05078 -0.08594,0.10156 -0.125,0.15625l-18.8125,18.90625c-0.04297,0.05078 -0.08594,0.10156 -0.125,0.15625c-1.76953,1.91797 -1.73437,4.95313 0.125,6.8125c1.90625,1.91016 5.09375,1.91016 7,0c0.09375,-0.09375 0.17578,-0.19922 0.25,-0.3125c0.08984,-0.06641 0.17188,-0.14062 0.25,-0.21875l14.09375,-13.90625c0.62891,-0.59375 0.80469,-1.52734 0.43359,-2.30859c-0.37109,-0.78125 -1.19922,-1.23828 -2.05859,-1.12891c-0.45312,0.05859 -0.87109,0.26563 -1.1875,0.59375l-14.09375,13.90625c-0.05859,0.07031 -0.10937,0.14063 -0.15625,0.21875c-0.01953,0.01172 -0.04297,0.01953 -0.0625,0.03125c-0.01172,0.01953 -0.01953,0.04297 -0.03125,0.0625c-0.10156,0.0625 -0.19531,0.13672 -0.28125,0.21875c-0.37891,0.37891 -0.93359,0.38281 -1.3125,0c-0.37891,-0.37891 -0.38281,-0.92969 0,-1.3125l19.09375,-19.1875c0.04297,-0.05078 0.08594,-0.10156 0.125,-0.15625c1.64453,-1.51562 3.83984,-1.50391 5.0625,-0.28125c0.08594,0.08203 0.17969,0.15625 0.28125,0.21875c0.01172,0.01172 0.01953,0.01953 0.03125,0.03125c0.05859,0.07813 0.12109,0.15234 0.1875,0.21875c1.14453,1.14453 0.95313,3.55859 -0.65625,5.25c-0.03125,0.03125 -0.0625,0.0625 -0.09375,0.09375l-20.6875,21.21875c-0.06641,0.04688 -0.12891,0.10156 -0.1875,0.15625c-2.68359,2.68359 -7.30469,3.00781 -9.875,0.4375c-2.51953,-2.51953 -2.25781,-7.07812 0.3125,-9.78125c0.04297,-0.03906 0.08594,-0.08203 0.125,-0.125l17.03125,-16.84375c0.62891,-0.59375 0.80469,-1.52734 0.43359,-2.30859c-0.37109,-0.78125 -1.19922,-1.23828 -2.05859,-1.12891c-0.45312,0.05859 -0.87109,0.26563 -1.1875,0.59375l-16.9375,16.75c-0.03125,0.03125 -0.0625,0.0625 -0.09375,0.09375c-0.04297,0.05078 -0.08594,0.10156 -0.125,0.15625c-4.04687,4.19531 -4.59766,11.15625 -0.34375,15.40625c4.22266,4.22266 11.14453,3.77344 15.34375,-0.21875c0.04297,-0.03125 0.08594,-0.0625 0.125,-0.09375c0.01172,-0.01172 0.01953,-0.01953 0.03125,-0.03125c0.01953,-0.01953 0.04297,-0.04297 0.0625,-0.0625c0,-0.01172 0,-0.01953 0,-0.03125l0.125,-0.125c0.04297,-0.05078 0.08594,-0.10156 0.125,-0.15625l20.65625,-21.09375c0.14844,-0.13672 0.27344,-0.29297 0.375,-0.46875c2.63672,-3.01562 3.21094,-7.60156 0.3125,-10.5c-0.05078,-0.04297 -0.10156,-0.08594 -0.15625,-0.125c-0.08984,-0.13672 -0.19531,-0.26172 -0.3125,-0.375c-1.47656,-1.47656 -3.46484,-2.12891 -5.4375,-2.03125z" />
        </g>
      </g>
    </svg>
  </div>
);

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
                  {/* Background Clip Pattern */}
                  <ClipPattern className={testimonial.accentColor} />

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
