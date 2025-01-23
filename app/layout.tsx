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
        className={`${josefinSans.variable} ${openSans.variable} flex h-fit min-h-screen w-screen flex-col overflow-x-hidden font-sans antialiased`}
      >
        <Header />
        <main className='flex-1 p-4 pr-8 lg:p-8'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
