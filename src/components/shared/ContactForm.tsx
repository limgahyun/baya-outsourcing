"use client";

import { UseFormReturn, Path, PathValue } from "react-hook-form";
import FormInput from "./FormInput";
import { BaseContactFormData } from "@/types/form";
import {
  formatPhoneNumber,
  isValidPhoneNumber,
} from "@/utils/formatPhoneNumber";

interface ContactFormProps<T extends BaseContactFormData> {
  form: UseFormReturn<T>;
}

export default function ContactForm<T extends BaseContactFormData>({
  form,
}: ContactFormProps<T>) {
  const {
    register,
    formState: { errors },
    setValue,
    getValues,
  } = form;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const input = e.target.value;
    const currentValue = getValues("phoneNum" as Path<T>) as string;

    // Always format the input value
    const formattedValue = formatPhoneNumber(input);

    // Only update if the value has changed or is shorter
    if (formattedValue !== currentValue || input.length < currentValue.length) {
      const phoneNumPath = "phoneNum" as Path<T>;
      setValue(phoneNumPath, formattedValue as PathValue<T, Path<T>>, {
        shouldValidate: true,
      });
    }
  };

  return (
    <div className="space-y-6">
      <FormInput<T>
        id={"name" as Path<T>}
        label="담당자 이름"
        required
        register={register}
        error={errors.name?.message as string}
        placeholder="이름을 입력하세요"
      />
      <FormInput<T>
        id={"phoneNum" as Path<T>}
        label="담당자 연락처"
        type="tel"
        required
        register={register}
        error={errors.phoneNum?.message as string}
        placeholder="연락처를 입력하세요"
        validation={{
          required: "연락처를 입력해주세요",
          onChange: handlePhoneChange,
          validate: {
            format: (value) => {
              if (isValidPhoneNumber(value)) return true;
              return "올바른 전화번호 형식이 아닙니다 (예: 010-1234-5678)";
            },
          },
        }}
      />
    </div>
  );
}
