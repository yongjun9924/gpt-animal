"use client";

import { useState } from "react";

interface ShareButtonsProps {
  title: string;
  url: string;
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const shareText = `${title} - 나는 어떤 동물일까? GPT 동물 테스트`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const textarea = document.createElement("textarea");
      textarea.value = url;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const shareKakao = () => {
    const kakaoUrl = `https://story.kakao.com/share?url=${encodeURIComponent(url)}`;
    window.open(kakaoUrl, "_blank", "width=600,height=400");
  };

  const shareTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, "_blank", "width=600,height=400");
  };

  const shareNative = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: shareText, url });
      } catch {
        // user cancelled
      }
    }
  };

  return (
    <div className="flex flex-col gap-3 w-full max-w-md mx-auto">
      <div className="grid grid-cols-3 gap-2">
        <button
          onClick={shareKakao}
          className="flex items-center justify-center gap-2 py-3 px-4 bg-[#FEE500] text-[#191919] font-semibold rounded-xl hover:brightness-95 transition"
        >
          💬 카카오
        </button>
        <button
          onClick={shareTwitter}
          className="flex items-center justify-center gap-2 py-3 px-4 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition"
        >
          𝕏 트위터
        </button>
        <button
          onClick={handleCopy}
          className={`flex items-center justify-center gap-2 py-3 px-4 font-semibold rounded-xl transition ${
            copied
              ? "bg-green-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {copied ? "✓ 복사됨" : "🔗 복사"}
        </button>
      </div>

      {typeof navigator !== "undefined" && "share" in navigator && (
        <button
          onClick={shareNative}
          className="w-full py-3 px-4 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition"
        >
          공유하기
        </button>
      )}
    </div>
  );
}
