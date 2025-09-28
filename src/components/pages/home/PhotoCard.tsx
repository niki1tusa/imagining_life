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
	return (
		<li className='bg-light-white flex w-full max-w-lg flex-col gap-2 rounded-xl border border-gray-200 px-6 py-3 shadow-sm transition-all hover:opacity-95 hover:shadow-lg'>
			<div className='flex items-center justify-between gap-2 pb-2 text-sm font-medium text-gray-700'>
				<div className='flex items-center gap-2'>
					<Image
						width={32}
						height={32}
						alt={photo.description || ''}
						src={photo.user.profile_image?.small || '/user.png'}
						className='h-8 w-8 rounded-full border border-gray-200 object-cover shadow-sm'
					/>
					{photo?.user?.name && <span>{photo.user.username || photo.user.name}</span>}
				</div>
				<time dateTime={photo.created_at}>{format(photo.created_at, 'LLL dd, yyyy')}</time>
			</div>
			<Image
				alt={photo.description || 'Photo'}
				width={600}
				height={400}
				src={photo.urls.regular}
				className='h-64 w-full rounded-lg object-cover shadow-md'
			/>
			{photo.description && <p className='mt-2 text-sm text-gray-600'>{photo.description}</p>}
			<div className='flex items-center gap-1'>
				<AnimateIcon animateOnHover>
					<button type='button' onClick={() => toggleLike(photo)}>
						<Heart
							size={22}
							className={clsx(liked && 'text-primary')}
							fill={liked ? 'red' : 'transparent'}
						/>
					</button>
				</AnimateIcon>
				{liked ? photo.likes + 1 : photo.likes}
			</div>
		</li>
	);
}
