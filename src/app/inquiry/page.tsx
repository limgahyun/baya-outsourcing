"use client";

import React from "react";
import { useForm } from "react-hook-form";
import PageLayout from "@/components/shared/PageLayout";
import ContactForm from "@/components/shared/ContactForm";
import FormInput from "@/components/shared/FormInput";
import { InquiryFormData } from "@/types/form";
import ServiceTypeSelector from "@/components/shared/ServiceTypeSelector";
import Link from "next/link";
import { quoteApi } from "@/services/api";
import { useRouter } from "next/navigation";

interface ExtendedInquiryFormData
  extends Omit<InquiryFormData, "detail" | "designReference"> {
  userId?: number;
  quoteResultId?: number;
  detail: FileList | null;
  designReference: FileList | null;
  description: string;
}

export default function InquiryPage() {
  const form = useForm<ExtendedInquiryFormData>();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = form;

  // Track if user came from quote result
  const [hasQuoteData, setHasQuoteData] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // Watch required fields
  const name = watch("name");
  const phoneNum = watch("phoneNum");
  const email = watch("email");
  const serviceName = watch("serviceName");
  const serviceType = watch("serviceType");
  const description = watch("description");

  // Update isActive when required fields change
  React.useEffect(() => {
    const isValidPhoneNum = /^[0-9]{3}-[0-9]{4}-[0-9]{4}$/.test(phoneNum || "");
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || "");

    const isFormValid =
      name?.trim() !== "" &&
      isValidPhoneNum &&
      isValidEmail &&
      serviceName?.trim() !== "" &&
      serviceType?.trim() !== "" &&
      description?.trim() !== "";

    setIsActive(!isFormValid);
  }, [name, phoneNum, email, serviceName, serviceType, description]);

  // Load stored quote data on mount
  React.useEffect(() => {
    const storedData = sessionStorage.getItem("quoteInquiryData");
    if (storedData) {
      const data = JSON.parse(storedData);
      setValue("name", data.name);
      setValue("phoneNum", data.phoneNum);
      setValue("userId", data.userId);
      setValue("quoteResultId", data.quoteResultId);
      setValue("serviceType", data.serviceType, {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
      });
      setHasQuoteData(true);
      // Clear the stored data after using it
      sessionStorage.removeItem("quoteInquiryData");
    }
  }, [setValue]);

  const onSubmit = async (data: ExtendedInquiryFormData) => {
    try {
      console.log("Form data:", data);

      setIsSubmitting(true);

      let userId = data.userId;

      // If no userId exists, create a new user
      if (!hasQuoteData) {
        const userResponse = await quoteApi.createUser({
          name: data.name,
          phoneNum: data.phoneNum,
        });
        userId = userResponse.id;
      }

      // Create inquiry request object
      const inquiryRequest = {
        user_id: userId!,
        projectName: data.serviceName,
        serviceType: data.serviceType,
        detailsText: data.description || "",
        designReferenceText: data.design || "",
        quoteresult_id: data.quoteResultId,
        email: data.email,
      };

      // Only add file metadata if files exist and have items
      if (data.detail && data.detail.length > 0) {
        const file = data.detail[0];
        console.log("Details file:", file);
        Object.assign(inquiryRequest, {
          detailsFile: {
            access: "public",
            path: file.name, // Use filename as path for now
            name: file.name,
            type: file.type,
            size: file.size,
            mime: file.type,
            meta: {},
          },
        });
      }

      if (data.designReference && data.designReference.length > 0) {
        const file = data.designReference[0];
        console.log("Design reference file:", file);
        Object.assign(inquiryRequest, {
          designReferenceFile: {
            access: "public",
            path: file.name, // Use filename as path for now
            name: file.name,
            type: file.type,
            size: file.size,
            mime: file.type,
            meta: {},
          },
        });
      }

      console.log("Inquiry request:", inquiryRequest);

      // Create inquiry
      await quoteApi.createInquiry(inquiryRequest);

      // Show success message or redirect
      alert("문의가 성공적으로 접수되었습니다.");
      router.push("/");
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      alert("문의 접수 중 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout
      title="프로젝트 문의하기"
      subtitle="보다 꼼꼼한 상담을 위해 프로젝트의 정보를 알려주세요."
      footerText="🚨 문의하신 내용은 영업일 기준 1-2일 내로 답변드리겠습니다."
    >
      <div className="space-y-8">
        {!hasQuoteData && (
          <Link
            href="/quote"
            className="flex justify-center w-full px-8 py-4 rounded-xl font-medium text-base transition-all duration-300
              shadow-[0_4px_12px_rgba(0,0,0,0.1)]
              bg-blue-600 text-white hover:bg-blue-700 hover:shadow-[0_4px_16px_rgba(37,99,235,0.2)]"
          >
            10초만에 견적 확인하고 오기
          </Link>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <section className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-50 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.12)] relative">
            <div className="space-y-6">
              <FormInput<ExtendedInquiryFormData>
                id="serviceName"
                label="프로젝트명"
                type="text"
                required
                register={register}
                error={errors.serviceName?.message as string}
                placeholder="프로젝트명을 입력하세요"
              />
              <ContactForm form={form} />
              <FormInput<ExtendedInquiryFormData>
                id="email"
                label="이메일"
                type="email"
                required
                register={register}
                error={errors.email?.message as string}
                placeholder="이메일을 입력하세요"
              />
            </div>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-50 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.12)] relative">
            <div className="space-y-6">
              <ServiceTypeSelector<ExtendedInquiryFormData>
                register={register}
                setValue={setValue}
                error={errors.serviceType?.message as string}
              />
              <FormInput<ExtendedInquiryFormData>
                id="description"
                label="프로젝트 설명"
                type="textarea"
                required
                register={register}
                error={errors.description?.message as string}
                placeholder="어떤 프로젝트인지 설명해주세요. 알잘딱깔센으로 알아들을게요."
              />
              <FormInput<ExtendedInquiryFormData>
                id="detail"
                label="상세 요구사항"
                type="file"
                register={register}
                error={errors.detail?.message as string}
                placeholder="상세 요구사항 문서를 첨부해주세요"
                subDescription="프로젝트의 상세 요구사항을 담은 문서가 있다면 첨부해주세요. (PDF, Word, Excel, .zip 등)"
              />
              <FormInput<ExtendedInquiryFormData>
                id="design"
                label="디자인 설명"
                type="textarea"
                register={register}
                error={errors.design?.message as string}
                placeholder="원하는 느낌의 디자인이 있다면 알려주세요! 사이트 링크 또는 말로 설명주셔도 좋아요."
              />
              <FormInput<ExtendedInquiryFormData>
                id="designReference"
                label="디자인 참고자료"
                type="file"
                register={register}
                error={errors.designReference?.message as string}
                placeholder="디자인 참고자료를 첨부해주세요"
                subDescription="참고하고 싶은 디자인 파일을 첨부해주세요. (JPG, PNG, PDF, .zip 등)"
              />
            </div>
          </section>

          <div className="text-center pt-4">
            <button
              type="submit"
              disabled={isActive}
              className={`w-full px-8 py-4 rounded-xl font-medium text-base transition-all duration-300
              shadow-[0_4px_12px_rgba(0,0,0,0.1)]
              ${
                isActive
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-[0_4px_16px_rgba(37,99,235,0.2)]"
              }`}
            >
              {isSubmitting ? "처리중..." : "문의하기"}
            </button>
          </div>
        </form>
      </div>
    </PageLayout>
  );
}
