import Image from 'next/image';
import HomeBanner from '@/public/images/banner-home.jpg';
import Button from '@/components/button/Button';
import ProductSlides from '@/components/swiper/ProductSlides';
import ReviewSlides from '@/components/swiper/ReviewSlides';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex flex-col gap-6'>
      <div className='absolute -left-6 top-14 h-[300px] w-[calc(100vw+32px)] sm:h-[400px] md:top-20 md:h-[500px] lg:top-24 lg:h-[600px]'>
        <Image
          src={HomeBanner}
          fill={true}
          alt='home-banner'
          className='object-cover opacity-75 contrast-75'
        />
      </div>
      <div className='relative h-[300px] w-full sm:h-[400px] md:h-[500px] lg:h-[600px]'>
        <div className='absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-4 p-4 md:items-start'>
          <h1 className='whitespace-nowrap text-3xl font-bold uppercase text-white drop-shadow-lg md:text-4xl lg:text-5xl'>
            Lets' Bake Happy!
          </h1>
          <p className='text-lg font-medium text-text-brown drop-shadow-lg md:text-xl lg:text-2xl'>
            No Chemical Added,
            <br className='sm:hidden' /> Naturally Delicious!
          </p>
          <Link href='/product/all'>
            <Button
              text='Shop Now'
              customClass='mt-5 w-fit h-fit font-medium bg-bgColor-primaryBtn text-lg md:text-xl hover:bg-bgColor-primaryHover text-text-darkGray hover:text-white shadow-lg'
            />
          </Link>
        </div>
      </div>
      <section>
        <div className='flex items-center justify-between gap-3 p-2'>
          <h2 className='text-2xl font-bold uppercase text-title-primary drop-shadow-md sm:text-3xl md:text-4xl'>
            Don't miss out
            <br className='sm:hidden' /> new drops
          </h2>
          <Link href='/product/new'>
            <Button
              text='Shop'
              customClass='w-fit h-fit font-medium bg-bgColor-primaryBtn text-base md:text-lg hover:bg-bgColor-primaryHover text-text-darkGray hover:text-white shadow-lg'
            />
          </Link>
        </div>
        <ProductSlides />
      </section>
      <section>
        <div className='flex items-center p-2'>
          <h2 className='text-2xl font-bold uppercase text-title-primary drop-shadow-md sm:text-3xl md:text-4xl'>
            Five Stars Reviews!
          </h2>
        </div>
        <ReviewSlides />
      </section>
    </div>
  );
}
