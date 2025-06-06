import React from "react";
import { SERVICE_TYPES } from "@/constants/serviceTypes";
import { FUNCTION_CARDS } from "@/constants/functionCards";
import { formatPhoneNumber } from "@/utils/formatPhoneNumber";
import { quoteApi, QuoteResponse } from "@/services/api";
import DownloadSection from "@/components/quote/DownloadSection";
import ProjectInquiryButton from "@/components/shared/ProjectInquiryButton";
import { CalendarIcon, TeamIcon, CurrencyIcon } from "@/components/icons";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function QuoteResultPage({ params }: Props) {
  let quoteData: QuoteResponse;
  const resolvedParams = await params;

  try {
    quoteData = await quoteApi.getQuoteResultById(Number(resolvedParams.id));
  } catch (error) {
    console.error("Failed to get quote data:", error);
    return <div>Failed to load quote data</div>;
  }

  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  if (!quoteData) return <div>Loading...</div>;

  const selectedFunctions = FUNCTION_CARDS.filter((card) =>
    quoteData.quoteInfo.functionList.includes(card.id)
  );

  const serviceName =
    SERVICE_TYPES.find((type) => type.id === quoteData.quoteInfo.serviceType)
      ?.name || quoteData.quoteInfo.serviceType;

  const numForBarLength = Math.ceil(quoteData.result.period / 10) * 2 + 1;
  const barLength = (numForBarLength - 1) * 5;
  const dayForFuctions = quoteData.quoteInfo.adminRequired
    ? quoteData.quoteInfo.functionList.length * 2
    : quoteData.quoteInfo.functionList.length;

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl space-y-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-gmarket font-bold mb-4 text-blue-900">
          바야 견적소
        </h1>
        <p className="text-xl text-gray-600">
          내 프로젝트의 예상 견적을 확인해보세요
        </p>
      </div>

      {/* Project Info Section */}
      <section className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-50 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.12)] relative">
        <div className="space-y-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              담당자 정보
            </h3>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
              <div>
                <p className="text-sm text-gray-500">담당자 이름</p>
                <p className="text-base text-gray-900">{quoteData.user.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">연락처</p>
                <p className="text-base text-gray-900">
                  {formatPhoneNumber(quoteData.user.phoneNum)}
                </p>
              </div>
            </div>
          </div>

          {/* Service Info */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              서비스 정보
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">선택한 서비스</p>
                <p className="text-base text-gray-900">{serviceName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">관리자 계정</p>
                <p className="text-base text-gray-900">
                  ✓ {quoteData.quoteInfo.adminRequired ? "필요함" : "필요없음"}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">
                  선택한 기능 ({selectedFunctions.length}개)
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selectedFunctions.map((func) => (
                    <span
                      key={func.id}
                      data-pdf-function-tag
                      className="px-3 bg-gray-100 rounded-full text-sm text-gray-700 flex items-center justify-center h-8 align-text-top text-center"
                    >
                      {func.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Result Section */}

      {/* Summary Cards */}
      <section className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {/* Expected Period */}
        <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-50 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.12)] relative">
          <div
            data-pdf-function-tag-2
            className="flex items-center gap-2 mb-2 h-6"
          >
            <CalendarIcon className="text-blue-600 w-6 h-6" />
            <span className="text-sm font-medium text-gray-600 align-middle">
              예상 기간
            </span>
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {quoteData.result.period}
            <span className="text-base font-normal"> 일</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">기획 ~ 개발 완료</p>
        </div>

        {/* Team Size */}
        <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-50 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.12)] relative">
          <div
            data-pdf-function-tag-2
            className="flex items-center gap-2 mb-2 h-6"
          >
            <TeamIcon className="text-blue-600 w-6 h-6" />
            <span className="text-sm font-medium text-gray-600 align-middle">
              투입 인력
            </span>
          </div>
          <div className="text-2xl font-bold text-gray-900">
            4<span className="text-base font-normal"> 명</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            PM, 백엔드, 프론트엔드, 디자이너
          </p>
        </div>

        {/* Expected Cost */}
        <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-50 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.12)] relative sm:col-span-2 md:col-span-1">
          <div
            data-pdf-function-tag-2
            className="flex items-center gap-2 mb-2 h-6 align-middle"
          >
            <CurrencyIcon className="text-blue-600 w-6 h-6" />
            <span className="text-sm font-medium text-gray-600 align-middle">
              예상 견적
            </span>
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {formatNumber(quoteData.result.expenses)}
            <span className="text-base font-normal"> 원</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">VAT 별도</p>
        </div>
      </section>

      <section className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-50 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.12)] relative">
        {/* Development Schedule */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">개발 일정</h3>
          <div className="space-y-4">
            {/* Bar Chart */}
            <div className="relative sm:pb-8">
              {/* X-axis labels */}
              <div className="hidden absolute -bottom-6 left-24 right-0 sm:flex justify-between text-sm text-gray-500">
                {Array.from({ length: numForBarLength }, (_, i) => (
                  <span key={i}>{i * 5}일</span>
                ))}
              </div>

              {/* Bars */}
              <div className="space-y-3">
                {/* Planning */}
                <div className="flex items-center gap-4">
                  <span className="w-12 sm:w-24 text-sm text-gray-600">
                    기획
                  </span>
                  <div className="flex-1 h-8 bg-gray-50 rounded-lg overflow-hidden relative">
                    <div
                      className="h-full bg-red-300 rounded-lg absolute"
                      style={{
                        left: "0%",
                        width: `${(dayForFuctions / barLength) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>

                {/* Design */}
                <div className="flex items-center gap-4">
                  <span className="w-12 sm:w-24 text-sm text-gray-600">
                    디자인
                  </span>
                  <div className="flex-1 h-8 bg-gray-50 rounded-lg overflow-hidden relative">
                    <div
                      className="h-full bg-yellow-300 rounded-lg absolute"
                      style={{
                        left: `${(dayForFuctions / 2 / barLength) * 100}%`,
                        width: `${(dayForFuctions / barLength) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>

                {/* Frontend */}
                <div className="flex items-center gap-4">
                  <span className="w-12 sm:w-24 text-sm text-gray-600">FE</span>
                  <div className="flex-1 h-8 bg-gray-50 rounded-lg overflow-hidden relative">
                    <div
                      className="h-full bg-blue-300 rounded-lg absolute"
                      style={{
                        left: `${((dayForFuctions * 1.5) / barLength) * 100}%`,
                        width: `${((dayForFuctions * 1.5) / barLength) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>

                {/* Backend */}
                <div className="flex items-center gap-4">
                  <span className="w-12 sm:w-24 text-sm text-gray-600">BE</span>
                  <div className="flex-1 h-8 bg-gray-50 rounded-lg overflow-hidden relative">
                    <div
                      className="h-full bg-green-400 rounded-lg absolute"
                      style={{
                        left: `${((dayForFuctions * 1.5) / barLength) * 100}%`,
                        width: `${
                          ((2 + dayForFuctions * 1.5) / barLength) * 100
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-50 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.12)] relative">
        {/* Detail Expenses */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            견적 상세 내역
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600">기획</span>
              <span className="text-gray-900 font-medium">
                {formatNumber(
                  quoteData.result.pmTime * parseInt(quoteData.wage.pmWage, 10)
                )}{" "}
                원
              </span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600">디자인</span>
              <span className="text-gray-900 font-medium">
                {formatNumber(
                  quoteData.result.designTime *
                    parseInt(quoteData.wage.designWage, 10)
                )}{" "}
                원
              </span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600">프론트엔드 개발</span>
              <span className="text-gray-900 font-medium">
                {formatNumber(
                  quoteData.result.feTime * parseInt(quoteData.wage.feWage, 10)
                )}{" "}
                원
              </span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600">백엔드 개발</span>
              <span className="text-gray-900 font-medium">
                {formatNumber(
                  quoteData.result.beTime * parseInt(quoteData.wage.beWage, 10)
                )}{" "}
                원
              </span>
            </div>
            <div className="border-t border-gray-100 border-dashed mt-2" />
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600">레벨 가중치</span>
              <span className="text-gray-900 font-medium">
                * {quoteData.result.level.toFixed(1)}
              </span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600">어드민 가중치</span>
              <span className="text-gray-900 font-medium">
                * {quoteData.quoteInfo.adminRequired ? "2" : "1"}
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-t border-gray-200 mt-2">
              <span className="text-gray-900 font-bold">총 견적</span>
              <span className="text-blue-600 font-bold">
                {formatNumber(quoteData.result.expenses)} 원
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <div className="flex flex-col sm:flex-row gap-4">
        <DownloadSection quoteId={resolvedParams.id} />
        <ProjectInquiryButton quoteData={quoteData} />
      </div>

      <div className="text-center mt-8">
        <p className="text-sm text-gray-300">
          🚨 견적은 프로젝트의 상세 요구사항에 따라 변동될 수 있습니다
        </p>
      </div>
    </div>
  );
}
