'use client';

import {
  Bars3Icon,
  UserIcon,
  ShoppingBagIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import smallLogo from '@/public/logo-small.png';
import bigLogo from '@/public/logo-big.png';

type HeaderProps = {};

function Header({}: HeaderProps) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopListOpen, setIsShopListOpen] = useState(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isShopListOpen) setIsShopListOpen(false);
  };

  const toggleShopList = () => {
    setIsShopListOpen(!isShopListOpen);
  };

  const toggleSearchBar = () => {
    setIsSearchBarOpen(!isSearchBarOpen);
  };

  const navigateHandler = (path: string) => {
    router.push(path);
    if (isMenuOpen) toggleMenu();
  };

  return (
    <>
      <header
        className={twMerge(
          'flex w-full items-center justify-between bg-white p-4',
          isMenuOpen ? 'border-b-0' : 'border-b border-stone-400'
        )}
      >
        <div
          className='hamburger relative cursor-pointer lg:hidden'
          onClick={toggleMenu}
        >
          <Bars3Icon
            className={twMerge(
              'h-6 w-6 transition-all duration-300',
              isMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
            )}
          />
          <XMarkIcon
            className={twMerge(
              'absolute inset-0 h-6 w-6 transition-all duration-300',
              isMenuOpen ? 'rotate-180 opacity-100' : 'rotate-0 opacity-0'
            )}
          />
        </div>
        <div
          className='logo h-6 w-6 cursor-pointer md:h-14 md:w-fit'
          onClick={() => navigateHandler('/')}
        >
          <Image
            src={smallLogo}
            alt='logo'
            className='h-full w-full md:hidden'
          />
          <Image
            src={bigLogo}
            alt='logo'
            className='hidden h-full w-full md:block'
          />
        </div>
        <div className='user flex cursor-pointer items-center gap-4'>
          <div
            className='search cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110'
            onClick={toggleSearchBar}
          >
            <MagnifyingGlassIcon className='h-6 w-6' />
          </div>
          <div
            className='profile hidden cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 lg:block'
            onClick={() => navigateHandler('/login')}
          >
            <UserIcon className='h-6 w-6' />
          </div>
          <div
            className='cart relative cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110'
            onClick={() => navigateHandler('/cart')}
          >
            <ShoppingBagIcon className='h-6 w-6' />
            <span className='test-white bg-bgColor-newTag absolute -bottom-1 -right-1 h-4 w-4 rounded-full text-center text-xs font-semibold text-white'>
              3
            </span>
          </div>
        </div>
      </header>
      {/* 背景遮罩 */}
      {isMenuOpen && (
        <div
          className='fixed inset-x-0 h-full bg-black opacity-30 transition-opacity duration-300'
          onClick={toggleMenu}
        />
      )}

      {/* Nav導航欄 */}
      <nav
        className={twMerge(
          'menu transform-translate fixed left-0 z-50 h-[calc(100vh-56px)] w-1/2 bg-white font-josefin text-lg font-semibold duration-300 ease-in-out md:h-[calc(100vh-88px)]',
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className='relative flex h-full w-full flex-col overflow-hidden'>
          {/* 主選單 */}
          <ul
            className={twMerge(
              'absolute flex w-full transform flex-col gap-2 transition-transform duration-300 ease-in-out',
              isShopListOpen ? '-translate-x-full' : 'translate-x-0'
            )}
          >
            <li
              className='flex cursor-pointer items-center justify-between p-4 hover:bg-slate-200'
              onClick={toggleShopList}
            >
              <span>Shop</span>
              <div>
                <ArrowRightIcon className='h-4 w-4' />
              </div>
            </li>
            <li
              className='cursor-pointer p-4 hover:bg-slate-200'
              onClick={() => navigateHandler('/about')}
            >
              Our Story
            </li>
            <li
              className='cursor-pointer p-4 hover:bg-slate-200'
              onClick={() => navigateHandler('/contact')}
            >
              Contact Us
            </li>
          </ul>
          {/* Shop 子選單 */}
          <ul
            className={twMerge(
              'absolute flex w-full transform flex-col gap-2 transition-transform duration-300 ease-in-out',
              isShopListOpen ? 'translate-x-0' : 'translate-x-full'
            )}
          >
            <li
              className='flex cursor-pointer items-center gap-2 p-4 text-base font-normal hover:bg-slate-200'
              onClick={toggleShopList}
            >
              <div>
                <ArrowLeftIcon className='h-4 w-4' />
              </div>
              <span>Shop</span>
            </li>
            <li
              className='cursor-pointer p-4 hover:bg-slate-200'
              onClick={() => navigateHandler('/product/all')}
            >
              All Products
            </li>
            <li
              className='cursor-pointer p-4 hover:bg-slate-200'
              onClick={() => navigateHandler('/product/new')}
            >
              New In Products
            </li>
            <li
              className='cursor-pointer p-4 hover:bg-slate-200'
              onClick={() => navigateHandler('/product/cake')}
            >
              Cakes
            </li>
          </ul>
          {/* 登入區塊 */}
          <div className='mt-auto w-full'>
            <li
              className='group flex cursor-pointer items-center gap-4 bg-slate-200 p-6'
              onClick={() => navigateHandler('/login')}
            >
              <div className='transition-transform duration-300 ease-in-out group-hover:scale-110'>
                <UserIcon className='h-6 w-6' />
              </div>
              <span>Login</span>
            </li>
          </div>
        </div>
      </nav>

      {/* 搜尋欄 */}
      <div
        className={twMerge(
          'transform-translate fixed bottom-full z-50 flex h-14 w-full items-center justify-center gap-4 bg-slate-200 px-4 duration-300 ease-in-out md:h-[88px]',
          isSearchBarOpen ? 'translate-y-0' : 'translate-y-full'
        )}
      >
        <input
          type='text'
          placeholder='Search...'
          className='w-1/2 rounded border border-slate-300 p-2 indent-2 shadow-md focus:border-sky-500 focus:outline-none focus:ring-1'
        />
        <div onClick={toggleSearchBar} className='cursor-pointer'>
          <XMarkIcon className='h-6 w-6' />
        </div>
      </div>
    </>
  );
}

export default Header;
