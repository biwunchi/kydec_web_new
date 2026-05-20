'use client';

const ventures = [
  {
    status: 'NOW OPERATING',
    statusClass: 'badge-live',
    icon: '📰',
    name: 'DevTimes',
    tagline: 'IT 미디어',
    description:
      '청년 개발자의 시선으로 IT 산업, 교육, 커리어를 다루는 미디어. "AI로 세상을 묻다" 칼럼 시리즈 연재 중.',
    link: 'devtimes.co.kr',
    href: 'https://devtimes.co.kr',
    accent: 'from-blue-50 to-cyan-50',
  },
  {
    status: 'COMING SOON',
    statusClass: 'badge-coming',
    icon: '🔍',
    name: 'DevPrism',
    tagline: 'IT 교육 분석',
    description:
      'URL 비교 · 분야 추천 · 무료 질문. Claude · GPT · Gemini와 세 개 협동조합이 교차 검증한 분석을 24시간 안에 전달합니다.',
  },
  {
    status: 'COMING SOON',
    statusClass: 'badge-coming',
    icon: '🎓',
    name: 'CampTrue',
    tagline: '부트캠프 비교',
    description:
      'HRD-Net 기반 IT 부트캠프 데이터를 AI 감성 분석·키워드 추출로 정리한 비교·추천 서비스.',
  },
  {
    status: 'COMING SOON',
    statusClass: 'badge-coming',
    icon: '🚀',
    name: 'DevReady',
    tagline: 'AI 협업 빌더',
    description:
      '"팀이 안 모여도 프로젝트는 끝난다." AI가 비어 있는 팀 역할을 채워주는 커리어·포트폴리오 빌더.',
  },
  {
    status: 'COMING SOON',
    statusClass: 'badge-coming',
    icon: '✉️',
    name: 'DevTimes Brief',
    tagline: '뉴스레터',
    description:
      '입문자에게 도움이 되는 IT 교육·커리어 큐레이션을 메일로.',
  },
];

export default function Ventures() {
  return (
    <section id="ventures" className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-16">
          <span className="badge badge-live">우리의 프로젝트</span>
          <h2 className="heading-2 mt-4 text-gray-900">
            우리가 만드는 것
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            청년 개발자의 시각으로 기술의 의미를 정의하는 4가지 방식
          </p>
        </div>

        {/* 첫 번째 (라이브) - 특별하게 표시 */}
        <div className="mb-8">
          <div className="card card-accent bg-gradient-to-br from-blue-50 to-cyan-50 p-8 lg:p-12 border-2 border-blue-200">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="text-6xl flex-shrink-0">{ventures[0].icon}</div>
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`badge ${ventures[0].statusClass}`}>
                    {ventures[0].status}
                  </span>
                  <p className="text-sm text-emerald-600 font-semibold uppercase tracking-wide">
                    현재 운영 중
                  </p>
                </div>
                <h3 className="heading-3 text-gray-900 mb-2">{ventures[0].name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{ventures[0].tagline}</p>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  {ventures[0].description}
                </p>
                <a
                  href={ventures[0].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  방문하기 →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 준비 중인 서비스들 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ventures.slice(1).map((venture, index) => (
            <div key={index} className="card p-8 hover:border-emerald-200">
              <div className="text-5xl mb-4">{venture.icon}</div>
              <div className="mb-4">
                <span className={`badge ${venture.statusClass}`}>
                  {venture.status}
                </span>
              </div>
              <h3 className="heading-3 text-gray-900 mb-2">{venture.name}</h3>
              <p className="text-emerald-600 font-semibold mb-4 text-sm">
                {venture.tagline}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {venture.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
