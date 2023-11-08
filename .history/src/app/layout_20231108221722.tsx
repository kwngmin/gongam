'use client';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/ui/Navbar';
import 'material-symbols';
import AuthContext from '../context/AuthContext';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';
import Dockbar from '@/components/ui/Dockbar';
import SWRConfigContext from '@/context/SWRConfigContext';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NoteShaker',
  description: 'Record of thought, moments, feelings',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 100vh 실제 화면 크기로 맞추기
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

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
          <footer className=''>
            <Dockbar />
          </footer>
          <Analytics />
        </AuthContext>
      </body>
    </html>
  );
}
