export interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

// 성격 축: energy, social, thinking, planning, curiosity
export const questions: Question[] = [
  {
    id: 1,
    text: "주말에 가장 하고 싶은 건?",
    options: [
      { text: "친구들이랑 신나게 놀기", scores: { energy: 2, social: 2 } },
      { text: "혼자 넷플릭스 정주행", scores: { energy: -1, social: -2 } },
      { text: "새로운 카페나 장소 탐방", scores: { curiosity: 2, energy: 1 } },
      { text: "밀린 할 일 정리하기", scores: { planning: 2, thinking: 1 } },
    ],
  },
  {
    id: 2,
    text: "모임에서 나는 보통...",
    options: [
      { text: "분위기 메이커! 내가 없으면 조용", scores: { social: 2, energy: 2 } },
      { text: "옆에서 조용히 듣고 있는 편", scores: { social: -2, thinking: 1 } },
      { text: "관심 있는 주제가 나오면 폭발적으로 참여", scores: { curiosity: 2, social: 1 } },
      { text: "사람들 사이에서 중재하는 역할", scores: { social: 1, thinking: 1, planning: 1 } },
    ],
  },
  {
    id: 3,
    text: "중요한 결정을 내릴 때 나는?",
    options: [
      { text: "데이터와 논리로 판단", scores: { thinking: 2, planning: 1 } },
      { text: "직감을 믿는다", scores: { thinking: -2, energy: 1 } },
      { text: "주변 사람들 의견을 많이 들어봄", scores: { social: 2, thinking: -1 } },
      { text: "일단 해보고 안 되면 바꾸지 뭐", scores: { planning: -2, curiosity: 1, energy: 1 } },
    ],
  },
  {
    id: 4,
    text: "스트레스 받을 때 나는?",
    options: [
      { text: "운동이나 산책으로 풀기", scores: { energy: 2, planning: 1 } },
      { text: "혼자만의 시간이 필요해", scores: { social: -2, thinking: 1 } },
      { text: "친구한테 전화해서 수다 떨기", scores: { social: 2, energy: 1 } },
      { text: "맛있는 거 먹으면 다 해결", scores: { curiosity: 1, energy: -1 } },
    ],
  },
  {
    id: 5,
    text: "새로운 프로젝트를 시작할 때?",
    options: [
      { text: "계획부터 꼼꼼하게 세움", scores: { planning: 2, thinking: 1 } },
      { text: "일단 시작! 하면서 배우는 타입", scores: { planning: -2, curiosity: 2 } },
      { text: "관련 자료를 깊이 조사부터", scores: { thinking: 2, curiosity: 1 } },
      { text: "같이 할 사람부터 모음", scores: { social: 2, planning: 1 } },
    ],
  },
  {
    id: 6,
    text: "나에게 더 가까운 건?",
    options: [
      { text: "넓고 얕게 아는 제너럴리스트", scores: { curiosity: 2, social: 1 } },
      { text: "좁고 깊게 파는 스페셜리스트", scores: { thinking: 2, curiosity: -1 } },
      { text: "사람을 잘 이해하는 공감왕", scores: { social: 2, thinking: -1 } },
      { text: "묵묵히 실행하는 행동파", scores: { energy: 2, planning: 1 } },
    ],
  },
  {
    id: 7,
    text: "여행 스타일은?",
    options: [
      { text: "분 단위 계획표 필수", scores: { planning: 2, thinking: 1 } },
      { text: "숙소만 잡고 즉흥 여행", scores: { planning: -2, curiosity: 2 } },
      { text: "현지인 추천 맛집이 핵심", scores: { social: 1, curiosity: 1 } },
      { text: "조용한 곳에서 힐링 위주", scores: { energy: -2, social: -1 } },
    ],
  },
  {
    id: 8,
    text: "친구가 고민 상담을 할 때 나는?",
    options: [
      { text: "해결책을 바로 제시해줌", scores: { thinking: 2, energy: 1 } },
      { text: "일단 공감하고 들어줌", scores: { social: 1, thinking: -1 } },
      { text: "비슷한 경험을 공유해줌", scores: { social: 2, curiosity: 1 } },
      { text: "혼자 생각할 시간을 주는 게 낫다고 생각", scores: { social: -1, thinking: 1 } },
    ],
  },
  {
    id: 9,
    text: "내가 가장 듣고 싶은 칭찬은?",
    options: [
      { text: "\"넌 정말 똑똑해\"", scores: { thinking: 2, curiosity: 1 } },
      { text: "\"넌 같이 있으면 편해\"", scores: { social: 2, energy: -1 } },
      { text: "\"넌 정말 열정적이야\"", scores: { energy: 2, curiosity: 1 } },
      { text: "\"넌 믿을 수 있어\"", scores: { planning: 2, social: 1 } },
    ],
  },
  {
    id: 10,
    text: "지금 이 테스트를 하는 이유는?",
    options: [
      { text: "그냥 재밌어 보여서", scores: { curiosity: 2, energy: 1 } },
      { text: "나에 대해 알고 싶어서", scores: { thinking: 2, curiosity: 1 } },
      { text: "친구가 공유해서", scores: { social: 2 } },
      { text: "시간 때우기", scores: { energy: -1, planning: -1 } },
    ],
  },
];
