import Image from 'next/image';
import NotFoundImage from '@/public/images/404.svg';
import Button from '@/components/button/Button';
import Link from 'next/link';

function NotFoundPage() {
  return (
    <div>
      <div className='relative w-full pt-[100%] sm:pt-[80%] md:pt-[60%] lg:pt-[40%]'>
        <Image
          src={NotFoundImage}
          alt='404'
          fill={true}
          sizes='100vw'
          className='object-contain'
        />
      </div>
      <div className='flex flex-col items-center justify-center gap-8 px-4 text-center text-text-brown'>
        <h1 className='text-lg font-bold md:text-xl lg:text-2xl'>
          Sorry, the page you are looking for does not exist.
        </h1>
        <p className='font-medium md:text-lg lg:text-xl'>
          Please check the URL and try again.
        </p>
        <Link href='/'>
          <Button
            text='Back to Home'
            customClass='my-6 w-fit h-fit font-medium bg-bgColor-secondaryBtn text-lg md:text-xl hover:bg-bgColor-secondaryHover text-text-darkGray hover:text-white'
          />
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
