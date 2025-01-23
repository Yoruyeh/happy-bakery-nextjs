'use client';

import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import FacebookIcon from '@/public/icons/facebook.svg';
import InstagramIcon from '@/public/icons/instagram.svg';
import XIcon from '@/public/icons/x.svg';
import TikTokIcon from '@/public/icons/tiktok.svg';
import Image from 'next/image';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';

type FooterProps = {};
interface FooterNavState {
  [key: string]: boolean;
}

function Footer({}: FooterProps) {
  const [isFooterNavOpen, setIsFooterNavOpen] = useState<FooterNavState>({
    aboutUs: false,
    category: false,
    company: false,
  });

  const toggleFooterNav = (navName: string) => {
    setIsFooterNavOpen((prev) => ({
      ...prev,
      [navName]: !prev[navName],
    }));
  };

  return (
    <footer className='text-text-brown bg-bgColor-footer w-full items-center justify-between border-t border-stone-400 p-8'>
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
            <li className='hover:text-text-darkGray'>
              <Link href='/product/cake'>Cake</Link>
            </li>
            <li className='hover:text-text-darkGray'>
              <Link href='/product/cupcake'>CupCake</Link>
            </li>
            <li className='hover:text-text-darkGray'>
              <Link href='/product/biscuit'>Biscuit</Link>
            </li>
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
        <Image
          src={FacebookIcon}
          alt='facebook'
          width={24}
          height={24}
          className='transform-translate cursor-pointer duration-300 ease-in-out hover:scale-110'
        />
        <Image
          src={InstagramIcon}
          alt='instagram'
          width={24}
          height={24}
          className='transform-translate cursor-pointer duration-300 ease-in-out hover:scale-110'
        />
        <Image
          src={XIcon}
          alt='x'
          width={24}
          height={24}
          className='transform-translate cursor-pointer duration-300 ease-in-out hover:scale-110'
        />
        <Image
          src={TikTokIcon}
          alt='tiktok'
          width={24}
          height={24}
          className='transform-translate cursor-pointer duration-300 ease-in-out hover:scale-110'
        />
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
