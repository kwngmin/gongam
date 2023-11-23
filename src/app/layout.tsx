import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import 'material-symbols';
import AuthContext from '../context/AuthContext';
import SWRConfigContext from '@/context/SWRConfigContext';
import Head from 'next/head';
import Navbar from '@/components/ui/Navbar';
import Dockbar from '@/components/ui/Dockbar';

const inter = Inter({ subsets: ['latin'] });
const pretendard = localFont({
  src: './PretendardVariable.woff2',
  fallback: [
    'Pretendard',
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    'Roboto',
    'Helvetica Neue',
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Noto Sans KR',
    'Malgun Gothic',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif',
  ],
});
export const metadata: Metadata = {
  title: 'NoteShaker',
  description: 'Record of thought, moments, feelings',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={inter.className}>
      <Head>
        <meta
          name='viewport'
          content='initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width'
        />
      </Head>
      <body className='h-screen flex relative flex-col'>
        <AuthContext>
          <header className='sticky top-0 w-full max-w-screen-md mx-auto px-4'>
            <Navbar />
          </header>
          <main className='grow w-full overflow-auto'>
            <SWRConfigContext>{children}</SWRConfigContext>
          </main>
          <div id='scrollable' />
          <Dockbar />
          <Analytics />
        </AuthContext>
        <div id='portal' />
      </body>
    </html>
  );
}
