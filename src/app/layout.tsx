import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'KYDEC - Korea Young Developers Cooperative',
  description: '도구는 AI에게, 의미는 우리에게. AI 시대를 살아가는 청년 개발자들의 협동조합',
  keywords: ['KYDEC', '협동조합', '개발자', 'AI', 'DevTimes', '기술'],
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-white text-gray-900 font-sans">
        {children}
      </body>
    </html>
  );
}
