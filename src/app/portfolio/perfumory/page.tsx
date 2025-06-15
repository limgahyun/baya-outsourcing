import Image from "next/image";

export default function PerfumoryPage() {
  // Color palette data
  const colorPalette = [
    {
      name: "Main",
      hex: "#191919",
      text: "text-white",
      bg: "bg-[#191919]",
      width: "w-full",
    },
    {
      name: "Sub",
      hex: "#F3F3F3",
      text: "text-black",
      bg: "bg-[#f3f3f3]",
      width: "w-1/4",
    },
    {
      name: "Sub",
      hex: "#FBC739",
      text: "text-black",
      bg: "bg-[#fbc739]",
      width: "w-1/4",
    },
    {
      name: "Sub",
      hex: "#D99662",
      text: "text-white",
      bg: "bg-[#d99662]",
      width: "w-1/4",
    },
    {
      name: "Sub",
      hex: "#6F0EA6",
      text: "text-white",
      bg: "bg-[#6f0ea6]",
      width: "w-1/4",
    },
  ];

  return (
    <div className="bg-white w-full flex flex-col items-center overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] md:h-[800px] flex items-center justify-center">
        <Image
          src="/portfolio/perfumory/background1.png"
          alt="Perfumory Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center justify-center w-full">
          <h1 className="font-gmarket font-bold text-white text-5xl md:text-7xl mt-12 mb-8">
            perfumory
          </h1>
          <div className="flex flex-row items-end justify-center gap-8 mt-4">
            <div className="relative w-[220px] h-[440px] hidden md:block">
              <Image
                src="/portfolio/perfumory/phone1.png"
                alt="Phone Mockup"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-[180px] h-[360px]">
              <Image
                src="/portfolio/perfumory/phone2.png"
                alt="Phone Mockup"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Intro Section */}
      <section className="w-full max-w-5xl mx-auto px-4 md:px-0 mt-24 flex flex-col md:flex-row gap-12">
        <div className="flex-1">
          <h2 className="font-gmarket font-bold text-2xl md:text-4xl mb-8">
            커스텀 향수 제작 및 기록
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-800">
            퍼퓨모리는 커스텀 향수를 제작할 수 있도록 도와주는 플랫폼
            서비스입니다. 사용자는 플랫폼 내에서 커스텀 향수 제작 업체를 찾아볼
            수 있고, 제작한 향수의 코드를 인식하여 해당 향수에 담긴 감정과
            이야기를 기록할 수 있습니다. 연인 간의 특별한 이벤트 또는 이색
            데이트코스로 우리만의 이야기를 향기로 담고, 순간을 기록하여 기억할
            수 있도록 도와줍니다. 퍼퓨모리는 기록 서비스에서 더 나아가
            궁극적으로 사용자들에게 니치 향수를 판매하는 이커머스로 확장하고자
            합니다.
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <div>
            <h3 className="font-gmarket font-bold text-lg md:text-2xl">
              클라이언트
            </h3>
            <p className="text-base md:text-lg mt-2">인센서스랩(주)</p>
          </div>
          <div>
            <h3 className="font-gmarket font-bold text-lg md:text-2xl">
              프로젝트 기간
            </h3>
            <p className="text-base md:text-lg mt-2">2024.01 - 2024.04.</p>
          </div>
          <div>
            <h3 className="font-gmarket font-bold text-lg md:text-2xl">
              서비스 범위
            </h3>
            <p className="text-base md:text-lg mt-2">디자인 및 턴키 개발</p>
          </div>
        </div>
      </section>

      {/* Design System Section */}
      <section className="w-full max-w-5xl mx-auto px-4 md:px-0 mt-32">
        <h2 className="font-gmarket font-bold text-2xl md:text-4xl mb-8">
          Design System
        </h2>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <h3 className="font-noto font-bold text-5xl md:text-7xl">
              노토산스
            </h3>
            <p className="mt-4 text-lg md:text-xl">
              가나다라마바사아자차카타파하 1234567890
            </p>
          </div>
          <div className="flex-1 text-right">
            <h3 className="font-noto font-bold text-5xl md:text-7xl">
              NOTO SANS
            </h3>
            <p className="mt-4 text-lg md:text-xl">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ
              <br />
              abcdefghijklmnopqrstuvwxyz
            </p>
          </div>
        </div>
        <div className="flex flex-row w-full mt-12 rounded-lg overflow-hidden shadow-lg">
          {colorPalette.map((color, idx) => (
            <div
              key={idx}
              className={`h-32 md:h-40 flex-1 flex flex-col items-center justify-center ${color.bg}`}
            >
              <span
                className={`font-gmarket font-bold text-lg md:text-xl ${color.text}`}
              >
                {color.name}
              </span>
              <span className={`mt-2 text-base md:text-lg ${color.text}`}>
                {color.hex}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Section 1 */}
      <section className="w-full max-w-5xl mx-auto px-4 md:px-0 mt-32 flex flex-col md:flex-row gap-16 items-center">
        <div className="flex-1">
          <h2 className="font-gmarket font-bold text-2xl md:text-4xl mb-8">
            향수와 연동된 특별한 순간을 저장하다
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-800 mb-8">
            직접 제작한 향수의 QR코드를 인식하여 조향식의 특별한 순간을 기록할
            수 있습니다. 사진을 업로드하고, 당시의 감정과 사건을 텍스트로
            기록하여 돌아볼 수 있습니다. 기록들은 영구적으로 아카이빙되며,
            연인/친구와 계정을 연동하여 각자가 언제든 기록들을 열람할 수
            있습니다.
          </p>
          <h3 className="font-gmarket font-bold text-lg md:text-2xl mt-8">
            QR 코드 인식
          </h3>
          <p className="text-base md:text-lg mt-2">
            직접 제작한 향수의 사진 또는 QR 코드를 인식하여 데이터를
            라벨링합니다. 해당 향수에 기록되는 텍스트와 사진들은 이 특정한 향수
            정보에 저장되고 관리됩니다.
          </p>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <div className="relative w-[220px] h-[440px]">
            <Image
              src="/portfolio/perfumory/phone3.png"
              alt="Feature 1 Phone"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Feature Section 2 - with background image */}
      <section className="w-full mt-32 relative flex flex-col items-center">
        <div className="absolute inset-0 h-full w-full">
          <Image
            src="/portfolio/perfumory/background2.png"
            alt="Feature 2 BG"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/80" />
        </div>
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-0 flex flex-col md:flex-row gap-16 items-center py-24">
          <div className="flex-1 flex flex-col gap-8">
            <h2 className="font-gmarket font-bold text-2xl md:text-4xl">
              나만의 조향 시트를 기록하다
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-800">
              실제 조향 시 사용되는 조향 시트에서부터 디자인을 착안하여,
              사용자가 직접 조향 시의 사건과 감정을 기록할 수 있는 모달이
              제공됩니다. 이를 통해 사용자는 친구/연인과 함께 기록들을 열람할 수
              있으며, 감정을 정량적 척도로 기록하여 시계열에 따른 변화 추이 또한
              한눈에 확인 가능합니다.
            </p>
            <h3 className="font-gmarket font-bold text-lg md:text-2xl">
              조향 시트 작성
            </h3>
            <p className="text-base md:text-lg mt-2">
              향수에 대한 기록을 남길 때, 화면 하단에서 입력 모달이 올라옵니다.
              실제 조향 시트 디자인에 착안하였으며, UX를 고려하여 새로운
              페이지로의 이동이 아닌 모달의 형식을 사용했습니다.
            </p>
          </div>
          <div className="flex-1 flex flex-row gap-8 items-end justify-center">
            <div className="relative w-[180px] h-[360px]">
              <Image
                src="/portfolio/perfumory/phone4.png"
                alt="Feature 2 Phone 1"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-[180px] h-[360px]">
              <Image
                src="/portfolio/perfumory/phone5.png"
                alt="Feature 2 Phone 2"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="relative w-full h-[400px] flex items-center justify-center mt-32">
        <Image
          src="/portfolio/perfumory/background3.png"
          alt="Footer BG"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="relative z-10 font-gmarket font-bold text-white text-5xl md:text-7xl text-center">
          perfumory
        </h1>
      </section>
    </div>
  );
}
