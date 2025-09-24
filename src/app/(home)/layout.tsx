import Sidebar from '@/components/Sidebar';

export default function Mainlayout({ children }: { children: React.ReactNode }) {
	return (
		<div className='grid grid-cols-[20%_80%]  bg-slate-100'>
			<Sidebar />
			<main className='my-5 mx-5'>{children}</main>
		</div>
	);
}
