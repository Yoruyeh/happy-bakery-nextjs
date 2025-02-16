'use client';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { twMerge } from 'tailwind-merge';
import { Pagination } from '@/api/types/(user)/product';
import { useEffect, useState } from 'react';
import { dynamicPageGenerator } from '@/utils/dynamicPageGenerator';

interface PaginatorProps {
  pagination: Pagination;
  pageClickHandler: (page: number) => void;
}

function Paginator({ pagination, pageClickHandler }: PaginatorProps) {
  const { currentPage, totalPage } = pagination;
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function generateMaxVisiblePage() {
    if (windowWidth === null) return 3;
    if (windowWidth >= 768) return 9;
    if (windowWidth >= 640) return 7;
    return 3;
  }

  const pageArray = dynamicPageGenerator({
    currentPage,
    totalPage,
    maxVisiblePage: generateMaxVisiblePage(),
  });

  return (
    <div className='mt-5 flex h-fit w-full items-center justify-center gap-2 p-4'>
      <button
        className={twMerge(
          'flex h-fit w-fit items-center justify-center gap-1 rounded border border-gray-400 bg-white px-2 py-2 text-sm text-black sm:px-4 lg:text-base',
          // Disabled styles
          currentPage === 1 &&
            'cursor-not-allowed border-slate-300 bg-slate-200 text-slate-500'
        )}
        onClick={() => pageClickHandler(currentPage - 1)}
      >
        <span>
          <ChevronLeftIcon className='h-5 w-5' />
        </span>
        <span className='hidden sm:block'>Prev</span>
      </button>
      {pageArray.map((page, index) =>
        page === '...' ? (
          <span key={index} className='p-1 text-gray-500'>
            ...
          </span>
        ) : (
          <button
            key={index}
            className={twMerge(
              'flex h-fit w-fit items-center justify-center gap-1 rounded border border-gray-400 bg-white px-4 py-2 text-sm text-black lg:text-base',
              // Active styles
              page === currentPage &&
                'border-black bg-title-primary font-semibold text-white'
            )}
            onClick={() => pageClickHandler(Number(page))}
          >
            {page}
          </button>
        )
      )}
      <button
        className={twMerge(
          'flex h-fit w-fit items-center justify-center gap-1 rounded border border-gray-400 bg-white px-2 py-2 text-sm text-black sm:px-4 lg:text-base',
          // Disabled styles
          (currentPage === totalPage || totalPage === 0) &&
            'cursor-not-allowed border-slate-300 bg-slate-200 text-slate-500'
        )}
        onClick={() => pageClickHandler(currentPage + 1)}
      >
        <span className='hidden sm:block'>Next</span>
        <span>
          <ChevronRightIcon className='h-5 w-5' />
        </span>
      </button>
    </div>
  );
}

export default Paginator;
