'use client';

import { useEffect, useState } from 'react';
import HomePageClient from './HomePageClient';
import { Loader2 } from 'lucide-react';

export type TPhoto = {
  id: string;
  author: string;
  width: number;
  height: string;
  url: string;
  download_url: string;
};

export default function HomeClientWrapper() {
  const [photos, setPhotos] = useState<TPhoto[]>([]);
  const [randomPhoto, setRandomPhoto] = useState<TPhoto | null>(null);

  useEffect(() => {
    fetch('https://picsum.photos/v2/list?page=2&limit=30')
      .then(res => res.json())
      .then((data: TPhoto[]) => {
        setPhotos(data);
        setRandomPhoto(data[Math.floor(Math.random() * data.length)]);
      })
      .catch(err => {
        console.error('Ошибка загрузки:', err);
      });
  }, []);

  if (!photos.length || !randomPhoto) {
    return <div className="flex items-center justify-center h-full"><Loader2 size={60} className='animate-spin'/></div>;
  }

  return <HomePageClient photos={photos} randomPhoto={randomPhoto} />;
}
