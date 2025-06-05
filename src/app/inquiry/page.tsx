"use client";

import React from "react";
import { useForm } from "react-hook-form";
import PageLayout from "@/components/shared/PageLayout";
import ContactForm from "@/components/shared/ContactForm";
import FormInput from "@/components/shared/FormInput";
import { InquiryFormData } from "@/types/form";
import ServiceTypeSelector from "@/components/shared/ServiceTypeSelector";

export default function InquiryPage() {
  const form = useForm<InquiryFormData>();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = form;

  const onSubmit = async (data: InquiryFormData) => {
    // TODO: Implement form submission logic
    console.log(data);
  };

  return (
    <PageLayout
      title="서비스 문의하기"
      subtitle="보다 꼼꼼한 상담을 위해 서비스의 정보를 알려주세요."
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <section className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-50 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.12)] relative">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            서비스 정보 입력
          </h2>
          <div className="space-y-6">
            <FormInput<InquiryFormData>
              id="serviceName"
              label="서비스명"
              type="text"
              register={register}
              error={errors.serviceName?.message as string}
              placeholder="서비스명을 입력하세요"
            />
            <ContactForm form={form} />
            <ServiceTypeSelector<InquiryFormData>
              register={register}
              setValue={setValue}
              error={errors.serviceType?.message as string}
            />
            <FormInput<InquiryFormData>
              id="email"
              label="이메일"
              type="email"
              register={register}
              error={errors.email?.message as string}
              placeholder="이메일을 입력하세요"
            />
            <FormInput<InquiryFormData>
              id="budget"
              label="예상 예산"
              register={register}
              placeholder="예: 5,000만원"
            />
            <FormInput<InquiryFormData>
              id="timeline"
              label="희망 개발 기간"
              register={register}
              placeholder="예: 3개월"
            />
            <FormInput<InquiryFormData>
              id="description"
              label="서비스 설명"
              type="textarea"
              required
              register={register}
              error={errors.description?.message as string}
              placeholder="서비스에 대해 자세히 설명해주세요."
            />
          </div>
        </section>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-8 py-4 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors duration-200 font-medium text-lg"
          >
            문의하기
          </button>
        </div>
      </form>
    </PageLayout>
  );
}
