import RightAside from '@/components/RightAside';
import Sidebar from '@/components/Sidebar';

import { TPhoto } from '@/types/global.types';

async function getRandomPhoto(): Promise<TPhoto | null> {
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/photos/random`, {
			cache: 'no-store',
		});

		if (!res.ok) {
			console.error('API error:', res.status, res.statusText);
			return null;
		}

		return res.json();
	} catch (err) {
		console.error('Fetch error:', err);
		return null;
	}
}
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
export default async function Mainlayout({ children }: { children: React.ReactNode }) {
	const photo = await getRandomPhoto();
	const photos = await getPhotos()
	return (
		<div className='flex justify-center bg-white'>
			<Sidebar />
			<main className='bg-background border-gray w-[700px] border-r border-l'>{children}</main>
			{photo && <RightAside photo={photo} photos={photos}/>}
		</div>
	);
}
