'use client';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#111827', color: '#9CA3AF' }}>
      <div style={{ padding: '6rem 2rem', borderTop: '1px solid #374151' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
            {/* 브랜드 */}
            <div>
              <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>KYDEC</h3>
              <p style={{ fontSize: '0.875rem', color: '#6B7280', marginBottom: '0.5rem' }}>Korea Young Developers Cooperative</p>
              <p style={{ fontSize: '0.875rem', color: '#6B7280', fontStyle: 'italic' }}>
                "도구는 AI에게, 의미는 우리에게"
              </p>
            </div>

            {/* 서비스 */}
            <div>
              <h4 style={{ color: 'white', fontWeight: 'bold', marginBottom: '1.5rem' }}>서비스</h4>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.875rem', lineHeight: '1.8' }}>
                <li>
                  <a
                    href="https://devtimes.co.kr"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#9CA3AF', textDecoration: 'none', transition: 'color 0.3s' }}
                    onMouseOver={(e) => (e.currentTarget.style.color = '#60A5FA')}
                    onMouseOut={(e) => (e.currentTarget.style.color = '#9CA3AF')}
                  >
                    DevTimes
                  </a>
                </li>
                <li style={{ color: '#4B5563' }}>DevPrism</li>
                <li style={{ color: '#4B5563' }}>CampTrue</li>
                <li style={{ color: '#4B5563' }}>DevReady</li>
                <li style={{ color: '#4B5563' }}>DevTimes Brief</li>
              </ul>
            </div>

            {/* 커뮤니티 */}
            <div>
              <h4 style={{ color: 'white', fontWeight: 'bold', marginBottom: '1.5rem' }}>커뮤니티</h4>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.875rem', lineHeight: '1.8' }}>
                <li>
                  <a
                    href="#"
                    style={{ color: '#9CA3AF', textDecoration: 'none', transition: 'color 0.3s' }}
                    onMouseOver={(e) => (e.currentTarget.style.color = '#60A5FA')}
                    onMouseOut={(e) => (e.currentTarget.style.color = '#9CA3AF')}
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{ color: '#9CA3AF', textDecoration: 'none', transition: 'color 0.3s' }}
                    onMouseOver={(e) => (e.currentTarget.style.color = '#60A5FA')}
                    onMouseOut={(e) => (e.currentTarget.style.color = '#9CA3AF')}
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{ color: '#9CA3AF', textDecoration: 'none', transition: 'color 0.3s' }}
                    onMouseOver={(e) => (e.currentTarget.style.color = '#60A5FA')}
                    onMouseOut={(e) => (e.currentTarget.style.color = '#9CA3AF')}
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>

            {/* 문의 */}
            <div>
              <h4 style={{ color: 'white', fontWeight: 'bold', marginBottom: '1.5rem' }}>문의</h4>
              <p style={{ fontSize: '0.875rem', color: '#9CA3AF', marginBottom: '0.5rem' }}>
                <a
                  href="mailto:contact@kydec.kr"
                  style={{ color: '#9CA3AF', textDecoration: 'none', transition: 'color 0.3s' }}
                  onMouseOver={(e) => (e.currentTarget.style.color = '#60A5FA')}
                  onMouseOut={(e) => (e.currentTarget.style.color = '#9CA3AF')}
                >
                  contact@kydec.kr
                </a>
              </p>
              <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>모든 문의를 환영합니다.</p>
            </div>
          </div>

          {/* 구분선 및 하단 */}
          <div style={{ borderTop: '1px solid #374151', paddingTop: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', textAlign: 'center' }}>
              <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>© 2024 KYDEC. All rights reserved.</p>
              <p style={{ fontSize: '0.875rem', color: '#9CA3AF', fontWeight: '600' }}>청년의 일은 청년이 정의한다</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
