"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col space-y-8">
          {/* Logo and Company Name */}
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-2">
              <Image
                src="/logo/logo.svg"
                alt="뚝딱랩 로고"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="font-pretendard font-bold text-xl text-blue-1000">
                뚝딱랩
              </span>
            </div>
          </div>

          {/* Divider Line */}
          <hr className="border-gray-200 w-full" />

          {/* Company Information */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => {
                // Handle cookie settings
              }}
              className="text-gray-600 hover:text-blue-1000 transition-colors text-sm"
            >
              Cookies Settings
            </button>
            <p className="text-sm text-gray-600">
              (주)리아랩스 | 대표 : 서다원 | 사업자등록번호: 452-88-03211 |{" "}
              사업장 주소: 서울시 서대문구 연세로2나길 61, 405호
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
