import { OrderService } from '@/api/services/Order';
import Button from '@/components/button/Button';
import Link from 'next/link';

async function OrderPage() {
  const { userOrders } = await OrderService.getOrders();

  let orderTableContent;

  if (userOrders.length === 0) {
    orderTableContent = (
      <div className='font-medium sm:border sm:border-t-0 sm:border-stone-300 sm:bg-white md:text-lg'>
        {/* Order Item Body */}
        <div className='flex items-center justify-center px-4 py-20'>
          <p className='text-center'>No Order Found</p>
        </div>
      </div>
    );
  } else {
    orderTableContent = userOrders.map((order) => (
      <div
        key={order.id}
        className='grid grid-cols-2 border border-stone-300 bg-white font-medium sm:grid-cols-1 sm:border-t-0 md:text-lg'
      >
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
            {order.id}
          </p>
          <p className='flex items-center justify-end border-b border-stone-300 p-4 sm:justify-center sm:border-none'>
            {order.order_date}
          </p>
          <p className='flex items-center justify-end border-b border-stone-300 p-4 sm:justify-center sm:border-none'>
            ${order.total_price}
          </p>
          <p className='flex items-center justify-end border-b border-stone-300 p-4 sm:justify-center sm:border-none'>
            {order.status}
          </p>
          <Link
            href={`/profile/order/${order.id}`}
            className='flex items-center justify-end p-4 sm:justify-center'
          >
            <Button
              text='CHECK'
              customClass='bg-bgColor-secondaryBtn text-text-darkGray hover:bg-bgColor-secondaryHover
              hover:text-white sm:text-base'
            />
          </Link>
        </div>
      </div>
    ));
  }

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
        {orderTableContent}
      </div>
    </div>
  );
}

export default OrderPage;
