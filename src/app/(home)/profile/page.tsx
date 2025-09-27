import type { Metadata } from 'next';

import Title from '@/components/ui/Title';

import { SITE_NAME } from '@/constants/seo.constants';

export const metadata: Metadata = {
	title: `${SITE_NAME} | Profile`,
};

// сделать гастройку темы
export default function Page() {
	return (
		<div className='flex flex-col gap-3'>
			<Title className='text-primary px-5 pt-5'>Profile</Title>
			<span className='border-gray border-b px-5 pb-5 text-lg'>Your photo</span>
			<div className='grid grid-cols-3 gap-1'></div>
			<span className='border-gray border-b px-5 pb-5 text-lg'>Liked</span>
			<div className='grid grid-cols-3 gap-1'></div>
		</div>
	);
}
