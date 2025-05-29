"use client";

import Lottie from "lottie-react";
import alarmAnimation from "../../../public/lottie/alarm.json";

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="w-16 h-16">
        <Lottie animationData={alarmAnimation} loop={true} />
      </div>
      <h1 className="text-md md:text-lg lg:text-xl font-gmarket text-blue-1000 mt-8">
        서비스 준비중입니다
      </h1>
    </div>
  );
}
