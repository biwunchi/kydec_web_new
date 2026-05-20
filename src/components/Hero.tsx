'use client';

export default function Hero() {
  return (
    <section className="hero-gradient text-white section-padding min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo/Brand */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">KYDEC</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-2">Korea Young Developers Cooperative</p>
          <p className="text-sm text-gray-400">2024 –</p>
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          도구는 AI에게, 의미는 우리에게
        </h2>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-12">
          AI가 코드를 쓰는 시대,<br />
          우리는 무엇을 만들지 묻는 청년 개발자들의 협동조합입니다.
        </p>

        {/* CTA Button */}
        <div className="flex gap-4 justify-center">
          <a
            href="#about"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition"
          >
            우리를 알아보세요
          </a>
          <a
            href="#ventures"
            className="px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded transition"
          >
            우리가 만드는 것
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-gray-400"
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
    </section>
  );
}
