'use client';

import { settingAction } from '@/action/action';
import { UserService } from '@/api/services/User';
import Button from '@/components/button/Button';
import StyledDatePicker from '@/components/input/StyledDatePicker';
import StyledInput from '@/components/input/StyledInput';
import PageLoader from '@/components/spinner/PageLoader';
import { validateEmail } from '@/utils/validate';
import { useQuery } from '@tanstack/react-query';
import Form from 'next/form';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
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

function SettingPage() {
  const {
    data: userInfo,
    isPending,
    isLoading,
  } = useQuery({
    queryKey: ['userInfo'],
    queryFn: async () => {
      return await UserService.getUserInfo();
    },
  });

  const [formValues, setFormValues] = useState<ProfileSettingFormValues>({
    firstName: '',
    lastName: '',
    birthday: '',
    email: '',
    phone: '',
    address: '',
    gender: '',
  });

  useEffect(() => {
    if (userInfo?.user) {
      setFormValues({
        firstName: userInfo.user.firstName ?? '',
        lastName: userInfo.user.lastName ?? '',
        birthday: userInfo.user.birthday ?? '',
        email: userInfo.user.email ?? '',
        phone: userInfo.user.phone ?? '',
        address: userInfo.user.address ?? '',
        gender: userInfo.user.gender ?? '',
      });
    }
  }, [userInfo]);

  const [errors, setErrors] = useState<ProfileSettingFormErrors>({});

  function inputChangeHandler(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  }

  function validateForm(formData: globalThis.FormData) {
    const newErrors: ProfileSettingFormErrors = {};
    // 從 FormData 中取得值

    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    // 驗證資料
    const emailError = validateEmail(email);

    if (emailError) {
      newErrors.email = emailError;
    }

    if (phone.trim() && (phone.trim().length > 10 || phone.trim().length < 8)) {
      newErrors.phone = 'Phone number is invalid';
    }

    setErrors(newErrors);

    //皆正確錯誤為0
    return Object.keys(newErrors).length === 0;
  }

  async function onSubmit(formData: globalThis.FormData) {
    if (!validateForm(formData)) return;

    const result = await settingAction(formData);

    if (result.success) {
      toast.success(result.message, {
        position: 'top-center',
        autoClose: 1000,
      });
    } else {
      toast.error(result.message, {
        position: 'top-center',
        autoClose: 1000,
      });
    }
  }

  if (isPending || isLoading || !userInfo?.user) return <PageLoader />;

  return (
    <div className=''>
      <h1 className='mb-4 text-2xl font-bold text-text-darkGray'>
        Profile Setting
      </h1>
      <Form action={onSubmit} className='flex flex-col gap-4'>
        <div className='flex flex-col gap-4 md:grid md:grid-cols-3'>
          <div className='flex flex-col gap-2 md:col-span-1'>
            <label htmlFor='firstName' className='text-lg font-medium'>
              First Name
            </label>
            <StyledInput
              type='text'
              id='firstName'
              name='firstName'
              placeholder='First Name'
              value={formValues.firstName}
              onChange={inputChangeHandler}
              error={errors.firstName}
            />
          </div>
          <div className='flex flex-col gap-2 md:col-span-1'>
            <label htmlFor='firstName' className='text-lg font-medium'>
              Last Name
            </label>
            <StyledInput
              type='text'
              id='lastName'
              name='lastName'
              placeholder='Last Name'
              value={formValues.lastName}
              onChange={inputChangeHandler}
              error={errors.lastName}
            />
          </div>
          <div className='flex flex-col gap-2 md:col-span-1'>
            <label htmlFor='birthday' className='text-lg font-medium'>
              Birthday
            </label>
            <StyledDatePicker
              id='birthday'
              name='birthday'
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
              value={formValues.address}
              onChange={inputChangeHandler}
              error={errors.address}
            />
          </div>
          <div className='flex flex-col gap-2 md:col-span-1'>
            <label htmlFor='phone' className='text-lg font-medium'>
              Phone
            </label>
            <StyledInput
              type='text'
              id='phone'
              name='phone'
              placeholder='Phone'
              value={formValues.phone}
              onChange={inputChangeHandler}
              error={errors.phone}
            />
          </div>
          <div className='flex flex-col gap-2 md:col-span-1'>
            <label htmlFor='gender' className='text-lg font-medium'>
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
                  id='male'
                  name='gender'
                  value='male'
                  className='h-4 w-4'
                  checked={formValues.gender === 'male'}
                  onChange={inputChangeHandler}
                />
                <label htmlFor='male' className='text-lg font-medium'>
                  Male
                </label>
              </div>
              <div className='flex items-center gap-2'>
                <input
                  type='radio'
                  id='female'
                  name='gender'
                  value='female'
                  className='h-4 w-4'
                  checked={formValues.gender === 'female'}
                  onChange={inputChangeHandler}
                />
                <label htmlFor='female' className='text-lg font-medium'>
                  Female
                </label>
              </div>
              <div className='flex items-center gap-2'>
                <input
                  type='radio'
                  id='other'
                  name='gender'
                  value='other'
                  className='h-4 w-4'
                  checked={formValues.gender === 'other'}
                  onChange={inputChangeHandler}
                />
                <label htmlFor='other' className='text-lg font-medium'>
                  Other
                </label>
                <input
                  type='text'
                  hidden
                  name='gender'
                  value={formValues.gender}
                  readOnly
                />
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
      <ToastContainer theme='colored' />
    </div>
  );
}

export default SettingPage;
