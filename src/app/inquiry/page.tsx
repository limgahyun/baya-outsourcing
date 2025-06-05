"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { SERVICE_TYPES, ServiceType } from "@/constants/serviceTypes";

type FormData = {
  name: string;
  phoneNum: string;
  email: string;
  serviceName: string;
  serviceType: string;
  budget: string;
  timeline: string;
  description: string;
};

export default function InquiryPage() {
  const [isServiceTypeOpen, setIsServiceTypeOpen] = useState(false);
  const [selectedServiceType, setSelectedServiceType] = useState<string>("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const handleServiceTypeSelect = (type: ServiceType) => {
    setSelectedServiceType(type.name);
    setValue("serviceType", type.id);
    setIsServiceTypeOpen(false);
  };

  const onSubmit = async (data: FormData) => {
    // TODO: Implement form submission logic
    console.log(data);
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl space-y-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-gmarket font-bold mb-4 text-blue-900">
          서비스 문의하기
        </h1>
        <p className="text-xl text-gray-600">
          보다 꼼꼼한 상담을 위해 서비스의 정보를 알려주세요.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Contact Information */}
        <section className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-50 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.12)] relative">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            서비스 정보 입력
          </h2>
          <div className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                담당자 이름<span className="text-red-500 ml-0.5">*</span>
              </label>
              <input
                {...register("name", { required: "이름을 입력해주세요" })}
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg transition-all duration-300
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  hover:border-gray-300"
                placeholder="담당자 이름을 입력하세요"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="phoneNum"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                담당자 연락처<span className="text-red-500 ml-0.5">*</span>
              </label>
              <input
                {...register("phoneNum", { required: "연락처를 입력해주세요" })}
                type="tel"
                id="phoneNum"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg transition-all duration-300
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  hover:border-gray-300"
                placeholder="담당자 연락처를 입력하세요"
              />
              {errors.phoneNum && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phoneNum.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="serviceName"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                서비스 이름
              </label>
              <input
                {...register("serviceName")}
                type="text"
                id="serviceName"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg transition-all duration-300
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  hover:border-gray-300"
                placeholder="회사명 또는 서비스명을 입력하세요"
              />
            </div>
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
            </div>
            <div>
              <label
                htmlFor="budget"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                예상 예산
              </label>
              <input
                {...register("budget")}
                type="text"
                id="budget"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg transition-all duration-300
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  hover:border-gray-300"
                placeholder="예: 5,000만원"
              />
            </div>
            <div>
              <label
                htmlFor="timeline"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                희망 개발 기간
              </label>
              <input
                {...register("timeline")}
                type="text"
                id="timeline"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg transition-all duration-300
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  hover:border-gray-300"
                placeholder="예: 3개월"
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                서비스 설명<span className="text-red-500 ml-0.5">*</span>
              </label>
              <textarea
                {...register("description", {
                  required: "서비스 설명을 입력해주세요",
                })}
                id="description"
                rows={6}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg transition-all duration-300
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  hover:border-gray-300"
                placeholder="서비스에 대해 자세히 설명해주세요."
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-8 py-4 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors duration-200 font-medium text-lg"
          >
            문의하기
          </button>
        </div>
      </form>

      <div className="text-center mt-8">
        <p className="text-sm text-gray-500">
          문의하신 내용은 영업일 기준 1-2일 내로 답변드리겠습니다.
        </p>
      </div>
    </div>
  );
}
