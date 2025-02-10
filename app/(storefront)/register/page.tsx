import RegisterForm from '@/components/form/RegisterForm';
import Link from 'next/link';

function RegisterPage() {
  return (
    <div className='mx-auto w-full py-20 md:max-w-screen-sm'>
      <h1 className='mb-10 text-center text-3xl font-bold text-text-brown lg:text-5xl'>
        Create Account
      </h1>
      <RegisterForm />
      <Link
        href='/login'
        className='mt-5 flex items-center justify-center text-sm text-text-lightGray underline hover:text-text-darkGray lg:text-base'
      >
        Already Have an account? Login here!
      </Link>
    </div>
  );
}

export default RegisterPage;
