'use client';

import { useLikePhotoStore } from '@/store/like-photo.store';

import Title from '../ui/Title';

import PhotoCard from './home/PhotoCard';

export default function ProfilePageClient() {
	const { likedPhotos } = useLikePhotoStore();
	return (
		<div className='flex flex-col gap-3 h-screen'>
			<Title heading='2xl' className='text-primary px-5 pt-5'>Profile</Title>
			<span className='border-gray border-b px-5 pb-5 text-lg'>Your photo</span>
			<div className='grid grid-cols-3 gap-1'></div>
			<span className='border-gray border-b px-5 pb-5 text-lg'>Liked</span>
			<div className='flex flex-col items-center gap-4 overflow-y-auto rounded px-3 py-2 flex-grow'>
				{likedPhotos.map(photo => (
					<PhotoCard key={photo.id} photo={photo} />
				))}
			</div>
		</div>
	);
}
