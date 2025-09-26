import { NextResponse } from 'next/server';

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

