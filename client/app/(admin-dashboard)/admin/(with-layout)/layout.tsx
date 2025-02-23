import type { Metadata } from 'next';
import { Josefin_Sans, Open_Sans } from 'next/font/google';
import '@/app/globals.css';
import Providers from '@/provider/provider';
import AdminHeader from '@/components/layout/AdminHeader';
import AdminNavbar from '@/components/navbar/AdminNavbar';

const josefinSans = Josefin_Sans({
  variable: '--font-josefin-sans',
  subsets: ['latin'],
});

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: ' %s | Happy Bakery',
    default: 'Happy Bakery',
  },
  description:
    'Happy Bakery opened its doors in 2024, bringing a revolutionary approach to modern baking. Our vision was born from a simple yet powerful belief: desserts can be both delicious and nutritious.',
  generator: 'Next.js',
  applicationName: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript'],
  authors: [
    { name: 'Yoru Yeh' },
    { name: 'Jasmine Huang' },
    { name: 'Yoru Yeh', url: 'https://github.com/Yoruyeh' },
    { name: 'Jasmine Huang', url: 'https://github.com/Jasmineeds' },
  ],
  creator: 'Yoru Yeh',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Providers>
        <body
          className={`${josefinSans.variable} ${openSans.variable} flex h-fit min-h-screen w-screen overflow-x-hidden font-sans antialiased`}
        >
          <AdminNavbar />
          <div className='w-20 bg-slate-200 sm:w-[160px] md:w-[200px] lg:w-[260px]' />
          <main className='flex flex-1 flex-col'>
            <AdminHeader />
            <div className='h-full w-full p-6'>{children}</div>
          </main>
        </body>
      </Providers>
    </html>
  );
}
