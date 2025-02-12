'use client';

import { contactAction } from '@/action/action';
import { validateEmail, validatePhoneNumber } from '@/utils/validate';
import Form from 'next/form';
import { useState } from 'react';
import StyledInput from '../input/StyledInput';
import Button from '../button/Button';
import NotifyModal from '../modal/NotifyModal';

interface ContactFormValues {
  name?: string;
  email: string;
  phone?: string;
  comment: string;
}

interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  comment?: string;
}

function ContactForm() {
  const [formValues, setFormValues] = useState<ContactFormValues>({
    name: '',
    email: '',
    phone: '',
    comment: '',
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  function inputChangeHandler(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  }

  function validateForm(formData: globalThis.FormData) {
    const newErrors: ContactFormErrors = {};
    // 從 FormData 中取得值

    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const comment = formData.get('comment') as string;

    // 驗證資料
    const emailError = validateEmail(email);
    const phoneError = validatePhoneNumber(phone);

    if (emailError) {
      newErrors.email = emailError;
    }

    if (phone && phoneError) {
      newErrors.phone = phoneError;
    }

    if (!comment.trim()) {
      newErrors.comment = 'Comment is required';
    }

    setErrors(newErrors);

    //皆正確錯誤為0
    return Object.keys(newErrors).length === 0;
  }

  async function onSubmit(formData: globalThis.FormData) {
    if (!validateForm(formData)) return;

    setFormValues({
      name: '',
      email: '',
      phone: '',
      comment: '',
    });

    const result = await contactAction(formData);

    if (result.success) {
      setIsModalOpen(true);
    }
  }
  return (
    <Form action={onSubmit}>
      <div className='grid grid-cols-2 gap-4'>
        <StyledInput
          type='text'
          id='name'
          name='name'
          placeholder='Name'
          value={formValues.name}
          onChange={inputChangeHandler}
          error={errors.name}
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
        <StyledInput
          type='text'
          id='email'
          name='email'
          placeholder='Email'
          value={formValues.email}
          onChange={inputChangeHandler}
          error={errors.email}
          customClass='col-span-2'
        />
        <StyledInput
          type='text'
          id='comment'
          name='comment'
          placeholder='Comment'
          value={formValues.comment}
          onChange={inputChangeHandler}
          customClass='resize-none indent-0 col-span-2 h-[200px]'
          isTextArea={true}
          error={errors.comment}
        />
      </div>
      <div className='flex items-center justify-center'>
        <Button
          text='Send'
          customClass='w-fit mt-5 font-medium bg-bgColor-primaryBtn hover:bg-bgColor-primaryHover text-text-darkGray hover:text-white'
        />
      </div>
      {isModalOpen && (
        <NotifyModal
          onClose={() => setIsModalOpen(false)}
          data={{
            title: 'Thank you for your message!',
            text: 'We will get back to you soon.',
          }}
        />
      )}
    </Form>
  );
}

export default ContactForm;
