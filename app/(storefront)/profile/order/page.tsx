import Button from '@/components/button/Button';
import Link from 'next/link';

type OrderPageProps = {};

const OrderPage = ({}: OrderPageProps) => {
  return (
    <div className='max-h-screen overflow-y-auto'>
      <h1 className='mb-6 text-2xl font-bold text-text-darkGray'>
        Order History
      </h1>

      {/* Order Table Header For Desktop */}
      <div className='hidden border border-b-0 border-stone-300 bg-stone-50 sm:grid sm:grid-cols-5'>
        <h3 className='flex items-center justify-start border-b border-stone-300 p-4 sm:justify-center'>
          Order No.
        </h3>
        <h3 className='flex items-center justify-start border-b border-stone-300 p-4 sm:justify-center'>
          Order Date
        </h3>
        <h3 className='flex items-center justify-start border-b border-stone-300 p-4 sm:justify-center'>
          Total Price
        </h3>
        <h3 className='flex items-center justify-start border-b border-stone-300 p-4 sm:justify-center'>
          Status
        </h3>
        <h3 className='flex items-center justify-start p-4 sm:justify-center sm:border-b sm:border-stone-300'></h3>
      </div>
      {/* Order Table Body */}
      <div className='flex flex-col gap-6 sm:block'>
        {/* Order Item */}
        <div className='grid grid-cols-2 border border-stone-300 bg-white font-medium sm:grid-cols-1 sm:border-t-0 md:text-lg'>
          {/* Order Item Header For Mobile */}
          <div className='bg-stone-50 sm:hidden'>
            <h3 className='flex items-center justify-start border-b border-stone-300 p-4 sm:justify-center'>
              Order No.
            </h3>
            <h3 className='flex items-center justify-start border-b border-stone-300 p-4 sm:justify-center'>
              Order Date
            </h3>
            <h3 className='flex items-center justify-start border-b border-stone-300 p-4 sm:justify-center'>
              Total Price
            </h3>
            <h3 className='flex items-center justify-start border-b border-stone-300 p-4 sm:justify-center'>
              Status
            </h3>
            <h3 className='flex items-center justify-start p-4 sm:justify-center sm:border-b sm:border-stone-300'></h3>
          </div>
          {/* Order Item Body */}
          <div className='sm:grid sm:grid-cols-5'>
            <p className='flex items-center justify-end border-b border-stone-300 p-4 sm:justify-center sm:border-none'>
              20250129001
            </p>
            <p className='flex items-center justify-end border-b border-stone-300 p-4 sm:justify-center sm:border-none'>
              2025-01-29
            </p>
            <p className='flex items-center justify-end border-b border-stone-300 p-4 sm:justify-center sm:border-none'>
              $1200
            </p>
            <p className='flex items-center justify-end border-b border-stone-300 p-4 sm:justify-center sm:border-none'>
              Pending
            </p>
            <Link href='/profile/order/id'>
              <div className='flex items-center justify-end p-4 sm:justify-center'>
                <Button
                  text='CHECK'
                  customClass='bg-bgColor-secondaryBtn text-text-darkGray hover:bg-bgColor-secondaryHover
              hover:text-white sm:text-base'
                />
              </div>
            </Link>
          </div>
        </div>
        {/* Order Item */}
        <div className='grid grid-cols-2 border border-stone-300 bg-white font-medium sm:grid-cols-1 sm:border-t-0 md:text-lg'>
          {/* Order Item Header For Mobile */}
          <div className='bg-stone-50 sm:hidden'>
            <h3 className='flex items-center justify-start border-b border-stone-300 p-4 sm:justify-center'>
              Order No.
            </h3>
            <h3 className='flex items-center justify-start border-b border-stone-300 p-4 sm:justify-center'>
              Order Date
            </h3>
            <h3 className='flex items-center justify-start border-b border-stone-300 p-4 sm:justify-center'>
              Total Price
            </h3>
            <h3 className='flex items-center justify-start border-b border-stone-300 p-4 sm:justify-center'>
              Status
            </h3>
            <h3 className='flex items-center justify-start p-4 sm:justify-center sm:border-b sm:border-stone-300'></h3>
          </div>
          {/* Order Item Body */}
          <div className='sm:grid sm:grid-cols-5'>
            <p className='flex items-center justify-end border-b border-stone-300 p-4 sm:justify-center sm:border-none'>
              20250129001
            </p>
            <p className='flex items-center justify-end border-b border-stone-300 p-4 sm:justify-center sm:border-none'>
              2025-01-29
            </p>
            <p className='flex items-center justify-end border-b border-stone-300 p-4 sm:justify-center sm:border-none'>
              $1200
            </p>
            <p className='flex items-center justify-end border-b border-stone-300 p-4 sm:justify-center sm:border-none'>
              Pending
            </p>
            <div className='flex items-center justify-end p-4 sm:justify-center'>
              <Button
                text='CHECK'
                customClass='bg-bgColor-secondaryBtn text-text-darkGray hover:bg-bgColor-secondaryHover
              hover:text-white sm:text-base'
              />
            </div>
          </div>
        </div>
        {/* Order Item */}
        <div className='grid grid-cols-2 border border-stone-300 bg-white font-medium sm:grid-cols-1 sm:border-t-0 md:text-lg'>
          {/* Order Item Header For Mobile */}
          <div className='bg-stone-50 sm:hidden'>
            <h3 className='flex items-center justify-start border-b border-stone-300 p-4 sm:justify-center'>
              Order No.
            </h3>
            <h3 className='flex items-center justify-start border-b border-stone-300 p-4 sm:justify-center'>
              Order Date
            </h3>
            <h3 className='flex items-center justify-start border-b border-stone-300 p-4 sm:justify-center'>
              Total Price
            </h3>
            <h3 className='flex items-center justify-start border-b border-stone-300 p-4 sm:justify-center'>
              Status
            </h3>
            <h3 className='flex items-center justify-start p-4 sm:justify-center sm:border-b sm:border-stone-300'></h3>
          </div>
          {/* Order Item Body */}
          <div className='sm:grid sm:grid-cols-5'>
            <p className='flex items-center justify-end border-b border-stone-300 p-4 sm:justify-center sm:border-none'>
              20250129001
            </p>
            <p className='flex items-center justify-end border-b border-stone-300 p-4 sm:justify-center sm:border-none'>
              2025-01-29
            </p>
            <p className='flex items-center justify-end border-b border-stone-300 p-4 sm:justify-center sm:border-none'>
              $1200
            </p>
            <p className='flex items-center justify-end border-b border-stone-300 p-4 sm:justify-center sm:border-none'>
              Pending
            </p>
            <div className='flex items-center justify-end p-4 sm:justify-center'>
              <Button
                text='CHECK'
                customClass='bg-bgColor-secondaryBtn text-text-darkGray hover:bg-bgColor-secondaryHover
              hover:text-white sm:text-base'
              />
            </div>
          </div>
        </div>
        {/* Order Item */}
        <div className='grid grid-cols-2 border border-stone-300 bg-white font-medium sm:grid-cols-1 sm:border-t-0 md:text-lg'>
          {/* Order Item Header For Mobile */}
          <div className='bg-stone-50 sm:hidden'>
            <h3 className='flex items-center justify-start border-b border-stone-300 p-4 sm:justify-center'>
              Order No.
            </h3>
            <h3 className='flex items-center justify-start border-b border-stone-300 p-4 sm:justify-center'>
              Order Date
            </h3>
            <h3 className='flex items-center justify-start border-b border-stone-300 p-4 sm:justify-center'>
              Total Price
            </h3>
            <h3 className='flex items-center justify-start border-b border-stone-300 p-4 sm:justify-center'>
              Status
            </h3>
            <h3 className='flex items-center justify-start p-4 sm:justify-center sm:border-b sm:border-stone-300'></h3>
          </div>
          {/* Order Item Body */}
          <div className='sm:grid sm:grid-cols-5'>
            <p className='flex items-center justify-end border-b border-stone-300 p-4 sm:justify-center sm:border-none'>
              20250129001
            </p>
            <p className='flex items-center justify-end border-b border-stone-300 p-4 sm:justify-center sm:border-none'>
              2025-01-29
            </p>
            <p className='flex items-center justify-end border-b border-stone-300 p-4 sm:justify-center sm:border-none'>
              $1200
            </p>
            <p className='flex items-center justify-end border-b border-stone-300 p-4 sm:justify-center sm:border-none'>
              Pending
            </p>
            <div className='flex items-center justify-end p-4 sm:justify-center'>
              <Button
                text='CHECK'
                customClass='bg-bgColor-secondaryBtn text-text-darkGray hover:bg-bgColor-secondaryHover
              hover:text-white sm:text-base'
              />
            </div>
          </div>
        </div>
        {/* Order Item */}
        <div className='grid grid-cols-2 border border-stone-300 bg-white font-medium sm:grid-cols-1 sm:border-t-0 md:text-lg'>
          {/* Order Item Header For Mobile */}
          <div className='bg-stone-50 sm:hidden'>
            <h3 className='flex items-center justify-start border-b border-stone-300 p-4 sm:justify-center'>
              Order No.
            </h3>
            <h3 className='flex items-center justify-start border-b border-stone-300 p-4 sm:justify-center'>
              Order Date
            </h3>
            <h3 className='flex items-center justify-start border-b border-stone-300 p-4 sm:justify-center'>
              Total Price
            </h3>
            <h3 className='flex items-center justify-start border-b border-stone-300 p-4 sm:justify-center'>
              Status
            </h3>
            <h3 className='flex items-center justify-start p-4 sm:justify-center sm:border-b sm:border-stone-300'></h3>
          </div>
          {/* Order Item Body */}
          <div className='sm:grid sm:grid-cols-5'>
            <p className='flex items-center justify-end border-b border-stone-300 p-4 sm:justify-center sm:border-none'>
              20250129001
            </p>
            <p className='flex items-center justify-end border-b border-stone-300 p-4 sm:justify-center sm:border-none'>
              2025-01-29
            </p>
            <p className='flex items-center justify-end border-b border-stone-300 p-4 sm:justify-center sm:border-none'>
              $1200
            </p>
            <p className='flex items-center justify-end border-b border-stone-300 p-4 sm:justify-center sm:border-none'>
              Pending
            </p>
            <div className='flex items-center justify-end p-4 sm:justify-center'>
              <Button
                text='CHECK'
                customClass='bg-bgColor-secondaryBtn text-text-darkGray hover:bg-bgColor-secondaryHover
              hover:text-white sm:text-base'
              />
            </div>
          </div>
        </div>
        {/* Order Item */}
        <div className='grid grid-cols-2 border border-stone-300 bg-white font-medium sm:grid-cols-1 sm:border-t-0 md:text-lg'>
          {/* Order Item Header For Mobile */}
          <div className='bg-stone-50 sm:hidden'>
            <h3 className='flex items-center justify-start border-b border-stone-300 p-4 sm:justify-center'>
              Order No.
            </h3>
            <h3 className='flex items-center justify-start border-b border-stone-300 p-4 sm:justify-center'>
              Order Date
            </h3>
            <h3 className='flex items-center justify-start border-b border-stone-300 p-4 sm:justify-center'>
              Total Price
            </h3>
            <h3 className='flex items-center justify-start border-b border-stone-300 p-4 sm:justify-center'>
              Status
            </h3>
            <h3 className='flex items-center justify-start p-4 sm:justify-center sm:border-b sm:border-stone-300'></h3>
          </div>
          {/* Order Item Body */}
          <div className='sm:grid sm:grid-cols-5'>
            <p className='flex items-center justify-end border-b border-stone-300 p-4 sm:justify-center sm:border-none'>
              20250129001
            </p>
            <p className='flex items-center justify-end border-b border-stone-300 p-4 sm:justify-center sm:border-none'>
              2025-01-29
            </p>
            <p className='flex items-center justify-end border-b border-stone-300 p-4 sm:justify-center sm:border-none'>
              $1200
            </p>
            <p className='flex items-center justify-end border-b border-stone-300 p-4 sm:justify-center sm:border-none'>
              Pending
            </p>
            <div className='flex items-center justify-end p-4 sm:justify-center'>
              <Button
                text='CHECK'
                customClass='bg-bgColor-secondaryBtn text-text-darkGray hover:bg-bgColor-secondaryHover
              hover:text-white sm:text-base'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
