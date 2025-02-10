import Image from 'next/image';
import { CartItemType } from '@/api/types/cart';

interface CheckoutItemProps {
  checkoutItem: CartItemType;
}

function CheckoutItem({ checkoutItem }: CheckoutItemProps) {
  const totalPrice = checkoutItem.quantity * Number(checkoutItem.price_each);

  return (
    <div className='grid grid-cols-[1fr_auto] gap-4 py-4'>
      {/* 商品資訊 */}
      <div className='flex items-center gap-4 text-lg font-medium'>
        {/* 商品圖片 */}
        <div className='relative h-[72px] w-[72px] flex-shrink-0'>
          <Image
            src={checkoutItem.Product.cover}
            alt={checkoutItem.Product.name}
            fill={true}
            sizes='300px'
            className='rounded-lg object-cover'
          />
          <span className='test-white absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-stone-600 text-xs font-semibold text-white'>
            {checkoutItem.quantity}
          </span>
        </div>
        <h3 className='text-lg font-medium'>{checkoutItem.Product.name}</h3>
      </div>
      {/* 總價格 */}
      <div className='flex items-center justify-end'>
        <span>${totalPrice.toLocaleString()}</span>
      </div>
    </div>
  );
}

export default CheckoutItem;
