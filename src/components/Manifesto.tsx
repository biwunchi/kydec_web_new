'use client';

const manifestos = [
  {
    number: '하나',
    title: '우리는 도구가 아니라 질문을 만든다',
    description:
      'AI는 빠르고 정확하지만, 무엇을 물어야 하는지는 알지 못합니다. 우리는 질문을 설계하는 사람입니다.',
    icon: '💭',
  },
  {
    number: '둘',
    title: '코드보다 맥락이 먼저다',
    description:
      '어떤 문제를, 누구를 위해, 왜 푸는가. 이 세 가지가 빠진 코드는 결국 폐기됩니다. 우리는 맥락에서 시작합니다.',
    icon: '🧭',
  },
  {
    number: '셋',
    title: '속도는 목적이 아니라 결과다',
    description:
      '빠르게 만들기 위해 빠르게 만들지 않습니다. 옳은 방향을 먼저 잡고, 그다음 도구의 속도를 빌립니다.',
    icon: '🎯',
  },
  {
    number: '넷',
    title: '혼자보다 함께가 더 멀리 간다',
    description:
      '협동조합은 1인 개발자의 시대에 대한 우리의 답입니다. 각자의 강점을 모아 한 명이 만들 수 없는 것을 만듭니다.',
    icon: '🤝',
  },
  {
    number: '다섯',
    title: '청년의 일은 청년이 정의한다',
    description:
      '무엇이 좋은 일인지, 어떤 커리어가 의미 있는지 — 기성 산업이 아니라 우리가 직접 답합니다.',
    icon: '✨',
  },
];

export default function Manifesto() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="badge badge-coming">KYDEC의 철학</span>
          <h2 className="heading-2 mt-4 text-gray-900">
            다섯 가지 명제
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            AI의 시대에 인간의 가치를 재정의하는 우리의 신념
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {manifestos.map((manifesto, index) => (
            <div
              key={index}
              className="card card-accent p-6 flex flex-col h-full group hover:bg-gradient-to-br hover:from-blue-50 hover:to-emerald-50"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition duration-300">
                {manifesto.icon}
              </div>
              <div className="text-sm font-bold text-blue-600 uppercase mb-2">
                {manifesto.number}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug">
                {manifesto.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                {manifesto.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
