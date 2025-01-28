'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

const PROFILE_TABS = [
  {
    id: 1,
    name: 'Profile Setting',
    path: '/profile/setting',
  },
  {
    id: 2,
    name: 'Order History',
    path: '/profile/order',
  },
  {
    id: 3,
    name: 'Coupons',
    path: '/profile/coupon',
  },
  {
    id: 4,
    name: 'Wish List',
    path: '/profile/wishlist',
  },
];

function ProfileTab() {
  const pathname = usePathname();

  return (
    <ul className='grid grid-cols-4 divide-x divide-stone-400 text-center'>
      {PROFILE_TABS.map((tab) => {
        const isActive = pathname === tab.path;
        return (
          <Link
            key={tab.id}
            href={tab.path}
            className={twMerge(
              'group flex items-center justify-center border-b border-stone-400 p-4',
              isActive && 'border-b-0 bg-blue-50',
              tab.id === 1 && 'rounded-tl-lg',
              tab.id === 4 && 'rounded-tr-lg'
            )}
          >
            <li
              className={twMerge(
                'font-medium text-text-lightGray group-hover:text-text-darkGray group-hover:underline group-hover:underline-offset-2 md:text-lg lg:text-xl',
                isActive && 'text-text-darkGray'
              )}
            >
              <h3>{tab.name}</h3>
            </li>
          </Link>
        );
      })}
    </ul>
  );
}

export default ProfileTab;
