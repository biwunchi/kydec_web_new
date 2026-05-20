'use client';

const ventures = [
  {
    status: 'NOW OPERATING',
    statusColor: 'bg-green-100 text-green-800',
    name: 'DevTimes',
    subtitle: 'IT 인터넷 신문',
    description:
      '청년 개발자의 시선으로 IT 산업, 교육, 커리어를 다루는 미디어. "AI로 세상을 묻다" 칼럼 시리즈 연재 중.',
    link: 'devtimes.co.kr',
    href: 'https://devtimes.co.kr',
  },
  {
    status: 'COMING SOON',
    statusColor: 'bg-blue-100 text-blue-800',
    name: 'DevPrism',
    subtitle: 'IT 교육 선택 전문가 분석 보고서',
    description:
      'URL 비교 · 분야 추천 · 무료 질문. Claude · GPT · Gemini와 세 개 협동조합(IT전문강사·IT개발자·청년개발자)이 교차 검증한 분석을 24시간 안에 전달합니다.',
  },
  {
    status: 'COMING SOON',
    statusColor: 'bg-blue-100 text-blue-800',
    name: 'CampTrue',
    subtitle: '정부지원 부트캠프 비교 플랫폼',
    description:
      'HRD-Net 기반 IT 부트캠프 데이터를 AI 감성 분석·키워드 추출로 정리한 비교·추천 서비스.',
  },
  {
    status: 'COMING SOON',
    statusColor: 'bg-blue-100 text-blue-800',
    name: 'DevReady',
    subtitle: 'AI 협업 프로젝트 빌더',
    description:
      '"팀이 안 모여도 프로젝트는 끝난다." AI가 비어 있는 팀 역할을 채워주는 커리어·포트폴리오 빌더.',
  },
  {
    status: 'COMING SOON',
    statusColor: 'bg-blue-100 text-blue-800',
    name: 'DevTimes Brief',
    subtitle: '교육·커리어 뉴스레터',
    description:
      '입문자에게 도움이 되는 IT 교육·커리어 큐레이션을 메일로.',
  },
];

export default function Ventures() {
  return (
    <section id="ventures" className="section-padding bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4">우리가 만드는 것</h2>
        <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
          청년 개발자의 시각으로 기술의 의미를 정의하는 4가지 방식
        </p>

        <div className="grid grid-cols-1 gap-6">
          {ventures.map((venture, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition border-l-4 border-blue-600"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className={`inline-block px-3 py-1 text-sm font-bold rounded ${venture.statusColor}`}>
                    {venture.status}
                  </span>
                  <h3 className="text-3xl font-bold text-gray-900 mt-4 mb-2">{venture.name}</h3>
                  <p className="text-lg text-blue-600 font-semibold">{venture.subtitle}</p>
                </div>
                {venture.href && (
                  <a
                    href={venture.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition text-sm whitespace-nowrap ml-4"
                  >
                    방문하기 →
                  </a>
                )}
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">{venture.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
