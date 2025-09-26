'use client';

import { addDays } from 'date-fns';
import { useState } from 'react';

import Header from '@/components/Header';

import PhotoCard from './PhotoCard';
import { TPhoto } from '@/types/global.types';

interface Props {
	photos: TPhoto[];
}

const DATE = new Date('2025-01-01');

export default function HomePageClient({ photos }: Props) {
	const [query, setQuery] = useState('');
	const queryPhotos = photos.filter(photo =>
		photo.user.name.toLowerCase().includes(query.toLowerCase())
	);
	return (
		<div className='flex flex-col gap-2'>
			<Header query={query} setQuery={setQuery} />
			{/* Лента */}
			<ul className='flex flex-col items-center gap-4 overflow-y-auto rounded px-3 py-2 2xl:h-[1200px]'>
				{queryPhotos.map(photo => {
					const randomDateUpload = addDays(DATE, Math.floor(Math.random() * 275));
					return <PhotoCard key={photo.id} photo={photo} randomDateUpload={randomDateUpload} />;
				})}
			</ul>
		</div>
	);
}
