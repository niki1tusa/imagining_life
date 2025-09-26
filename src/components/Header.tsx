'use client'
import { FunnelPlus, RotateCcw, Upload } from 'lucide-react';
import React from 'react';

import { useModalStore } from '@/store/modal.store';

import Field from './ui/Field';

export default function Header() {
	const { open } = useModalStore();
	return (
		<div className='flex flex-col gap-3'>
			<Field />
			<div className='flex items-center gap-3 text-sm'>
				<button className='itens-center flex gap-2 rounded bg-white px-2 py-1 shadow shadow-neutral-400 transition-colors hover:bg-neutral-400/20'>
					<FunnelPlus size={20} /> Filters
				</button>
				<button className='flex gap-2 rounded bg-white px-2 py-1 shadow shadow-neutral-400 transition-colors hover:bg-neutral-400/20'>
					<RotateCcw size={20} className='hover:animate-spin' />
				</button>
				<button
					onClick={() =>{
						console.log('hello')
						open('uploadPhoto')}}
					className='flex items-center gap-2 rounded bg-white px-2 py-1 shadow shadow-neutral-400 transition-colors hover:bg-neutral-400/20'
				>
					<Upload size={20} /> Upload
				</button>
			</div>
		</div>
	);
}
