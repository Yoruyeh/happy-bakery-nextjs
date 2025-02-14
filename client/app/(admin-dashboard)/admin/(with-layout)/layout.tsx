import type { Metadata } from 'next';
import { Josefin_Sans, Open_Sans } from 'next/font/google';
import '@/app/globals.css';
import Providers from '@/provider/provider';

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
          className={`${josefinSans.variable} ${openSans.variable} mx-auto flex h-fit min-h-screen w-screen flex-col overflow-x-hidden font-sans antialiased`}
        >
          Layout
          <main className='flex flex-1 flex-col px-6 py-4 md:px-8 md:py-8 lg:px-10 lg:py-10 lg:pr-12'>
            {children}
          </main>
        </body>
      </Providers>
    </html>
  );
}
