import type { Metadata } from 'next';
import { Josefin_Sans, Open_Sans } from 'next/font/google';
import '../globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { cookies } from 'next/headers';
import { ProductService } from '@/api/services/Product';
import Providers from '@/provider/provider';
import StoreInitializer from '@/store/StoreInitializer';
import { CartService } from '@/api/services/Cart';

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
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value ?? '';
  const { products } = await ProductService.getProducts({
    page: 1,
    sort: 'date_desc',
  });
  const { categories } = await ProductService.getCategories();

  const newProducts = products.slice();

  let cartItemsCount = 0;

  if (token) {
    const { cartItems } = await CartService.getCart();
    cartItemsCount = cartItems.length;
  }

  return (
    <html lang='en'>
      <Providers>
        <body
          className={`${josefinSans.variable} ${openSans.variable} mx-auto flex h-fit min-h-screen w-screen flex-col overflow-x-hidden font-sans antialiased`}
        >
          <StoreInitializer
            cartItemsCount={cartItemsCount}
            newProducts={newProducts}
          />
          <div className='h-14 w-full md:h-20 lg:h-24' />
          <Header token={token} categories={categories} />
          <main className='flex flex-1 flex-col px-6 py-4 md:px-8 md:py-8 lg:px-10 lg:py-10 lg:pr-12'>
            {children}
          </main>
          <Footer categories={categories} />
        </body>
      </Providers>
    </html>
  );
}
