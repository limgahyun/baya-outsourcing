"use client";

import React from "react";
import { useForm, useWatch } from "react-hook-form";

type QuoteFormData = {
  name: string;
  phone: string;
  serviceDetails: string;
};

export default function QuotePage() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<QuoteFormData>();

  const name = useWatch({
    control,
    name: "name",
  });

  const phone = useWatch({
    control,
    name: "phone",
  });

  const isFirstSectionComplete =
    name?.trim() !== "" &&
    phone?.trim() !== "" &&
    /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/.test(phone);

  const onSubmit = (data: QuoteFormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-gmarket font-bold mb-4">견적 조회</h1>
        <p className="text-xl text-gray-600">
          10초만에 내 프로젝트 견적 확인하기
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Contact Person Information Section */}
        <section className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-50 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.12)]">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-6 h-6 rounded-full bg-[#444] text-white flex items-center justify-center text-sm font-medium">
              1
            </div>
            <h2 className="text-lg font-bold text-gray-900">
              담당자 정보 입력
            </h2>
          </div>
          <div className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                이름<span className="text-red-500 ml-0.5">*</span>
              </label>
              <input
                {...register("name", { required: "이름을 입력해주세요" })}
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg transition-all duration-300
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  hover:border-gray-300"
                placeholder="이름을 입력하세요"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                연락처<span className="text-red-500 ml-0.5">*</span>
              </label>
              <input
                {...register("phone", {
                  required: "연락처를 입력해주세요",
                  pattern: {
                    value: /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/,
                    message:
                      "올바른 전화번호 형식이 아닙니다 (예: 010-1234-5678)",
                  },
                })}
                type="tel"
                id="phone"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg transition-all duration-300
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  hover:border-gray-300"
                placeholder="연락처를 입력하세요"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Service Information Section */}
        <section
          className={`bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 
            transition-all duration-500 ease-in-out hover:shadow-[0_4px_24px_rgba(0,0,0,0.12)]
            ${
              !isFirstSectionComplete
                ? "opacity-50 pointer-events-none"
                : "opacity-100"
            }`}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-6 h-6 rounded-full bg-[#444] text-white flex items-center justify-center text-sm font-medium">
              2
            </div>
            <h2 className="text-lg font-bold text-gray-900">
              서비스 정보 입력
            </h2>
          </div>
          <div>
            <label
              htmlFor="serviceDetails"
              className="block text-sm font-medium text-gray-900 mb-2"
            >
              프로젝트 내용<span className="text-red-500 ml-0.5">*</span>
            </label>
            <textarea
              {...register("serviceDetails", {
                required: isFirstSectionComplete
                  ? "프로젝트 내용을 입력해주세요"
                  : false,
              })}
              id="serviceDetails"
              rows={6}
              disabled={!isFirstSectionComplete}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                hover:border-gray-300 disabled:hover:border-gray-200"
              placeholder={
                isFirstSectionComplete
                  ? "프로젝트에 대해 자세히 설명해주세요"
                  : "담당자 정보를 먼저 입력해주세요"
              }
            />
            {errors.serviceDetails && (
              <p className="text-red-500 text-sm mt-1">
                {errors.serviceDetails.message}
              </p>
            )}
          </div>
        </section>

        <div className="text-center pt-4">
          <button
            type="submit"
            disabled={!isFirstSectionComplete}
            className={`w-full px-8 py-4 rounded-xl font-medium text-base transition-all duration-300
              shadow-[0_4px_12px_rgba(0,0,0,0.1)]
              ${
                isFirstSectionComplete
                  ? "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-[0_4px_16px_rgba(37,99,235,0.2)]"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
          >
            견적 확인하기
          </button>
        </div>
      </form>
    </div>
  );
}
