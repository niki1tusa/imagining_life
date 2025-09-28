'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import Header from '@/components/Header';

import PhotoCard from './PhotoCard';
import { TPhoto } from '@/types/photo.types';

interface Props {
	photos: TPhoto[];
}

export default function HomePageClient({ photos }: Props) {
	const [dataPhoto, setDataPhoto] = useState<TPhoto[]>(photos);
	const [query, setQuery] = useState<string>('');
	const [orderBy, setOrderBy] = useState<'Date asc' | 'Author asc' | null>(null);

	// query and filters
	useEffect(() => {
		const queryPhotos = photos.filter(photo =>
			photo.user.name.toLowerCase().includes(query.toLowerCase())
		);
		if (orderBy === 'Date asc') {
			const sort = queryPhotos.sort(
				(a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
			);
			setDataPhoto(sort);
		} else if (orderBy === 'Author asc') {
			const sort = queryPhotos.sort((a, b) => a.user.name.localeCompare(b.user.name));
			setDataPhoto(sort);
		} else {
			setDataPhoto(queryPhotos);
		}
	}, [query, orderBy]);
	return (
		<div className='flex flex-col gap-2'>
			<Header query={query} setQuery={setQuery} orderBy={orderBy} setOrderBy={setOrderBy} />
			{/* Лента */}
			<motion.ul
				layout='position'
				initial={{ opacity: 0, y: 150 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					type: 'spring',
					stiffness: 80,
					damping: 15,
				}}
				className='flex flex-col items-center gap-4 overflow-y-auto rounded px-3 py-2 2xl:h-[1200px]'
			>
				{dataPhoto.map(photo => (
					<PhotoCard key={photo.id} photo={photo} />
				))}
			</motion.ul>
		</div>
	);
}
