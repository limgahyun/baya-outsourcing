import type { Metadata } from "next";
import "./globals.css";
import { gmarketSans, pretendard } from "./fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "DDUG DDAG LAB",
  description: "DDUG DDAG LAB website",
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
        <Navbar />
        <main className="min-h-screen bg-white text-gray-900 pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
