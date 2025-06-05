"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { QuoteResponse } from "@/services/api";

interface ProjectInquiryButtonProps {
  quoteData: QuoteResponse;
}

export default function ProjectInquiryButton({
  quoteData,
}: ProjectInquiryButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    // Store the data in sessionStorage to persist through navigation
    sessionStorage.setItem(
      "quoteInquiryData",
      JSON.stringify({
        name: quoteData.user.name,
        phoneNum: quoteData.user.phoneNum,
        serviceType: quoteData.quoteInfo.serviceType, // This is already the service type ID
      })
    );

    // Navigate to inquiry page
    router.push("/inquiry");
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
