import Link from 'next/link';

interface UsableCoupon {
  id: number;
  application: string;
  discount: number;
  name: string;
  description: string;
  expireDate: string;
  used: boolean;
}

interface UsableCouponCardProps {
  coupon: UsableCoupon;
}

function UsableCouponCard({ coupon }: UsableCouponCardProps) {
  return (
    <Link href='/product/all'>
      <div className='h-fit w-full cursor-pointer overflow-hidden rounded-lg bg-white shadow-md'>
        <header className='flex items-center justify-between gap-2 px-4 pt-4 text-xs font-medium'>
          <span className='text-text-lightGray'>Coupon</span>
          <span className='bg-stone-50 text-red-400'>{coupon.application}</span>
        </header>
        <main className='flex flex-col gap-1 p-4'>
          <h1 className='text-xl font-bold'>NT $ {coupon.discount}</h1>
          <p className='text-sm font-medium'>{coupon.name}</p>
          <p className='text-xs font-medium text-text-lightGray'>
            {coupon.description}
          </p>
        </main>
        <footer className='mt-2 flex items-center justify-between gap-2 border-t border-dashed border-stone-300 bg-stone-50 px-4 py-2 font-medium text-red-400'>
          <span className='text-xs'>Expire Date: {coupon.expireDate}</span>
          <span className='rounded border border-red-400 px-2 py-1 text-sm'>
            Use
          </span>
        </footer>
      </div>
    </Link>
  );
}

export default UsableCouponCard;
