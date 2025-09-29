import type { Metadata } from 'next';


import { SITE_NAME } from '@/constants/seo.constants';
import ProfilePage from '@/app/(render)/(CSR)/profile/page';

export const metadata: Metadata = {
	title: `${SITE_NAME} | Profile`,
	description: `Просматривай свои опубликованные фото и фото которые вы поддержали лайком на ${SITE_NAME}.`,

	alternates: {
		canonical: '/profile',
	},

	openGraph: {
		title: `${SITE_NAME} | Profile`,
		description: `Личная страница пользователя на ${SITE_NAME}.`,
		url: '/profile',
		siteName: SITE_NAME,
		locale: 'en_US',
		type: 'website',
	},
};

export default function ProfileLayout() {
	return <ProfilePage />;
}
