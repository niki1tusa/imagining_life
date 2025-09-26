'use client';

import { FunnelPlus, RotateCcw, Upload } from 'lucide-react';
import React, { useState } from 'react';

import { useModalStore } from '@/store/modal.store';

import Field from './ui/Field';

export default function Header({
	query,
	setQuery,
}: {
	query: string;
	setQuery: (e: string) => void;
}) {
	const { open } = useModalStore();
	return (
		<div className='border-gray flex flex-col gap-3 border-b px-5 pt-5 pb-3'>
			<Field query={query} setQuery={setQuery} />
			<div className='flex items-center gap-3 text-sm'>
				<button className='itens-center flex gap-2 rounded bg-white px-2 py-1 shadow shadow-neutral-400 transition-colors hover:bg-neutral-400/20'>
					<FunnelPlus size={20} /> Filters
				</button>
				<button className='flex gap-2 rounded bg-white px-2 py-1 shadow shadow-neutral-400 transition-colors hover:bg-neutral-400/20'>
					<RotateCcw size={20} className='hover:animate-spin' />
				</button>
				<button
					onClick={() => {
						console.log('hello');
						open('uploadPhoto');
					}}
					className='flex items-center gap-2 rounded bg-white px-2 py-1 shadow shadow-neutral-400 transition-colors hover:bg-neutral-400/20'
				>
					<Upload size={20} /> Upload
				</button>
			</div>
		</div>
	);
}
