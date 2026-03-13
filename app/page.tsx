const CUSTOM_GPT_URL = "https://chatgpt.com/g/gpt-animal-test";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="space-y-4">
          <div className="text-7xl animate-bounce">🐾</div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            나는 어떤
            <br />
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              동물
            </span>
            일까?
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            ChatGPT가 당신의 대화 기록과 메모리를 분석해서
            <br />
            <strong>당신과 닮은 동물</strong>을 알려드려요!
          </p>
        </div>

        <div className="space-y-3">
          <a
            href={CUSTOM_GPT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-4 px-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
          >
            테스트 시작하기
          </a>
          <p className="text-sm text-gray-400">
            ChatGPT Plus 계정이 필요해요
          </p>
        </div>

        <div className="pt-8 space-y-6">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
            이렇게 진행돼요
          </h2>
          <div className="grid gap-4 text-left">
            {[
              {
                step: "1",
                icon: "🔗",
                title: "링크 클릭",
                desc: "위 버튼을 눌러 ChatGPT를 열어요",
              },
              {
                step: "2",
                icon: "🤖",
                title: "AI 분석",
                desc: "GPT가 당신의 대화 패턴을 분석해요",
              },
              {
                step: "3",
                icon: "🎉",
                title: "결과 확인",
                desc: "나와 닮은 동물을 확인하고 공유해요",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex items-center gap-4 p-4 bg-white/70 rounded-xl"
              >
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <div className="font-semibold text-gray-800">
                    {item.title}
                  </div>
                  <div className="text-sm text-gray-500">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
