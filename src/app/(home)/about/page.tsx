import type { Metadata } from 'next';

import AboutPageClient from '@/components/pages/AboutPageClient';

import { SITE_NAME } from '@/constants/seo.constants';

export const metadata: Metadata = {
	title: `${SITE_NAME} | About`,
};

export default function Page() {
	return <AboutPageClient />;
}
