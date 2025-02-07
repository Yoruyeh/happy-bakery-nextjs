'use client';

import { logoutAction } from '@/action/action';
import { useRouter } from 'next/navigation';

function LogoutButton() {
  const router = useRouter();

  async function logoutHandler() {
    const result = await logoutAction();
    if (result.success) {
      router.push('/');
    }
  }
  return (
    <div className='flex items-center justify-end'>
      <button
        className='h-fit w-fit rounded-lg bg-slate-200 p-2 text-sm font-medium text-text-darkGray shadow-md hover:bg-slate-50 hover:text-text-darkGray lg:text-base'
        onClick={logoutHandler}
      >
        Logout
      </button>
    </div>
  );
}

export default LogoutButton;
