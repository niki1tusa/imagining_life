import RightAside from '@/components/RightAside';
import Sidebar from '@/components/Sidebar';

export default function Mainlayout({ children }: { children: React.ReactNode }) {
	return (
		<div className='bg-light-white grid-cols-1 justify-center md:grid md:grid-cols-[1fr_minmax(0,520px)_1fr] 2xl:grid-cols-[1fr_700px_1fr]'>
			<div className='md:justify-self-end'>
				<Sidebar />
			</div>
			<main
				className='bg-background border-gray w-full border-r border-l'
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
