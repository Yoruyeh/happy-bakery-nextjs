'use client';

import { passwordEditAction } from '@/action/action';
import Button from '@/components/button/Button';
import StyledInput from '@/components/input/StyledInput';
import Form from 'next/form';
import { useState } from 'react';

interface PasswordEditFormValues {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

interface PasswordEditFormErrors {
  oldPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
}

function PasswordEditPage() {
  const [formValues, setFormValues] = useState<PasswordEditFormValues>({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<PasswordEditFormErrors>({});

  function inputChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  }

  function validateForm(formData: globalThis.FormData) {
    const newErrors: PasswordEditFormErrors = {};
    // 從 FormData 中取得值

    const oldPassword = formData.get('oldPassword') as string;
    const newPassword = formData.get('newPassword') as string;
    const confirmPassword = formData.get('confirmPassword') as string;

    if (!oldPassword.trim()) {
      newErrors.oldPassword = 'Old Password is required';
    }

    if (!newPassword.trim()) {
      newErrors.newPassword = 'New Password is required';
    }

    if (!confirmPassword.trim()) {
      newErrors.confirmPassword = 'Confirm Password is required';
    }

    setErrors(newErrors);

    //皆正確錯誤為0
    return Object.keys(newErrors).length === 0;
  }

  async function onSubmit(formData: globalThis.FormData) {
    if (!validateForm(formData)) return;
    setFormValues({
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
    await passwordEditAction(formData);
  }

  return (
    <div className='mx-auto flex max-w-sm flex-col'>
      <h1 className='mb-4 text-center text-2xl font-bold text-text-darkGray'>
        Change Password
      </h1>
      <Form action={onSubmit} className='flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <label htmlFor='oldPassword' className='text-lg font-medium'>
            <span className='text-sm text-red-500'>* </span>
            Old Password
          </label>
          <StyledInput
            type='password'
            id='oldPassword'
            name='oldPassword'
            placeholder='Old Password'
            defaultValue={formValues.oldPassword}
            value={formValues.oldPassword}
            onChange={inputChangeHandler}
            error={errors.oldPassword}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='newPassword' className='text-lg font-medium'>
            <span className='text-sm text-red-500'>* </span>
            New Password
          </label>
          <StyledInput
            type='password'
            id='newPassword'
            name='newPassword'
            placeholder='New Password'
            defaultValue={formValues.newPassword}
            value={formValues.newPassword}
            onChange={inputChangeHandler}
            error={errors.newPassword}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='confirmPassword' className='text-lg font-medium'>
            <span className='text-sm text-red-500'>* </span>
            Confirm New Password
          </label>
          <StyledInput
            type='password'
            id='confirmPassword'
            name='confirmPassword'
            placeholder='Confirm New Password'
            defaultValue={formValues.confirmPassword}
            value={formValues.confirmPassword}
            onChange={inputChangeHandler}
            error={errors.confirmPassword}
          />
        </div>
        <Button
          text='UPDATE'
          customClass='bg-bgColor-primaryBtn mt-5 hover:bg-bgColor-primaryHover text-lg hover:text-text-white font-medium w-full'
        />
      </Form>
    </div>
  );
}

export default PasswordEditPage;
