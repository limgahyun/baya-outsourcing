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
      title="프로젝트 문의하기"
      subtitle="보다 꼼꼼한 상담을 위해 프로젝트의 정보를 알려주세요."
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <section className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-50 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.12)] relative">
          <div className="space-y-6">
            <FormInput<InquiryFormData>
              id="serviceName"
              label="프로젝트명"
              type="text"
              register={register}
              error={errors.serviceName?.message as string}
              placeholder="프로젝트명을 입력하세요"
            />
            <ContactForm form={form} />
            <FormInput<InquiryFormData>
              id="email"
              label="이메일"
              type="email"
              register={register}
              error={errors.email?.message as string}
              placeholder="이메일을 입력하세요"
            />
            <ServiceTypeSelector<InquiryFormData>
              register={register}
              setValue={setValue}
              error={errors.serviceType?.message as string}
            />
            <FormInput<InquiryFormData>
              id="description"
              label="프로젝트 설명"
              type="textarea"
              required
              register={register}
              error={errors.description?.message as string}
              placeholder="어떤 프로젝트인지 설명해주세요. 알잘딱깔센으로 알아들을게요."
            />
            <FormInput<InquiryFormData>
              id="detail"
              label="상세 요구사항"
              type="file"
              required
              register={register}
              error={errors.detail?.message as string}
              placeholder="상세 요구사항을 첨부해주세요."
            />
            <FormInput<InquiryFormData>
              id="designReference"
              label="디자인 참고자료"
              type="file"
              required
              register={register}
              error={errors.designReference?.message as string}
              placeholder="디자인 참고자료를 첨부해주세요."
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
