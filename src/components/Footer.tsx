"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col space-y-6 md:space-y-8">
          {/* Logo and Company Name */}
          <div className="flex items-center justify-center md:justify-between mb-8 md:mb-12">
            <div className="flex items-center gap-2">
              <Image
                src="/logo/logo.svg"
                alt="뚝딱랩 로고"
                width={32}
                height={32}
                className="w-6 h-6 md:w-8 md:h-8"
              />
              <span className="font-pretendard font-bold text-lg md:text-xl text-blue-1000">
                뚝딱랩
              </span>
            </div>
          </div>

          {/* Divider Line */}
          <hr className="border-gray-200 w-full" />

          {/* Company Information */}
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <button
              onClick={() => {
                // Handle cookie settings
              }}
              className="hidden text-gray-600 hover:text-blue-1000 transition-colors text-xs md:text-sm order-2 md:order-1"
            >
              Cookies Settings
            </button>
            <p className="text-xs md:text-sm text-gray-600 text-center md:text-right order-1 md:order-2 w-full">
              (주)리아랩스 | 대표 : 서다원 | 사업자등록번호: 452-88-03211
              <br className="hidden sm:block" />{" "}
              <span className="block sm:inline mt-1 sm:mt-0">
                사업장 주소: 서울시 서대문구 연세로2나길 61, 405호
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
