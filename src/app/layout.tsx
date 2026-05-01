import type { Metadata } from "next";
import "./globals.css";
import "./subpage.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingMenu from "@/components/layout/FloatingMenu";
import ScrollProgress from "@/components/animations/ScrollProgress";

export const metadata: Metadata = {
  metadataBase: new URL('https://calla-law.com'),
  title: {
    template: '%s | 법률사무소 카라',
    default: '법률사무소 카라 | 이혼 상속 전문 변호사',
  },
  description: "서초 이혼 및 상속 전문 법률사무소 카라입니다. 대한변호사협회 인증 이혼, 상속 전문 유지은 대표변호사가 의뢰인의 권리를 지킵니다.",
  keywords: ["카라 법률사무소", "법률사무소 카라", "유지은 변호사", "이혼전문변호사", "상속전문변호사", "서초동 변호사", "이혼소송", "재산분할"],
  openGraph: {
    title: '법률사무소 카라',
    description: '서초 이혼 및 상속 전문 법률사무소 카라',
    url: 'https://calla-law.com',
    siteName: '법률사무소 카라',
    images: [
      {
        url: '/images/logo/calla_logo_bg.png', // Fallback image for sharing
        width: 1200,
        height: 630,
        alt: '법률사무소 카라 로고',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  verification: {
    google: 'placeholder-for-google-site-verification',
    // naver: 'placeholder-for-naver-site-verification',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <ScrollProgress />
        <Header />
        {children}
        <FloatingMenu />
        <Footer />
      </body>
    </html>
  );
}
