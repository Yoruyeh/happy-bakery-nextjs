import ExpiredCouponCard from '@/components/card/ExpiredCouponCard';
import UsableCouponCard from '@/components/card/UsableCouponCard';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const dummyCoupons = [
  {
    id: 1,
    application: 'App/Website',
    discount: 888,
    name: 'Welcome Coupon',
    description: ' Up to 12% off on eligible purchase amount.',
    expireDate: '2025-07-26',
    used: false,
  },
  {
    id: 2,
    application: 'App/Website',
    discount: 100,
    name: 'Shipping Fee Discount',
    description: 'Valid with minimum purchase of $1,000',
    expireDate: '2025-05-01',
    used: true,
  },
  {
    id: 3,
    application: 'Store',
    discount: 200,
    name: 'Discount Coupon',
    description: 'Valid for in-store purchases only.',
    expireDate: '2025-03-15',
    used: false,
  },
  {
    id: 4,
    application: 'App/Website',
    discount: 500,
    name: 'Birthday Discount',
    description: 'Up to 12% off on eligible purchase amount.',
    expireDate: '2025-09-01',
    used: true,
  },
  {
    id: 5,
    application: 'App/Website',
    discount: 30,
    name: 'Shipping Fee Discount',
    description: 'Valid with minimum purchase of $800',
    expireDate: '2025-03-01',
    used: false,
  },
  {
    id: 6,
    application: 'App/Website',
    discount: 30,
    name: 'Shipping Fee Discount',
    description: 'Valid with minimum purchase of $800',
    expireDate: '2025-11-30',
    used: false,
  },
  {
    id: 7,
    application: 'App/Website',
    discount: 30,
    name: 'Shipping Fee Discount',
    description: 'Valid with minimum purchase of $800',
    expireDate: '2024-06-30',
    used: false,
  },
];

async function CouponPage(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const query = searchParams.type;
  const now = new Date();

  const usableCoupons = dummyCoupons.filter((coupon) => {
    const expiryTime = new Date(`${coupon.expireDate}T23:59:59`);
    return expiryTime > now && coupon.used === false;
  });

  const expiredCoupons = dummyCoupons.filter((coupon) => {
    const expiryTime = new Date(`${coupon.expireDate}T23:59:59`);
    return expiryTime < now || coupon.used === true;
  });

  let couponContent;

  if (query === 'usable' && usableCoupons.length > 0) {
    couponContent = (
      <div className='flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3'>
        {usableCoupons.map((coupon) => (
          <UsableCouponCard key={coupon.id} coupon={coupon} />
        ))}
      </div>
    );
  } else if (query === 'usable' && usableCoupons.length === 0) {
    couponContent = (
      <div className='flex items-center justify-center'>
        <p>No usable coupon available</p>
      </div>
    );
  }

  if (query === 'expired' && expiredCoupons.length > 0) {
    couponContent = (
      <div className='flex flex-col gap-4'>
        {expiredCoupons.map((coupon) => (
          <ExpiredCouponCard key={coupon.id} coupon={coupon} />
        ))}
      </div>
    );
  } else if (query === 'expired' && expiredCoupons.length === 0) {
    couponContent = (
      <div className='flex w-full items-center justify-center'>
        <p>No expired coupon history</p>
      </div>
    );
  }

  return (
    <div className='max-h-screen overflow-y-auto'>
      <h1 className='mb-6 text-2xl font-bold text-text-darkGray'>Coupon</h1>
      <div className='flex h-full flex-col gap-6'>
        <div className='flex gap-6'>
          <Link href='/profile/coupon?type=usable'>
            <button
              className={twMerge(
                'px-2 transition-all duration-300 ease-in-out hover:scale-105 hover:font-medium hover:underline hover:underline-offset-2',
                // Selected Style
                query === 'usable' &&
                  'scale-105 font-medium underline underline-offset-2'
              )}
            >
              Usable
            </button>
          </Link>
          <Link href='/profile/coupon?type=expired'>
            <button
              className={twMerge(
                'px-2 transition-all duration-300 ease-in-out hover:scale-105 hover:font-medium hover:underline hover:underline-offset-2',
                // Selected Style
                query === 'expired' &&
                  'scale-105 font-medium underline underline-offset-2'
              )}
            >
              Expired
            </button>
          </Link>
        </div>
        {couponContent}
      </div>
    </div>
  );
}

export default CouponPage;
