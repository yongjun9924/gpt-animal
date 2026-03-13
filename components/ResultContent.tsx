"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { decodeResult } from "@/lib/encode";
import AnimalCard from "@/components/AnimalCard";
import ShareButtons from "@/components/ShareButtons";

const CUSTOM_GPT_URL = "https://chatgpt.com/g/g-69b426cac6d88191b70af7f1ae62583a-naneun-eoddeon-dongmulilgga";

function ResultInner() {
  const searchParams = useSearchParams();
  const data = searchParams.get("d");

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
        <div className="text-center space-y-4">
          <div className="text-6xl">🤔</div>
          <h1 className="text-2xl font-bold text-gray-800">
            결과를 찾을 수 없어요
          </h1>
          <p className="text-gray-500">테스트를 먼저 진행해주세요!</p>
          <a
            href="/"
            className="inline-block mt-4 py-3 px-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-2xl"
          >
            테스트 하러가기
          </a>
        </div>
      </div>
    );
  }

  const result = decodeResult(data);

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
        <div className="text-center space-y-4">
          <div className="text-6xl">😵</div>
          <h1 className="text-2xl font-bold text-gray-800">
            잘못된 결과 데이터예요
          </h1>
          <a
            href="/"
            className="inline-block mt-4 py-3 px-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-2xl"
          >
            다시 테스트하기
          </a>
        </div>
      </div>
    );
  }

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">
            GPT 동물 테스트 결과
          </h1>
        </div>

        <AnimalCard result={result} />

        <ShareButtons
          title={`${result.emoji} ${result.title}`}
          url={currentUrl}
        />

        <a
          href={CUSTOM_GPT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center py-4 px-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
        >
          🐾 나도 해보기!
        </a>

        <p className="text-center text-xs text-gray-400">
          ChatGPT 메모리 기반 동물 성격 분석
        </p>
      </div>
    </main>
  );
}

export default function ResultContent() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center space-y-4">
            <div className="text-6xl animate-pulse">🐾</div>
            <p className="text-gray-500">결과를 불러오는 중...</p>
          </div>
        </div>
      }
    >
      <ResultInner />
    </Suspense>
  );
}
