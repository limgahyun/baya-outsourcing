"use client";

import React, { useState } from "react";
import { SERVICE_TYPES, ServiceType } from "@/constants/serviceTypes";
import {
  UseFormRegister,
  UseFormSetValue,
  Path,
  FieldValues,
  PathValue,
} from "react-hook-form";

type ServiceTypeSelectorProps<TFormValues extends FieldValues> = {
  register: UseFormRegister<TFormValues>;
  setValue: UseFormSetValue<TFormValues>;
  error?: string;
};

export default function ServiceTypeSelector<TFormValues extends FieldValues>({
  register,
  setValue,
  error,
}: ServiceTypeSelectorProps<TFormValues>) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<string>("");

  const handleSelect = (type: ServiceType) => {
    setSelectedType(type.name);
    const serviceTypePath = "serviceType" as Path<TFormValues>;
    setValue(
      serviceTypePath,
      type.id as PathValue<TFormValues, Path<TFormValues>>,
      {
        shouldValidate: true,
      }
    );
    setIsOpen(false);
  };

  return (
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
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full px-4 py-3 bg-white border rounded-lg text-left transition-all duration-300
            ${
              isOpen
                ? "border-blue-500 ring-2 ring-blue-500/20"
                : "border-gray-200 hover:border-gray-300"
            }
            ${error ? "border-red-500" : ""}
          `}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {selectedType ? (
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
                            (type) => type.name === selectedType
                          )?.icon || SERVICE_TYPES[6].icon
                        }
                      />
                    </svg>
                  </div>
                  <span className="text-gray-900">{selectedType}</span>
                </>
              ) : (
                <span className="text-gray-500">서비스 유형을 선택하세요</span>
              )}
            </div>
            <svg
              className={`w-5 h-5 text-gray-400 transition-transform duration-200
                ${isOpen ? "transform rotate-180" : ""}`}
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
        {isOpen && (
          <div className="absolute z-10 w-full mt-2 bg-white border border-gray-100 rounded-lg shadow-lg overflow-hidden">
            <div className="max-h-60 overflow-y-auto overscroll-contain">
              {SERVICE_TYPES.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => handleSelect(type)}
                  className={`w-full px-4 py-3 flex items-start gap-3 hover:bg-gray-50 transition-colors duration-150
                    ${selectedType === type.name ? "bg-blue-50" : ""}
                  `}
                >
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                    <svg
                      className={`w-5 h-5 ${
                        selectedType === type.name
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
                        selectedType === type.name
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
          {...register("serviceType" as Path<TFormValues>, {
            required: "서비스 유형을 선택해주세요",
          })}
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

      {/* Service Type Description */}
      <div className="">
        {selectedType && !isOpen && (
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
                    SERVICE_TYPES.find((type) => type.name === selectedType)
                      ?.icon || SERVICE_TYPES[6].icon
                  }
                />
              </svg>
            </div>
            <p className="text-sm text-gray-600">
              {SERVICE_TYPES.find((type) => type.name === selectedType)
                ?.description ||
                "선택하신 서비스에 대해 맞춤형 견적을 제공해드립니다."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
