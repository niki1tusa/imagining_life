'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';

import { useModalStore } from '@/store/modal.store';

import { AnimateIcon } from './animate-ui/icons/icon';
import { RotateCcwIcon } from './animate-ui/icons/rotate-ccw';
import { SlidersHorizontal } from './animate-ui/icons/sliders-horizontal';
import { Upload } from './animate-ui/icons/upload';
import Field from './ui/Field';
import { useClickOutside } from '@/hooks/useClickOutside';

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
		<div className='border-gray flex flex-col gap-3 border-b px-5 pt-5 pb-3'>
			<Field query={query} setQuery={setQuery} placeholder='Search photo by author...' isSearch={true}/>
			<div className='flex items-center gap-3 text-sm'>
				<AnimateIcon animateOnHover>
					<button
						type='button'
						onClick={() => setIsOpenMenuFilters(!isOpenMenuFilters)}
						className='itens-center relative flex gap-2 rounded bg-white px-2 py-1 shadow shadow-neutral-400 transition-colors hover:bg-neutral-400/20'
					>
						<SlidersHorizontal size={20} />
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
								className='absolute top-[105%] left-0 z-20 flex w-[100px] flex-col items-start rounded-sm bg-white shadow-sm shadow-neutral-400'
							>
								<li
									onClick={() => setOrderBy('Date asc')}
									className='w-full px-2 py-1 transition-all hover:bg-neutral-200/70'
								>
									Date asc
								</li>
								<li
									className='w-full px-2 py-1 transition-all hover:bg-neutral-200/70'
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
						title='Reset filters'
						className='flex gap-2 rounded bg-white px-2 py-1 shadow shadow-neutral-400 transition-colors hover:bg-neutral-400/20'
					>
						<RotateCcwIcon size={20} />
					</button>
				</AnimateIcon>
				<AnimateIcon animateOnHover>
					<button
						onClick={() => {
							open('uploadPhoto');
						}}
						className='flex items-center gap-2 rounded bg-white px-2 py-1 shadow shadow-neutral-400 transition-colors hover:bg-neutral-400/20'
					>
						<Upload size={20} /> Upload
					</button>
				</AnimateIcon>
			</div>
		</div>
	);
}
