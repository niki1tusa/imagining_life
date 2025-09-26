'use client';

import Image from 'next/image';
import { TPhoto } from './HomeClientWrapper';

interface Props {
  photos: TPhoto[];
  randomPhoto: TPhoto;
}

export default function HomePageClient({ photos, randomPhoto }: Props) {
  return (
    <div className="grid grid-cols-[70%_30%] gap-4">
      <div className="flex flex-col gap-2">
        {/* Лента */}
        <ul className="flex flex-col items-center gap-4 overflow-y-auto rounded p-2 2xl:h-[1200px]">
          {photos.map(photo => (
            <div key={photo.id} className="flex flex-col items-center">
              <Image
                alt={photo.author}
                width={300}
                height={200}
                src={photo.download_url}
                unoptimized
              />
              <span>{photo.author}</span>
            </div>
          ))}
        </ul>
      </div>
      <aside className="rounded border bg-white p-2 shadow shadow-neutral-400">
        <h2 className="text-lg font-bold text-primary">Photo of the day</h2>
        <div className="flex flex-col items-center">
          <Image
            alt={randomPhoto.author}
            width={300}
            height={200}
            src={randomPhoto.download_url}
            unoptimized
          />
          <span>{randomPhoto.author}</span>
        </div>
      </aside>
    </div>
  );
}

