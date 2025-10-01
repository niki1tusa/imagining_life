'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

import FallbackPhoto from '@/components/ui/FallbackPhoto';
import PhotoCard from '@/components/ui/PhotoCard';
import Title from '@/components/ui/Title';

import { useLikePhotoStore } from '@/store/like-photo.store';
import { useMyPhotoStore } from '@/store/my-photo.store';

export default function ProfilePage() {
	const { likedPhotos } = useLikePhotoStore();
	const { uploads } = useMyPhotoStore();

	const [isOpen, setIsOpen] = useState({ myPhotos: true, likePhotos: true });

	return (
		<div className='flex h-screen flex-col gap-3'>
			<Title heading='2xl' className='text-primary px-5 pt-5'>
				Profile
			</Title>

			{/* MY PHOTOS header */}
			<div className='border-gray flex items-center justify-between border-b px-5 pb-5'>
				<span className='text-lg'>Your photo</span>
				<button
					type='button'
					onClick={() => setIsOpen(prev => ({ ...prev, myPhotos: !prev.myPhotos }))}
					aria-expanded={isOpen.myPhotos}
					aria-controls='my-photos-panel'
				>
					{isOpen.myPhotos ? <ChevronDown /> : <ChevronUp />}
				</button>
			</div>

			<AnimatePresence mode='popLayout'>
				{isOpen.myPhotos && (
					<motion.div
						initial={{ y: 100, opacity: 0 }}
						animate={{
							y: 0,
							opacity: 1,
							transition: { type: 'spring', stiffness: 80, damping: 15 }, // обычная скорость
						}}
						exit={{
							y: 10,
							opacity: 0,
							transition: { type: 'tween', ease: 'easeIn', duration: 0.12 }, // быстрее только на exit
						}}
						className='flex flex-col items-center gap-4 overflow-y-auto rounded px-3 py-2'
					>
						{uploads?.length ? (
							uploads.map(photo => <PhotoCard key={photo.id} photo={photo} />)
						) : (
							<FallbackPhoto text="You haven't uploaded the photos yet!" />
						)}
					</motion.div>
				)}
			</AnimatePresence>

			{/* LIKED header */}
			<div className='border-gray flex items-center justify-between border-b px-5 pb-5'>
				<span className='text-lg'>Liked</span>
				<button
					type='button'
					onClick={() => setIsOpen(prev => ({ ...prev, likePhotos: !prev.likePhotos }))}
					aria-expanded={isOpen.likePhotos}
					aria-controls='liked-photos-panel'
				>
					{isOpen.likePhotos ? <ChevronDown /> : <ChevronUp />}
				</button>
			</div>

			<AnimatePresence mode='popLayout'>
				{isOpen.likePhotos && (
					<motion.div
						initial={{ y: 100, opacity: 0 }}
						animate={{
							y: 0,
							opacity: 1,
							transition: { type: 'spring', stiffness: 80, damping: 15 }, 
						}}
						exit={{
							y: 10,
							opacity: 0,
							transition: { type: 'tween', ease: 'easeIn', duration: 0.12 }, 
						}}
						className='flex flex-col items-center gap-4 overflow-y-auto rounded px-3 py-2'
					>
						{likedPhotos.length ? (
							likedPhotos.map(photo => <PhotoCard key={photo.id} photo={photo} />)
						) : (
							<FallbackPhoto text='Liked photo collection is empty!' />
						)}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
