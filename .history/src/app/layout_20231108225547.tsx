import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';
import './globals.css';
import 'material-symbols';
import AuthContext from '../context/AuthContext';
import SWRConfigContext from '@/context/SWRConfigContext';
import Head from 'next/head';
import Navbar from '@/components/ui/Navbar';
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
          content='initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width'
        />
      </Head>
      <body className='flex relative flex-col'>
        <AuthContext>
          <header className='sticky top-0 w-full max-w-screen-md mx-auto px-4'>
            <Navbar />
          </header>
          <main className='grow w-full overflow-auto'>
            <SWRConfigContext>{children}</SWRConfigContext>
          </main>
          <div className='' />
          <footer className=''>
            <Dockbar />
          </footer>
          <Analytics />
        </AuthContext>
      </body>
    </html>
  );
}
