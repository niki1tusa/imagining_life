'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface Props {
	item: { label: string; description: string };
	i: number;
}
// SSG
export default function Accordion({ item, i }: Props) {
	// accordion toggle
	const [openSet, setOpenSet] = useState<Set<number>>(new Set());
	const toggle = (i: number) => {
		setOpenSet(prev => {
			const next = new Set(prev);
			next.has(i) ? next.delete(i) : next.add(i);
			return next;
		});
	};
	const isOpen = openSet.has(i);
	return (
		<div className='border-gray mb-1 flex flex-col gap-2 border-b'>
			<div className='flex justify-between'>
				<button
					onClick={() => toggle(i)}
					type='button'
					className='text-md font-bold transition-all hover:underline'
				>
					{item.label}
				</button>
				<button type='button' onClick={() => toggle(i)}>
					{isOpen ? <ChevronDown /> : <ChevronUp />}
				</button>
			</div>
			<AnimatePresence>
				{isOpen && (
					<motion.p
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.5 }}
						style={{ overflow: 'hidden' }}
					>
						{item.description}
					</motion.p>
				)}
			</AnimatePresence>
		</div>
	);
}
