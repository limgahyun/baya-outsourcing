"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FUNCTION_CARDS } from "@/constants/functionCards";
import { getYesterdayDate } from "@/utils/formatDate";
import { quoteApi } from "@/services/api";
import { useRouter } from "next/navigation";
import { QuoteFormData } from "@/types/form";
import ContactForm from "@/components/shared/ContactForm";
import ServiceTypeSelector from "@/components/shared/ServiceTypeSelector";
import { DynamicIcon, ChevronDownIcon } from "@/components/icons";

interface FunctionCardProps {
  func: (typeof FUNCTION_CARDS)[0];
  isSelected: boolean;
  onClick: () => void;
}

const FunctionCard: React.FC<FunctionCardProps> = ({
  func,
  isSelected,
  onClick,
}) => (
  <div
    onClick={onClick}
    className={`p-4 border rounded-xl cursor-pointer transition-all duration-300
      flex flex-col items-center gap-2 hover:border-blue-200 hover:bg-blue-50/50
      ${
        isSelected
          ? "bg-blue-50 border-blue-500 text-blue-700"
          : "border-gray-100 hover:border-blue-300"
      }`}
  >
    <DynamicIcon
      className={`w-6 h-6 ${isSelected ? "text-blue-600" : "text-gray-600"}`}
      path={func.icon}
      strokeWidth={1.5}
    />
    <span className="text-sm text-center">{func.name}</span>
  </div>
);

export default function QuotePage() {
  const router = useRouter();
  const [userId, setUserId] = useState<number | null>(null);
  const [isSection2Active, setIsSection2Active] = useState(false);
  const [functionList, setFunctionList] = useState<number[]>([]);

  const form = useForm<QuoteFormData>();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = form;

  const name = watch("name");
  const phoneNum = watch("phoneNum");

  const isFirstSectionComplete =
    name?.trim() !== "" &&
    phoneNum?.trim() !== "" &&
    /^[0-9]{3}-[0-9]{4}-[0-9]{4}$/.test(phoneNum);

  const handleArrowClick = async () => {
    if (isFirstSectionComplete) {
      try {
        const userData = {
          name,
          phoneNum,
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
        <h1 className="text-4xl font-gmarket font-bold mb-4">바야 견적소</h1>
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
          <ContactForm form={form} />

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
            <ChevronDownIcon
              className={`transition-transform duration-300 ${
                isFirstSectionComplete ? "text-white" : "text-gray-400"
              }`}
            />
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
            <ServiceTypeSelector<QuoteFormData>
              register={register}
              setValue={setValue}
              error={errors.serviceType?.message as string}
            />

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
                  <FunctionCard
                    key={func.id}
                    func={func}
                    isSelected={functionList.includes(func.id)}
                    onClick={() => handleFunctionCardClick(func.id)}
                  />
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
