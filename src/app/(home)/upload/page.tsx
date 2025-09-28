import type { Metadata } from 'next';

import Form from '@/components/ui/Form';
import Title from '@/components/ui/Title';

import { SITE_NAME } from '@/constants/seo.constants';

export const metadata: Metadata = {
	title: `${SITE_NAME} | Upload`,
};

export default function UploadPage() {
	return (
		<div>
			<Title heading='2xl' className='text-primary px-5 pt-5'>
				Upload your impressions with us
			</Title>
			<div className='px-10 pt-10'>
				<Form />
			</div>
		</div>
	);
}
