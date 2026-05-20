'use client';

const manifestos = [
  {
    number: '하나',
    title: '우리는 도구가 아니라 질문을 만든다',
    description: 'AI는 빠르고 정확하지만, 무엇을 물어야 하는지는 알지 못합니다. 우리는 질문을 설계하는 사람입니다.',
    icon: '💭',
  },
  {
    number: '둘',
    title: '코드보다 맥락이 먼저다',
    description: '어떤 문제를, 누구를 위해, 왜 푸는가. 이 세 가지가 빠진 코드는 결국 폐기됩니다. 우리는 맥락에서 시작합니다.',
    icon: '🧭',
  },
  {
    number: '셋',
    title: '속도는 목적이 아니라 결과다',
    description: '빠르게 만들기 위해 빠르게 만들지 않습니다. 옳은 방향을 먼저 잡고, 그다음 도구의 속도를 빌립니다.',
    icon: '🎯',
  },
  {
    number: '넷',
    title: '혼자보다 함께가 더 멀리 간다',
    description: '협동조합은 1인 개발자의 시대에 대한 우리의 답입니다. 각자의 강점을 모아 한 명이 만들 수 없는 것을 만듭니다.',
    icon: '🤝',
  },
  {
    number: '다섯',
    title: '청년의 일은 청년이 정의한다',
    description: '무엇이 좋은 일인지, 어떤 커리어가 의미 있는지 — 기성 산업이 아니라 우리가 직접 답합니다.',
    icon: '✨',
  },
];

export default function Manifesto() {
  return (
    <section style={{ padding: '6rem 2rem', backgroundColor: '#F9FAFB' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span
            style={{
              display: 'inline-block',
              backgroundColor: '#DBEAFE',
              color: '#1E40AF',
              padding: '0.5rem 1rem',
              borderRadius: '9999px',
              fontSize: '0.875rem',
              fontWeight: '600',
            }}
          >
            KYDEC의 철학
          </span>
          <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginTop: '1rem', marginBottom: '1rem', color: '#111827' }}>
            다섯 가지 명제
          </h2>
          <p style={{ color: '#4B5563', fontSize: '1.125rem', marginTop: '1rem', maxWidth: '32rem', margin: '1rem auto 0' }}>
            AI의 시대에 인간의 가치를 재정의하는 우리의 신념
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          {manifestos.map((manifesto, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'white',
                borderRadius: '0.75rem',
                borderLeft: '4px solid #2563EB',
                padding: '1.5rem',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                transition: 'all 0.3s',
                cursor: 'pointer',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
                e.currentTarget.style.backgroundColor = '#F0F9FF';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
                e.currentTarget.style.backgroundColor = 'white';
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{manifesto.icon}</div>
              <div style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#2563EB', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                {manifesto.number}
              </div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.75rem' }}>
                {manifesto.title}
              </h3>
              <p style={{ color: '#4B5563', fontSize: '0.875rem', lineHeight: '1.6' }}>
                {manifesto.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
