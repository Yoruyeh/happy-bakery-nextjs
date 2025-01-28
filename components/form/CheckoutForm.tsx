'use client';

import Form from 'next/form';
import StyledInput from '../input/StyledInput';
import { useState } from 'react';
import { validateEmail } from '@/utils/validate';
import { checkoutAction } from '@/action/action';
import Button from '../button/Button';
import PaymentOptionCollapse from '@/components/collapse/PaymentOptionCollapse';
import { twMerge } from 'tailwind-merge';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import OrderSummaryCollapse from '../collapse/OrderSummaryCollapse';
import CheckoutItem from '../card/CheckoutItem';

interface CheckoutItemType {
  id: number;
  name: string;
  priceRegular: number;
  cover: string;
  quantity: number;
}

interface checkoutFormProps {
  checkoutItems: CheckoutItemType[];
}

interface CheckoutFormValues {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  shippingMethod: string;
  paymentMethod: string;
}

interface CheckoutFormErrors {
  email?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  address?: string;
  shippingMethod?: string;
  paymentMethod?: string;
  cardNumber?: string;
  expDate?: string;
  securityCode?: string;
  nameOnCard?: string;
}

interface CreditCardDataType {
  cardNumber: string;
  expDate: string;
  securityCode: string;
  nameOnCard: string;
}

type InputEventType =
  | React.MouseEvent<HTMLButtonElement>
  | React.ChangeEvent<HTMLInputElement>;

interface paymentOptiondProps {
  label: string;
  id: string;
  type: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  customClass?: string;
}

function PaymentOption({
  label,
  id,
  type,
  name,
  value,
  checked,
  onChange,
  customClass,
}: paymentOptiondProps) {
  return (
    <div
      className={twMerge(
        'flex w-full items-center [&:has(input:checked)]:bg-blue-50',
        customClass
      )}
    >
      <label htmlFor={id} className='w-full cursor-pointer p-4'>
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className='mr-2'
        />
        {label}
      </label>
    </div>
  );
}

