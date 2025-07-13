import type { Metadata } from "next";
import "./globals.css";
import { gmarketSans, pretendard } from "./fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://ddugddag.com"),
  title: "바야 | 외주개발디자인",
  description: "사업을 이해하는 개발 파트너, 바야",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://ddugddag.com",
    title: "바야 | 외주개발디자인",
    description: "사업을 이해하는 개발 파트너, 바야",
    siteName: "바야",
    images: [
      {
        url: "https://i.ibb.co/XZ9hbjMx/ogImg.png",
        width: 1200,
        height: 630,
        alt: "바야 메인 이미지",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "바야 | 외주개발디자인",
    description: "사업을 이해하는 개발 파트너, 바야",
    images: ["https://i.ibb.co/XZ9hbjMx/ogImg.png"],
  },
  alternates: {
    canonical: "https://ddugddag.com",
  },
  robots: {
    index: true,
    follow: true,
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
      <body className="font-pretendard">
        <GoogleAnalytics />
        <Navbar />
        <main className="min-h-screen bg-white text-gray-900">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
