'use client';

import { twMerge } from 'tailwind-merge';
import {
  UserIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@heroicons/react/24/outline';
import { Category } from '@/api/types/(user)/product';

interface NavbarProps {
  token: string;
  categories: Category[];
  isMenuOpen: boolean;
  isShopListOpen: boolean;
  toggleShopList: () => void;
  navigateHandler: (path: string) => void;
}

function Navbar({
  token,
  categories,
  isMenuOpen,
  isShopListOpen,
  toggleShopList,
  navigateHandler,
}: NavbarProps) {
  function navItemClickHandler(categoryName: string) {
    navigateHandler(`/product/${categoryName.toLowerCase()}`);
  }
  return (
    <nav
      className={twMerge(
        'transform-translate fixed left-0 top-[56px] z-50 h-[calc(100dvh-56px)] w-1/2 bg-white font-josefin text-lg font-semibold duration-300 ease-in-out',
        // Mobile styles
        isMenuOpen ? 'translate-x-0' : '-translate-x-full',
        // Ipad styles
        'md:top-[80px] md:h-[calc(100dvh-80px)]',
        // Desktop styles
        'lg:static lg:h-fit lg:w-full lg:flex-1 lg:translate-x-0'
      )}
    >
      <div className='relative flex h-full w-full flex-col overflow-hidden lg:overflow-visible'>
        {/* 主選單 */}
        <ul
          className={twMerge(
            'absolute flex w-full transform flex-col gap-2 transition-transform duration-300 ease-in-out',
            // Mobile styles
            isShopListOpen ? '-translate-x-full' : 'translate-x-0',
            // Desktop styles
            'lg:static lg:translate-x-0 lg:flex-row lg:gap-4'
          )}
        >
          <li
            className='flex cursor-pointer items-center justify-between p-4 hover:bg-slate-200 lg:p-2 lg:hover:bg-transparent lg:hover:underline'
            onClick={toggleShopList}
          >
            <span>Shop</span>
            <div>
              <ArrowRightIcon className='h-4 w-4 lg:hidden' />
              <ChevronDownIcon
                className={twMerge(
                  'hidden h-4 w-4 lg:block',
                  isShopListOpen && 'lg:hidden'
                )}
              />
              <ChevronUpIcon
                className={twMerge(
                  'hidden h-4 w-4 lg:block',
                  !isShopListOpen && 'lg:hidden'
                )}
              />
            </div>
          </li>
          <li
            className='cursor-pointer p-4 hover:bg-slate-200 lg:p-2 lg:hover:bg-transparent lg:hover:underline'
            onClick={() => navigateHandler('/about')}
          >
            Our Story
          </li>
          <li
            className='cursor-pointer p-4 hover:bg-slate-200 lg:p-2 lg:hover:bg-transparent lg:hover:underline'
            onClick={() => navigateHandler('/contact')}
          >
            Contact Us
          </li>
        </ul>
        {/* Shop 子選單 */}
        <ul
          className={twMerge(
            'absolute flex w-full flex-col gap-2 bg-white transition-transform duration-300 ease-in-out',
            // Mobile styles
            isShopListOpen ? 'translate-x-0' : 'translate-x-full',
            // Desktop styles
            'lg:-left-12 lg:top-[calc(100%+26px)] lg:w-screen lg:flex-row lg:items-center lg:gap-8 lg:bg-gray-100 lg:pl-6 lg:shadow-md lg:transition-opacity',
            isShopListOpen ? 'lg:opacity-100' : 'lg:invisible lg:opacity-0'
          )}
        >
          <li
            className='flex cursor-pointer items-center gap-2 p-4 text-base font-normal hover:bg-slate-200 lg:hidden'
            onClick={toggleShopList}
          >
            <div>
              <ArrowLeftIcon className='h-4 w-4' />
            </div>
            <span>Shop</span>
          </li>
          <li
            className='cursor-pointer p-4 hover:bg-slate-200 lg:hover:bg-transparent lg:hover:underline'
            onClick={() => navItemClickHandler('all')}
          >
            All Products
          </li>
          <li
            className='cursor-pointer p-4 hover:bg-slate-200 lg:hover:bg-transparent lg:hover:underline'
            onClick={() => navItemClickHandler('new')}
          >
            New In Products
          </li>
          {categories.map((category) => (
            <li
              key={category.id}
              className='cursor-pointer p-4 hover:bg-slate-200 lg:hover:bg-transparent lg:hover:underline'
              onClick={() => navItemClickHandler(category.name)}
            >
              {category.name}
            </li>
          ))}
        </ul>
        {/* 登入區塊 */}
        <div className='mt-auto w-full lg:hidden'>
          <li
            className='group flex cursor-pointer items-center gap-4 bg-slate-200 p-6'
            onClick={() => {
              const path = !token ? '/login' : '/profile/setting';
              navigateHandler(path);
            }}
          >
            <div className='transition-transform duration-300 ease-in-out group-hover:scale-110'>
              <UserIcon className='h-6 w-6' />
            </div>
            <span>{!token ? 'Login' : 'Profile'}</span>
          </li>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
