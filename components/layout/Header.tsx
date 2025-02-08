'use client';

import {
  Bars3Icon,
  UserIcon,
  ShoppingBagIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import smallLogo from '@/public/logo-small.png';
import bigLogo from '@/public/logo-big.png';
import Navbar from '@/components/navbar/Navbar';
import { Category } from '@/api/types/product';
import Form from 'next/form';
import { searchAction } from '@/action/action';
import useStore from '@/store/store';

interface HeaderProps {
  token: string;
  categories: Category[];
}

interface SearchFormValues {
  keyword: string;
}

interface SearchFormErrors {
  keyword?: string;
}

function Header({ token, categories }: HeaderProps) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopListOpen, setIsShopListOpen] = useState(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [formValues, setFormValues] = useState<SearchFormValues>({
    keyword: '',
  });
  const [errors, setErrors] = useState<SearchFormErrors>({});
  const cartItemsCount = useStore((state) => state.cartItemsCount);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
    if (isShopListOpen) setIsShopListOpen(false);
  }

  function toggleShopList() {
    setIsShopListOpen(!isShopListOpen);
  }

  function toggleSearchBar() {
    setIsSearchBarOpen(!isSearchBarOpen);
    setErrors({});
    clearSearchInput();
  }

  function navigateHandler(path: string) {
    router.push(path);
    if (isMenuOpen) toggleMenu();
    if (isShopListOpen) toggleShopList();
  }

  function inputChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  }

  function clearSearchInput() {
    setFormValues({
      keyword: '',
    });

    setErrors({});
  }

  function validateForm(formData: globalThis.FormData) {
    const newErrors: SearchFormErrors = {};
    // 從 FormData 中取得值
    const keyword = formData.get('keyword') as string;

    // 驗證資料

    if (keyword.length < 3) {
      newErrors.keyword = 'Please enter at least 3 characters';
    }

    setErrors(newErrors);

    //皆正確錯誤為0
    return Object.keys(newErrors).length === 0;
  }

  async function onSubmit(formData: globalThis.FormData) {
    if (!validateForm(formData)) return;
    clearSearchInput();
    await searchAction(formData);
  }

  return (
    <>
      <header
        className={twMerge(
          'fixed z-50 flex h-fit w-full items-center justify-between bg-white px-6 py-4 md:px-8 lg:px-10 lg:pr-12',
          isMenuOpen ? 'border-b-0' : 'border-b border-stone-400'
        )}
      >
        {/* 漢堡選單 */}
        <div
          className='relative flex-1 cursor-pointer lg:hidden'
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
        {/* Nav導航欄 */}
        <Navbar
          token={token}
          categories={categories}
          isMenuOpen={isMenuOpen}
          isShopListOpen={isShopListOpen}
          toggleShopList={toggleShopList}
          navigateHandler={navigateHandler}
        />
        {/* Logo */}
        <div
          className='h-6 w-6 flex-none cursor-pointer md:h-12 md:w-fit lg:h-16'
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
        {/* User Icons */}
        <div className='flex flex-1 cursor-pointer items-center justify-end gap-4'>
          <div
            className='search cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110'
            onClick={toggleSearchBar}
          >
            <MagnifyingGlassIcon className='h-6 w-6' />
          </div>
          <div
            className='profile hidden cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 lg:block'
            onClick={() => {
              const path = !token ? '/login' : '/profile/setting';
              navigateHandler(path);
            }}
          >
            <UserIcon className='h-6 w-6' />
          </div>
          <div
            className='cart relative cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110'
            onClick={() => {
              const path = !token ? '/login' : '/cart';
              navigateHandler(path);
            }}
          >
            <ShoppingBagIcon className='h-6 w-6' />
            {token && (
              <span className='test-white absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-bgColor-newTag text-center text-xs font-semibold text-white'>
                {cartItemsCount}
              </span>
            )}
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
      <Form
        action={onSubmit}
        className={twMerge(
          'transform-translate fixed bottom-full z-50 flex h-14 w-full items-center justify-center gap-4 bg-slate-200 px-4 duration-300 ease-in-out md:h-[80px] lg:h-[96px]',
          isSearchBarOpen ? 'translate-y-full' : 'translate-y-0'
        )}
      >
        <div className='relative flex w-1/2 items-center justify-center'>
          <input
            type='text'
            id='keyword'
            name='keyword'
            placeholder='Search...'
            value={formValues.keyword}
            className='w-full rounded border border-slate-300 p-2 pr-14 indent-2 shadow-md focus:border-sky-500 focus:outline-none focus:ring-1'
            onChange={inputChangeHandler}
          />
          {formValues.keyword && (
            <div
              className='absolute right-8 cursor-pointer p-1'
              onClick={clearSearchInput}
            >
              <XCircleIcon className='h-4 w-4' />
            </div>
          )}
          <button className='absolute right-0 cursor-pointer border-l border-stone-200 p-1'>
            <MagnifyingGlassIcon className='h-6 w-6' />
          </button>
          {errors.keyword && (
            <span className='absolute left-0 top-[calc(100%+4px)] whitespace-nowrap bg-gray-50 p-1 text-xs font-medium text-red-500 shadow-sm lg:bg-transparent'>
              {errors.keyword}
            </span>
          )}
        </div>
        <div onClick={toggleSearchBar} className='cursor-pointer'>
          <XMarkIcon className='h-6 w-6' />
        </div>
      </Form>
    </>
  );
}

export default Header;
