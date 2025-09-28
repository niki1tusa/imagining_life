'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import { LogOut, MoonStar, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import Title from '@/components/ui/Title';

import { NAVBAR_DATA } from '@/data/navbar.data';

export default function Sidebar() {
	const { theme, setTheme } = useTheme();
	const pathname = usePathname();
	const [mounted, setMounted] = useState<boolean>(false);
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}
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
			className='bg-light-white flex h-[100dvh] flex-col items-center gap-10 pr-10 2xl:text-xl'
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
						<navItem.icon
							className={clsx(
								pathname === navItem.link
									? 'text-primary group-hover:text-red-700'
									: 'group-hover:text-primary transition-all'
							)}
							size={22}
						/>
						<span
							className={clsx(
								pathname === navItem.link
									? 'text-primary group-hover:text-red-700'
									: 'group-hover:text-primary transition-all'
							)}
						>
							{navItem.title}
						</span>
					</Link>
				))}
			</ul>
			<div className='border-gray h-1 w-[45%] border-b' />
			<button type='button' className='flex items-center gap-1'>
				<LogOut size={22} /> <span className='mb-1'>Logout</span>
			</button>
			<div className='border-gray h-1 w-[45%] border-b' />
			<button
				className={clsx('flex items-center gap-1', theme === 'light' && 'underline')}
				type='button'
				onClick={() => setTheme('light')}
			>
				<Sun /> Light
			</button>
			<button
				className={clsx('flex items-center gap-1', theme === 'dark' && 'underline')}
				type='button'
				onClick={() => setTheme('dark')}
			>
				<MoonStar /> Dark
			</button>
		</motion.nav>
	);
}
