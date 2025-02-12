'use client';

import Image from 'next/image';
import ErrorImage from '@/public/images/error.png';
import Button from '@/components/button/Button';
import Link from 'next/link';

function ErrorPage() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='relative w-full max-w-screen-sm pt-[60%] sm:pt-[50%] md:pt-[40%] lg:pt-[30%]'>
        <Image
          src={ErrorImage}
          alt='error'
          fill={true}
          sizes='640px'
          className='object-cover'
        />
      </div>
      <div className='flex flex-col items-center justify-center gap-8 px-4 text-center text-text-brown'>
        <h1 className='text-lg font-bold md:text-2xl lg:text-3xl'>
          Sorry, something went wrong.
        </h1>
        <p className='font-medium md:text-lg lg:text-xl'>
          Please try again later.
        </p>
        <Link href='/'>
          <Button
            text='Back to Home'
            customClass='my-6 w-fit h-fit font-medium bg-bgColor-secondaryBtn  hover:bg-bgColor-secondaryHover text-text-darkGray hover:text-white'
          />
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
