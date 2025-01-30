import Button from '@/components/button/Button';
import CheckoutItem from '@/components/card/CheckoutItem';
import OrderSummaryCollapse from '@/components/collapse/OrderSummaryCollapse';
import Link from 'next/link';

interface CheckoutItemType {
  id: number;
  name: string;
  priceRegular: number;
  cover: string;
  quantity: number;
}

const dummyCheckoutItems: CheckoutItemType[] = [
  {
    id: 1,
    name: 'cake1',
    priceRegular: 100,
    cover: '/images/cake1.jpg',
    quantity: 10,
  },
  {
    id: 2,
    name: 'cake2',
    priceRegular: 80,
    cover: '/images/cake1.jpg',
    quantity: 3,
  },
  {
    id: 3,
    name: 'cake3',
    priceRegular: 80,
    cover: '/images/cake1.jpg',
    quantity: 3,
  },
  {
    id: 4,
    name: 'cake4',
    priceRegular: 80,
    cover: '/images/cake1.jpg',
    quantity: 3,
  },
  {
    id: 5,
    name: 'cake5',
    priceRegular: 80,
    cover: '/images/cake1.jpg',
    quantity: 3,
  },
];

function OrderDetailPage() {
  return (
    <div className='mx-auto max-w-screen-lg'>
      <div className='flex flex-col gap-4 lg:flex-row-reverse lg:justify-center'>
        {/* Order Summary */}
        <div className='mx-auto w-full max-w-lg lg:flex-1'>
          <OrderSummaryCollapse togglerStyle='down'>
            <div>
              {dummyCheckoutItems.map((item) => (
                <CheckoutItem key={item.id} checkoutItem={item} />
              ))}
            </div>
          </OrderSummaryCollapse>
          <div className='flex flex-col gap-2 p-4'>
            <div className='flex items-center justify-between gap-2 text-sm font-medium text-text-darkGray'>
              <span>Subtotal • 3 items</span>
              <span>$25,815.00</span>
            </div>
            <div className='flex items-center justify-between gap-2 text-sm font-medium text-text-darkGray'>
              <span>Shipping</span>
              <span>$1,999.00</span>
            </div>
            <div className='flex items-center justify-between gap-2 text-lg font-bold text-text-darkGray'>
              <span>Totals</span>
              <span>TWD $27,814.00</span>
            </div>
          </div>
        </div>
        {/* Order Detail Table */}
        <div className='mx-auto grid h-fit w-full max-w-lg grid-cols-2 border border-stone-300 bg-white font-medium lg:flex-1'>
          {/* Header  */}
          <div className='bg-stone-50'>
            <h3 className='flex h-20 items-center justify-start border-b border-stone-300 p-4'>
              Order No.
            </h3>
            <h3 className='flex h-20 items-center justify-start border-b border-stone-300 p-4'>
              Order Date
            </h3>
            <h3 className='flex h-20 items-center justify-start border-b border-stone-300 p-4'>
              Total Price
            </h3>
            <h3 className='flex h-20 items-center justify-start border-b border-stone-300 p-4'>
              Status
            </h3>
            <h3 className='flex h-20 items-center justify-start border-b border-stone-300 p-4'>
              Customer Name
            </h3>
            <h3 className='flex h-20 items-center justify-start border-b border-stone-300 p-4'>
              Email
            </h3>
            <h3 className='flex h-20 items-center justify-start border-b border-stone-300 p-4'>
              Address
            </h3>
            <h3 className='flex h-20 items-center justify-start border-b border-stone-300 p-4'>
              Phone
            </h3>
            <h3 className='flex h-20 items-center justify-start border-b border-stone-300 p-4'>
              Shipping Method
            </h3>
            <h3 className='flex h-20 items-center justify-start p-4'>
              Payment
            </h3>
          </div>
          {/*  Body */}
          <div className=''>
            <p className='flex h-20 items-center justify-end border-b border-stone-300 p-4'>
              20250129001
            </p>
            <p className='flex h-20 items-center justify-end border-b border-stone-300 p-4'>
              2025-01-29
            </p>
            <p className='flex h-20 items-center justify-end border-b border-stone-300 p-4'>
              $1200
            </p>
            <p className='flex h-20 items-center justify-end border-b border-stone-300 p-4'>
              Pending
            </p>
            <p className='flex h-20 items-center justify-end border-b border-stone-300 p-4'>
              John Doe
            </p>
            <p className='group relative flex h-20 cursor-help items-center justify-end border-b border-stone-300 p-4'>
              <span className='truncate text-right'>john@gmail.com</span>
              {/* Tooltip */}
              <span className='absolute right-0 top-16 z-50 hidden w-60 rounded-md border bg-white p-3 text-sm shadow-lg group-hover:block'>
                john@gmail.com
              </span>
            </p>
            <p className='group relative flex h-20 cursor-help items-center justify-end border-b border-stone-300 p-4'>
              <span className='truncate text-right'>
                6F., Ln. 30, Sec. 1, Fusing S. Rd., Songshan Dist., Taipei City
                105, Taiwan dfj dsfof dskfl fdsjfkldsjf dfdsfs fdsfds
              </span>
              {/* Tooltip */}
              <span className='absolute right-0 top-16 z-50 hidden w-60 rounded-md border bg-white p-3 text-sm shadow-lg group-hover:block'>
                6F., Ln. 30, Sec. 1, Fusing S. Rd., Songshan Dist., Taipei City
                105, Taiwan
              </span>
            </p>
            <p className='flex h-20 items-center justify-end border-b border-stone-300 p-4'>
              09123456789
            </p>
            <p className='flex h-20 items-center justify-end border-b border-stone-300 p-4'>
              Standard
            </p>
            <p className='flex h-20 items-center justify-end p-4'>
              Credit Card
            </p>
          </div>
        </div>
      </div>
      <Link href='/profile/order' className='flex justify-end'>
        <Button
          text='Back to List'
          customClass='mt-5 w-fit bg-bgColor-secondaryBtn text-text-darkGray hover:bg-bgColor-secondaryHover  hover:text-white font-medium'
        />
      </Link>
    </div>
  );
}

export default OrderDetailPage;
