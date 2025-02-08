'use server';

import { cookies } from 'next/headers';
import { UserService } from '../api/services/User';
import { redirect } from 'next/navigation';
import { CreateOrderItem } from '@/api/types/order';
import { OrderService } from '@/api/services/Order';

export async function loginAction(formData: globalThis.FormData) {
  // 從 FormData 中取得值
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  try {
    const response = await UserService.login({ email, password });
    const cookieStore = await cookies();

    if (response.status === 'success' && response.token) {
      cookieStore.set('token', response.token);
      return { success: true, message: response.message };
    } else {
      return { success: false, message: response.message };
    }
  } catch (error) {
    console.error('Login failed:', error);
    return {
      success: false,
      message: 'An unexpected error occurred during login.',
    };
  }
}

export async function registerAction(formData: globalThis.FormData) {
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const termsAgreement = formData.has('termsAgreement');

  try {
    const response = await UserService.register({
      firstName,
      lastName,
      email,
      password,
      termsAgreement,
      gender: '',
    });
    const cookieStore = await cookies();

    if (response.status === 'success' && response.token) {
      cookieStore.set('token', response.token);
      return { success: true, message: response.message };
    } else {
      return { success: false, message: response.message };
    }
  } catch (error) {
    console.error('Register failed:', error);
    return {
      success: false,
      message: 'An unexpected error occurred during register.',
    };
  }
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete('token');

  return { success: true };
}

export async function searchAction(formData: globalThis.FormData) {
  const keyword = formData.get('keyword') as string;

  const searchParams = new URLSearchParams();
  if (keyword) {
    searchParams.set('keyword', keyword);
  }
  redirect(`/product/search?${searchParams.toString()}`);
}

export async function checkoutAction(
  formData: globalThis.FormData,
  orderItems: CreateOrderItem[],
  totalPrice: number
) {
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const email = formData.get('email') as string;
  const address = formData.get('address') as string;
  const phone = formData.get('phone') as string;
  const shippingMethod = formData.get('shippingMethod') as string;
  const paymentMethod = formData.get('paymentMethod') as string;
  // const cardNumber = formData.get('cardNumber') as string;
  // const expDate = formData.get('expDate') as string;
  // const securityCode = formData.get('securityCode') as string;
  // const nameOnCard = formData.get('nameOnCard') as string;

  try {
    const response = await OrderService.createOrder({
      orderItems: orderItems,
      total: totalPrice,
      shipment: {
        email,
        firstName,
        lastName,
        address,
        phone,
        shippingMethod,
      },
      payment: {
        paymentMethod,
      },
    });

    if (response.status === 'success') {
      return { success: true, message: response.message };
    } else {
      return { success: false, message: response.message };
    }
  } catch (error) {
    console.error('Checkout failed:', error);
    return {
      success: false,
      message: 'An unexpected error occurred during checkout.',
    };
  }
}

export async function settingAction(formData: globalThis.FormData) {
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const birthday = formData.get('birthday') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const address = formData.get('address') as string;
  const gender = formData.get('gender') as string;

  try {
    const response = await UserService.updateUserInfo({
      firstName,
      lastName,
      email,
      address,
      phone,
      gender,
      birthday,
    });

    if (response.status === 'success') {
      return { success: true, message: response.message };
    } else {
      return { success: false, message: response.message };
    }
  } catch (error) {
    console.error('Update Personal Info failed:', error);
    return {
      success: false,
      message: 'An unexpected error occurred during update personal info.',
    };
  }
}

export async function passwordEditAction(formData: globalThis.FormData) {
  const currentPW = formData.get('currentPW') as string;
  const newPW = formData.get('newPW') as string;
  const confirmPW = formData.get('confirmPW') as string;

  try {
    const response = await UserService.updatePassword({
      currentPW,
      newPW,
      confirmPW,
    });

    if (response.status === 'success') {
      return { success: true, message: response.message };
    } else {
      return { success: false, message: response.message };
    }
  } catch (error) {
    console.error('Update Password failed:', error);
    return {
      success: false,
      message: 'An unexpected error occurred during update password.',
    };
  }
}

export async function contactAction(formData: globalThis.FormData) {
  // 從 FormData 中取得值
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const comment = formData.get('comment') as string;

  console.log({ name, email, phone, comment });
}
