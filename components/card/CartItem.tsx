import Image from 'next/image';
import QuantityInputInCart from '../input/QuantityInputInCart';
import { CartItemType } from '@/api/types/cart';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CartService } from '@/api/services/Cart';
import LoadingSpinner from '../spinner/LoadingSpinner';

interface CartItemProps {
  cartItem: CartItemType;
}

function CartItem({ cartItem }: CartItemProps) {
  const queryClient = useQueryClient();
  const productId = cartItem.Product.id;
  const totalPrice = cartItem.quantity * Number(cartItem.price_each);

  const { mutate: updateCartItem, isPending } = useMutation({
    mutationFn: async (quantity: number) => {
      return await CartService.updateCartItem(productId, quantity);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cartItems'] });
    },
  });

  const { mutate: deleteCartItem, isPending: isDeleting } = useMutation({
    mutationFn: async () => {
      return await CartService.deleteCartItem(productId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cartItems'] });
    },
  });

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
            sizes='(max-width: 768px) 96px, 128px'
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
            <QuantityInputInCart
              quantity={cartItem.quantity}
              updateCartItem={updateCartItem}
              deleteCartItem={deleteCartItem}
            />
          </div>
        </div>
      </div>

      {/* 桌面版數量顯示 */}
      <div className='hidden sm:flex sm:items-center'>
        <QuantityInputInCart
          quantity={cartItem.quantity}
          updateCartItem={updateCartItem}
          deleteCartItem={deleteCartItem}
        />
      </div>

      {/* 總價格 - 固定寬度 */}
      <div className='flex items-center justify-end'>
        {isPending ? (
          <LoadingSpinner />
        ) : (
          <span className='text-lg font-medium md:text-xl lg:text-2xl'>
            ${totalPrice.toLocaleString()}
          </span>
        )}
      </div>
    </div>
  );
}

export default CartItem;
