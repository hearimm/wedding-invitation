import type { Metadata } from "next";
import { Playfair_Display, Great_Vibes, Noto_Serif_KR, Nanum_Myeongjo } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"
import KakaoScript from "@/components/common/kakao-script";

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
});

const notoSerifKR = Noto_Serif_KR({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-noto-serif-kr",
});

const nanumMyeongjo = Nanum_Myeongjo({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  variable: "--font-nanum-myeongjo",
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
        className={`${playfair.variable} ${greatVibes.variable} ${notoSerifKR.variable} ${nanumMyeongjo.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
      <KakaoScript />
    </html>
  );
}
