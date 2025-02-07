import Image from 'next/image';
import QantityInput from '../input/QantityInput';
import { CartItemType } from '@/api/types/cart';

interface CartItemProps {
  cartItem: CartItemType;
}

function CartItem({ cartItem }: CartItemProps) {
  const totalPrice = cartItem.quantity * cartItem.price_each;

  return (
    <div className='grid grid-cols-[1fr_80px] gap-4 py-4 sm:grid-cols-[2fr_1fr_150px] md:gap-8'>
      {/* 商品資訊 */}
      <div className='flex gap-4'>
        {/* 商品圖片 */}
        <div className='relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg md:h-32 md:w-32'>
          <Image
            src={cartItem.Product.cover}
            alt={cartItem.Product.name}
            fill={true}
            className='object-cover'
          />
        </div>
        <div className='flex flex-col justify-center'>
          <h3 className='text-lg font-medium md:text-xl lg:text-2xl'>
            {cartItem.Product.name}
          </h3>
          <p className='text-sm font-medium text-gray-600 md:text-base lg:text-lg'>
            ${cartItem.price_each}
          </p>
          {/* 手機版數量顯示 */}
          <div className='mt-auto block sm:hidden'>
            <QantityInput quantity={cartItem.quantity} />
          </div>
        </div>
      </div>

      {/* 桌面版數量顯示 */}
      <div className='hidden sm:flex sm:items-center'>
        <QantityInput quantity={cartItem.quantity} />
      </div>

      {/* 總價格 - 固定寬度 */}
      <div className='flex items-center justify-end'>
        <span className='text-lg font-medium md:text-xl lg:text-2xl'>
          ${totalPrice.toLocaleString()}
        </span>
      </div>
    </div>
  );
}

export default CartItem;
