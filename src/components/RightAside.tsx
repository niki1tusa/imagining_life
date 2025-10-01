'use client';

import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

import Field from './ui/Field';
import PhotoCard from './ui/PhotoCard';
import Title from './ui/Title';
import { TPhoto } from '@/types/photo.types';

export default function RightAside() {
	const [random, setRandom] = useState<TPhoto | null>(null);
	const [photos, setPhotos] = useState<TPhoto[]>([]);
	const [query, setQuery] = useState('');

	useEffect(() => {
		let alive = true;
		(async () => {
			try {
				const res = await fetch('/api/photos', { cache: 'no-store' });
				if (!alive) return;
				if (!res.ok) return;
				const list: TPhoto[] = await res.json();
				setPhotos(list);
				if (list.length) {
					const idx = Math.floor(Math.random() * list.length);
					setRandom(list[idx]);
				}
			} catch {}
		})();
		return () => {
			alive = false;
		};
	}, []);

	const largestTotalLikedPhoto = useMemo(() => {
		if (!photos.length) return undefined;
		return [...photos].sort((a, b) => (b.likes ?? 0) - (a.likes ?? 0))[0];
	}, [photos]);

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
			className='hidden max-h-screen w-full flex-col gap-2 overflow-hidden px-5 sm:px-5 md:sticky md:top-4 md:flex md:gap-6 2xl:gap-4'
		>
			<div>
				<Title heading='lg' className='text-primary mb-3 text-lg font-bold'>
					Photo of the day
				</Title>
				{random && <PhotoCard photo={random} />}
			</div>
			<div>
				<Title heading='lg' className='text-primary mb-3 text-lg font-bold'>
					Trend photo
				</Title>
				{largestTotalLikedPhoto && <PhotoCard photo={largestTotalLikedPhoto} />}
			</div>
			<div className='mb-1 hidden flex-col md:flex'>
				<span>Hey friend &#128075; Want the freshest updates from our community?</span>
				<span className='mb-2'>Then share your mail</span>
				<Field
					isMailField={true}
					query={query}
					setQuery={setQuery}
					type='mail'
					placeholder='Enter mail...'
				/>
			</div>
		</motion.aside>
	);
}
