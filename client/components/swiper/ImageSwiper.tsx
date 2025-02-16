'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import { ProductImage } from '@/api/types/(user)/product';

interface ImageSwiperProps {
  images: ProductImage[];
}

function ImageSwiper({ images }: ImageSwiperProps) {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      className='relative h-fit w-full overflow-hidden rounded-lg lg:flex-[2_2_0%]'
    >
      {images.map((image) => (
        <SwiperSlide
          key={image.image_path}
          className='relative pt-[75%] md:pt-[56.25%]'
        >
          <Image
            src={image.image_path}
            alt={image.name}
            fill={true}
            sizes='(max-width: 1024px) 100vw, 75vw'
            className='object-cover'
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ImageSwiper;
