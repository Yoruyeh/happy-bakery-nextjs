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
    title: 'Sweet Berry Paradise!',
    content:
      'Fresh strawberries perfectly balanced with light cream frosting. A true summer delight!',
    imageUrl: '/images/review-sample1.jpg',
  },
  {
    id: 2,
    avatar: '/images/avatar2.jpg',
    title: 'Berry Choco Dream',
    content:
      'Rich chocolate meets tangy blueberries creating an unforgettable flavor explosion.',
    imageUrl: '/images/review-sample2.jpg',
  },
  {
    id: 3,
    avatar: '/images/avatar3.jpg',
    title: 'Sugar Cloud Delight',
    content:
      'Soft, pillowy dough crowned with melt-in-your-mouth vanilla frosting.',
    imageUrl: '/images/review-sample3.jpg',
  },
  {
    id: 4,
    avatar: '/images/avatar4.jpg',
    title: 'Cocoa Comfort',
    content: 'Crispy edges, chewy center, packed with premium chocolate chips.',
    imageUrl: '/images/review-sample4.jpg',
  },
  {
    id: 5,
    avatar: '/images/avatar5.jpg',
    title: 'Golden Flaky Joy',
    content: 'Buttery layers fold into perfect, crispy crescents of happiness.',
    imageUrl: '/images/review-sample5.jpg',
  },
  {
    id: 6,
    avatar: '/images/avatar6.jpg',
    title: 'Celebration Magic',
    content:
      'Moist vanilla layers with rainbow sprinkles make every day special.',
    imageUrl: '/images/review-sample6.jpg',
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
