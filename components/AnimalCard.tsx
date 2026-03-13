"use client";

import { AnimalResult } from "@/lib/encode";
import { getAnimalTheme } from "@/lib/animals";

export default function AnimalCard({ result }: { result: AnimalResult }) {
  const theme = getAnimalTheme(result.animal);

  return (
    <div className={`w-full max-w-md mx-auto ${theme.bg} rounded-3xl overflow-hidden shadow-xl`}>
      <div
        className={`bg-gradient-to-br ${theme.gradient} p-8 text-center text-white`}
      >
        <div className="text-8xl mb-4">{result.emoji}</div>
        <h2 className="text-3xl font-bold mb-1">{result.animal}</h2>
        <p className="text-white/90 text-lg font-medium">{result.title}</p>
      </div>

      <div className="p-6 space-y-6">
        <div>
          <p className={`${theme.text} leading-relaxed`}>
            {result.description}
          </p>
        </div>

        <div>
          <h3 className={`font-semibold ${theme.text} mb-3`}>
            성격 특성
          </h3>
          <div className="flex flex-wrap gap-2">
            {result.traits.map((trait, i) => (
              <span
                key={i}
                className={`px-3 py-1.5 ${theme.accent} text-white text-sm font-medium rounded-full`}
              >
                {trait}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/80 rounded-xl p-4">
            <div className="text-xs font-semibold text-gray-400 uppercase mb-1">
              잘 맞는 동물
            </div>
            <div className={`font-bold ${theme.text}`}>
              {result.compatibility.good}
            </div>
          </div>
          <div className="bg-white/80 rounded-xl p-4">
            <div className="text-xs font-semibold text-gray-400 uppercase mb-1">
              안 맞는 동물
            </div>
            <div className={`font-bold ${theme.text}`}>
              {result.compatibility.bad}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
