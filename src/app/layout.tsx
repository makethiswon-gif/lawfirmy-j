import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/animations/ScrollProgress";

export const metadata: Metadata = {
  title: "법무법인 양영&정훈 | Law Firm Yang-young & Jeong-hoon",
  description: "고객과 함께하는 신뢰의 법무법인 양영&정훈입니다. 광주, 장흥, 순천, 고흥을 기반으로 최상의 법률 서비스를 제공합니다.",
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
