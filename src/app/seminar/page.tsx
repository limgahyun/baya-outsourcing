"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Seminar, seminars } from "./data";
import PageLayout from "@/components/shared/PageLayout";

export default function SeminarPage() {
  return (
    <PageLayout
      title="세미나"
      subtitle="최신 기술 트렌드와 개발 노하우를 공유하는 세미나를 진행합니다."
    >
      {/* Seminars Section */}
      <section className="py-20 px-8 sm:px-12 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seminars.map((seminar: Seminar, index: number) => (
              <motion.div
                key={seminar.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Seminar Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={seminar.thumbnail}
                    alt={seminar.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {seminar.isUpcoming && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      예정
                    </div>
                  )}
                </div>

                {/* Seminar Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm text-gray-500">
                      {seminar.date}
                    </span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">
                      {seminar.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {seminar.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {seminar.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {seminar.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Speaker */}
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-gray-600">
                        {seminar.speaker.charAt(0)}
                      </span>
                    </div>
                    <span className="text-sm text-gray-700">
                      {seminar.speaker}
                    </span>
                  </div>

                  {/* Action Button */}
                  <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
                    {seminar.isUpcoming ? "신청하기" : "자세히 보기"}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
