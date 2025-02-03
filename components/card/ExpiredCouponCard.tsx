interface ExpiredCoupon {
  id: number;
  application: string;
  discount: number;
  name: string;
  description: string;
  expireDate: string;
  used: boolean;
}

interface ExpiredCouponCardProps {
  coupon: ExpiredCoupon;
}

function ExpiredCouponCard({ coupon }: ExpiredCouponCardProps) {
  return (
    <div className='flex h-fit w-full items-center gap-4 overflow-hidden rounded bg-white px-6 py-2 shadow-md'>
      <div className='flex flex-col gap-2'>
        <span className='text-sm font-medium'>{coupon.expireDate}</span>
        <span className='text-xs text-text-lightGray'>23:59:59</span>
      </div>
      <div className='flex flex-col gap-2 border-l-2 border-stone-100 pl-4'>
        <h1 className='text-base font-medium'>{coupon.name}</h1>
        <p className='text-xs text-text-lightGray'>Expired</p>
      </div>
    </div>
  );
}

export default ExpiredCouponCard;
