'use client';

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

interface ProfileTab {
  id: number;
  name: string;
  path: string;
}

const DEFAULT_COUPON_TYPE = 'usable';
const PROFILE_TABS: ProfileTab[] = [
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
    path: '/profile/coupon?type=' + DEFAULT_COUPON_TYPE,
  },
  // {
  //   id: 4,
  //   name: 'Wish List',
  //   path: '/profile/wishlist',
  // },
];

function useTabNavigation() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // 只在優惠券頁面進行檢查
    if (pathname !== '/profile/coupon') return;

    const currentType = searchParams.get('type');
    const validTypes = ['usable', 'expired'];

    // 檢查是否需要更新參數
    const shouldUpdateType = !currentType || !validTypes.includes(currentType);

    if (shouldUpdateType) {
      const params = new URLSearchParams(searchParams.toString());
      params.set('type', DEFAULT_COUPON_TYPE);
      router.push(`${pathname}?${params.toString()}`);
    }
  }, [pathname, searchParams, router]);

  return { pathname, searchParams };
}

function ProfileTab() {
  const { pathname, searchParams } = useTabNavigation();

  function isActiveTab(tabPath: string): boolean {
    const [path, queryString] = tabPath.split('?');
    if (pathname !== path) return false;

    if (queryString) {
      const tabSearchParams = new URLSearchParams(queryString);
      const currentType = searchParams.get('type');
      const tabType = tabSearchParams.get('type');

      return currentType === tabType;
    }

    return true;
  }

  return (
    <ul className='grid grid-cols-3 divide-x divide-stone-400 text-center'>
      {PROFILE_TABS.map((tab) => {
        const isActive = isActiveTab(tab.path);
        return (
          <Link
            key={tab.id}
            href={tab.path}
            className={twMerge(
              'group flex items-center justify-center border-b border-stone-400 p-4',
              isActive && 'border-b-0 bg-blue-50',
              tab.id === 1 && 'rounded-tl-lg',
              tab.id === 3 && 'rounded-tr-lg'
            )}
          >
            <li
              className={twMerge(
                'text-josefin font-medium text-text-lightGray group-hover:text-text-darkGray group-hover:underline group-hover:underline-offset-2 md:text-lg lg:text-xl',
                isActive && 'text-text-darkGray'
              )}
            >
              {tab.name}
            </li>
          </Link>
        );
      })}
    </ul>
  );
}

export default ProfileTab;
