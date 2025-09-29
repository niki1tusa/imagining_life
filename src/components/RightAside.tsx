'use client';

import { motion } from 'framer-motion';

import Field from './ui/Field';
import PhotoCard from './ui/PhotoCard';
import Title from './ui/Title';
import { TPhoto } from '@/types/photo.types';

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
			<div className='flex flex-col'>
				<span>Hey friend &#128075; Want the freshest updates from our community?</span>
				<span className='mb-2'>Then share your mail</span>
				<Field type='mail' placeholder='Enter mail...' />
			</div>
		</motion.aside>
	);
}
