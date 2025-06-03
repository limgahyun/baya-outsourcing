"use client";

import React from "react";

type Props = {
  quoteId: string;
};

export default function DownloadSection({ quoteId }: Props) {
  const handleDownloadPDF = async () => {
    try {
      const response = await fetch(`/api/quote/${quoteId}/pdf`);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `견적서_${quoteId}.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Failed to download PDF:", error);
      alert("PDF 다운로드에 실패했습니다. 잠시 후 다시 시도해주세요.");
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <button
        onClick={handleDownloadPDF}
        className="flex items-center justify-center gap-2 px-6 py-3 bg-[#444] text-white rounded-xl hover:bg-[#333] transition-colors duration-200"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        PDF 다운로드
      </button>
    </div>
  );
}
