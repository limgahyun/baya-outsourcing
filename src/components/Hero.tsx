"use client";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-blue-1000/40 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/mp4/hero_background.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="w-full md:w-1/2 md:ml-auto">
          <div className="max-w-xl mx-auto px-4 text-center md:text-left text-white break-keep">
            <h1 className="font-gmarket font-medium mb-6">
              <div className="text-2xl md:text-3xl lg:text-4xl mb-2 break-keep">
                사업을 이해하는 개발 파트너,
              </div>
              <div className="text-4xl md:text-5xl lg:text-6xl break-keep">
                <span className="text-blue-300">뚝딱랩</span> 입니다
              </div>
            </h1>
            <p className="font-pretendard text-lg md:text-xl lg:text-2xl mb-12 whitespace-pre-line text-gray-100 break-keep">
              {
                "개발자가 아닌 사업의 본질을 꿰뚫는 파트너\n2분만 둘러보세요\n왜 뚝딱랩이 해답인지 아실겁니다."
              }
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white hover:bg-gray-200 text-blue-1000 px-8 py-3 rounded-lg font-pretendard font-medium transition-all duration-300 hover:shadow-lg text-lg break-keep"
            >
              프로젝트 문의하기
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
