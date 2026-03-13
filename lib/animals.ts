export interface AnimalTheme {
  bg: string;
  text: string;
  accent: string;
  gradient: string;
}

export interface AnimalProfile {
  name: string;
  emoji: string;
  title: string;
  description: string;
  traits: string[];
  compatibility: { good: string; bad: string };
  theme: AnimalTheme;
  // 점수 기준: energy, social, thinking, planning, curiosity
  match: Record<string, [number, number]>; // [min, max] 범위
}

export const animals: AnimalProfile[] = [
  {
    name: "수달",
    emoji: "🦦",
    title: "호기심 가득한 수달",
    description: "당신은 새로운 것에 끊임없이 호기심을 느끼고, 사람들과 어울리길 좋아하는 수달 타입이에요. 뭐든 재밌어 보이면 일단 뛰어드는 에너지와 긍정적인 바이브가 매력이죠!",
    traits: ["호기심 대마왕", "사교적", "긍정 에너지", "적응력 갑"],
    compatibility: { good: "🐬 돌고래", bad: "🐺 늑대" },
    theme: { bg: "bg-sky-50", text: "text-sky-900", accent: "bg-sky-500", gradient: "from-sky-400 to-cyan-500" },
    match: { curiosity: [3, 99], social: [1, 99], energy: [1, 99] },
  },
  {
    name: "고양이",
    emoji: "🐱",
    title: "독립적인 고양이",
    description: "당신은 자기만의 세계가 확고한 고양이 타입이에요. 혼자만의 시간을 소중히 여기고, 관찰력이 뛰어나서 남들이 못 보는 것도 잘 캐치하죠.",
    traits: ["독립적", "관찰력 뛰어남", "마이웨이", "감성적"],
    compatibility: { good: "🦉 부엉이", bad: "🐶 강아지" },
    theme: { bg: "bg-purple-50", text: "text-purple-900", accent: "bg-purple-500", gradient: "from-purple-400 to-pink-500" },
    match: { social: [-99, -2], thinking: [0, 99] },
  },
  {
    name: "강아지",
    emoji: "🐶",
    title: "에너지 넘치는 강아지",
    description: "당신은 사람을 좋아하고 에너지가 넘치는 강아지 타입이에요! 충성스럽고 따뜻한 성격으로 주변에 사랑받는 존재. 같이 있으면 기분이 좋아지는 사람이에요.",
    traits: ["에너지 폭발", "사람 좋아", "충성스러움", "긍정적"],
    compatibility: { good: "🐰 토끼", bad: "🐱 고양이" },
    theme: { bg: "bg-orange-50", text: "text-orange-900", accent: "bg-orange-500", gradient: "from-orange-400 to-yellow-500" },
    match: { social: [3, 99], energy: [2, 99] },
  },
  {
    name: "여우",
    emoji: "🦊",
    title: "영리한 여우",
    description: "당신은 상황 판단이 빠르고 적응력이 뛰어난 여우 타입이에요. 어디서든 잘 섞이면서도 자기 이익은 절대 놓치지 않는 영리함이 매력이죠.",
    traits: ["영리함", "적응력", "눈치 빠름", "전략적"],
    compatibility: { good: "🦉 부엉이", bad: "🐻 곰" },
    theme: { bg: "bg-red-50", text: "text-red-900", accent: "bg-red-500", gradient: "from-red-400 to-orange-500" },
    match: { thinking: [1, 99], curiosity: [1, 99], planning: [-1, 1] },
  },
  {
    name: "곰",
    emoji: "🐻",
    title: "듬직한 곰",
    description: "당신은 묵묵하게 자기 할 일을 하는 듬직한 곰 타입이에요. 말보다 행동으로 보여주는 스타일이고, 한번 시작하면 끝까지 해내는 끈기가 있어요.",
    traits: ["듬직함", "끈기", "행동파", "신뢰감"],
    compatibility: { good: "🐧 펭귄", bad: "🦊 여우" },
    theme: { bg: "bg-amber-50", text: "text-amber-900", accent: "bg-amber-700", gradient: "from-amber-600 to-yellow-700" },
    match: { energy: [1, 99], planning: [2, 99], social: [-1, 1] },
  },
  {
    name: "부엉이",
    emoji: "🦉",
    title: "지혜로운 부엉이",
    description: "당신은 깊이 생각하고 분석하는 부엉이 타입이에요. 차분하게 상황을 관찰하고 핵심을 꿰뚫는 통찰력이 남다르죠. 조용하지만 한마디 하면 묵직해요.",
    traits: ["분석적", "지혜로움", "차분함", "통찰력"],
    compatibility: { good: "🐱 고양이", bad: "🐶 강아지" },
    theme: { bg: "bg-indigo-50", text: "text-indigo-900", accent: "bg-indigo-500", gradient: "from-indigo-400 to-violet-500" },
    match: { thinking: [3, 99], social: [-99, 0], energy: [-99, 0] },
  },
  {
    name: "돌고래",
    emoji: "🐬",
    title: "소통왕 돌고래",
    description: "당신은 소통 능력이 뛰어나고 지능적인 돌고래 타입이에요. 사람들 사이에서 조화를 이루면서도 자기 생각을 잘 표현하는 균형 잡힌 성격이 매력이에요.",
    traits: ["소통 능력", "지능적", "조화로움", "균형감"],
    compatibility: { good: "🦦 수달", bad: "🐺 늑대" },
    theme: { bg: "bg-blue-50", text: "text-blue-900", accent: "bg-blue-500", gradient: "from-blue-400 to-cyan-500" },
    match: { social: [2, 99], thinking: [1, 99] },
  },
  {
    name: "사자",
    emoji: "🦁",
    title: "당당한 사자",
    description: "당신은 리더십이 넘치고 당당한 사자 타입이에요. 자신감 있게 앞장서고, 계획을 세워 팀을 이끄는 능력이 있어요. 카리스마가 넘치는 존재감!",
    traits: ["리더십", "자신감", "계획적", "카리스마"],
    compatibility: { good: "🐺 늑대", bad: "🐱 고양이" },
    theme: { bg: "bg-yellow-50", text: "text-yellow-900", accent: "bg-yellow-600", gradient: "from-yellow-500 to-amber-600" },
    match: { energy: [2, 99], planning: [2, 99], social: [1, 99] },
  },
  {
    name: "토끼",
    emoji: "🐰",
    title: "섬세한 토끼",
    description: "당신은 감수성이 풍부하고 세심한 토끼 타입이에요. 다른 사람의 감정을 잘 읽고 공감하는 능력이 뛰어나요. 부드럽지만 내면은 의외로 강해요.",
    traits: ["감수성 풍부", "세심함", "공감 능력", "부드러움"],
    compatibility: { good: "🐶 강아지", bad: "🦁 사자" },
    theme: { bg: "bg-pink-50", text: "text-pink-900", accent: "bg-pink-500", gradient: "from-pink-400 to-rose-500" },
    match: { thinking: [-99, -1], social: [1, 99], energy: [-99, 0] },
  },
  {
    name: "늑대",
    emoji: "🐺",
    title: "독립적인 늑대",
    description: "당신은 독립적이면서도 필요할 때 팀워크를 발휘하는 늑대 타입이에요. 혼자서도 잘 해내지만, 진짜 중요한 순간엔 동료를 위해 전력을 다하는 멋진 사람이에요.",
    traits: ["독립적", "전략적", "팀워크", "결단력"],
    compatibility: { good: "🦁 사자", bad: "🦦 수달" },
    theme: { bg: "bg-slate-50", text: "text-slate-900", accent: "bg-slate-600", gradient: "from-slate-500 to-gray-700" },
    match: { social: [-99, 0], planning: [1, 99], energy: [1, 99] },
  },
  {
    name: "펭귄",
    emoji: "🐧",
    title: "헌신적인 펭귄",
    description: "당신은 끈기 있고 헌신적인 펭귄 타입이에요. 한번 정한 목표는 끝까지 밀고 나가며, 소중한 사람들을 위해 묵묵히 노력하는 따뜻한 성격이에요.",
    traits: ["끈기", "헌신적", "성실함", "따뜻함"],
    compatibility: { good: "🐻 곰", bad: "🦊 여우" },
    theme: { bg: "bg-cyan-50", text: "text-cyan-900", accent: "bg-cyan-600", gradient: "from-cyan-400 to-blue-500" },
    match: { planning: [3, 99], energy: [-99, 0], social: [0, 2] },
  },
];

export type Scores = Record<string, number>;

export function calculateAnimal(scores: Scores): AnimalProfile {
  let bestAnimal = animals[0];
  let bestScore = -Infinity;

  for (const animal of animals) {
    let score = 0;
    for (const [axis, [min, max]] of Object.entries(animal.match)) {
      const val = scores[axis] || 0;
      if (val >= min && val <= max) {
        score += 2;
      } else {
        // 범위에서 얼마나 벗어났는지
        const dist = val < min ? min - val : val - max;
        score -= dist;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestAnimal = animal;
    }
  }

  return bestAnimal;
}

export function getAnimalTheme(animal: string): AnimalTheme {
  const found = animals.find((a) => a.name === animal);
  return (
    found?.theme || {
      bg: "bg-amber-50",
      text: "text-amber-900",
      accent: "bg-amber-500",
      gradient: "from-amber-400 to-orange-500",
    }
  );
}
