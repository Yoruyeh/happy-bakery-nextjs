import CheckoutItem from '@/components/card/CheckoutItem';
import OrderSummaryCollapse from '@/components/collapse/OrderSummaryCollapse';
import CheckoutForm from '@/components/form/CheckoutForm';

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

const CheckoutPage = () => {
  return (
    <div className='mx-auto flex max-w-5xl flex-col lg:flex-row-reverse lg:gap-8'>
      <section className='h-fit w-full border border-stone-300 bg-blue-50 lg:sticky lg:top-28 lg:flex-[2_2_0%]'>
        <OrderSummaryCollapse togglerStyle='up'>
          <div className='mx-auto h-fit w-full max-w-lg lg:max-w-none'>
            <div>
              {dummyCheckoutItems.map((item) => (
                <CheckoutItem key={item.id} checkoutItem={item} />
              ))}
            </div>
            <div className='flex flex-col gap-2 py-4'>
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
        </OrderSummaryCollapse>
      </section>
      <section className='w-full min-w-fit lg:max-w-none lg:flex-[3_3_0%]'>
        <div className='mx-auto w-full max-w-lg lg:max-w-none'>
          <CheckoutForm checkoutItems={dummyCheckoutItems} />
        </div>
      </section>
    </div>
  );
};

export default CheckoutPage;
