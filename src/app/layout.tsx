import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/animations/ScrollProgress";

export const metadata: Metadata = {
  metadataBase: new URL('https://lawfirmjunghoon.kr'),
  title: {
    template: '%s | 법무법인 양영&정훈',
    default: '법무법인 양영&정훈 | Law Firm Yang-young & Jeong-hoon',
  },
  description: "광주, 장흥, 순천, 고흥을 기반으로 최상의 법률 서비스를 제공하는 법무법인 양영&정훈입니다. 이혼, 형사, 민사, 행정 소송 전문 변호사들이 의뢰인의 권리를 지킵니다.",
  keywords: ["법무법인 정훈", "법무법인 양영&정훈", "광주 변호사", "장흥 변호사", "순천 변호사", "고흥 변호사", "이혼전문변호사", "형사전문변호사", "광주 법무법인"],
  openGraph: {
    title: '법무법인 양영&정훈',
    description: '신뢰할 수 있는 법률 파트너, 법무법인 양영&정훈',
    url: 'https://lawfirmjunghoon.kr',
    siteName: '법무법인 양영&정훈',
    images: [
      {
        url: '/images/logo/yangyoung_logo_bg.png', // Fallback image for sharing
        width: 1200,
        height: 630,
        alt: '법무법인 양영&정훈 로고',
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
        <Footer />
      </body>
    </html>
  );
}
