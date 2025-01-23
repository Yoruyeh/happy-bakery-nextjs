'use server';

export async function loginAction(formData: globalThis.FormData) {
  // 從 FormData 中取得值
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  console.log({ email, password });
}
