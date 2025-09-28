export type TPhoto = {
	id: string;
	created_at: string;
	updated_at: string;
	width: number;
	height: number;
	color: string;
	blur_hash: string;
	likes: number;
	liked_by_user: boolean;
	description: string | null;

	user: {
		id: string;
		username: string;
		name: string;
		portfolio_url: string | null;
		bio: string | null;
		location: string | null;
		total_likes: number;
		total_photos: number;
		total_collections: number;
		instagram_username: string | null;
		twitter_username: string | null;
		profile_image: {
			small: string;
			medium: string;
			large: string;
		};
		links: {
			self: string;
			html: string;
			photos: string;
			likes: string;
			portfolio: string;
		};
	};

	current_user_collections: {
		id: number;
		title: string;
		published_at: string;
		last_collected_at: string;
		updated_at: string;
		cover_photo: string | null;
		user: string | null;
	}[];

	urls: {
		raw: string;
		full: string;
		regular: string;
		small: string;
		thumb: string;
	};

	links: {
		self: string;
		html: string;
		download: string;
		download_location: string;
	};
};
