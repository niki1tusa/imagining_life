import HomePageClient from '../../components/HomePageClient';

import { getAllImage } from '@/services/api';

export default async function Home() {
	const photos = await getAllImage();
	return <HomePageClient photos={photos} />;
}
