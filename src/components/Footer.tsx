'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      {/* 메인 푸터 */}
      <div className="section-padding border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* 브랜드 */}
            <div>
              <h3 className="text-white text-2xl font-bold mb-2">KYDEC</h3>
              <p className="text-sm text-gray-500 mb-2">Korea Young Developers Cooperative</p>
              <p className="text-sm text-gray-500 italic">
                "도구는 AI에게, 의미는 우리에게"
              </p>
            </div>

            {/* 서비스 */}
            <div>
              <h4 className="text-white font-bold mb-6">서비스</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="https://devtimes.co.kr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition"
                  >
                    DevTimes
                  </a>
                </li>
                <li className="text-gray-600">DevPrism</li>
                <li className="text-gray-600">CampTrue</li>
                <li className="text-gray-600">DevReady</li>
                <li className="text-gray-600">DevTimes Brief</li>
              </ul>
            </div>

            {/* 커뮤니티 */}
            <div>
              <h4 className="text-white font-bold mb-6">커뮤니티</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>

            {/* 문의 */}
            <div>
              <h4 className="text-white font-bold mb-6">문의</h4>
              <p className="text-sm text-gray-400 mb-2">
                <a
                  href="mailto:contact@kydec.kr"
                  className="hover:text-blue-400 transition"
                >
                  contact@kydec.kr
                </a>
              </p>
              <p className="text-sm text-gray-500">
                모든 문의를 환영합니다.
              </p>
            </div>
          </div>

          {/* 구분선 */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500">
                © 2024 KYDEC. All rights reserved.
              </p>
              <p className="text-sm text-gray-400 font-semibold">
                청년의 일은 청년이 정의한다
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
