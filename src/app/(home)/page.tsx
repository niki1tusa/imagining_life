import HomePageClient from '@/components/pages/home/HomePageClient';

import { TPhoto } from '@/types/global.types';

// SSR
async function getPhotos(): Promise<TPhoto[]> {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/photos`, {
		cache: 'no-store',
	});

	if (!res.ok) {
		console.error('API error:', res.status, res.statusText);
		return [];
	}

	return res.json();
}
export default async function Page() {
	const photos = await getPhotos();

	return photos.length ? (
		<HomePageClient photos={photos} />
	) : (
		<div className='flex h-full items-center justify-center text-red-500'>
			Не удалось загрузить фото
		</div>
	);
}
