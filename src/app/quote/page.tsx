"use client";

import React, { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { SERVICE_TYPES } from "@/constants/serviceTypes";
import { FUNCTION_CARDS } from "@/constants/functionCards";
import { formatPhoneNumber } from "@/utils/formatPhoneNumber";
import { getYesterdayDate } from "@/utils/formatDate";
import { quoteApi } from "@/services/api";
import { useRouter } from "next/navigation";

type QuoteFormData = {
  name: string;
  phone: string;
  serviceType: string;
  adminRequired: boolean;
  functionList: number[];
};

export default function QuotePage() {
  const router = useRouter();
  const [userId, setUserId] = useState<number | null>(null);
  const [isSection2Active, setIsSection2Active] = useState(false);
  const [functionList, setFunctionList] = useState<number[]>([]);
  const [isServiceTypeOpen, setIsServiceTypeOpen] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
    setValue,
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

  const handleArrowClick = async () => {
    if (isFirstSectionComplete) {
      try {
        const userData = {
          name: name,
          phoneNum: phone,
        };

        const response = await quoteApi.createUser(userData);
        console.log("User created:", response);
        setUserId(response.id);
      } catch (error) {
        console.error("Failed to create user:", error);
      }

      setIsSection2Active(true);
      // Smooth scroll to section 2 with offset for better visibility
      const section2 = document.getElementById("section2");
      if (section2) {
        const headerOffset = 84; // Add some padding from the top
        const elementPosition = section2.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  const handleFunctionCardClick = (functionId: number) => {
    setFunctionList((prev) =>
      prev.includes(functionId)
        ? prev.filter((f) => f !== functionId)
        : [...prev, functionId]
    );
  };

  const selectedServiceType = watch("serviceType");

  const handleServiceTypeSelect = (type: (typeof SERVICE_TYPES)[0]) => {
    setValue("serviceType", type.id);
    setIsServiceTypeOpen(false);
  };

  // Handle phone input change
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatPhoneNumber(e.target.value);
    setValue("phone", formattedValue, { shouldValidate: true });
  };

  const onSubmit = async (data: QuoteFormData) => {
    console.log(data);
    try {
      const quoteData = {
        user_id: userId || 0,
        serviceType: data.serviceType,
        adminRequired: data.adminRequired,
        functionList: functionList,
      };

      const response = await quoteApi.createQuoteInfo(quoteData);
      console.log("Quote created:", response);

      // Redirect to result page
      router.push(`/result/${response.quoteResultId}`);
    } catch (error) {
      console.error("Failed to create quote:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-gmarket font-bold mb-4">뚝딱 견적소</h1>
        <p className="text-xl text-gray-600">
          10초만에 내 프로젝트 견적 확인하기
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Contact Person Information Section */}
        <section className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-50 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.12)] relative">
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
                    value: /^[\d-]{11,13}$/,
                    message:
                      "올바른 전화번호 형식이 아닙니다 (예: 010-1234-5678)",
                  },
                  onChange: (e) => handlePhoneChange(e),
                })}
                type="tel"
                id="phone"
                maxLength={13}
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

          {/* Arrow Button */}
          <div
            onClick={handleArrowClick}
            className={`absolute left-1/2 -bottom-6 -translate-x-1/2 w-12 h-12 rounded-full 
              flex items-center justify-center cursor-pointer transition-all duration-300
              ${
                isFirstSectionComplete
                  ? "bg-blue-600 hover:bg-blue-700 shadow-[0_4px_12px_rgba(37,99,235,0.2)]"
                  : "bg-gray-100 cursor-not-allowed"
              }
              ${
                isSection2Active
                  ? "opacity-0 pointer-events-none"
                  : "opacity-100"
              }`}
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${
                isFirstSectionComplete ? "text-white" : "text-gray-400"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </section>

        {/* Service Information Section */}
        <section
          id="section2"
          className={`bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border  
            transition-all duration-500 ease-in-out hover:shadow-[0_4px_24px_rgba(0,0,0,0.12)]
            ${
              !isSection2Active
                ? "opacity-50 pointer-events-none border-gray-100"
                : "opacity-100 border-gray-50"
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

          <div className="space-y-8">
            {/* Service Type Dropdown */}
            <div className="space-y-2">
              <label
                htmlFor="serviceType"
                className="block text-sm font-medium text-gray-900"
              >
                서비스 유형<span className="text-red-500 ml-0.5">*</span>
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsServiceTypeOpen(!isServiceTypeOpen)}
                  className={`w-full px-4 py-3 bg-white border rounded-lg text-left transition-all duration-300
                    ${
                      isServiceTypeOpen
                        ? "border-blue-500 ring-2 ring-blue-500/20"
                        : "border-gray-200 hover:border-gray-300"
                    }
                    ${errors.serviceType ? "border-red-500" : ""}
                  `}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {selectedServiceType ? (
                        <>
                          <div className="flex-shrink-0 w-5 h-5">
                            <svg
                              className="w-5 h-5 text-gray-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d={
                                  SERVICE_TYPES.find(
                                    (type) => type.name === selectedServiceType
                                  )?.icon || SERVICE_TYPES[6].icon
                                }
                              />
                            </svg>
                          </div>
                          <span className="text-gray-900">
                            {selectedServiceType}
                          </span>
                        </>
                      ) : (
                        <span className="text-gray-500">
                          서비스 유형을 선택하세요
                        </span>
                      )}
                    </div>
                    <svg
                      className={`w-5 h-5 text-gray-400 transition-transform duration-200
                        ${isServiceTypeOpen ? "transform rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                {/* Dropdown Menu */}
                {isServiceTypeOpen && (
                  <div className="absolute z-10 w-full mt-2 bg-white border border-gray-100 rounded-lg shadow-lg overflow-hidden">
                    <div className="max-h-60 overflow-y-auto overscroll-contain">
                      {SERVICE_TYPES.map((type) => (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => handleServiceTypeSelect(type)}
                          className={`w-full px-4 py-3 flex items-start gap-3 hover:bg-gray-50 transition-colors duration-150
                            ${
                              selectedServiceType === type.name
                                ? "bg-blue-50"
                                : ""
                            }
                          `}
                        >
                          <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                            <svg
                              className={`w-5 h-5 ${
                                selectedServiceType === type.name
                                  ? "text-blue-600"
                                  : "text-gray-600"
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d={type.icon}
                              />
                            </svg>
                          </div>
                          <div>
                            <div
                              className={`text-sm font-medium text-left ${
                                selectedServiceType === type.name
                                  ? "text-blue-600"
                                  : "text-gray-900"
                              }`}
                            >
                              {type.name}
                            </div>
                            <p className="text-xs text-gray-500 mt-0.5 text-left">
                              {type.description}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Hidden input for form handling */}
                <input
                  type="hidden"
                  {...register("serviceType", {
                    required: "서비스 유형을 선택해주세요",
                  })}
                />
              </div>
              {errors.serviceType && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.serviceType.message}
                </p>
              )}

              {/* Service Type Description */}
              <div className="">
                {selectedServiceType && !isServiceTypeOpen && (
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg animate-fadeIn">
                    <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                      <svg
                        className="w-5 h-5 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d={
                            SERVICE_TYPES.find(
                              (type) => type.name === selectedServiceType
                            )?.icon || SERVICE_TYPES[6].icon
                          }
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600">
                      {SERVICE_TYPES.find(
                        (type) => type.name === selectedServiceType
                      )?.description ||
                        "선택하신 서비스에 대해 맞춤형 견적을 제공해드립니다."}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Admin Account Radio Buttons */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-3">
                관리자 계정 필요 여부
                <span className="text-red-500 ml-0.5">*</span>
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    {...register("adminRequired", {
                      required: "관리자 계정 필요 여부를 선택해주세요",
                    })}
                    value="true"
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700">필요함</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    {...register("adminRequired", {
                      required: "관리자 계정 필요 여부를 선택해주세요",
                      setValueAs: (value) => value === "true",
                    })}
                    value="false"
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700">필요없음</span>
                </label>
              </div>
              {errors.adminRequired && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.adminRequired.message}
                </p>
              )}
            </div>

            {/* Function Cards */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-3">
                필요한 기능<span className="text-red-500 ml-0.5">*</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {FUNCTION_CARDS.map((func) => (
                  <div
                    key={func.id}
                    onClick={() => handleFunctionCardClick(func.id)}
                    className={`p-4 border rounded-xl cursor-pointer transition-all duration-300
                      flex flex-col items-center gap-2 hover:border-blue-200 hover:bg-blue-50/50
                      ${
                        functionList.includes(func.id)
                          ? "bg-blue-50 border-blue-500 text-blue-700"
                          : "border-gray-100 hover:border-blue-300"
                      }`}
                  >
                    <svg
                      className={`w-6 h-6 ${
                        functionList.includes(func.id)
                          ? "text-blue-600"
                          : "text-gray-600"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d={func.icon}
                      />
                    </svg>
                    <span className="text-sm text-center">{func.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="text-center pt-4">
          <button
            type="submit"
            disabled={!isSection2Active}
            className={`w-full px-8 py-4 rounded-xl font-medium text-base transition-all duration-300
              shadow-[0_4px_12px_rgba(0,0,0,0.1)]
              ${
                isSection2Active
                  ? "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-[0_4px_16px_rgba(37,99,235,0.2)]"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
          >
            견적 확인하기
          </button>
        </div>
      </form>

      <div className="text-center mt-8">
        <p className="text-sm text-gray-300">
          🚨 {getYesterdayDate()} 에 업데이트된 견적 기준을 적용합니다
        </p>
      </div>
    </div>
  );
}
