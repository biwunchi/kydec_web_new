'use client';

export default function Hero() {
  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 50%, #1E3A8A 100%)',
        color: 'white',
        padding: '6rem 2rem',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '40rem', textAlign: 'center', zIndex: 10, position: 'relative' }}>
        {/* 배지 */}
        <div style={{ marginBottom: '2rem', display: 'inline-block' }}>
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
            🚀 공식 홈페이지
          </span>
        </div>

        {/* 메인 헤드라인 */}
        <h1
          style={{
            fontSize: '3.5rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            lineHeight: '1.2',
          }}
        >
          도구는 AI에게,
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #3B82F6 0%, #10B981 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            의미는 우리에게
          </span>
        </h1>

        {/* 서브헤드라인 */}
        <p
          style={{
            fontSize: '1.25rem',
            color: '#D1D5DB',
            lineHeight: '1.5',
            marginBottom: '3rem',
            maxWidth: '32rem',
            margin: '0 auto 3rem',
          }}
        >
          AI가 코드를 쓰는 시대, 우리는 <span style={{ fontWeight: '600', color: 'white' }}>무엇을 만들지</span> 묻는 청년 개발자들의 협동조합입니다.
        </p>

        {/* CTA 버튼 */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '4rem', flexWrap: 'wrap' }}>
          <a
            href="#about"
            style={{
              padding: '0.75rem 2rem',
              backgroundColor: '#3B82F6',
              color: 'white',
              fontWeight: '600',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'background-color 0.3s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#2563EB')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#3B82F6')}
          >
            우리를 알아보세요 →
          </a>
          <a
            href="#ventures"
            style={{
              padding: '0.75rem 2rem',
              backgroundColor: '#F3F4F6',
              color: '#111827',
              fontWeight: '600',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'background-color 0.3s',
              border: '1px solid #E5E7EB',
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#E5E7EB')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#F3F4F6')}
          >
            우리가 만드는 것
          </a>
        </div>

        {/* KYDEC 정보 */}
        <div>
          <p style={{ fontSize: '0.875rem', color: '#9CA3AF', letterSpacing: '0.1em', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
            Korea Young Developers Cooperative
          </p>
          <p style={{ fontSize: '0.875rem', color: '#9CA3AF' }}>2024 –</p>
        </div>
      </div>
    </section>
  );
}
