import { Metadata } from 'next';

import HomePageClient from '@/components/pages/HomePageClient';
import FallbackPhoto from '@/components/ui/FallbackPhoto';

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
	const res = await fetch('https://api.unsplash.com/photos?per_page=30', {
		headers: {
			Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
			'Accept-Version': 'v1',
		},
		next: { tags: ['photos'], revalidate: 300 }, // ISR
	});
	if (!res.ok) return [];
	return res.json();
}

export default async function Page() {
	const photos = await getPhotos();
	return photos.length ? (
		<HomePageClient photos={photos} />
	) : (
		<FallbackPhoto text="Сouldn't upload photos!" />
	);
}
