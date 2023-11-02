import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/ui/Navbar';
import 'material-symbols';
import AuthContext from '../context/AuthContext';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';
import Dockbar from '@/components/ui/Dockbar';

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
  return (
    <html lang='en' className={inter.className}>
      <Head>
        <meta
          name='viewport'
          content='initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width,viewport-fit=cover'
        />
      </Head>
      <body className='h-screen flex relative flex-col'>
        <AuthContext>
          <header className='fixed top-0 w-full max-w-screen-md mx-auto px-4 bg-white'>
            <Navbar />
          </header>
          <main className='grow w-full max-w-screen-md mx-auto px-4'>
            {children}
          </main>
          <footer className='pb-safe'>
            <Dockbar />
          </footer>
          <Analytics />
        </AuthContext>
      </body>
    </html>
  );
}
