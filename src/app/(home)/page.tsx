'use server';

import HomePageClient from '@/components/pages/HomePageClient';

export default async function Home() {

	return <HomePageClient photos={[]} />;
}
