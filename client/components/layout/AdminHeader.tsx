import LogoutButton from '../button/LogoutButton';

function AdminHeader() {
  return (
    <div className='sticky left-0 top-0 flex h-20 w-full items-center justify-between gap-4 bg-slate-300 px-6'>
      <h1 className='text-2xl font-bold'>Dashboard</h1>
      <LogoutButton />
    </div>
  );
}

export default AdminHeader;
