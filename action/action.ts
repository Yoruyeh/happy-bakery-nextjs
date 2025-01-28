'use server';

export async function loginAction(formData: globalThis.FormData) {
  // 從 FormData 中取得值
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  console.log({ email, password });
}

export async function registerAction(formData: globalThis.FormData) {
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  console.log({ firstName, lastName, email, password });
}

export async function checkoutAction(formData: globalThis.FormData) {
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const email = formData.get('email') as string;
  const address = formData.get('address') as string;
  const phone = formData.get('phone') as string;
  const shippingMethod = formData.get('shippingMethod') as string;
  const paymentMethod = formData.get('paymentMethod') as string;
  const cardNumber = formData.get('cardNumber') as string;
  const expDate = formData.get('expDate') as string;
  const securityCode = formData.get('securityCode') as string;
  const nameOnCard = formData.get('nameOnCard') as string;

  console.log({
    firstName,
    lastName,
    email,
    address,
    phone,
    shippingMethod,
    paymentMethod,
    cardNumber,
    expDate,
    securityCode,
    nameOnCard,
  });
}
