'use client';

const ventures = [
  {
    status: 'NOW OPERATING',
    statusColor: '#ECFDF5',
    statusTextColor: '#047857',
    icon: '📰',
    name: 'DevTimes',
    tagline: 'IT 미디어',
    description: '청년 개발자의 시선으로 IT 산업, 교육, 커리어를 다루는 미디어. "AI로 세상을 묻다" 칼럼 시리즈 연재 중.',
    link: 'devtimes.co.kr',
    href: 'https://devtimes.co.kr',
    featured: true,
  },
  {
    status: 'COMING SOON',
    statusColor: '#DBEAFE',
    statusTextColor: '#1E40AF',
    icon: '🔍',
    name: 'DevPrism',
    tagline: 'IT 교육 분석',
    description: 'URL 비교 · 분야 추천 · 무료 질문. Claude · GPT · Gemini와 세 개 협동조합이 교차 검증한 분석을 24시간 안에 전달합니다.',
  },
  {
    status: 'COMING SOON',
    statusColor: '#DBEAFE',
    statusTextColor: '#1E40AF',
    icon: '🎓',
    name: 'CampTrue',
    tagline: '부트캠프 비교',
    description: 'HRD-Net 기반 IT 부트캠프 데이터를 AI 감성 분석·키워드 추출로 정리한 비교·추천 서비스.',
  },
  {
    status: 'COMING SOON',
    statusColor: '#DBEAFE',
    statusTextColor: '#1E40AF',
    icon: '🚀',
    name: 'DevReady',
    tagline: 'AI 협업 빌더',
    description: '"팀이 안 모여도 프로젝트는 끝난다." AI가 비어 있는 팀 역할을 채워주는 커리어·포트폴리오 빌더.',
  },
  {
    status: 'COMING SOON',
    statusColor: '#DBEAFE',
    statusTextColor: '#1E40AF',
    icon: '✉️',
    name: 'DevTimes Brief',
    tagline: '뉴스레터',
    description: '입문자에게 도움이 되는 IT 교육·커리어 큐레이션을 메일로.',
  },
];

export default function Ventures() {
  return (
    <section id="ventures" style={{ padding: '6rem 2rem', backgroundColor: '#F9FAFB' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        {/* 헤더 */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span
            style={{
              display: 'inline-block',
              backgroundColor: '#ECFDF5',
              color: '#047857',
              padding: '0.5rem 1rem',
              borderRadius: '9999px',
              fontSize: '0.875rem',
              fontWeight: '600',
            }}
          >
            우리의 프로젝트
          </span>
          <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginTop: '1rem', marginBottom: '1rem', color: '#111827' }}>
            우리가 만드는 것
          </h2>
          <p style={{ color: '#4B5563', fontSize: '1.125rem', marginTop: '1rem', maxWidth: '32rem', margin: '1rem auto 0' }}>
            청년 개발자의 시각으로 기술의 의미를 정의하는 4가지 방식
          </p>
        </div>

        {/* 첫 번째 (라이브) */}
        <div style={{ marginBottom: '2rem' }}>
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '1rem',
              borderLeft: '4px solid #2563EB',
              padding: '3rem',
              border: '2px solid #BFDBFE',
              background: 'linear-gradient(to bottom right, #F0F9FF, #E0F2FE)',
              display: 'flex',
              gap: '2rem',
              alignItems: 'flex-start',
            }}
          >
            <div style={{ fontSize: '4rem', flexShrink: 0 }}>{ventures[0].icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                <span
                  style={{
                    display: 'inline-block',
                    backgroundColor: ventures[0].statusColor,
                    color: ventures[0].statusTextColor,
                    padding: '0.5rem 1rem',
                    borderRadius: '9999px',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                  }}
                >
                  {ventures[0].status}
                </span>
                <p style={{ color: '#10B981', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  현재 운영 중
                </p>
              </div>
              <h3 style={{ fontSize: '1.875rem', color: '#111827', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                {ventures[0].name}
              </h3>
              <p style={{ color: '#2563EB', fontWeight: '600', marginBottom: '1rem' }}>{ventures[0].tagline}</p>
              <p style={{ color: '#4B5563', lineHeight: '1.8', fontSize: '1rem', marginBottom: '1.5rem' }}>
                {ventures[0].description}
              </p>
              <a
                href={ventures[0].href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '0.75rem 2rem',
                  backgroundColor: '#3B82F6',
                  color: 'white',
                  fontWeight: '600',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  transition: 'background-color 0.3s',
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#2563EB')}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#3B82F6')}
              >
                방문하기 →
              </a>
            </div>
          </div>
        </div>

        {/* 준비 중인 서비스들 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {ventures.slice(1).map((venture, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'white',
                borderRadius: '0.75rem',
                border: '1px solid #E5E7EB',
                padding: '2rem',
                transition: 'all 0.3s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = '#10B981';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = '#E5E7EB';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{venture.icon}</div>
              <div style={{ marginBottom: '1rem' }}>
                <span
                  style={{
                    display: 'inline-block',
                    backgroundColor: venture.statusColor,
                    color: venture.statusTextColor,
                    padding: '0.5rem 1rem',
                    borderRadius: '9999px',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                  }}
                >
                  {venture.status}
                </span>
              </div>
              <h3 style={{ fontSize: '1.5rem', color: '#111827', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                {venture.name}
              </h3>
              <p style={{ color: '#10B981', fontWeight: '600', marginBottom: '1rem', fontSize: '0.875rem' }}>
                {venture.tagline}
              </p>
              <p style={{ color: '#4B5563', lineHeight: '1.6', fontSize: '0.95rem' }}>
                {venture.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
