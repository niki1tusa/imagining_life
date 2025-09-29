import RightAside from '@/components/RightAside';
import Sidebar from '@/components/Sidebar';

export default function Mainlayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-light-white flex justify-center'>
      <Sidebar />
      <main className='bg-background border-gray w-[700px] border-r border-l' role='main' aria-label='Main content area'>
        {children}
      </main>
      <RightAside />
    </div>
  );
}
