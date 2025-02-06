import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { twMerge } from 'tailwind-merge';
import { Pagination } from '@/api/types/product';

interface PaginatorProps {
  pagination: Pagination;
  pageClickHandler: (page: number) => void;
}

function Paginator({ pagination, pageClickHandler }: PaginatorProps) {
  const pageArray = Array.from(
    { length: pagination.totalPage },
    (_, i) => i + 1
  );

  return (
    <div className='mt-5 flex h-fit w-full items-center justify-center gap-2 p-4'>
      <button
        className={twMerge(
          'flex h-fit w-fit items-center justify-center gap-1 rounded border border-gray-400 bg-white px-4 py-2 text-sm text-black lg:text-base',
          // Disabled styles
          pagination.currentPage === 1 &&
            'cursor-not-allowed border-slate-300 bg-slate-200 text-slate-500'
        )}
        onClick={() => pageClickHandler(pagination.currentPage - 1)}
      >
        <span>
          <ChevronLeftIcon className='h-4 w-4' />
        </span>
        <span>Prev</span>
      </button>
      {pageArray.map((page) => (
        <button
          key={page}
          className={twMerge(
            'flex h-fit w-fit items-center justify-center gap-1 rounded border border-gray-400 bg-white px-4 py-2 text-sm text-black lg:text-base',
            // Active styles
            page === pagination.currentPage &&
              'border-black bg-title-primary font-semibold text-white'
          )}
          onClick={() => pageClickHandler(page)}
        >
          {page}
        </button>
      ))}

      <button
        className={twMerge(
          'flex h-fit w-fit items-center justify-center gap-1 rounded border border-gray-400 bg-white px-4 py-2 text-sm text-black lg:text-base',
          // Disabled styles
          pagination.currentPage === pagination.totalPage &&
            'cursor-not-allowed border-slate-300 bg-slate-200 text-slate-500'
        )}
        onClick={() => pageClickHandler(pagination.currentPage + 1)}
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
