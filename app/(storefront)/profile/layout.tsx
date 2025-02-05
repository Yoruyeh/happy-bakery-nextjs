import LogoutButton from '@/components/button/LogoutButton';
import ProfileTab from '@/components/tab/ProfileTab';

interface ProfileLayoutProps {
  children: React.ReactNode;
}

function ProfileLayout({ children }: ProfileLayoutProps) {
  return (
    <div className='flex flex-col gap-4'>
      <LogoutButton />
      <div className='h-fit w-full min-w-[300px] rounded-lg border border-stone-400'>
        <div>
          <ProfileTab />
        </div>
        <div className='h-fit min-h-[400px] rounded-b-lg bg-blue-50 p-4'>
          {children}
        </div>
      </div>
    </div>
  );
}

export default ProfileLayout;
