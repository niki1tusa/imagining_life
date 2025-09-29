'use client';

import clsx from 'clsx';
import { format } from 'date-fns';
import Image from 'next/image';

import { Heart } from '@/components/animate-ui/icons/heart';
import { AnimateIcon } from '@/components/animate-ui/icons/icon';

import { useLikePhotoStore } from '@/store/like-photo.store';

import { TPhoto } from '@/types/photo.types';

export default function PhotoCard({ photo }: { photo: TPhoto }) {
	const { toggleLike, isLiked } = useLikePhotoStore();
	const liked = isLiked(photo.id);
	const authorName = photo.user.username || photo.user.name || 'Unknown author';
	
	return (
		<article className='bg-light-white flex w-full max-w-lg flex-col gap-2 rounded-xl border border-gray-200 px-6 py-3 shadow-sm transition-all hover:opacity-95 hover:shadow-lg'>
			<header className='flex items-center justify-between gap-2 pb-2 text-sm font-medium text-gray-700'>
				<div className='flex items-center gap-2'>
					<Image
						width={32}
						height={32}
						alt={`Profile picture of ${authorName}`}
						src={photo.user.profile_image?.small || '/user.png'}
						className='h-8 w-8 rounded-full border border-gray-200 object-cover shadow-sm'
					/>
					{photo?.user?.name && <span>{authorName}</span>}
				</div>
				<time dateTime={photo.created_at} aria-label={`Posted on ${format(photo.created_at, 'LLLL dd, yyyy')}`}>
					{format(photo.created_at, 'LLL dd, yyyy')}
				</time>
			</header>
			<Image
				alt={photo.description || `Photo by ${authorName}`}
				width={600}
				height={400}
				src={photo.urls.regular}
				className='h-64 w-full rounded-lg object-cover shadow-md'
			/>
			{photo.description && (
				<p className='mt-2 text-sm text-gray-600' role="img" aria-label={`Photo description: ${photo.description}`}>
					{photo.description}
				</p>
			)}
			<footer className='flex items-center gap-1'>
				<AnimateIcon animateOnHover>
					<button 
						type='button' 
						onClick={() => toggleLike(photo)}
						aria-label={liked ? `Unlike photo by ${authorName}` : `Like photo by ${authorName}`}
						aria-pressed={liked}
						className=" rounded-sm p-1"
					>
						<Heart
							size={22}
							className={clsx(liked && 'text-primary')}
							fill={liked ? 'red' : 'transparent'}
							aria-hidden="true"
						/>
					</button>
				</AnimateIcon>
				<span aria-label={`${liked ? photo.likes + 1 : photo.likes} likes`}>
					{liked ? photo.likes + 1 : photo.likes}
				</span>
			</footer>
		</article>
	);
}
