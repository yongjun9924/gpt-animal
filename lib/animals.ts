export interface AnimalTheme {
  bg: string;
  text: string;
  accent: string;
  gradient: string;
}

export const animalThemes: Record<string, AnimalTheme> = {
  default: {
    bg: "bg-amber-50",
    text: "text-amber-900",
    accent: "bg-amber-500",
    gradient: "from-amber-400 to-orange-500",
  },
  "수달": {
    bg: "bg-sky-50",
    text: "text-sky-900",
    accent: "bg-sky-500",
    gradient: "from-sky-400 to-cyan-500",
  },
  "고양이": {
    bg: "bg-purple-50",
    text: "text-purple-900",
    accent: "bg-purple-500",
    gradient: "from-purple-400 to-pink-500",
  },
  "강아지": {
    bg: "bg-orange-50",
    text: "text-orange-900",
    accent: "bg-orange-500",
    gradient: "from-orange-400 to-yellow-500",
  },
  "여우": {
    bg: "bg-red-50",
    text: "text-red-900",
    accent: "bg-red-500",
    gradient: "from-red-400 to-orange-500",
  },
  "곰": {
    bg: "bg-amber-50",
    text: "text-amber-900",
    accent: "bg-amber-700",
    gradient: "from-amber-600 to-yellow-700",
  },
  "부엉이": {
    bg: "bg-indigo-50",
    text: "text-indigo-900",
    accent: "bg-indigo-500",
    gradient: "from-indigo-400 to-violet-500",
  },
  "돌고래": {
    bg: "bg-blue-50",
    text: "text-blue-900",
    accent: "bg-blue-500",
    gradient: "from-blue-400 to-cyan-500",
  },
  "사자": {
    bg: "bg-yellow-50",
    text: "text-yellow-900",
    accent: "bg-yellow-600",
    gradient: "from-yellow-500 to-amber-600",
  },
  "토끼": {
    bg: "bg-pink-50",
    text: "text-pink-900",
    accent: "bg-pink-500",
    gradient: "from-pink-400 to-rose-500",
  },
  "늑대": {
    bg: "bg-slate-50",
    text: "text-slate-900",
    accent: "bg-slate-600",
    gradient: "from-slate-500 to-gray-700",
  },
  "펭귄": {
    bg: "bg-cyan-50",
    text: "text-cyan-900",
    accent: "bg-cyan-600",
    gradient: "from-cyan-400 to-blue-500",
  },
};

export function getAnimalTheme(animal: string): AnimalTheme {
  return animalThemes[animal] || animalThemes.default;
}
