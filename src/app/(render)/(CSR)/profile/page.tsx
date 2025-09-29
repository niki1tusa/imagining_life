'use client';

import { useLikePhotoStore } from '@/store/like-photo.store';
import { useMyPhotoStore } from '@/store/my-photo.store';

import PhotoCard from '../../../../components/ui/PhotoCard';
import Title from '../../../../components/ui/Title';

export default function ProfilePage() {
	const { likedPhotos } = useLikePhotoStore();
	const { uploads } = useMyPhotoStore();
	return (
		<div className='flex h-screen flex-col gap-3'>
			<Title heading='2xl' className='text-primary px-5 pt-5'>
				Profile
			</Title>
			<span className='border-gray border-b px-5 pb-5 text-lg'>Your photo</span>
			{uploads && (
				<div className='flex flex-grow flex-col items-center gap-4 overflow-y-auto rounded px-3 py-2'>
					{uploads.map(photo => (
						<PhotoCard key={photo.id} photo={photo} />
					))}
				</div>
			)}
			<span className='border-gray border-b px-5 pb-5 text-lg'>Liked</span>
			<div className='flex flex-grow flex-col items-center gap-4 overflow-y-auto rounded px-3 py-2'>
				{likedPhotos.map(photo => (
					<PhotoCard key={photo.id} photo={photo} />
				))}
			</div>
		</div>
	);
}
