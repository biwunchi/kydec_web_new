'use client';

export default function About() {
  return (
    <section id="about" style={{ padding: '6rem 2rem', backgroundColor: 'white' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', marginBottom: '4rem' }}>
          {/* 좌측 텍스트 */}
          <div>
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
              KYDEC
            </span>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginTop: '1.5rem', marginBottom: '1.5rem', color: '#111827' }}>
              우리는 누구인가
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#4B5563', lineHeight: '1.8', fontSize: '1.125rem' }}>
              <p>
                <span style={{ fontWeight: 'bold', color: '#111827' }}>청년개발자협동조합 (KYDEC)</span>은 AI 시대를 살아가는 청년 개발자, 기획자, 교육자가 함께 만든 협동조합입니다.
              </p>
              <p>
                기술이 사람을 대체하는 시대가 아니라, <span style={{ fontWeight: 'bold' }}>기술의 의미를 사람이 정의하는 시대</span>라고 믿습니다.
              </p>
              <p>
                우리는 그 정의를 만드는 일에 <span style={{ color: '#10B981', fontWeight: '600' }}>미디어, 교육, 커리어, 제품</span>이라는 네 가지 방식으로 참여합니다.
              </p>
            </div>
          </div>

          {/* 우측 카드 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              { icon: '👥', title: '함께하는 사람들', content: '개발자 · 기획자 · 강사 · 교수 · 운영자' },
              { icon: '🎯', title: '활동 영역', content: 'IT 미디어, 교육 분석, 커리어 빌더, 부트캠프 비교, AI 협업 도구' },
              { icon: '⚖️', title: '운영 방식', content: '협동조합 (출자·운영·이익 분배의 민주적 구조)' },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#F9FAFB',
                  borderRadius: '0.75rem',
                  border: '1px solid #E5E7EB',
                  padding: '2rem',
                  transition: 'all 0.3s',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = '#3B82F6';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(59, 130, 246, 0.1)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = '#E5E7EB';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#3B82F6', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#4B5563', fontWeight: '600' }}>{item.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 철학 섹션 */}
        <div style={{ height: '1px', backgroundColor: '#E5E7EB', marginBottom: '3rem' }}></div>
        <div
          style={{
            background: 'linear-gradient(to bottom right, #F0F9FF, #ECFDF5)',
            borderRadius: '1rem',
            padding: '3rem',
            border: '1px solid #BFDBFE',
          }}
        >
          <h3 style={{ fontSize: '1.875rem', color: '#111827', marginBottom: '1.5rem', fontWeight: 'bold' }}>
            우리의 철학
          </h3>
          <p style={{ fontSize: '1.125rem', color: '#4B5563', lineHeight: '1.8' }}>
            우리는 단순히 코드를 짜거나 회의를 여는 것이 아닙니다. 우리는 <span style={{ fontWeight: 'bold' }}>AI의 시대에 인간의 가치를 재정의</span>하고, 청년 개발자들이 의미 있는 일을 할 수 있는 환경을 만드는 일에 집중합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
