'use client';

import Image from 'next/image';

interface Props {
	albumId: number;
	id: number;
	title: string;
	url: string;
	thumbnailUrl: string;
}
// TODO: почему не вывыдится photo
// возможно найти замену API
// содеожание: лента, поиск по ленте, фильтрация, кнопка-ссылка на конструктор добавления своей фотографии
export default function HomePageClient({ photos }: { photos: Props[] }) {
	return (
		<div className='grid w-full grid-cols-3'>
			<nav>navigtation</nav>
			<main>
				{photos.map(photo => (
					<div key={photo.id}>
						<span>{photo.title}</span>
            <span>url: {photo.url}</span>
						{photo.url && <Image width={100} height={100} alt='photo' src={photo.url} />}
					</div>
				))}
			</main>
			<div>*</div>
		</div>
	);
}
