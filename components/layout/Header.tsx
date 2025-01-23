'use client';

import {
  Bars3Icon,
  UserIcon,
  ShoppingBagIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import smallLogo from '@/public/logo-small.png';
import bigLogo from '@/public/logo-big.png';
import Navbar from '@/components/navbar/Navbar';

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
    if (isShopListOpen) toggleShopList();
  };

  return (
    <>
      <header
        className={twMerge(
          'z-50 flex w-full items-center justify-between bg-white p-4 lg:px-8',
          isMenuOpen ? 'border-b-0' : 'border-b border-stone-400'
        )}
      >
        {/* 漢堡選單 */}
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
        {/* <div className='flex w-full flex-1 border border-blue-700'> */}
        {/* Nav導航欄 */}
        <Navbar
          isMenuOpen={isMenuOpen}
          isShopListOpen={isShopListOpen}
          toggleShopList={toggleShopList}
          navigateHandler={navigateHandler}
        />
        {/* Logo */}
        <div
          className='logo h-6 w-6 cursor-pointer md:h-12 md:w-fit lg:h-16 lg:flex-none'
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
        {/* </div> */}
        {/* User Icons */}
        <div className='user flex cursor-pointer items-center justify-end gap-4 lg:flex-1'>
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
      {/* 背景遮罩 for mobile */}
      {isMenuOpen && (
        <div
          className='fixed inset-x-0 top-[56px] z-40 h-full bg-black opacity-30 transition-opacity duration-300 md:top-[80px]'
          onClick={toggleMenu}
        />
      )}
      {/* 背景遮罩 for desktop */}
      {isShopListOpen && (
        <div
          className='fixed inset-0 z-40 hidden bg-black opacity-30 transition-opacity duration-300 lg:block'
          onClick={toggleShopList}
        />
      )}
      {/* 搜尋欄 */}
      <div
        className={twMerge(
          'transform-translate fixed bottom-full z-50 flex h-14 w-full items-center justify-center gap-4 bg-slate-200 px-4 duration-300 ease-in-out md:h-[80px] lg:h-[96px]',
          isSearchBarOpen ? 'translate-y-full' : 'translate-y-0'
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
