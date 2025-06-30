"use client";

import SeminarCard from "@/components/seminar/SeminarCard";
import { formatSeminarDateTime } from "@/utils/formatSeminarDateTime";
import { Seminar, seminars } from "./data";

function getDDay(seminarDate: string): { dDay: string; isClosed: boolean } {
  const today = new Date();
  const seminar = new Date(seminarDate);
  // Remove time part for accurate comparison
  today.setHours(0, 0, 0, 0);
  seminar.setHours(0, 0, 0, 0);

  const diff = Math.ceil(
    (seminar.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );
  if (diff > 0) return { dDay: `D-${diff}`, isClosed: false };
  if (diff === 0) return { dDay: "D-day", isClosed: false };
  return { dDay: "종료", isClosed: true };
}

export default function SeminarPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-8xl space-y-6 mt-16">
      <h1 className="text-3xl md:text-4xl font-gmarket font-bold text-blue-900 text-center">
        세미나
      </h1>

      <section className="mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seminars.map((seminar: Seminar) => {
              const { dDay, isClosed } = getDDay(seminar.date);
              return (
                <SeminarCard
                  key={seminar.id}
                  organization={seminar.organization}
                  title={seminar.title}
                  dateTime={formatSeminarDateTime(seminar.date, seminar.time)}
                  dDay={dDay}
                  thumbnail={seminar.thumbnail}
                  isClosed={isClosed}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
