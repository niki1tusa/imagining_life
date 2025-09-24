import { LogOut } from 'lucide-react';
import Link from 'next/link';

import Title from '@/components/ui/Title';

import { NAVBAR_DATA } from '@/data/navbar.data';

export default function Sidebar() {
	return (
		<nav className='flex h-[100dvh] flex-col items-center gap-10 border-r border-gray-400/50 bg-white 2xl:text-xl'>
			<Title className='pt-5 text-red-500'>Imagining Life</Title>
			<div className='h-1 w-[45%] border-b border-gray-400/50' />
			<ul className='flex flex-col gap-4'>
				{NAVBAR_DATA.map(navItem => (
					<Link
						key={navItem.id}
						href={navItem.link}
						className='group flex items-center gap-1 transition-all'
					>
						<navItem.icon className='group-hover:text-red-500' size={22} />{' '}
						<span className='group-hover:text-red-500'>{navItem.title}</span>
					</Link>
				))}
			</ul>
			<div className='h-1 w-[45%] border-b border-gray-400/50' />
			<button type='button' className='flex items-center gap-1'>
				<LogOut size={22} /> <span className='mb-1'>Logout</span>
			</button>
		</nav>
	);
}
