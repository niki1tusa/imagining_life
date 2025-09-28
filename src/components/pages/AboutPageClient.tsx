'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

import Title from '../ui/Title';

import { ABOUT_DATA } from '@/data/about.data';

// SSG
export default function AboutPageClient() {
	// accordion toggle
	const [openSet, setOpenSet] = useState<Set<number>>(new Set());
	const toggle = (idx: number) => {
		setOpenSet(prev => {
			const next = new Set(prev);
			next.has(idx) ? next.delete(idx) : next.add(idx);
			return next;
		});
	};
	return (
		<div className='px-5 pt-5'>
			<Title heading='2xl' className='text-primary'>About us</Title>
			<div className='grid grid-cols-1 items-center xl:grid-cols-2'>
				<div className='flex flex-col gap-4'>
					{ABOUT_DATA.map((item, i) => {
						const isOpen = openSet.has(i);
						return (
							<div key={i} className='border-gray mb-1 flex flex-col gap-2 border-b'>
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
					})}
					<div className='flex flex-col rounded text-black bg-slate-200 p-2'>
						<Title heading='lg'>Contact Us</Title>
						<ul>
							<li>tel: +1 (555) 013-2468</li>
							<li>mail: hello@yourphotosite.example</li>
							<li>address: 123 Example Street, Suite 400, Springfield, IL 62701, USA</li>
						</ul>
					</div>
				</div>
				<Image width={600} height={600} alt='about' src={'/about.png'} />
			</div>
		</div>
	);
}
