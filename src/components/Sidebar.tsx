'use client';

import { motion } from 'framer-motion';
import { LogOut } from 'lucide-react';
import Link from 'next/link';

import Title from '@/components/ui/Title';

import { NAVBAR_DATA } from '@/data/navbar.data';

export default function Sidebar() {
	return (
		<motion.nav
			layout='position'
			initial={{ opacity: 0, x: -100 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{
				type: 'spring',
				stiffness: 80,
				damping: 15,
			}}
			className='flex h-[100dvh] flex-col items-center gap-10 bg-white pr-10 2xl:text-xl'
		>
			<Title className='text-primary pt-5'>Imagining Life</Title>
			<div className='border-gray h-1 w-[45%] border-b' />
			<ul className='flex flex-col gap-4'>
				{NAVBAR_DATA.map(navItem => (
					<Link
						key={navItem.id}
						href={navItem.link}
						className='group flex items-center gap-1 transition-all'
					>
						<navItem.icon className='group-hover:text-primary' size={22} />
						<span className='group-hover:text-primary'>{navItem.title}</span>
					</Link>
				))}
			</ul>
			<div className='border-gray h-1 w-[45%] border-b' />
			<button type='button' className='flex items-center gap-1'>
				<LogOut size={22} /> <span className='mb-1'>Logout</span>
			</button>
		</motion.nav>
	);
}
