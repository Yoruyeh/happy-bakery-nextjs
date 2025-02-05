import type { Metadata } from 'next';
import { Josefin_Sans, Open_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { cookies } from 'next/headers';
import { ToastContainer } from 'react-toastify';

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value ?? '';

  return (
    <html lang='en'>
      <body
        className={`${josefinSans.variable} ${openSans.variable} mx-auto flex h-fit min-h-screen w-screen flex-col overflow-x-hidden font-sans antialiased`}
      >
        <div className='h-14 w-full md:h-20 lg:h-24' />
        <Header token={token} />
        <main className='flex flex-1 flex-col px-6 py-4 md:px-8 md:py-8 lg:px-10 lg:py-10 lg:pr-12'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
