'use client';

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

interface CollapseTogglerProps {
  isOpen: boolean;
  togglerStyle: string;
  totalPrice: number;
}

interface OrderSummaryCollapseProps {
  children: React.ReactNode;
  togglerStyle: string;
  totalPrice: number;
}

function CollapseToggler({
  isOpen,
  togglerStyle,
  totalPrice,
}: CollapseTogglerProps) {
  return (
    <>
      {togglerStyle === 'up' && (
        <div className='mx-auto flex w-full max-w-lg items-center justify-between gap-4 bg-blue-50 lg:max-w-none'>
          <div className='flex items-center gap-2'>
            <h1>Order Summary</h1>
            <ChevronDownIcon
              className={twMerge('h-4 w-4', isOpen ? 'hidden' : 'block')}
            />
            <ChevronUpIcon
              className={twMerge('h-4 w-4', !isOpen ? 'hidden' : 'block')}
            />
          </div>
          <span className='text-lg font-bold'>
            ${totalPrice.toLocaleString()}
          </span>
        </div>
      )}
      {togglerStyle === 'down' && (
        <div className='flex w-full items-center justify-between gap-2'>
          <h1 className='text-lg font-bold'>Order Summary</h1>
          <div
            className={twMerge('flex items-center gap-1', isOpen && 'hidden')}
          >
            <span className='text-sm font-medium text-title-seconday'>
              Show
            </span>
            <ChevronDownIcon className='h-4 w-4' />
          </div>
          <div
            className={twMerge('flex items-center gap-1', !isOpen && 'hidden')}
          >
            <span className='text-sm font-medium text-title-seconday'>
              Hide
            </span>
            <ChevronUpIcon className='h-4 w-4' />
          </div>
        </div>
      )}
    </>
  );
}

function OrderSummaryCollapse({
  children,
  togglerStyle,
  totalPrice,
}: OrderSummaryCollapseProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOrderSummary = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className='cursor-pointer p-4 lg:hidden'
        onClick={toggleOrderSummary}
      >
        <CollapseToggler
          isOpen={isOpen}
          togglerStyle={togglerStyle}
          totalPrice={totalPrice}
        />
      </div>
      <div
        className={twMerge(
          'bg-slate-50 px-4 transition-all duration-1000 ease-in-out lg:max-h-[500px] lg:overflow-y-scroll',
          isOpen
            ? 'max-h-[500px] overflow-y-scroll border-t'
            : 'max-h-0 overflow-hidden'
        )}
      >
        {children}
      </div>
    </>
  );
}

export default OrderSummaryCollapse;
