'use client';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import ProductCard from '@/components/card/ProductCard';
import useStore from '@/store/store';

function ProductSlides() {
  const newProducts = useStore((state) => state.newProducts);
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      breakpoints={{
        // >= 480px (xs)
        480: {
          slidesPerView: 2,
        },
        // >= 640px (sm)
        640: {
          slidesPerView: 3,
        },
        // >= 1024px (lg)
        1024: {
          slidesPerView: 4,
        },
      }}
      className='h-fit w-full'
    >
      {newProducts.map((product) => (
        <SwiperSlide key={product.id} className='mb-6 mt-3 p-3'>
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ProductSlides;
