'use client';

import Image from 'next/image';


import Header from '../Header';

// TODO: почему не вывыдится photo
// возможно найти замену API

export default function HomePageClient({ photos }: { photos: TPicsumPhoto[] }) {
	return (
		<div className='grid grid-cols-[70%_30%]'>
			<div className='flex flex-col gap-2'>
				<Header />
				{/* lenta */}
				<ul className='flex flex-col items-center gap-2 overflow-y-auto rounded border p-2 2xl:h-[1200px]'>
					{photos.map(photo => (
						<div key={photo.id}>
							<span>{photo.author}</span>
							<span>url: {photo.url}</span>
							{photo.url && (
								<Image
									width={photo.width}
									height={photo.height}
									alt='photo'
									src={photo.download_url}
								/>
							)}
						</div>
					))}
				</ul>
			</div>
			<aside>{/* aside со случайной фото дня */}*</aside>
		</div>
	);
}
