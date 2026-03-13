import Link from "next/link";

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
            간단한 10가지 질문으로 알아보는
            <br />
            <strong>나와 닮은 동물 유형!</strong>
          </p>
        </div>

        <Link
          href="/quiz"
          className="block w-full py-4 px-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
        >
          테스트 시작하기
        </Link>

        <p className="text-sm text-gray-400">약 1분 소요</p>

        <div className="pt-4 space-y-6">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
            이렇게 진행돼요
          </h2>
          <div className="grid gap-4 text-left">
            {[
              { icon: "✏️", title: "10가지 질문", desc: "간단한 선택지를 골라요" },
              { icon: "🧠", title: "성격 분석", desc: "5가지 성격 축으로 분석해요" },
              { icon: "🎉", title: "동물 매칭", desc: "나와 닮은 동물을 확인하고 공유!" },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-4 p-4 bg-white/70 rounded-xl"
              >
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <div className="font-semibold text-gray-800">{item.title}</div>
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
