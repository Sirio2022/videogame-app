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
      <body className={`flex flex-col min-h-screen ${firaCode.className} antialiased`}>
        <Header />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
