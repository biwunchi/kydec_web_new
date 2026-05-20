'use client';

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* 좌측 - 텍스트 */}
          <div>
            <span className="badge badge-live">KYDEC</span>
            <h2 className="heading-2 mt-6 mb-6 text-gray-900">
              우리는 누구인가
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                <span className="font-bold text-gray-900">청년개발자협동조합 (KYDEC)</span>은 AI 시대를 살아가는 청년 개발자, 기획자, 교육자가 함께 만든 협동조합입니다.
              </p>
              <p className="text-lg">
                기술이 사람을 대체하는 시대가 아니라, <span className="font-bold">기술의 의미를 사람이 정의하는 시대</span>라고 믿습니다.
              </p>
              <p className="text-lg">
                우리는 그 정의를 만드는 일에 <span className="text-emerald-600 font-semibold">미디어, 교육, 커리어, 제품</span>이라는 네 가지 방식으로 참여합니다.
              </p>
            </div>
          </div>

          {/* 우측 - 정보 카드 */}
          <div className="space-y-6">
            <div className="card p-8">
              <div className="text-3xl mb-4">👥</div>
              <h3 className="text-sm font-bold text-blue-600 uppercase mb-3">함께하는 사람들</h3>
              <p className="text-gray-700 font-semibold">
                개발자 · 기획자 · 강사 · 교수 · 운영자
              </p>
            </div>

            <div className="card p-8">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-sm font-bold text-blue-600 uppercase mb-3">활동 영역</h3>
              <p className="text-gray-700 font-semibold">
                IT 미디어, 교육 분석, 커리어 빌더, 부트캠프 비교, AI 협업 도구
              </p>
            </div>

            <div className="card p-8">
              <div className="text-3xl mb-4">⚖️</div>
              <h3 className="text-sm font-bold text-blue-600 uppercase mb-3">운영 방식</h3>
              <p className="text-gray-700 font-semibold">
                협동조합 (출자·운영·이익 분배의 민주적 구조)
              </p>
            </div>
          </div>
        </div>

        {/* 철학 섹션 */}
        <div className="divider mb-12"></div>
        <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-12 border border-blue-100">
          <h3 className="heading-3 text-gray-900 mb-6">우리의 철학</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            우리는 단순히 코드를 짜거나 회의를 여는 것이 아닙니다. 우리는 <span className="font-bold">AI의 시대에 인간의 가치를 재정의</span>하고, 청년 개발자들이 의미 있는 일을 할 수 있는 환경을 만드는 일에 집중합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
