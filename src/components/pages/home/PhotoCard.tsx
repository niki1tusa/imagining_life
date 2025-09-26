'use client';

import clsx from 'clsx';
import { addDays, format } from 'date-fns';
import { ThumbsUp } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

import { TPhoto } from '@/types/global.types';

export default function PhotoCard({
	photo,
	randomDateUpload,
}: {
	photo: TPhoto;
	randomDateUpload: Date;
}) {
	const [isLike, setIsLike] = useState(false);
	return (
		<li
			className='flex w-full max-w-lg flex-col gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 shadow-sm transition-all hover:opacity-95 hover:shadow-lg'
		>
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
				<time dateTime={randomDateUpload.toISOString()}>
					{format(randomDateUpload, 'LLL dd, yyyy')}
				</time>
			</div>
			<Image
				alt={photo.description || 'Photo'}
				width={600}
				height={400}
				src={photo.urls.regular}
				className='h-64 w-full rounded-lg object-cover shadow-md'
			/>
			{photo.description && <p className='mt-2 text-sm text-gray-600'>{photo.description}</p>}
			<div className='flex gap-2'>
				<button type='button' onClick={() => setIsLike(!isLike)}>
					<ThumbsUp className={clsx(isLike && 'text-primary')} />
				</button>
				{photo.likes}
			</div>
		</li>
	);
}
