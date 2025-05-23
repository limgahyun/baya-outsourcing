import localFont from "next/font/local";

export const gmarketSans = localFont({
  src: [
    {
      path: "../fonts/GmarketSansTTFMedium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/GmarketSansTTFBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/GmarketSansTTFLight.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-gmarket-sans",
});

export const pretendard = localFont({
  src: [
    {
      path: "../fonts/PretendardVariable.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-pretendard",
});
