import type { Metadata } from "next";
import "./globals.css";
import { gmarketSans, pretendard } from "./fonts";

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
      lang="en"
      className={`${gmarketSans.variable} ${pretendard.variable}`}
    >
      <body className="font-pretendard">
        <main className="min-h-screen bg-white text-blue-1000">{children}</main>
      </body>
    </html>
  );
}
