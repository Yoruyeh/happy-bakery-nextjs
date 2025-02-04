import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { twMerge } from 'tailwind-merge';

function Paginator() {
  let isdisabled = true;
  let isActive = true;

  return (
    <div className='mt-5 flex h-fit w-full items-center justify-center gap-2 p-4'>
      <button
        className={twMerge(
          'flex h-fit w-fit items-center justify-center gap-1 rounded border border-gray-400 bg-white px-4 py-2 text-sm text-black lg:text-base',
          // Disabled styles
          isdisabled &&
            'cursor-not-allowed border-slate-300 bg-slate-200 text-slate-500'
        )}
      >
        <span>
          <ChevronLeftIcon className='h-4 w-4' />
        </span>
        <span>Prev</span>
      </button>
      <button
        className={twMerge(
          'flex h-fit w-fit items-center justify-center gap-1 rounded border border-gray-400 bg-white px-4 py-2 text-sm text-black lg:text-base',
          // Disabled styles
          // isdisabled &&
          //   'cursor-not-allowed border-slate-300 bg-slate-200 text-slate-500',
          // Active styles
          isActive && 'border-black bg-title-primary font-semibold text-white'
        )}
      >
        1
      </button>
      <button
        className={twMerge(
          'flex h-fit w-fit items-center justify-center gap-1 rounded border border-gray-400 bg-white px-4 py-2 text-sm text-black lg:text-base'
          // Disabled styles
          // isdisabled &&
          //   'cursor-not-allowed border-slate-300 bg-slate-200 text-slate-500'
          // Active styles
          // isActive && 'bg-blue-50 text-black'
        )}
      >
        2
      </button>
      <button
        className={twMerge(
          'flex h-fit w-fit items-center justify-center gap-1 rounded border border-gray-400 bg-white px-4 py-2 text-sm text-black lg:text-base'
          // Disabled styles
          // isdisabled &&
          //   'cursor-not-allowed border-slate-300 bg-slate-200 text-slate-500'
          // Active styles
          // isActive && 'bg-blue-50 text-black'
        )}
      >
        3
      </button>
      <button
        className={twMerge(
          'flex h-fit w-fit items-center justify-center gap-1 rounded border border-gray-400 bg-white px-4 py-2 text-sm text-black lg:text-base'
          // Disabled styles
          // isdisabled &&
          //   'cursor-not-allowed border-slate-300 bg-slate-200 text-slate-500'
          // Active styles
          // isActive && 'bg-blue-50 text-black'
        )}
      >
        4
      </button>
      <button
        className={twMerge(
          'flex h-fit w-fit items-center justify-center gap-1 rounded border border-gray-400 bg-white px-4 py-2 text-sm text-black lg:text-base'
          // Disabled styles
          // isdisabled &&
          //   'cursor-not-allowed border-slate-300 bg-slate-200 text-slate-500'
        )}
      >
        <span>Next</span>
        <span>
          <ChevronRightIcon className='h-4 w-4' />
        </span>
      </button>
    </div>
  );
}

export default Paginator;
