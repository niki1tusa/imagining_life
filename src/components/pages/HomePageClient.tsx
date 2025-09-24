'use client';

import Image from 'next/image';

import { TPhoto } from '@/app/(home)/page';

import Header from '../Header';

// TODO: почему не вывыдится photo
// возможно найти замену API

export default function HomePageClient({ photos }: { photos: TPhoto[] }) {
	return (
		<div className='grid grid-cols-[70%_30%]'>
			<div className='flex flex-col gap-2'>
				<Header />
				{/* lenta */}
				<ul className='flex flex-col items-center gap-2 overflow-y-auto rounded border p-2 2xl:h-[1200px]'>
					{photos.map(photo => (
						<div key={photo.id}>
							<span>{photo.title}</span>
							<span>url: {photo.url}</span>
							{photo.url && <img alt='photo'  width={150} height={150}  src={photo.url} />}
						</div>
					))}
				</ul>
			</div>
			<aside>{/* aside со случайной фото дня */}*</aside>
		</div>
	);
}
