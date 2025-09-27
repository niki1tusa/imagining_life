import type { Metadata } from 'next';

import ProfilePageClient from '@/components/pages/ProfilePageClient';
import Title from '@/components/ui/Title';

import { SITE_NAME } from '@/constants/seo.constants';

export const metadata: Metadata = {
	title: `${SITE_NAME} | Profile`,
};

// сделать гастройку темы
export default function Page() {
	return <ProfilePageClient />;
}
