import type { Metadata } from 'next';
import { Josefin_Sans, Open_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const josefinSans = Josefin_Sans({
  variable: '--font-josefin-sans',
  subsets: ['latin'],
});

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Happy Bakery',
  description: "Let's bake happy!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${josefinSans.variable} ${openSans.variable} mx-auto flex h-fit min-h-screen w-screen flex-col overflow-x-hidden font-sans antialiased`}
      >
        <div className='h-14 w-full md:h-20 lg:h-24' />
        <Header />
        <main className='flex flex-1 flex-col px-6 py-4 pr-8 md:px-8 md:py-8 md:pr-10 lg:px-10 lg:py-10 lg:pr-12'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
