import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CalculatorNav from '@/components/CalculatorNav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hours From Now Calculator',
  description: 'Calculate future times instantly',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <CalculatorNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
