import LoginForm from '@/components/form/LoginForm';
import Image from 'next/image';
import Logo from '@/public/logo-big.png';

function AdminLoginPage() {
  return (
    <div className='m-auto w-full md:max-w-screen-sm'>
      <div className='relative mx-auto h-[60px] w-[150px]'>
        <Image src={Logo} alt='logo' fill={true} sizes='150px' />
      </div>
      <h1 className='my-10 text-center text-3xl font-bold text-text-brown lg:text-5xl'>
        Admin Login
      </h1>
      <LoginForm />
    </div>
  );
}

export default AdminLoginPage;
