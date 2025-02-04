'use client';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import ReviewCard from '@/components/card/ReviewCard';

const dummyReviews = [
  {
    id: 1,
    avatar: '/images/avatar1.jpg',
    title: 'Absolutely divine!',
    content:
      'This cake offers a luscious, melt-in-your-mouth experience with every bite. The depth of flavor and velvety texture is unmatched.',
    imageUrl: '/images/cake1.jpg',
  },
  {
    id: 2,
    avatar: '/images/avatar2.jpg',
    title: 'Exquisite and flaky perfection!',
    content:
      'This croissant boasts a golden exterior that gives way to layers of buttery bliss. A true testament to artisan baking!',
    imageUrl: '/images/cake1.jpg',
  },
  {
    id: 3,
    avatar: '/images/avatar3.jpg',
    title: 'An absolute delight!',
    content:
      'This blueberry scone is bursting with juicy berries, enveloped in a tender, buttery crumb. Perfectly balanced sweetness makes it a morning must-have!',
    imageUrl: '/images/cake1.jpg',
  },
  {
    id: 4,
    avatar: '/images/avatar3.jpg',
    title: 'An absolute delight!',
    content:
      'This blueberry scone is bursting with juicy berries, enveloped in a tender, buttery crumb. Perfectly balanced sweetness makes it a morning must-have!',
    imageUrl: '/images/cake1.jpg',
  },
  {
    id: 5,
    avatar: '/images/avatar3.jpg',
    title: 'An absolute delight!',
    content:
      'This blueberry scone is bursting with juicy berries, enveloped in a tender, buttery crumb. Perfectly balanced sweetness makes it a morning must-have!',
    imageUrl: '/images/cake1.jpg',
  },
  {
    id: 6,
    avatar: '/images/avatar3.jpg',
    title: 'An absolute delight!',
    content:
      'This blueberry scone is bursting with juicy berries, enveloped in a tender, buttery crumb. Perfectly balanced sweetness makes it a morning must-have!',
    imageUrl: '/images/cake1.jpg',
  },
  {
    id: 7,
    avatar: '/images/avatar3.jpg',
    title: 'An absolute delight!',
    content:
      'This blueberry scone is bursting with juicy berries, enveloped in a tender, buttery crumb. Perfectly balanced sweetness makes it a morning must-have!',
    imageUrl: '/images/cake1.jpg',
  },
];

function ReviewSlides() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      breakpoints={{
        // >= 768px (md)
        768: {
          slidesPerView: 2,
        },
        // >= 1024px (lg)
        1024: {
          slidesPerView: 3,
        },
      }}
      className='h-fit w-full'
    >
      {dummyReviews.map((review) => (
        <SwiperSlide key={review.id} className='mb-6 mt-3 p-3'>
          <ReviewCard review={review} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ReviewSlides;
