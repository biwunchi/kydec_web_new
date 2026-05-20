'use client';

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold mb-12">우리는 누구인가</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Main description */}
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <span className="font-bold text-gray-900">청년개발자협동조합 (KYDEC)</span>은 AI 시대를 살아가는 청년 개발자, 기획자, 교육자가 함께 만든 협동조합입니다.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              기술이 사람을 대체하는 시대가 아니라, <span className="font-bold">기술의 의미를 사람이 정의하는 시대</span>라고 믿습니다. 우리는 그 정의를 만드는 일에 미디어, 교육, 커리어, 제품이라는 네 가지 방식으로 참여합니다.
            </p>
          </div>

          {/* Stats/Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold text-blue-600 uppercase mb-2">함께하는 사람들</h3>
              <p className="text-gray-700">개발자 · 기획자 · 강사 · 교수 · 운영자</p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-blue-600 uppercase mb-2">활동 영역</h3>
              <p className="text-gray-700">IT 미디어, 교육 분석, 커리어 빌더, 부트캠프 비교, AI 협업 도구</p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-blue-600 uppercase mb-2">운영 방식</h3>
              <p className="text-gray-700">협동조합 (출자·운영·이익 분배의 민주적 구조)</p>
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">우리의 철학</h3>
          <p className="text-gray-700 leading-relaxed">
            우리는 단순히 코드를 짜거나 회의를 여는 것이 아닙니다. 우리는 AI의 시대에 인간의 가치를 재정의하고, 청년 개발자들이 의미 있는 일을 할 수 있는 환경을 만드는 일에 집중합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
