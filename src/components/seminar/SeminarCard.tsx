import React from "react";
import Image from "next/image";

interface SeminarCardProps {
  organization: string;
  title: React.ReactNode;
  dateTime: string;
  dDay: string; // e.g., D-3, D-0, 종료
  thumbnail: string;
  isClosed?: boolean;
  url: string;
}

const SeminarCard: React.FC<SeminarCardProps> = ({
  organization,
  title,
  dateTime,
  dDay,
  thumbnail,
  isClosed = false,
  url,
}) => {
  const cardContent = (
    <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg flex flex-col items-center justify-center bg-gray-100 ">
      {/* Background Image */}
      <Image
        src={thumbnail}
        alt={typeof title === "string" ? title : "세미나 썸네일"}
        fill
        className={`object-cover w-full h-full transition-all duration-300 ${
          isClosed ? "opacity-60 grayscale" : ""
        }`}
        style={{ zIndex: 1 }}
        priority
      />
      {/* Gray overlay for 종료 */}
      {isClosed && (
        <div className="absolute inset-0 bg-gray-700/70 z-10 flex flex-col items-center justify-center">
          <span className="text-5xl font-bold text-white mb-8">종료</span>
        </div>
      )}

      {/* Card Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-8 z-20">
        {/* Top: Organization and Title */}
        <div>
          <div className="text-sm sm:text-xl md:text-base xl:text-lg font-semibold text-gray-200 mb-2 tracking-wide text-center">
            {organization}
          </div>
          <div className="text-sm sm:text-2xl md:text-base xl:text-xl font-bold text-white mb-2 text-center">
            {title}
          </div>
        </div>
        {/* Bottom: D-N, DateTime, and Notice */}
        <div className="flex flex-col items-center">
          {/* D-N Badge */}
          <div
            className={`px-6 xl:px-8 py-1 rounded-full text-sm sm:text-2xl md:text-base xl:text-lg font-bold mb-4 ${
              isClosed
                ? "bg-red-700 text-white opacity-80"
                : dDay === "D-0"
                ? "bg-[#FF6B6B] text-white"
                : "bg-[#FF6B6B] text-white"
            }`}
          >
            {dDay}
          </div>
          {/* DateTime */}
          <div className="text-sm sm:text-2xl md:text-base xl:text-lg text-white/80 font-semibold">
            {dateTime}
          </div>
          {/* Notice */}
          <div className="text-sm sm:text-3xl md:text-lg xl:text-2xl font-bold text-red-600">
            선착순 마감!{" "}
            <span className="text-white/80 font-semibold text-sm sm:text-2xl md:text-lg xl:text-xl">
              무료 라이브
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  if (!isClosed) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:brightness-105"
        tabIndex={isClosed ? -1 : 0}
        aria-disabled={isClosed}
      >
        {cardContent}
      </a>
    );
  } else {
    return (
      <div className="block" tabIndex={-1} aria-disabled>
        {cardContent}
      </div>
    );
  }
};

export default SeminarCard;
