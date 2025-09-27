'use client';

import { motion } from 'framer-motion';

import PhotoCard from './pages/home/PhotoCard';
import Title from './ui/Title';
import { TPhoto } from '@/types/global.types';

export default function RightAside({ photo }: { photo: TPhoto }) {
	return (
		<motion.aside
			layout='position'
			initial={{ opacity: 0, x: 100 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{
				type: 'spring',
				stiffness: 80,
				damping: 15,
			}}
			className='px-5 pt-5'
		>
			<Title heading='lg' className='text-primary mb-3 text-lg font-bold'>
				Photo of the day
			</Title>
			<PhotoCard photo={photo} />
		</motion.aside>
	);
}
