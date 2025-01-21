import type { Metadata } from 'next';
import { Josefin_Sans, Open_Sans } from 'next/font/google';
import './globals.css';

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
        className={`${josefinSans.variable} ${openSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
