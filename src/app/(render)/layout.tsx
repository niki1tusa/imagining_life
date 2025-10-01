import RightAside from '@/components/RightAside';
import Sidebar from '@/components/Sidebar';

export default function Mainlayout({ children }: { children: React.ReactNode }) {
	return (
		<div className='bg-light-white md:grid h-screen  md:grid-cols-[1fr_minmax(0,_520px)_1fr] xl:grid-cols-[1fr_minmax(0,_650px)_1fr]'>
			<div className='md:justify-self-end'>
				<Sidebar />
			</div>
			<main
				className='bg-background border-gray w-full h-full border-r border-l'
				role='main'
				aria-label='Main content area'
			>
				{children}
			</main>
			<div className='md:justify-self-start'>
				<RightAside />
			</div>
		</div>
	);
}
