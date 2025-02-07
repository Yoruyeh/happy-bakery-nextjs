'use client';

import { registerAction } from '@/action/action';
import Button from '@/components/button/Button';
import StyledInput from '@/components/input/StyledInput';
import { validateEmail, validatePassword } from '@/utils/validate';
import Form from 'next/form';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

interface RegisterFormValues {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  termsAgreement: boolean;
}

interface RegisterFormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  termsAgreement?: string;
}

function RegisterPage() {
  const router = useRouter();
  const [formValues, setFormValues] = useState<RegisterFormValues>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    termsAgreement: false,
  });

  const [errors, setErrors] = useState<RegisterFormErrors>({});

  function inputChangeHandler(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    if (name === 'termsAgreement') {
      setFormValues((prev) => ({
        ...prev,
        [name]: !prev[name],
      }));
    } else {
      setFormValues((prev) => ({ ...prev, [name]: value }));
    }
  }

  function validateForm(formData: globalThis.FormData) {
    const newErrors: RegisterFormErrors = {};
    // 從 FormData 中取得值
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const termsAgreed = formData.has('termsAgreement');

    // 驗證資料
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (emailError) {
      newErrors.email = emailError;
    }

    if (passwordError) {
      newErrors.password = passwordError;
    }

    if (!termsAgreed) {
      newErrors.termsAgreement =
        'Please agree to Terms & Conditions & Privacy Policy.';
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
      termsAgreement: false,
    });

    const result = await registerAction(formData);

    if (result.success) {
      toast.success('Register success', {
        position: 'top-center',
        autoClose: 1000,
      });

      setTimeout(() => {
        router.push('/');
      }, 1500);
    } else {
      toast.error('Register failed', {
        position: 'top-center',
        autoClose: 1000,
      });
    }
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
          error={errors.email}
        />
        <StyledInput
          type='password'
          name='password'
          placeholder='Password'
          value={formValues.password}
          onChange={inputChangeHandler}
          error={errors.password}
        />
        <div className='flex items-start gap-3'>
          <input
            type='checkbox'
            name='termsAgreement'
            id='termsAgreement'
            className='relative top-[2px] h-4 w-4 flex-shrink-0'
            onChange={inputChangeHandler}
            checked={formValues.termsAgreement === true}
            value='true'
          />
          <label
            htmlFor='termsAgreement'
            className='text-sm text-text-darkGray'
          >
            I agree to happy bakery website Terms & Conditions & Privacy Policy.
          </label>
        </div>
        {errors.termsAgreement && (
          <span className='text-xs text-red-500'>{errors.termsAgreement}</span>
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
      <ToastContainer theme='colored' />
    </div>
  );
}

export default RegisterPage;
