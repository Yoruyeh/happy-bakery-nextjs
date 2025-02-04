'use client';

import { twMerge } from 'tailwind-merge';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

interface QantityInputProps {
  quantity: number;
}

function QantityInput({ quantity }: QantityInputProps) {
  const [inputValue, setInputValue] = useState(quantity);

  function QuantityControlHandler(action: string) {
    switch (action) {
      case 'plus':
        setInputValue((prev) => prev + 1);
        break;
      case 'minus':
        setInputValue((prev) => prev - 1);
        break;
    }
  }

  function inputChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const inputValueToNumber = parseInt(e.target.value);
    if (inputValueToNumber < 0 || inputValueToNumber > 99) return;
    if (isNaN(inputValueToNumber)) return;
    setInputValue(inputValueToNumber);
  }

  return (
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
        max={99}
        value={inputValue}
        className={twMerge(
          'no-spinners-input relative z-10 h-8 w-10 rounded-none border border-gray-400 bg-white px-0 text-center text-sm font-medium text-black focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 md:text-base lg:h-10'
        )}
        onChange={inputChangeHandler}
      />
      <button
        disabled={inputValue === 99}
        className={twMerge(
          'flex h-8 items-center justify-center border border-gray-400 bg-blue-50 px-2 text-black lg:h-10 lg:text-base',
          // Disabled Style
          inputValue === 99 && 'bg-gray-300 text-gray-500'
        )}
        onClick={() => QuantityControlHandler('plus')}
      >
        <PlusIcon className='h-[14px] w-[14px] md:h-4 md:w-4' />
      </button>
    </div>
  );
}

export default QantityInput;
