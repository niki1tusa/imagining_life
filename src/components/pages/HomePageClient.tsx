'use client';

import Image from 'next/image';

import Header from '../Header';

interface Props {
	albumId: number;
	id: number;
	title: string;
	url: string;
	thumbnailUrl: string;
}
// TODO: почему не вывыдится photo
// возможно найти замену API
// TODO: содеожание: лента, поиск по ленте, фильтрация, кнопка-ссылка на share page добавления своей фотографии
export default function HomePageClient({ photos }: { photos: Props[] }) {
	return (
		<div className='grid grid-cols-[70%_30%]'>
			<div className='flex flex-col gap-2'>
				<Header />
				{/* lenta */}
				<ul className='gap-2 rounded border p-2'>
					{photos.map(photo => (
						<div key={photo.id}>
							<span>{photo.title}</span>
							<span>url: {photo.url}</span>
							{photo.url && <Image width={100} height={100} alt='photo' src={photo.url} />}
						</div>
					))}
				</ul>
			</div>
			<aside>{/* aside со случайной фото дня */}*</aside>
		</div>
	);
}
