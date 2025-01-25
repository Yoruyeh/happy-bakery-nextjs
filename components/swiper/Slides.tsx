'use client';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import ProductCard from '@/components/card/ProductCard';

const dummyProducts = [
  {
    id: 1,
    name: 'cake1',
    priceRegular: 100,
    cover: '/images/cake1.jpg',
    stockQantity: 2,
    category: { id: 1, name: 'cake' },
  },
  {
    id: 2,
    name: 'cake2',
    priceRegular: 100,
    cover: '/images/cake1.jpg',
    stockQantity: 2,
    category: { id: 1, name: 'cake' },
  },
  {
    id: 3,
    name: 'cake3',
    priceRegular: 100,
    cover: '/images/cake1.jpg',
    stockQantity: 2,
    category: { id: 1, name: 'cake' },
  },
  {
    id: 4,
    name: 'cake4',
    priceRegular: 100,
    cover: '/images/cake1.jpg',
    stockQantity: 2,
    category: { id: 1, name: 'cake' },
  },
  {
    id: 5,
    name: 'cake5',
    priceRegular: 100,
    cover: '/images/cake1.jpg',
    stockQantity: 2,
    category: { id: 1, name: 'cake' },
  },
  {
    id: 6,
    name: 'cake6',
    priceRegular: 100,
    cover: '/images/cake1.jpg',
    stockQantity: 2,
    category: { id: 1, name: 'cake' },
  },
  {
    id: 7,
    name: 'cake7',
    priceRegular: 100,
    cover: '/images/cake1.jpg',
    stockQantity: 2,
    category: { id: 1, name: 'cake' },
  },
  {
    id: 8,
    name: 'cake8',
    priceRegular: 100,
    cover: '/images/cake1.jpg',
    stockQantity: 2,
    category: { id: 1, name: 'cake' },
  },
  {
    id: 9,
    name: 'cake9',
    priceRegular: 100,
    cover: '/images/cake1.jpg',
    stockQantity: 2,
    category: { id: 1, name: 'cake' },
  },
];

function Slides() {
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
      {dummyProducts.map((product) => (
        <SwiperSlide key={product.id} className='my-6 p-3'>
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slides;
