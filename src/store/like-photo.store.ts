import { create } from 'zustand';
import type { TPhoto } from '@/types/global.types';

interface ILikedPhoto {
  likedPhotos: TPhoto[];
  like: (photo: TPhoto) => void;
  unlike: (id: string) => void;
  toggleLike: (photo: TPhoto) => void;
  isLiked: (id: string) => boolean;
}

export const useLikePhotoStore = create<ILikedPhoto>((set, get) => ({
  likedPhotos: [],

  like: (photo) =>
    set((state) =>
      state.likedPhotos.some((p) => p.id === photo.id)
        ? state
        : { likedPhotos: [...state.likedPhotos, { ...photo, liked_by_user: true }] }
    ),

  unlike: (id) =>
    set((state) => ({
      likedPhotos: state.likedPhotos.filter((p) => p.id !== id),
    })),

  toggleLike: (photo) => {
    if (get().isLiked(photo.id)) {
      get().unlike(photo.id);
    } else {
      get().like(photo);
    }
  },

  isLiked: (id) => get().likedPhotos.some((p) => p.id === id),
}));
