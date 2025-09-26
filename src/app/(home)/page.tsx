import HomeClientWrapper from '@/components/pages/home/HomeClientWrapper';
import HomePageClient from '@/components/pages/home/HomePageClient';

export type TPhoto = {
	id: string;
	author: string;
	width: number;
	height: number;
	url: string;
	download_url: string;
};

export default async function Home() {

	return <HomeClientWrapper/>;
}
