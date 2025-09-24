import Sidebar from '@/components/Sidebar';

export default function Mainlayout({ children }: { children: React.ReactNode }) {
	return (
		<div className='bg-background grid grid-cols-[20%_80%]'>
			<Sidebar />
			<main className='mx-5 my-5'>{children}</main>
		</div>
	);
}
