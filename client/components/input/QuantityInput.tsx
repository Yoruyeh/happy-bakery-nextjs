'use client';

import { twMerge } from 'tailwind-merge';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';

interface QantityInputProps {
  quantityValue: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function QantityInput({
  quantityValue,
  onIncrement,
  onDecrement,
  onChange,
}: QantityInputProps) {
  return (
    <div className='flex items-center gap-3'>
      <div className='flex h-fit w-fit items-center [&>*:not(:first-child)]:-ml-[1px]'>
        <button
          disabled={quantityValue === 1}
          className={twMerge(
            'flex h-8 items-center justify-center border border-gray-400 bg-blue-50 px-2 text-black lg:h-10 lg:text-base',
            // Disabled Style
            quantityValue === 1 && 'bg-gray-300 text-gray-500'
          )}
          onClick={onDecrement}
        >
          <MinusIcon className='h-[14px] w-[14px] md:h-4 md:w-4' />
        </button>
        <input
          type='number'
          min={1}
          max={10}
          value={quantityValue}
          className={twMerge(
            'no-spinners-input relative z-10 h-8 w-10 rounded-none border border-gray-400 bg-white px-0 text-center text-sm font-medium text-black focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 md:text-base lg:h-10'
          )}
          onChange={onChange}
        />
        <button
          disabled={quantityValue === 10}
          className={twMerge(
            'flex h-8 items-center justify-center border border-gray-400 bg-blue-50 px-2 text-black lg:h-10 lg:text-base',
            // Disabled Style
            quantityValue === 10 && 'bg-gray-300 text-gray-500'
          )}
          onClick={onIncrement}
        >
          <PlusIcon className='h-[14px] w-[14px] md:h-4 md:w-4' />
        </button>
      </div>
    </div>
  );
}

export default QantityInput;
