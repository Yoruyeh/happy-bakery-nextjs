import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';

interface Review {
  id: number;
  avatar: string;
  title: string;
  content: string;
  imageUrl: string;
}
interface ReviewCardProps {
  review: Review;
}

function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className='flex h-fit w-full flex-col rounded-lg bg-white shadow-lg'>
      <div className='flex w-full justify-between gap-4 p-8'>
        <div className='text-text-darkGray flex flex-col gap-2'>
          <h2 className='text-xl font-semibold'>{review.title}</h2>
          <p className='text-text-lightGray'>{review.content}</p>
          <p className='flex items-center gap-2'>
            <StarIcon className='h-6 w-6 text-yellow-400' />
            <StarIcon className='h-6 w-6 text-yellow-400' />
            <StarIcon className='h-6 w-6 text-yellow-400' />
            <StarIcon className='h-6 w-6 text-yellow-400' />
            <StarIcon className='h-6 w-6 text-yellow-400' />
            <span className='mt-1 font-medium'>5.0</span>
          </p>
        </div>
        <div className='relative h-16 w-16 overflow-hidden rounded-full'>
          <Image
            src={review.avatar}
            alt='reviewer-avatar'
            fill={true}
            className='object-cover'
          />
        </div>
      </div>
      <div className='relative overflow-hidden rounded-b-lg pt-[75%]'>
        <Image
          src={review.imageUrl}
          alt=''
          fill={true}
          className='object-cover'
        />
      </div>
    </div>
  );
}

export default ReviewCard;
