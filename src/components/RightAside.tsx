import { addDays } from 'date-fns';

import PhotoCard from './pages/home/PhotoCard';
import { TPhoto } from '@/types/global.types';

const DATE = new Date('2025-01-01');
export default function RightAside({ photo }: { photo: TPhoto }) {
	const randomDateUpload = addDays(DATE, Math.floor(Math.random() * 275));
	return (
		<aside className='rounded border bg-white p-2 shadow shadow-neutral-400'>
			<h2 className='text-primary text-lg font-bold'>Photo of the day</h2>
			<PhotoCard randomDateUpload={randomDateUpload} photo={photo} />
		</aside>
	);
}
