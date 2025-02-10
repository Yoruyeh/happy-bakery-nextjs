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
      <div className='grid grid-cols-4 gap-2 p-4'>
        <div className='col-span-3 flex flex-col gap-2 text-text-darkGray'>
          <h2 className='line-clamp-1 text-xl font-semibold'>{review.title}</h2>
          <p className='group relative h-[96px] cursor-help text-text-lightGray'>
            <span className='line-clamp-4'>{review.content}</span>
            {/* Tooltip */}
            <span className='absolute right-0 top-16 z-50 hidden w-60 rounded-md border bg-white p-3 text-sm shadow-lg group-hover:block'>
              {review.content}
            </span>
          </p>
          <p className='flex items-center gap-2'>
            <StarIcon className='h-6 w-6 text-yellow-400' />
            <StarIcon className='h-6 w-6 text-yellow-400' />
            <StarIcon className='h-6 w-6 text-yellow-400' />
            <StarIcon className='h-6 w-6 text-yellow-400' />
            <StarIcon className='h-6 w-6 text-yellow-400' />
            <span className='mt-1 font-medium'>5.0</span>
          </p>
        </div>
        <div className='col-span-1 flex justify-end'>
          <div className='relative h-16 w-16 overflow-hidden rounded-full'>
            <Image
              src={review.avatar}
              alt='reviewer-avatar'
              fill={true}
              sizes='64px'
              className='object-cover'
            />
          </div>
        </div>
      </div>
      <div className='relative overflow-hidden rounded-b-lg pt-[75%]'>
        <Image
          src={review.imageUrl}
          alt=''
          fill={true}
          sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
          className='object-cover'
        />
      </div>
    </div>
  );
}

export default ReviewCard;
