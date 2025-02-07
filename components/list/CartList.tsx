'use client';

import Link from 'next/link';
import CartItem from '../card/CartItem';
import Button from '../button/Button';
import { GetCartResponse } from '@/api/types/cart';
import { useQuery } from '@tanstack/react-query';
import { CartService } from '@/api/services/Cart';

interface CartListProps {
  initialCartData: GetCartResponse;
}

function CartList({ initialCartData }: CartListProps) {
  const { data } = useQuery({
    queryKey: ['cartItems'],
    queryFn: async () => {
      return await CartService.getCart();
    },
    refetchOnWindowFocus: false,
    initialData: initialCartData,
  });

  const totalPrice = data.cartItems.reduce((prevTotal, item) => {
    return prevTotal + item.price_each * item.quantity;
  }, 0);

  return (
    <>
      {/* Cart Header */}
      <div className='flex items-center justify-between gap-2 text-title-seconday'>
        <h1 className='text-2xl font-bold md:text-3xl lg:text-4xl'>
          Your Cart
        </h1>
        <p className='text-sm font-medium underline underline-offset-4 hover:decoration-2 md:text-base lg:text-lg'>
          <Link href='/product/all'>Continue Shopping</Link>
        </p>
      </div>
      {/* Cart Table Header */}
      <div className='grid grid-cols-[1fr_80px] gap-4 py-4 text-text-lightGray sm:grid-cols-[2fr_1fr_150px] md:gap-8'>
        <div>PRODUCT</div>
        <div className='hidden sm:block'>QUANTITY</div>
        <div className='text-right'>TOTAL</div>
      </div>
      {/* Cart Table Itams */}
      <div className='border-y border-stone-300'>
        {data.cartItems.map((item) => (
          <CartItem key={item.Product.id} cartItem={item} />
        ))}
      </div>
      {/* Cart Total */}
      <div className='mb-4 mt-8 flex flex-col items-center justify-center gap-4 sm:justify-self-end'>
        <div className='flex items-center justify-between gap-4 text-xl font-bold text-text-darkGray sm:items-end sm:gap-8 md:text-2xl'>
          <h2>Total Price</h2>
          <p className='relative bottom-[2px]'>{totalPrice.toLocaleString()}</p>
        </div>
        <Link href='/checkout' className='w-full'>
          <Button
            text='Check out'
            customClass='w-full h-fit font-medium bg-bgColor-primaryBtn text-lg md:text-xl hover:bg-bgColor-primaryHover text-text-darkGray hover:text-white'
          />
        </Link>
      </div>
    </>
  );
}

export default CartList;
