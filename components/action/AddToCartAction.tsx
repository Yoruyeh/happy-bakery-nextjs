'use client';

import QuantityInput from '@/components/input/QuantityInput';
import Button from '../button/Button';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { CartService } from '@/api/services/Cart';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import useStore from '@/store/store';

interface AddToCartActionProps {
  productId: number;
  productPrice: number;
}

function AddToCartAction({ productId, productPrice }: AddToCartActionProps) {
  const router = useRouter();
  const increaseCartItemsCount = useStore(
    (state) => state.increaseCartItemsCount
  );
  const [quantityValue, setQuantityValue] = useState(1);

  const { mutateAsync: AddCartItem } = useMutation({
    mutationFn: async () => {
      return await CartService.addToCart({
        id: productId,
        quantity: quantityValue,
        price: productPrice,
      });
    },
  });

  function quantityInputChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const inputValueToNumber = parseInt(e.target.value);
    if (inputValueToNumber < 0 || inputValueToNumber > 10) return;
    if (isNaN(inputValueToNumber)) return;
    setQuantityValue(inputValueToNumber);
  }

  function incrementHandler() {
    setQuantityValue((prev) => prev + 1);
  }

  function decrementHandler() {
    setQuantityValue((prev) => prev - 1);
  }

  async function addToCartHandler() {
    const result = await AddCartItem();
    if (result.status === 'success') {
      toast.success('Successfully added to cart! 🛒', {
        position: 'top-center',
        autoClose: 1000,
      });
      increaseCartItemsCount();
    } else {
      toast.error(result.message, {
        position: 'top-center',
        autoClose: 1000,
      });
    }
  }

  async function buyItNowHandler() {
    await AddCartItem();
    router.push('/checkout');
  }

  return (
    <>
      <div className='mb-4 flex items-center gap-4 font-medium'>
        <label htmlFor='quantity'>Quantity</label>
        <QuantityInput
          quantityValue={quantityValue}
          onIncrement={incrementHandler}
          onDecrement={decrementHandler}
          onChange={quantityInputChangeHandler}
        />
      </div>
      <Button
        text='Add TO CART'
        customClass='font-medium bg-bgColor-secondaryBtn hover:bg-bgColor-secondaryHover text-text-darkGray hover:text-white'
        onClick={addToCartHandler}
      />
      <Button
        text='BUY IT NOW'
        customClass='font-medium bg-bgColor-primaryBtn hover:bg-bgColor-primaryHover text-text-darkGray hover:text-white'
        onClick={buyItNowHandler}
      />
      <ToastContainer theme='colored' />
    </>
  );
}

export default AddToCartAction;
