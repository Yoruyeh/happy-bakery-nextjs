import Image from 'next/image';

interface CartItem {
  id: number;
  name: string;
  priceRegular: number;
  cover: string;
  quantity: number;
}

interface CartItemProps {
  cartItem: CartItem;
}

function CartItem({ cartItem }: CartItemProps) {
  const totalPrice = cartItem.quantity * cartItem.priceRegular;

  return (
    <div className='grid grid-cols-[1fr_150px] gap-4 py-4 md:grid-cols-[2fr_1fr_150px] md:gap-8'>
      {/* 商品資訊 */}
      <div className='flex gap-4'>
        {/* 商品圖片 */}
        <div className='relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg md:h-32 md:w-32'>
          <Image
            src={cartItem.cover}
            alt={cartItem.name}
            fill={true}
            className='object-cover'
          />
        </div>
        <div className='flex flex-col justify-center'>
          <h3 className='text-lg font-medium md:text-xl lg:text-2xl'>
            {cartItem.name}
          </h3>
          <p className='text-sm font-medium text-gray-600 md:text-base lg:text-lg'>
            ${cartItem.priceRegular}
          </p>
          {/* 手機版數量顯示 */}
          <div className='mt-auto block md:hidden'>{cartItem.quantity}</div>
        </div>
      </div>

      {/* 桌面版數量顯示 */}
      <div className='hidden md:flex md:items-center'>{cartItem.quantity}</div>

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
