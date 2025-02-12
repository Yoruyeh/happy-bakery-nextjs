import Image from 'next/image';
import ContactBanner from '@/public/images/banner-contact.jpg';
import ContactForm from '@/components/form/ContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
};

const ContactPage = () => {
  return (
    <div className='h-fit w-full'>
      <div className='absolute -left-6 top-14 h-[250px] w-[calc(100vw+32px)] md:top-20 md:h-[360px] lg:top-24 lg:h-[480px]'>
        <Image
          src={ContactBanner}
          alt='contact-banner'
          fill={true}
          sizes='100vw'
          className='object-cover'
        />
      </div>
      <div className='mb-4 h-[250px] w-full md:h-[360px] lg:h-[480px]' />
      <div className='flex flex-col items-center justify-center gap-6'>
        <h1 className='text-2xl font-bold md:text-4xl lg:text-5xl'>
          Customer Service
        </h1>
        <p className='text-center font-medium md:text-lg lg:text-xl'>
          1F., No. 10, Ln. 67, Smile 1st St., Happy Dist., Taipei City, Taiwan
        </p>
        <p className='text-center font-medium md:text-lg lg:text-xl'>
          happyBakery@google.com
        </p>
        <p className='text-center font-medium md:text-lg lg:text-xl'>
          02-12345678
        </p>
      </div>
      <div className='mt-10 flex flex-col items-center justify-center gap-6'>
        <p className='text-center font-medium md:text-lg lg:text-xl'>
          Still have a question? Fill out the form below. We'd love to help you
          out.
        </p>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
