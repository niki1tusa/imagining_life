// src/lib/photo-factory.ts
import type { TPhoto } from '@/types/photo.types';

function getImageDimensions(objectUrl: string) {
  return new Promise<{ width: number; height: number }>((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve({ width: img.naturalWidth, height: img.naturalHeight });
    img.onerror = reject;
    img.src = objectUrl;
  });
}

export async function createLocalTPhoto(file: File, description: string): Promise<TPhoto> {
  const id = crypto.randomUUID();
  const created_at = new Date().toISOString();
  const previewUrl = URL.createObjectURL(file);
  const { width, height } = await getImageDimensions(previewUrl);

  const baseUrls = {
    raw: previewUrl,
    full: previewUrl,
    regular: previewUrl,
    small: previewUrl,
    thumb: previewUrl,
  };

  return {
    id,
    created_at,
    updated_at: created_at,
    width,
    height,
    color: '#cccccc',
    blur_hash: '',            // нет blurhash — оставляем пустым
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
      profile_image: {
        small: '',
        medium: '',
        large: '',
      },
      links: {
        self: '#',
        html: '#',
        photos: '#',
        likes: '#',
        portfolio: '#',
      },
    },

    current_user_collections: [],

    urls: baseUrls,

    links: {
      self: '#',
      html: '#',
      download: previewUrl,
      download_location: previewUrl,
    },
  };
}
