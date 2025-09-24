import type { Metadata } from 'next';

import Title from '@/components/Title';

export const metadata: Metadata = {
	title: 'Share',
};

export default function SharePage() {
	return (
		<div>
			<Title heading='lg'>Share your impressions with us</Title>
		</div>
	);
}
