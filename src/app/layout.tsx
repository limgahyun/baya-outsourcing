import type { Metadata } from "next";
import "./globals.css";
import { gmarketSans, pretendard } from "./fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "뚝딱랩 | 외주개발디자인",
  description: "사업을 이해하는 개발 파트너, 뚝딱랩",
  openGraph: {
    title: "뚝딱랩 | 외주개발디자인",
    description: "사업을 이해하는 개발 파트너, 뚝딱랩",
    images: [
      {
        url: "https://i.ibb.co/FLkmyMtk/main2.png",
        width: 1200,
        height: 630,
        alt: "뚝딱랩 메인 이미지",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "뚝딱랩 | 외주개발디자인",
    description: "사업을 이해하는 개발 파트너, 뚝딱랩",
    images: ["https://i.ibb.co/FLkmyMtk/main2.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={`${gmarketSans.variable} ${pretendard.variable} break-keep`}
    >
      <head>
        <style>{`
          * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            -o-font-smoothing: antialiased;
          }
        `}</style>
      </head>
      <body className="font-pretendard">
        <GoogleAnalytics />
        <Navbar />
        <main className="min-h-screen bg-white text-gray-900 pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
