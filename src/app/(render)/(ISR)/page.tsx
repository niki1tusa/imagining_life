import { Metadata } from 'next';

import HomePageClient from '@/components/pages/HomePageClient';

import { SITE_NAME } from '@/constants/seo.constants';

import { TPhoto } from '@/types/photo.types';

export const revalidate = 300; // default revalidate
export const metadata: Metadata = {
	title: `${SITE_NAME} | Home`,
	description: `Просматривай и выкладывай фото на  ${SITE_NAME}, имаджинируй жизнь!`,
	alternates: {
		canonical: '/',
	},
	openGraph: {
		title: `${SITE_NAME} | Home`,
		description: `Просматривай и выкладывай фото на  ${SITE_NAME} `,
		url: '/',
		siteName: SITE_NAME,
		images: [
			{
				url: '/home.png',
				width: 1200,
				height: 630,
				alt: 'Home',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
};
async function getPhotos(): Promise<TPhoto[]> {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/photos`, {
		next: { tags: ['photos'], revalidate: 300 }, // тег для этого запроса
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