function CheckoutForm({ checkoutItems }: checkoutFormProps) {
  const [formValues, setFormValues] = useState<CheckoutFormValues>({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    shippingMethod: '',
    paymentMethod: 'creditCard',
  });

  const [creditCardData, setCreditCardData] = useState<CreditCardDataType>({
    cardNumber: '',
    expDate: '',
    securityCode: '',
    nameOnCard: '',
  });

  const [errors, setErrors] = useState<CheckoutFormErrors>({});

  function inputChangeHandler(e: InputEventType) {
    switch (e.type) {
      case 'change':
        const changeEvent = e as React.ChangeEvent<HTMLInputElement>;
        const { name, value } = changeEvent.target;
        setFormValues((prev) => ({ ...prev, [name]: value }));
        break;
      case 'click':
        const clickEvent = e as React.MouseEvent<HTMLButtonElement>;
        const method = clickEvent.currentTarget.dataset.name;
        if (method) {
          setFormValues((prev) => ({ ...prev, shippingMethod: method }));
        }
        break;
    }
  }

  function inputChangeHandlerForCreditCardData(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const { name, value } = e.target;
    setCreditCardData((prev) => ({ ...prev, [name]: value }));
  }

  function validateForm(formData: globalThis.FormData) {
    const newErrors: CheckoutFormErrors = {};
    // 從 FormData 中取得值
    const email = formData.get('email') as string;
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const phone = formData.get('phone') as string;
    const address = formData.get('address') as string;
    const shippingMethod = formData.get('shippingMethod') as string;
    const paymentMethod = formData.get('paymentMethod') as string;
    const cardNumber = formData.get('cardNumber') as string;
    const expDate = formData.get('expDate') as string;
    const securityCode = formData.get('securityCode') as string;
    const nameOnCard = formData.get('nameOnCard') as string;

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

    if (!shippingMethod) {
      newErrors.shippingMethod = 'Shipping Method is required';
    }

    if (!paymentMethod) {
      newErrors.paymentMethod = 'PaymentMethod is required';
    }

    if (formValues.paymentMethod === 'creditCard') {
      if (!cardNumber.trim()) {
        newErrors.cardNumber = 'Card Number is required';
      }

      if (!expDate.trim()) {
        newErrors.expDate = 'Expiration Date is required';
      }

      if (!securityCode.trim()) {
        newErrors.securityCode = 'Security Code is required';
      }

      if (!nameOnCard.trim()) {
        newErrors.nameOnCard = 'Name on Card is required';
      }
    }

    setErrors(newErrors);

    //皆正確錯誤為0
    return Object.keys(newErrors).length === 0;
  }

  async function onSubmit(formData: globalThis.FormData) {
    if (!validateForm(formData)) return;

    setFormValues({
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      address: '',
      shippingMethod: '',
      paymentMethod: 'creditCard',
    });

    setCreditCardData({
      cardNumber: '',
      expDate: '',
      securityCode: '',
      nameOnCard: '',
    });

    await checkoutAction(formData);
  }
  return (
    <Form action={onSubmit} className='flex flex-col gap-6 py-4 lg:py-0'>
      {/* Contact Info */}
      <div className='flex flex-col gap-3'>
        <label
          htmlFor='email'
          className='text-lg font-medium text-text-darkGray'
        >
          <span className='text-sm text-red-500'>* </span>
          Contact Email
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

      {/* Delivery Info */}
      <div className='flex flex-col gap-3'>
        <label
          htmlFor='firstName'
          className='text-lg font-medium text-text-darkGray'
        >
          <span className='text-sm text-red-500'>* </span>
          Delivery Info
        </label>
        <div className='grid grid-cols-2 gap-4'>
          <div className='flex flex-col gap-2'>
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
          <div className='flex flex-col gap-2'>
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
        </div>
        <StyledInput
          type='text'
          id='address'
          name='address'
          placeholder='Address'
          value={formValues.address}
          onChange={inputChangeHandler}
          error={errors.address}
        />
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

      {/* Shipping Method  */}
      <div className='flex flex-col gap-3'>
        <div className='flex items-center justify-between gap-2 text-lg font-medium text-text-darkGray'>
          <p>
            <span className='text-sm text-red-500'>* </span>Shipping Method
          </p>
          {errors.shippingMethod && (
            <span className='text-xs text-red-500'>
              {errors.shippingMethod}
            </span>
          )}
        </div>
        <button
          type='button'
          data-name='standard'
          className={twMerge(
            'flex w-full items-center justify-between rounded-lg p-3 font-medium text-text-darkGray hover:bg-bgColor-secondaryHover hover:text-white',
            // Selected Style
            formValues.shippingMethod === 'standard'
              ? 'border-2 border-stone-600 bg-bgColor-secondaryBtn'
              : 'border border-stone-600',
            // Error Style
            errors.shippingMethod ? 'border-red-500' : ''
          )}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            inputChangeHandler(e)
          }
        >
          <div className='flex flex-col items-start gap-1'>
            <p>Standard Delivery</p>
            <span className='text-xs'>Please Enter Your Address</span>
          </div>
          <div className='text-lg font-bold'>
            <p>$60</p>
          </div>
        </button>
        <button
          type='button'
          data-name='store'
          className={twMerge(
            'flex w-full items-center justify-between rounded-lg p-3 font-medium text-text-darkGray hover:bg-bgColor-secondaryHover hover:text-white',
            // Selected Style
            formValues.shippingMethod === 'store'
              ? 'border-2 border-stone-600 bg-bgColor-secondaryBtn'
              : 'border border-stone-600',
            // Error Style
            errors.shippingMethod ? 'border-red-500' : ''
          )}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            inputChangeHandler(e)
          }
        >
          <div className='flex flex-col items-start gap-1'>
            <p>Collect in Store</p>
            <span className='text-xs'>Pay now, collect in store</span>
          </div>
          <div className='text-lg font-bold'>
            <p>Free</p>
          </div>
        </button>
        <input
          type='text'
          hidden
          value={formValues.shippingMethod}
          name='shippingMethod'
          readOnly
        />
      </div>

      {/* Payment Info */}
      <div className='flex flex-col gap-3'>
        <div className='text-lg font-medium text-text-darkGray'>
          <span className='text-sm text-red-500'>* </span>Payment
        </div>
        <div className='flex flex-col divide-y divide-stone-400 rounded-lg border border-stone-400 shadow-sm'>
          <PaymentOption
            label='Credit Card'
            type='radio'
            id='creditCard'
            name='paymentMethod'
            value='creditCard'
            checked={formValues.paymentMethod === 'creditCard'}
            onChange={inputChangeHandler}
            customClass='rounded-t-lg'
          />
          <PaymentOptionCollapse
            selectedValue={formValues.paymentMethod}
            value='creditCard'
            customClass='flex flex-col gap-2'
          >
            <StyledInput
              type='text'
              id='cardNumber'
              name='cardNumber'
              placeholder='Card Numbers'
              value={creditCardData.cardNumber}
              onChange={inputChangeHandlerForCreditCardData}
              error={errors.cardNumber}
              customClass='w-full'
            />
            <StyledInput
              type='text'
              id='expDate'
              name='expDate'
              placeholder='Expiration Date MM/YY'
              value={creditCardData.expDate}
              onChange={inputChangeHandlerForCreditCardData}
              error={errors.expDate}
              customClass='w-full'
            />
            <StyledInput
              type='text'
              id='securityCode'
              name='securityCode'
              placeholder='Security Code'
              value={creditCardData.securityCode}
              onChange={inputChangeHandlerForCreditCardData}
              error={errors.securityCode}
              customClass='w-full'
            />
            <StyledInput
              type='text'
              id='nameOnCard'
              name='nameOnCard'
              placeholder='Name on Card'
              value={creditCardData.nameOnCard}
              onChange={inputChangeHandlerForCreditCardData}
              error={errors.nameOnCard}
              customClass='w-full'
            />
          </PaymentOptionCollapse>

          <PaymentOption
            label='PayPal'
            type='radio'
            id='payPal'
            name='paymentMethod'
            value='payPal'
            checked={formValues.paymentMethod === 'payPal'}
            onChange={inputChangeHandler}
          />
          <PaymentOptionCollapse
            selectedValue={formValues.paymentMethod}
            value='payPal'
            customClass='flex flex-col gap-2 justify-center items-center text-text-darkGray'
          >
            <ArrowTopRightOnSquareIcon className='h-8 w-8' />
            <p className='text-sm font-medium'>After clicking "Pay Now",</p>
            <p className='text-sm font-medium'>
              You will be redirected to PayPal to complete your purchase
              securely.
            </p>
          </PaymentOptionCollapse>

          <PaymentOption
            label='EC Pay'
            type='radio'
            id='ECPay'
            name='paymentMethod'
            value='ECPay'
            checked={formValues.paymentMethod === 'ECPay'}
            onChange={inputChangeHandler}
          />
          <PaymentOptionCollapse
            selectedValue={formValues.paymentMethod}
            value='ECPay'
            customClass='flex flex-col gap-2 justify-center items-center text-text-darkGray'
          >
            <ArrowTopRightOnSquareIcon className='h-8 w-8' />
            <p className='text-sm font-medium'>After clicking "Pay Now",</p>
            <p className='text-sm font-medium'>
              You will be redirected to ECPay to complete your purchase
              securely.
            </p>
          </PaymentOptionCollapse>

          <PaymentOption
            label='NewwebPay'
            type='radio'
            id='newwebPay'
            name='paymentMethod'
            value='newwebPay'
            checked={formValues.paymentMethod === 'newwebPay'}
            onChange={inputChangeHandler}
            customClass='rounded-b-lg'
          />
          <PaymentOptionCollapse
            selectedValue={formValues.paymentMethod}
            value='newwebPay'
            customClass='rounded-b-lg flex flex-col gap-2 justify-center items-center text-text-darkGray'
          >
            <ArrowTopRightOnSquareIcon className='h-8 w-8' />
            <p className='text-sm font-medium'>After clicking "Pay Now",</p>
            <p className='text-sm font-medium'>
              You will be redirected to NewwebPay to complete your purchase
              securely.
            </p>
          </PaymentOptionCollapse>
        </div>
      </div>

      {/*  Order Summary */}
      <div className='lg:hidden'>
        <OrderSummaryCollapse togglerStyle='down'>
          <div className='mx-auto w-full max-w-lg lg:max-w-none'>
            {checkoutItems.map((item) => (
              <CheckoutItem key={item.id} checkoutItem={item} />
            ))}
          </div>
        </OrderSummaryCollapse>
        <div className='mx-auto flex w-full max-w-lg flex-col gap-2 p-4 lg:max-w-none'>
          <div className='flex items-center justify-between gap-2 text-sm font-medium text-text-darkGray'>
            <span>Subtotal • 3 items</span>
            <span>$25,815.00</span>
          </div>
          <div className='flex items-center justify-between gap-2 text-sm font-medium text-text-darkGray'>
            <span>Shipping</span>
            <span>$1,999.00</span>
          </div>
          <div className='flex items-center justify-between gap-2 text-lg font-bold text-text-darkGray'>
            <span>Totals</span>
            <span>TWD $27,814.00</span>
          </div>
        </div>
      </div>

      <Button
        text='Pay Now'
        customClass='bg-bgColor-primaryBtn mt-5 hover:bg-bgColor-primaryHover hover:text-text-white'
      />
    </Form>
  );
}

export default CheckoutForm;
