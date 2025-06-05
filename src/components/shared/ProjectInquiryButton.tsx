"use client";

import React from "react";

export default function ProjectInquiryButton() {
  const handleClick = () => {
    window.open("https://tally.so/r/mVyWdy", "_blank");
  };

  return (
    <button
      className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors duration-200 w-full"
      onClick={handleClick}
    >
      이 견적으로 프로젝트 문의하기
    </button>
  );
}
