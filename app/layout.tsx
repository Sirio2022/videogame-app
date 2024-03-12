import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Fira_Code } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const firaCode = Fira_Code({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Video Game Database',
  description: 'A database of video games',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={firaCode.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
