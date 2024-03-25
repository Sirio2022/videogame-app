import type { Metadata } from 'next';
import { Inter, Fira_Code } from 'next/font/google';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
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
      <body
        className={`${firaCode.className}  antialiased flex flex-col min-h-screen bg-gray-900 text-white ${inter.className} `}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
