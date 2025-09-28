import type { Metadata } from 'next';

import Title from '@/components/ui/Title';

import { SITE_NAME } from '@/constants/seo.constants';
import Form from '@/components/ui/Form';

export const metadata: Metadata = {
	title: `${SITE_NAME} | Upload`,
};

export default function UploadPage() {
	return (
		<div>
			<Title heading='2xl' className='text-primary px-5 pt-5' >
				Upload your impressions with us
			</Title>
			<Form/>
		</div>
	);
}
