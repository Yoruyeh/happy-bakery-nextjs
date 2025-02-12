import Image from 'next/image';
import CartBanner from '@/public/images/banner-cart.jpg';
import Slides from '@/components/swiper/ProductSlides';
import { CartService } from '@/api/services/Cart';
import CartList from '@/components/list/CartList';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your Cart',
};

async function CartPage() {
  const response = await CartService.getCart();

  return (
    <div className='flex w-full flex-col gap-4 md:gap-6 lg:gap-8'>
      <div className='absolute -left-6 top-14 h-[250px] w-[calc(100vw+32px)] md:top-20 md:h-[360px] lg:top-24 lg:h-[480px]'>
        <Image
          src={CartBanner}
          fill={true}
          alt='cart-banner'
          sizes='100vw'
          className='object-cover opacity-75 contrast-75'
        />
      </div>
      <div className='relative h-[250px] w-full md:h-[360px] lg:h-[480px]'>
        <div className='absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-4 p-4'>
          <h1 className='whitespace-nowrap text-center text-2xl font-bold uppercase text-white drop-shadow-lg md:text-4xl lg:text-5xl'>
            Baking Joy, <br className='sm:hidden' /> Sharing Happiness
          </h1>
        </div>
      </div>
      <section className='mx-auto w-full max-w-5xl'>
        <CartList initialCartData={response} />
      </section>
      <section className='mx-auto w-full max-w-5xl'>
        <h2 className='text-2xl font-bold text-text-brown'>
          Don't leave without these!
        </h2>
        <Slides />
      </section>
    </div>
  );
}

export default CartPage;
