import React, { useState } from "react";
import {
  UseFormRegister,
  Path,
  RegisterOptions,
  FieldValues,
} from "react-hook-form";
import { UploadIcon, CloseIcon } from "@/components/icons";

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
  subDescription?: string;
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
  subDescription,
}: FormInputProps<TFormValues>) {
  const [fileName, setFileName] = useState<string>("");

  const inputClasses =
    "w-full px-4 py-3 border border-gray-200 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-300";

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
    }
  };

  const renderFileInput = () => (
    <div className="relative">
      <input
        type="file"
        id={id}
        {...register(id, {
          required: required ? `${label}을(를) 입력해주세요` : false,
          onChange: handleFileChange,
          ...validation,
        })}
        className="hidden"
      />
      <label
        htmlFor={id}
        className="flex items-center gap-3 w-full px-4 py-3 border border-gray-200 rounded-lg cursor-pointer transition-all duration-300 hover:border-gray-300 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent"
      >
        <div className="flex-shrink-0">
          <UploadIcon className="text-gray-400 w-5 h-5" />
        </div>
        <span
          className={`text-gray-500 truncate flex-1 ${
            fileName ? "text-gray-900" : ""
          }`}
        >
          {fileName || placeholder || "파일을 선택하세요"}
        </span>
        {fileName && (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              const input = document.getElementById(id) as HTMLInputElement;
              if (input) {
                input.value = "";
                input.dispatchEvent(new Event("change", { bubbles: true }));
              }
              setFileName("");
            }}
            className="flex-shrink-0 p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <CloseIcon className="text-gray-500 w-4 h-4" />
          </button>
        )}
      </label>
    </div>
  );

  return (
    <div className="space-y-2">
      <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-900">
          {label}
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
        {subDescription && (
          <p className="mt-1 text-sm text-gray-500">{subDescription}</p>
        )}
      </div>
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
      ) : type === "file" ? (
        renderFileInput()
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
