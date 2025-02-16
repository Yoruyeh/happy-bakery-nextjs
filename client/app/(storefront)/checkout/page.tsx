'use client';

import { CartService } from '@/api/services/(user)/Cart';
import CheckoutItem from '@/components/card/CheckoutItem';
import OrderSummaryCollapse from '@/components/collapse/OrderSummaryCollapse';
import CheckoutForm from '@/components/form/CheckoutForm';
import PageLoader from '@/components/spinner/PageLoader';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

function CheckoutPage() {
  const [shippingFee, setShippingFee] = useState(0);
  const {
    data: cartData,
    isFetching,
    isPending,
  } = useQuery({
    queryKey: ['cartItems'],
    queryFn: async () => {
      return await CartService.getCart();
    },
    refetchOnWindowFocus: false,
  });

  if (isFetching || isPending) return <PageLoader />;

  const cartItems = cartData?.cartItems ?? [];
  const itemsCount = cartItems.length;
  const subtotalPrice = cartItems.reduce((prevTotal, item) => {
    return prevTotal + Number(item.price_each) * item.quantity;
  }, 0);
  const totalPrice = subtotalPrice + shippingFee;

  function shippingFeeHandler(price: number) {
    setShippingFee(price);
  }

  return (
    <div className='mx-auto flex max-w-5xl flex-col lg:flex-row-reverse lg:gap-8'>
      <section className='h-fit w-full border border-stone-300 bg-blue-50 lg:sticky lg:top-28 lg:flex-[2_2_0%]'>
        <OrderSummaryCollapse togglerStyle='up' totalPrice={totalPrice}>
          <div className='mx-auto h-fit w-full max-w-lg lg:max-w-none'>
            <div>
              {cartItems.map((item) => (
                <CheckoutItem key={item.Product.id} checkoutItem={item} />
              ))}
            </div>
            <div className='flex flex-col gap-2 py-4'>
              <div className='flex items-center justify-between gap-2 text-sm font-medium text-text-darkGray'>
                <span>Subtotal • {itemsCount} items</span>
                <span>${subtotalPrice.toLocaleString()}</span>
              </div>
              <div className='flex items-center justify-between gap-2 text-sm font-medium text-text-darkGray'>
                <span>Shipping</span>
                <span>${shippingFee.toLocaleString()}</span>
              </div>
              <div className='flex items-center justify-between gap-2 text-lg font-bold text-text-darkGray'>
                <span>Totals</span>
                <span>TWD ${totalPrice.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </OrderSummaryCollapse>
      </section>
      <section className='w-full min-w-fit lg:max-w-none lg:flex-[3_3_0%]'>
        <div className='mx-auto w-full max-w-lg lg:max-w-none'>
          <CheckoutForm
            checkoutItems={cartItems}
            itemsCount={itemsCount}
            shippingFee={shippingFee}
            subtotalPrice={subtotalPrice}
            totalPrice={totalPrice}
            shippingFeeHandler={shippingFeeHandler}
          />
        </div>
      </section>
    </div>
  );
}

export default CheckoutPage;
