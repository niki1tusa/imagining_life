import { NextResponse } from 'next/server';

import type { TPhoto } from '@/types/photo.types';

export const revalidate = 300;
const ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;

export async function GET() {
	try {
		const res = await fetch(`https://api.unsplash.com/photos?per_page=30&client_id=${ACCESS_KEY}`, {
			cache: 'no-store',
		});

		if (!res.ok) {
			console.error('Unsplash API error:', res.status, res.statusText);
			return NextResponse.json([], { status: res.status });
		}

		const data = await res.json();

		return NextResponse.json(data);
	} catch (err) {
		console.error('Proxy error:', err);
		return NextResponse.json([], { status: 500 });
	}
}
// unsplash is no possibility post query, because mock :(
export async function POST(req: Request) {
	const formData = await req.formData();
	const description = formData.get('description') as string;


	const photo: TPhoto = {
		id: crypto.randomUUID(),
		created_at: new Date().toISOString(),
		updated_at: new Date().toISOString(),
		width: 600,
		height: 400,
		color: '#cccccc',
		blur_hash: '',
		likes: 0,
		liked_by_user: false,
		description: description || null,
		user: {
			id: 'local_user',
			username: 'local_user',
			name: 'Local Upload',
			portfolio_url: null,
			bio: null,
			location: null,
			total_likes: 0,
			total_photos: 0,
			total_collections: 0,
			instagram_username: null,
			twitter_username: null,
			profile_image: { small: '', medium: '', large: '' },
			links: { self: '#', html: '#', photos: '#', likes: '#', portfolio: '#' },
		},
		current_user_collections: [],
		urls: { raw: '', full: '', regular: '', small: '', thumb: '' },
		links: { self: '#', html: '#', download: '', download_location: '' },
	};

	return NextResponse.json(photo);
}
