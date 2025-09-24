import HomePageClient from '../../components/pages/HomePageClient';

import { getAllImage } from '@/services/api';

export default async function Home() {
	const photos = await getAllImage();
	return <HomePageClient photos={photos} />;
}
