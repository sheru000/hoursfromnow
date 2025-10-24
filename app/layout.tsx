import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CalculatorNav = dynamic(() => import('@/components/CalculatorNav'), {
  loading: () => <div className="h-16 bg-white border-b border-gray-200" />,
  ssr: true
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
});

export const metadata: Metadata = {
  title: 'Hours From Now Calculator',
  description: 'Time Calculator',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className={inter.className}>
        <Header />
        <CalculatorNav />
        <main className="content-visibility-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
