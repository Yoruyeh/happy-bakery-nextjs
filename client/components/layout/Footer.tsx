'use client';

import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import FacebookIcon from '@/public/icons/facebook.svg';
import InstagramIcon from '@/public/icons/instagram.svg';
import XIcon from '@/public/icons/x.svg';
import TikTokIcon from '@/public/icons/tiktok.svg';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
import { Category } from '@/api/types/(user)/product';
import { usePathname } from 'next/navigation';

interface FooterProps {
  categories: Category[];
}

interface FooterNavState {
  [key: string]: boolean;
}

function Footer({ categories }: FooterProps) {
  const pathname = usePathname();
  const [isFooterNavOpen, setIsFooterNavOpen] = useState<FooterNavState>({
    aboutUs: false,
    category: false,
    company: false,
  });

  function toggleFooterNav(navName: string) {
    setIsFooterNavOpen((prev) => ({
      ...prev,
      [navName]: !prev[navName],
    }));
  }

  useEffect(() => {
    if (isFooterNavOpen.aboutUs) toggleFooterNav('aboutUs');
    if (isFooterNavOpen.category) toggleFooterNav('category');
    if (isFooterNavOpen.company) toggleFooterNav('company');
  }, [pathname]);

  return (
    <footer className='h-fit w-full items-center justify-between border-t border-stone-400 bg-bgColor-footer px-6 py-4 text-text-brown md:px-8 md:py-8 lg:px-10 lg:py-10 lg:pr-12'>
      <ul className='flex flex-col gap-8 md:flex-row'>
        <li className='flex flex-col gap-4 md:flex-[2_2_0%]'>
          <div className='flex items-center gap-2'>
            <h3 className='text-lg font-medium'>About Us</h3>
            <div
              className='cursor-pointer'
              onClick={() => toggleFooterNav('aboutUs')}
            >
              <MinusIcon
                className={twMerge(
                  'relative bottom-[2px] h-4 w-4 md:hidden',
                  !isFooterNavOpen.aboutUs && 'hidden'
                )}
              />
              <PlusIcon
                className={twMerge(
                  'relative bottom-[2px] h-4 w-4 md:hidden',
                  isFooterNavOpen.aboutUs && 'hidden'
                )}
              />
            </div>
          </div>
          <ul
            className={twMerge(
              'md:block',
              !isFooterNavOpen.aboutUs && 'hidden'
            )}
          >
            <li>
              <p className='text-balance'>
                At Happy Bakery, we craft joy through freshly baked treats made
                with natural ingredients and traditional methods. Our passionate
                bakers pour their hearts into every delicious creation.
              </p>
            </li>
          </ul>
        </li>
        <li className='flex flex-col gap-4 md:flex-1'>
          <div className='flex items-center gap-2'>
            <h3 className='text-lg font-medium'>Category</h3>
            <div
              className='cursor-pointer'
              onClick={() => toggleFooterNav('category')}
            >
              <MinusIcon
                className={twMerge(
                  'relative bottom-[2px] h-4 w-4 md:hidden',
                  !isFooterNavOpen.category && 'hidden'
                )}
              />
              <PlusIcon
                className={twMerge(
                  'relative bottom-[2px] h-4 w-4 md:hidden',
                  isFooterNavOpen.category && 'hidden'
                )}
              />
            </div>
          </div>
          <ul
            className={twMerge(
              'flex flex-col gap-2 md:flex',
              !isFooterNavOpen.category && 'hidden'
            )}
          >
            {categories.map((category) => (
              <li key={category.id} className='hover:text-text-darkGray'>
                <Link href={`/product/${category.name.toLowerCase()}`}>
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li className='flex flex-col gap-4 md:flex-1'>
          <div className='flex items-center gap-2'>
            <h3 className='text-lg font-medium'>Company</h3>
            <div
              className='cursor-pointer'
              onClick={() => toggleFooterNav('company')}
            >
              <MinusIcon
                className={twMerge(
                  'relative bottom-[2px] h-4 w-4 md:hidden',
                  !isFooterNavOpen.company && 'hidden'
                )}
              />
              <PlusIcon
                className={twMerge(
                  'relative bottom-[2px] h-4 w-4 md:hidden',
                  isFooterNavOpen.company && 'hidden'
                )}
              />
            </div>
          </div>
          <ul
            className={twMerge(
              'flex flex-col gap-2 md:flex',
              !isFooterNavOpen.company && 'hidden'
            )}
          >
            <li className='hover:text-text-darkGray'>
              <Link href='/about'>Our Story</Link>
            </li>
            <li className='hover:text-text-darkGray'>
              <Link href='/contact'>Contact Us</Link>
            </li>
          </ul>
        </li>
      </ul>
      <div className='mb-10 mt-20 flex items-center justify-center gap-8'>
        <div className='relative h-6 w-6 cursor-pointer'>
          <Image
            src={FacebookIcon}
            alt='facebook'
            fill={true}
            sizes='24px'
            className='transform-translate duration-300 ease-in-out hover:scale-110'
          />
        </div>
        <div className='relative h-6 w-6 cursor-pointer'>
          <Image
            src={InstagramIcon}
            alt='instagram'
            fill={true}
            sizes='24px'
            className='transform-translate duration-300 ease-in-out hover:scale-110'
          />
        </div>
        <div className='relative h-6 w-6 cursor-pointer'>
          <Image
            src={XIcon}
            alt='x'
            fill={true}
            sizes='24px'
            className='transform-translate duration-300 ease-in-out hover:scale-110'
          />
        </div>
        <div className='relative h-6 w-6 cursor-pointer'>
          <Image
            src={TikTokIcon}
            alt='tiktok'
            fill={true}
            sizes='24px'
            className='transform-translate duration-300 ease-in-out hover:scale-110'
          />
        </div>
      </div>
      <div>
        <p className='text-center text-sm'>
          Happy Bakery &copy; All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
