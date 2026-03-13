import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "나는 어떤 동물일까? - GPT 동물 테스트",
  description:
    "ChatGPT가 당신의 대화 기록을 분석해서 알려주는 나의 동물 유형! 링크 하나로 바로 테스트해보세요.",
  openGraph: {
    title: "나는 어떤 동물일까? - GPT 동물 테스트",
    description:
      "ChatGPT가 당신의 대화 기록을 분석해서 알려주는 나의 동물 유형!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
