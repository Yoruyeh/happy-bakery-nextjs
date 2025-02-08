'use client';

import { twMerge } from 'tailwind-merge';
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import useStore from '@/store/store';

interface QuantityInputInCartProps {
  quantity: number;
  updateCartItem: (quantity: number) => void;
  deleteCartItem: () => void;
}

function QuantityInputInCart({
  quantity,
  updateCartItem,
  deleteCartItem,
}: QuantityInputInCartProps) {
  const decreaseCartItemsCount = useStore(
    (state) => state.decreaseCartItemsCount
  );
  const [inputValue, setInputValue] = useState(quantity);

  function QuantityControlHandler(action: string) {
    switch (action) {
      case 'plus':
        setInputValue((prev) => prev + 1);
        updateCartItem(inputValue + 1);
        break;
      case 'minus':
        setInputValue((prev) => prev - 1);
        updateCartItem(inputValue - 1);
        break;
    }
  }

  async function inputChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const inputValueToNumber = parseInt(e.target.value);
    if (inputValueToNumber < 0 || inputValueToNumber > 10) return;
    if (isNaN(inputValueToNumber)) return;
    setInputValue(inputValueToNumber);
    updateCartItem(inputValueToNumber);
  }

  function deleteCartItemHandler() {
    deleteCartItem();
    decreaseCartItemsCount();
  }

  return (
    <div className='flex items-center gap-3'>
      <div className='flex h-fit w-fit items-center [&>*:not(:first-child)]:-ml-[1px]'>
        <button
          disabled={inputValue === 1}
          className={twMerge(
            'flex h-8 items-center justify-center border border-gray-400 bg-blue-50 px-2 text-black lg:h-10 lg:text-base',
            // Disabled Style
            inputValue === 1 && 'bg-gray-300 text-gray-500'
          )}
          onClick={() => QuantityControlHandler('minus')}
        >
          <MinusIcon className='h-[14px] w-[14px] md:h-4 md:w-4' />
        </button>
        <input
          type='number'
          min={1}
          max={10}
          value={inputValue}
          className={twMerge(
            'no-spinners-input relative z-10 h-8 w-10 rounded-none border border-gray-400 bg-white px-0 text-center text-sm font-medium text-black focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 md:text-base lg:h-10'
          )}
          onChange={inputChangeHandler}
        />
        <button
          disabled={inputValue === 10}
          className={twMerge(
            'flex h-8 items-center justify-center border border-gray-400 bg-blue-50 px-2 text-black lg:h-10 lg:text-base',
            // Disabled Style
            inputValue === 10 && 'bg-gray-300 text-gray-500'
          )}
          onClick={() => QuantityControlHandler('plus')}
        >
          <PlusIcon className='h-[14px] w-[14px] md:h-4 md:w-4' />
        </button>
      </div>
      <button onClick={deleteCartItemHandler}>
        <TrashIcon className='h-4 w-4 text-text-darkGray lg:h-5 lg:w-5' />
      </button>
    </div>
  );
}

export default QuantityInputInCart;
