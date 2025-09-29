'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';

import { useModalStore } from '@/store/modal.store';

import { useClickOutside } from '@/hooks/useClickOutside';

import { AnimateIcon } from './animate-ui/icons/icon';
import { RotateCcwIcon } from './animate-ui/icons/rotate-ccw';
import { SlidersHorizontal } from './animate-ui/icons/sliders-horizontal';
import { Upload } from './animate-ui/icons/upload';
import Field from './ui/Field';

export default function Header({
	query,
	setQuery,
	orderBy,
	setOrderBy,
}: {
	query: string;
	setQuery: (e: string) => void;
	orderBy: 'Date asc' | 'Author asc' | null;
	setOrderBy: (arg: 'Date asc' | 'Author asc' | null) => void;
}) {
	const { open } = useModalStore();
	const { ref } = useClickOutside<HTMLUListElement>(() => setIsOpenMenuFilters(false));
	const [isOpenMenuFilters, setIsOpenMenuFilters] = useState<boolean>(false);
	const handleReset = () => {
		setQuery('');
		setOrderBy(null);
	};
	return (
		<header className='border-gray flex flex-col gap-3 border-b px-5 pt-5 pb-3' role='banner'>
			<Field
				query={query}
				setQuery={setQuery}
				placeholder='Search photo by author...'
				isSearch={true}
			/>
			<div
				className='flex items-center gap-3 text-sm'
				role='toolbar'
				aria-label='Photo filters and actions'
			>
				<AnimateIcon animateOnHover>
					<button
						type='button'
						onClick={() => setIsOpenMenuFilters(!isOpenMenuFilters)}
						className='itens-center bg-light-white focus:ring-primary relative flex gap-2 rounded px-2 py-1 shadow shadow-neutral-400 transition-colors hover:bg-neutral-400/20 focus:ring-2 focus:ring-offset-2 focus:outline-none'
						aria-expanded={isOpenMenuFilters}
						aria-haspopup='menu'
						aria-label={`Filter options${orderBy ? `, currently filtered by ${orderBy}` : ''}`}
					>
						<SlidersHorizontal size={20} aria-hidden='true' />
						{orderBy ? orderBy : 'Filters'}
						{isOpenMenuFilters && (
							<motion.ul
								layout='position'
								ref={ref}
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									type: 'spring',
									stiffness: 80,
									damping: 15,
								}}
								className='bg-light-white absolute top-[105%] left-0 z-20 flex w-[100px] flex-col items-start rounded-sm shadow-sm shadow-neutral-400'
								role='menu'
								aria-label='Filter options'
							>
								<li
									role='menuitem'
									onClick={() => setOrderBy('Date asc')}
									className='w-full px-2 py-1 text-left transition-all hover:bg-neutral-200/70 focus:bg-neutral-200/70 focus:outline-none'
								>
									Date asc
								</li>
								<li
									role='menuitem'
									className='w-full px-2 py-1 text-left transition-all hover:bg-neutral-200/70 focus:bg-neutral-200/70 focus:outline-none'
									onClick={() => setOrderBy('Author asc')}
								>
									Author asc
								</li>
							</motion.ul>
						)}
					</button>
				</AnimateIcon>
				<AnimateIcon animateOnHover>
					<button
						onClick={handleReset}
						aria-label='Reset all filters'
						className='bg-light-white focus:ring-primary flex gap-2 rounded px-2 py-1 shadow shadow-neutral-400 transition-colors hover:bg-neutral-400/20 focus:ring-2 focus:ring-offset-2 focus:outline-none'
					>
						<RotateCcwIcon size={20} aria-hidden='true' />
						<span className='sr-only'>Reset filters</span>
					</button>
				</AnimateIcon>
				<AnimateIcon animateOnHover>
					<button
						onClick={() => {
							open('uploadPhoto');
						}}
						className='bg-light-white focus:ring-primary flex items-center gap-2 rounded px-2 py-1 shadow shadow-neutral-400 transition-colors hover:bg-neutral-400/20 focus:ring-2 focus:ring-offset-2 focus:outline-none'
						aria-label='Upload a new photo'
					>
						<Upload size={20} aria-hidden='true' /> Upload
					</button>
				</AnimateIcon>
			</div>
		</header>
	);
}
