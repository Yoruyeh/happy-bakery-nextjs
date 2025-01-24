'use client';

import { registerAction } from '@/action/action';
import Button from '@/components/button/Button';
import StyledInput from '@/components/input/StyledInput';
import { validateEmail, validatePassword } from '@/utils/validate';
import Form from 'next/form';
import Link from 'next/link';
import { useState } from 'react';

interface RegisterFormValues {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
}

interface RegisterFormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}

const RegisterPage = () => {
  const [formValues, setFormValues] = useState<RegisterFormValues>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<RegisterFormErrors>({});

  function inputChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  }

  function validateForm(formData: globalThis.FormData) {
    const newErrors: RegisterFormErrors = {};
    // 從 FormData 中取得值
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    // 驗證資料
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (emailError) {
      newErrors.email = emailError;
    }

    if (passwordError) {
      newErrors.password = passwordError;
    }

    setErrors(newErrors);

    //皆正確錯誤為0
    return Object.keys(newErrors).length === 0;
  }

  async function onSubmit(formData: globalThis.FormData) {
    if (!validateForm(formData)) return;

    setFormValues({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });

    await registerAction(formData);
  }

  return (
    <div className='mx-auto w-full py-20 md:max-w-screen-sm'>
      <h1 className='mb-10 text-center text-3xl font-bold text-text-brown lg:text-5xl'>
        Create Account
      </h1>
      <Form action={onSubmit} className='flex flex-col gap-4'>
        <StyledInput
          type='text'
          name='firstName'
          placeholder='First Name'
          value={formValues.firstName}
          onChange={inputChangeHandler}
        />
        <StyledInput
          type='text'
          name='lastName'
          placeholder='Last Name'
          value={formValues.lastName}
          onChange={inputChangeHandler}
        />
        <StyledInput
          type='text'
          name='email'
          placeholder='Email'
          value={formValues.email}
          onChange={inputChangeHandler}
          customClass={
            errors.email
              ? 'border-red-500 focus:ring-red-500  focus:border-red-500'
              : ''
          }
        />
        {errors.email && (
          <span className='text-xs text-red-500'>{errors.email}</span>
        )}

        <StyledInput
          type='password'
          name='password'
          placeholder='Password'
          value={formValues.password}
          onChange={inputChangeHandler}
          customClass={
            errors.password
              ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
              : ''
          }
        />
        {errors.password && (
          <span className='text-xs text-red-500'>{errors.password}</span>
        )}

        <Button
          text='Submit'
          customClass='bg-bgColor-primaryBtn mt-5 hover:bg-bgColor-primaryHover hover:text-text-white'
        />
      </Form>
      <Link
        href='/login'
        className='mt-5 flex items-center justify-center text-sm text-text-lightGray underline hover:text-text-darkGray lg:text-base'
      >
        Already Have an account? Login here!
      </Link>
    </div>
  );
};

export default RegisterPage;
