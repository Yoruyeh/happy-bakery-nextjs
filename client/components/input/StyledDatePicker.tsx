'use client';

import { useState } from 'react';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { twMerge } from 'tailwind-merge';

interface StyledDatePickerProps {
  name: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  customClass?: string;
}

function StyledDatePicker({
  name,
  id,
  value,
  onChange,
  error,
  customClass,
}: StyledDatePickerProps) {
  const [dateInput, setDateInput] = useState<HTMLInputElement | null>(null);
  const mobileDevice = [
    'Android',
    'webOS',
    'iPhone',
    'iPad',
    'iPod',
    'BlackBerry',
    'Windows Phone',
  ];
  let isMobileDevice = mobileDevice.some((e) => navigator.userAgent.match(e));

  const handleButtonClick = () => {
    if (dateInput) {
      if (isMobileDevice) {
        // 創建一個模擬的觸摸事件
        const touchEvent = new TouchEvent('touchstart', {
          bubbles: true,
          cancelable: true,
          view: window,
        });
        dateInput.dispatchEvent(touchEvent);
        dateInput.focus();
      } else {
        try {
          dateInput.showPicker();
        } catch (e) {
          dateInput.click();
        }
      }
    }
  };

  return (
    <div className='relative'>
      {/* Hidden date input */}
      <input
        ref={setDateInput}
        type='date'
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className='absolute h-0 w-0 overflow-hidden opacity-0'
      />

      {/* Custom button trigger */}
      <button
        type='button'
        onClick={handleButtonClick}
        className={twMerge(
          'w-full rounded border border-stone-400 bg-white p-2 shadow-md focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500',
          'lg:p-3 lg:text-lg',
          // Error styles
          error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
          // Custom styles
          customClass
        )}
      >
        <div className='flex items-center justify-between'>
          <span className={value ? 'text-gray-900' : 'text-gray-500'}>
            {value || 'Select a date'}
          </span>
          <CalendarIcon className='h-5 w-5 text-gray-500' />
        </div>
      </button>

      {error && <span className='text-xs text-red-500'>{error}</span>}
    </div>
  );
}

export default StyledDatePicker;
