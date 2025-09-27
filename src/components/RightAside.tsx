'use client';

import { motion } from 'framer-motion';

import PhotoCard from './pages/home/PhotoCard';
import Title from './ui/Title';
import { TPhoto } from '@/types/global.types';

export default function RightAside({ photo, photos }: { photo: TPhoto; photos: TPhoto[] }) {
	const largestTotalLikedPhoto = photos.sort((a, b) => b.likes - a.likes)[0];
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
			className='flex flex-col gap-6 px-5 pt-5'
		>
			<div>
				<Title heading='lg' className='text-primary mb-3 text-lg font-bold'>
					Photo of the day
				</Title>
				<PhotoCard photo={photo} />
			</div>
			<div>
				<Title heading='lg' className='text-primary mb-3 text-lg font-bold'>
					Trend photo
				</Title>
				<PhotoCard photo={largestTotalLikedPhoto} />
			</div>
		</motion.aside>
	);
}
