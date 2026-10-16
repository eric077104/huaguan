import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '華冠文理補習班｜國英數自',
  description: '華冠文理補習班國英數自完整課程，以國文閱讀理解為學習起點。',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant"><body>{children}</body></html>;
}
