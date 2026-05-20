'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-white text-xl font-bold mb-2">KYDEC</h3>
            <p className="text-sm">Korea Young Developers Cooperative</p>
            <p className="text-sm mt-2">도구는 AI에게, 의미는 우리에게</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4">서비스</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://devtimes.co.kr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  DevTimes
                </a>
              </li>
              <li className="text-gray-600">DevPrism (준비 중)</li>
              <li className="text-gray-600">CampTrue (준비 중)</li>
              <li className="text-gray-600">DevReady (준비 중)</li>
              <li className="text-gray-600">DevTimes Brief (준비 중)</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">문의</h4>
            <p className="text-sm">
              <a href="mailto:contact@kydec.kr" className="hover:text-white transition">
                contact@kydec.kr
              </a>
            </p>
            <p className="text-sm mt-4">© 2024 KYDEC. All rights reserved.</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>청년의 일은 청년이 정의한다</p>
        </div>
      </div>
    </footer>
  );
}
