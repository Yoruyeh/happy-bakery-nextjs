'use client';

import Form from 'next/form';
import StyledInput from '@/components/input/StyledInput';
import Button from '@/components/button/Button';
import { useState } from 'react';
import { validateEmail, validatePassword } from '@/utils/validate';
import { loginAction } from '@/action/action';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

interface LoginFormValues {
  email: string;
  password: string;
}

interface LoginFormErrors {
  email?: string;
  password?: string;
}

const LoginPage = () => {
  const [formValues, setFormValues] = useState<LoginFormValues>({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<LoginFormErrors>({});
  const router = useRouter();

  function inputChangeHandler(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  }

  function validateForm(formData: globalThis.FormData) {
    const newErrors: LoginFormErrors = {};
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
    setFormValues({ email: '', password: '' });
    const result = await loginAction(formData);

    if (result.success) {
      toast.success('Login success', {
        position: 'top-center',
        autoClose: 1000,
      });

      setTimeout(() => {
        router.push('/');
      }, 1500);
    } else {
      toast.error('Login failed', {
        position: 'top-center',
        autoClose: 1000,
      });
    }
  }

  return (
    <div className='mx-auto w-full py-20 md:max-w-screen-sm'>
      <h1 className='mb-10 text-center text-3xl font-bold text-text-brown lg:text-5xl'>
        Login
      </h1>
      <Form action={onSubmit} className='flex flex-col gap-4'>
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
        href='/register'
        className='mt-5 flex items-center justify-center text-sm text-text-lightGray underline hover:text-text-darkGray lg:text-base'
      >
        Have no account? Create here!
      </Link>
      <ToastContainer theme='colored' />
    </div>
  );
};

export default LoginPage;
