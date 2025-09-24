import type { Metadata } from 'next';

import Title from '@/components/ui/Title';

import { SITE_NAME } from '@/constants/seo.constants';

export const metadata: Metadata = {
	title: `${SITE_NAME} | Upload`,
};

export default function UploadPage() {
	return (
		<div>
			<Title heading='lg'>Upload your impressions with us</Title>
		</div>
	);
}
