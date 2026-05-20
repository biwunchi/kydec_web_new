'use client';

export default function Hero() {
  return (
    <section className="hero-gradient text-white section-padding min-h-screen flex items-center justify-center relative">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* 배지 */}
        <div className="inline-block mb-8 animate-fade-in-up">
          <span className="badge badge-live">🚀 공식 홈페이지</span>
        </div>

        {/* 메인 헤드라인 */}
        <h1 className="heading-1 mb-6 text-white leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          도구는 AI에게,<br />
          <span className="gradient-text">의미는 우리에게</span>
        </h1>

        {/* 서브헤드라인 */}
        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          AI가 코드를 쓰는 시대, 우리는 <span className="font-semibold text-white">무엇을 만들지</span> 묻는 청년 개발자들의 협동조합입니다.
        </p>

        {/* CTA 버튼 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <a href="#about" className="btn-primary">
            우리를 알아보세요 →
          </a>
          <a href="#ventures" className="btn-secondary">
            우리가 만드는 것
          </a>
        </div>

        {/* KYDEC 정보 */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-gray-400 text-sm tracking-widest uppercase mb-2">
            Korea Young Developers Cooperative
          </p>
          <p className="text-gray-400 text-sm">2024 –</p>
        </div>

        {/* 스크롤 인디케이터 */}
        <div className="mt-20 flex justify-center animate-pulse-soft">
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs text-gray-400 uppercase tracking-widest">스크롤</p>
            <svg
              className="w-5 h-5 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
