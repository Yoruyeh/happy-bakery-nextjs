import Link from 'next/link';
import LoginForm from '@/components/form/LoginForm';

const LoginPage = () => {
  return (
    <div className='mx-auto w-full py-20 md:max-w-screen-sm'>
      <h1 className='mb-10 text-center text-3xl font-bold text-text-brown lg:text-5xl'>
        Login
      </h1>
      <LoginForm />
      <Link
        href='/register'
        className='mt-5 flex items-center justify-center text-sm text-text-lightGray underline hover:text-text-darkGray lg:text-base'
      >
        Have no account? Create here!
      </Link>
    </div>
  );
};

export default LoginPage;
