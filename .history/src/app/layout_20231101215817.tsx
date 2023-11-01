import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/ui/Navbar';
import 'material-symbols';
import AuthContext from '../context/AuthContext';
import Footer from '@/components/ui/Footer';
import { Analytics } from '@vercel/analytics/react';

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
      <AuthContext>
        <body className='h-screen flex relative flex-col'>
          <header className='sticky top-0 w-full max-w-screen-md mx-auto px-4 bg-white'>
            <Navbar />
          </header>
          <main className='grow w-full max-w-screen-md mx-auto px-4'>
            {children}
          </main>
          <Footer />
          <Analytics />
        </body>
      </AuthContext>
    </html>
  );
}
