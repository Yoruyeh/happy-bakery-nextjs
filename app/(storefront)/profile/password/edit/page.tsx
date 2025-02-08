'use client';

import { passwordEditAction } from '@/action/action';
import Button from '@/components/button/Button';
import StyledInput from '@/components/input/StyledInput';
import Form from 'next/form';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

interface PasswordEditFormValues {
  currentPW: string;
  newPW: string;
  confirmPW: string;
}

interface PasswordEditFormErrors {
  currentPW?: string;
  newPW?: string;
  confirmPW?: string;
}

function PasswordEditPage() {
  const router = useRouter();
  const [formValues, setFormValues] = useState<PasswordEditFormValues>({
    currentPW: '',
    newPW: '',
    confirmPW: '',
  });

  const [errors, setErrors] = useState<PasswordEditFormErrors>({});

  function inputChangeHandler(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  }

  function validateForm(formData: globalThis.FormData) {
    const newErrors: PasswordEditFormErrors = {};
    // 從 FormData 中取得值

    const currentPW = formData.get('currentPW') as string;
    const newPW = formData.get('newPW') as string;
    const confirmPW = formData.get('confirmPW') as string;

    if (!currentPW.trim()) {
      newErrors.currentPW = 'Current Password is required';
    }

    if (!newPW.trim()) {
      newErrors.newPW = 'New Password is required';
    }

    if (!confirmPW.trim()) {
      newErrors.confirmPW = 'Confirm Password is required';
    }

    if (confirmPW.trim() && newPW.trim() !== confirmPW.trim()) {
      newErrors.confirmPW = 'New Password and Confirm Password do not match';
    }

    setErrors(newErrors);

    //皆正確錯誤為0
    return Object.keys(newErrors).length === 0;
  }

  async function onSubmit(formData: globalThis.FormData) {
    if (!validateForm(formData)) return;
    setFormValues({
      currentPW: '',
      newPW: '',
      confirmPW: '',
    });
    const result = await passwordEditAction(formData);
    if (result.success) {
      toast.success(result.message, {
        position: 'top-center',
        autoClose: 1000,
      });

      setTimeout(() => {
        router.push('/profile/setting');
      }, 1200);
    } else {
      toast.error('Wrong Password! Update Password failed', {
        position: 'top-center',
        autoClose: 1000,
      });
    }
  }

  return (
    <div className='mx-auto flex max-w-sm flex-col'>
      <h1 className='mb-4 text-center text-2xl font-bold text-text-darkGray'>
        Change Password
      </h1>
      <Form action={onSubmit} className='flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <label htmlFor='currentPW' className='text-lg font-medium'>
            <span className='text-sm text-red-500'>* </span>
            Current Password
          </label>
          <StyledInput
            type='password'
            id='currentPW'
            name='currentPW'
            placeholder='Current Password'
            defaultValue={formValues.currentPW}
            value={formValues.currentPW}
            onChange={inputChangeHandler}
            error={errors.currentPW}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='newPW' className='text-lg font-medium'>
            <span className='text-sm text-red-500'>* </span>
            New Password
          </label>
          <StyledInput
            type='password'
            id='newPW'
            name='newPW'
            placeholder='New Password'
            defaultValue={formValues.newPW}
            value={formValues.newPW}
            onChange={inputChangeHandler}
            error={errors.newPW}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='confirmPW' className='text-lg font-medium'>
            <span className='text-sm text-red-500'>* </span>
            Confirm New Password
          </label>
          <StyledInput
            type='password'
            id='confirmPW'
            name='confirmPW'
            placeholder='Confirm New Password'
            defaultValue={formValues.confirmPW}
            value={formValues.confirmPW}
            onChange={inputChangeHandler}
            error={errors.confirmPW}
          />
        </div>
        <Button
          text='UPDATE'
          customClass='bg-bgColor-primaryBtn mt-5 hover:bg-bgColor-primaryHover text-lg hover:text-text-white font-medium w-full'
        />
      </Form>
      <ToastContainer theme='colored' />
    </div>
  );
}

export default PasswordEditPage;
