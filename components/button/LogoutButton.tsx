'use client';

import { logoutAction } from '@/action/action';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';

function LogoutButton() {
  const router = useRouter();

  async function logoutHandler() {
    const result = await logoutAction();
    if (result.success) {
      toast.success('Logout successfully', {
        position: 'top-center',
        autoClose: 1000,
      });

      setTimeout(() => {
        router.push('/');
      }, 1200);
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
      <ToastContainer theme='colored' />
    </div>
  );
}

export default LogoutButton;
