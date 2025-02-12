import Button from '@/components/button/Button';
import Image from 'next/image';
import FinishImage from '@/public/images/finish.jpg';
import Link from 'next/link';

const FinishPage = () => {
  return (
    <div className='relative flex w-full flex-1 flex-col items-center justify-center gap-6'>
      <div className='relative w-full pt-[120%] md:max-w-screen-sm md:pt-[100%] xl:pt-[60%]'>
        <Image
          src={FinishImage}
          alt='finish-image'
          fill={true}
          sizes='100vw'
          className='object-cover opacity-75 contrast-75'
        />
      </div>
      <div className='absolute inset-x-0 top-1/3 flex flex-col items-center justify-center gap-4'>
        <h1 className='text-center text-2xl font-bold md:text-3xl lg:text-4xl'>
          Thank you for your purchase!
        </h1>
        <div className='flex flex-col items-center justify-center gap-4 sm:flex-row'>
          <Link href='/profile/order'>
            <Button
              text='Check Order'
              customClass='w-fit h-fit font-medium bg-bgColor-secondaryBtn text-text-darkGray hover:bg-bgColor-secondaryHover hover:text-white'
            />
          </Link>
          <Link href='/product/all'>
            <Button
              text='Continue Shopping'
              customClass='w-fit h-fit font-medium bg-bgColor-primaryBtn text-text-darkGray hover:bg-bgColor-primaryHover hover:text-white'
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FinishPage;
