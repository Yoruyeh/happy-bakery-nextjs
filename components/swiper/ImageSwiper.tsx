'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

function ImageSwiper() {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      className='relative h-fit w-full overflow-hidden rounded-lg lg:flex-[2_2_0%]'
    >
      <SwiperSlide className='relative pt-[75%] md:pt-[56.25%]'>
        <Image
          src='/images/bread1.jpg'
          alt='slide1'
          fill={true}
          className='object-cover'
        />
      </SwiperSlide>
      <SwiperSlide className='relative pt-[75%] md:pt-[56.25%]'>
        <Image
          src='/images/bread2.jpg'
          alt='slide2'
          fill={true}
          className='object-cover'
        />
      </SwiperSlide>
      <SwiperSlide className='relative pt-[75%] md:pt-[56.25%]'>
        <Image
          src='/images/bread3.jpg'
          alt='slide3'
          fill={true}
          className='object-cover'
        />
      </SwiperSlide>
      <SwiperSlide className='relative pt-[75%] md:pt-[56.25%]'>
        <Image
          src='/images/bread4.jpg'
          alt='slide4'
          fill={true}
          className='object-cover'
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default ImageSwiper;
