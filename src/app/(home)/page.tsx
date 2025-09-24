import HomePageClient from '@/components/pages/HomePageClient';

export type TPhoto = {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
};

export default async function Home() {
	const photos = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
		.then(response => response.json())
		

	return <HomePageClient photos={photos ?? []} />;
}
