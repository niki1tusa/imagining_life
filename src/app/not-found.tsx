import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
	return (
		<div className='flex min-h-screen flex-col items-center justify-center bg-slate-100 px-4 text-center'>
			<Image
				width={600}
				height={600}
				src='/404.png'
				alt='404 Not Found'
				className='mb-6'
				priority
			/>
			<h1 className='mb-2 text-3xl font-bold text-gray-800'>Page Not Found</h1>
			<p className='mb-6 text-gray-600'>
				The page you are looking for doesn’t exist or has been moved.
			</p>
			<Link
				href='/'
				className='rounded-lg bg-red-600 px-5 py-2 font-medium text-white shadow-md transition hover:bg-red-700'
			>
				Go back Home
			</Link>
		</div>
	);
}
