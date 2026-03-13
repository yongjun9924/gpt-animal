"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { questions } from "@/lib/questions";
import { calculateAnimal, Scores } from "@/lib/animals";
import { encodeResult } from "@/lib/encode";

export default function QuizPage() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Scores>({
    energy: 0,
    social: 0,
    thinking: 0,
    planning: 0,
    curiosity: 0,
  });
  const [selected, setSelected] = useState<number | null>(null);

  const question = questions[current];
  const progress = ((current + 1) / questions.length) * 100;

  const handleSelect = (optionIndex: number) => {
    setSelected(optionIndex);

    const option = question.options[optionIndex];
    const newScores = { ...scores };
    for (const [axis, value] of Object.entries(option.scores)) {
      newScores[axis] = (newScores[axis] || 0) + value;
    }

    setTimeout(() => {
      if (current < questions.length - 1) {
        setScores(newScores);
        setCurrent(current + 1);
        setSelected(null);
      } else {
        // 마지막 질문 — 결과 계산
        const animal = calculateAnimal(newScores);
        const encoded = encodeResult({
          animal: animal.name,
          emoji: animal.emoji,
          title: animal.title,
          description: animal.description,
          traits: animal.traits,
          compatibility: animal.compatibility,
        });
        router.push(`/result?d=${encoded}`);
      }
    }, 400);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="w-full max-w-md space-y-6">
        {/* Progress bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-500">
            <span>{current + 1} / {questions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-bold text-gray-800 mb-6 leading-relaxed">
            {question.text}
          </h2>

          <div className="space-y-3">
            {question.options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                disabled={selected !== null}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                  selected === i
                    ? "border-amber-500 bg-amber-50 scale-[0.98]"
                    : selected !== null
                    ? "border-gray-100 bg-gray-50 opacity-50"
                    : "border-gray-200 bg-white hover:border-amber-300 hover:bg-amber-50 active:scale-[0.98]"
                }`}
              >
                <span className="font-medium text-gray-700">{option.text}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
