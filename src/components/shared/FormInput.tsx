import React from "react";
import {
  UseFormRegister,
  Path,
  RegisterOptions,
  FieldValues,
} from "react-hook-form";

type FormInputProps<TFormValues extends FieldValues> = {
  id: Path<TFormValues>;
  label: string;
  type?: "text" | "tel" | "email" | "textarea" | "file";
  placeholder?: string;
  required?: boolean;
  register: UseFormRegister<TFormValues>;
  error?: string;
  rows?: number;
  validation?: RegisterOptions<TFormValues>;
};

export default function FormInput<TFormValues extends FieldValues>({
  id,
  label,
  type = "text",
  placeholder,
  required = false,
  register,
  error,
  rows,
  validation,
}: FormInputProps<TFormValues>) {
  const inputClasses =
    "w-full px-4 py-3 border border-gray-200 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-300";

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-gray-900">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          {...register(id, {
            required: required ? `${label}을(를) 입력해주세요` : false,
            ...validation,
          })}
          rows={rows || 6}
          className={inputClasses}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          id={id}
          {...register(id, {
            required: required ? `${label}을(를) 입력해주세요` : false,
            ...validation,
          })}
          className={inputClasses}
          placeholder={placeholder}
        />
      )}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
