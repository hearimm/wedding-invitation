import type { Metadata } from "next";
import { Noto_Serif_KR, Gaegu } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"
import Script from 'next/script';

const notoSerifKR = Noto_Serif_KR({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const gaegu = Gaegu({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "최혁 💍 이예린 결혼합니다",
  description: "최혁 💍 이예린 결혼식에 초대합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
        <body
        className={`${notoSerifKR.variable} ${gaegu.variable} antialiased`}
      >
        {children}
        <Toaster />
        {/* 카카오 SDK 스크립트 */}
        <Script
        src="https://developers.kakao.com/sdk/js/kakao.js"
        strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
