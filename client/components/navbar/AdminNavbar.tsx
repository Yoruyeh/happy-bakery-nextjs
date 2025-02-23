import Image from 'next/image';

interface AdminNavbarProps {}

function AdminNavbar({}: AdminNavbarProps) {
  return (
    <div className='fixed inset-0 flex w-20 flex-col items-center bg-slate-200 p-6 sm:w-[160px] md:w-[200px] lg:w-[260px]'>
      <div className='relative h-[24px] w-[24px] sm:hidden'>
        <Image src='/logo-small.png' alt='logo' fill={true} sizes='24px' />
      </div>
      <div className='relative hidden h-[60px] w-[150px] sm:block'>
        <Image src='/logo-big.png' alt='logo' fill={true} sizes='150px' />
      </div>
    </div>
  );
}

export default AdminNavbar;
