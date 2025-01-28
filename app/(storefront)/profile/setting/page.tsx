'use client';

import { settingAction } from '@/action/action';
import Button from '@/components/button/Button';
import StyledInput from '@/components/input/StyledInput';
import { validateEmail } from '@/utils/validate';
import Form from 'next/form';
import Link from 'next/link';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface ProfileSettingFormValues {
  firstName: string;
  lastName: string;
  birthday: string;
  email: string;
  address?: string;
  phone: string;
  gender: string;
}

interface ProfileSettingFormErrors {
  firstName?: string;
  lastName?: string;
  birthday?: string;
  email?: string;
  address?: string;
  phone?: string;
  gender?: string;
}

const SettingPage = () => {
  const [formValues, setFormValues] = useState<ProfileSettingFormValues>({
    firstName: '',
    lastName: '',
    birthday: '',
    email: '',
    phone: '',
    address: '',
    gender: '',
  });

  const [errors, setErrors] = useState<ProfileSettingFormErrors>({});

  function inputChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  }

  function validateForm(formData: globalThis.FormData) {
    const newErrors: ProfileSettingFormErrors = {};
    // 從 FormData 中取得值

    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const birthday = formData.get('birthday') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const address = formData.get('address') as string;
    const gender = formData.get('gender') as string;

    // 驗證資料
    const emailError = validateEmail(email);

    if (emailError) {
      newErrors.email = emailError;
    }

    if (!firstName.trim()) {
      newErrors.firstName = 'First Name is required';
    }

    if (!lastName.trim()) {
      newErrors.lastName = 'Last Name is required';
    }

    if (!address.trim()) {
      newErrors.address = 'Address is required';
    }

    if (!phone.trim()) {
      newErrors.phone = 'Phone is required';
    }

    if (!birthday) {
      newErrors.birthday = 'Birthday is required';
    }

    if (!gender) {
      newErrors.gender = 'Gender is required';
    }

    setErrors(newErrors);

    //皆正確錯誤為0
    return Object.keys(newErrors).length === 0;
  }

  async function onSubmit(formData: globalThis.FormData) {
    if (!validateForm(formData)) return;

    await settingAction(formData);
  }

  return (
    <div className=''>
      <h1 className='mb-4 text-2xl font-bold text-text-darkGray'>
        Profile Setting
      </h1>
      <Form action={onSubmit} className='flex flex-col gap-4'>
        <div className='flex flex-col gap-4 md:grid md:grid-cols-3'>
          <div className='flex flex-col gap-2 md:col-span-1'>
            <label htmlFor='firstName' className='text-lg font-medium'>
              <span className='text-sm text-red-500'>* </span>
              First Name
            </label>
            <StyledInput
              type='text'
              id='firstName'
              name='firstName'
              placeholder='First Name'
              defaultValue={formValues.firstName}
              value={formValues.firstName}
              onChange={inputChangeHandler}
              error={errors.firstName}
            />
          </div>
          <div className='flex flex-col gap-2 md:col-span-1'>
            <label htmlFor='firstName' className='text-lg font-medium'>
              <span className='text-sm text-red-500'>* </span>
              Last Name
            </label>
            <StyledInput
              type='text'
              id='lastName'
              name='lastName'
              placeholder='Last Name'
              defaultValue={formValues.lastName}
              value={formValues.lastName}
              onChange={inputChangeHandler}
              error={errors.lastName}
            />
          </div>
          <div className='flex flex-col gap-2 md:col-span-1'>
            <label htmlFor='birthday' className='text-lg font-medium'>
              <span className='text-sm text-red-500'>* </span>
              Birthday
            </label>
            <StyledInput
              type='date'
              id='birthday'
              name='birthday'
              placeholder='Birthday'
              defaultValue={formValues.birthday}
              value={formValues.birthday}
              onChange={inputChangeHandler}
              error={errors.birthday}
            />
          </div>
          <div className='flex flex-col gap-2 md:col-span-1'>
            <label htmlFor='email' className='text-lg font-medium'>
              <span className='text-sm text-red-500'>* </span>
              Email
            </label>
            <StyledInput
              type='text'
              id='email'
              name='email'
              placeholder='Email'
              defaultValue={formValues.email}
              value={formValues.email}
              onChange={inputChangeHandler}
              error={errors.email}
            />
          </div>
          <div className='flex flex-col gap-2 md:col-span-2'>
            <label htmlFor='address' className='text-lg font-medium'>
              &nbsp;Address
            </label>
            <StyledInput
              type='text'
              id='address'
              name='address'
              placeholder='Address'
              defaultValue={formValues.address}
              value={formValues.address}
              onChange={inputChangeHandler}
              error={errors.address}
            />
          </div>
          <div className='flex flex-col gap-2 md:col-span-1'>
            <label htmlFor='phone' className='text-lg font-medium'>
              <span className='text-sm text-red-500'>* </span>
              Phone
            </label>
            <StyledInput
              type='text'
              id='phone'
              name='phone'
              placeholder='Phone'
              defaultValue={formValues.phone}
              value={formValues.phone}
              onChange={inputChangeHandler}
              error={errors.phone}
            />
          </div>
          <div className='flex flex-col gap-2 md:col-span-1'>
            <label htmlFor='gender' className='text-lg font-medium'>
              <span className='text-sm text-red-500'>* </span>
              Gender
            </label>
            <div
              className={twMerge(
                'flex justify-between gap-2 p-2 lg:p-3',
                errors.gender && 'border border-red-500'
              )}
            >
              <div className='flex items-center gap-2'>
                <input
                  type='radio'
                  id='gender'
                  name='gender'
                  value='M'
                  className='h-4 w-4'
                  checked={formValues.gender === 'M'}
                  onChange={inputChangeHandler}
                />
                <label htmlFor='gender' className='text-lg font-medium'>
                  Male
                </label>
              </div>
              <div className='flex items-center gap-2'>
                <input
                  type='radio'
                  id='gender'
                  name='gender'
                  value='F'
                  className='h-4 w-4'
                  checked={formValues.gender === 'F'}
                  onChange={inputChangeHandler}
                />
                <label htmlFor='gender' className='text-lg font-medium'>
                  Female
                </label>
              </div>
              <div className='flex items-center gap-2'>
                <input
                  type='radio'
                  id='gender'
                  name='gender'
                  value='O'
                  className='h-4 w-4'
                  checked={formValues.gender === 'O'}
                  onChange={inputChangeHandler}
                />
                <label htmlFor='gender' className='text-lg font-medium'>
                  Other
                </label>
              </div>
            </div>
            {errors.gender && (
              <span className='text-xs text-red-500'>{errors.gender}</span>
            )}
          </div>
          <div className='flex flex-col gap-2 md:col-span-1'>
            <label className='text-lg font-medium'>&nbsp;Password</label>
            <Link href='/profile/password/edit' className='w-full text-center'>
              <Button
                text='Change Password'
                customClass='w-full bg-bgColor-secondaryBtn md:w-fit hover:bg-bgColor-secondaryHover hover:text-text-white font-medium'
              />
            </Link>
          </div>
        </div>
        <div className='flex w-full justify-end'>
          <Button
            text='Save'
            customClass='bg-bgColor-primaryBtn mt-5 hover:bg-bgColor-primaryHover text-lg hover:text-text-white font-medium w-full max-w-[33%]'
          />
        </div>
      </Form>
    </div>
  );
};

export default SettingPage;
