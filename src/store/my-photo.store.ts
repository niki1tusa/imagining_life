import { create } from 'zustand';

import { TPhoto } from '@/types/photo.types';

interface IMyPhotoState {
	uploads: TPhoto[];
	// действия
	setUploads: (list: TPhoto[]) => void;
	addUpload: (card: TPhoto) => void;
	// removeUpload: (id: string) => void;
	clear: () => void;
}

export const useMyPhotoStore = create<IMyPhotoState>()(
	(set, get) => ({
		uploads: [],
		setUploads: list => set({ uploads: list }),
		addUpload: card => set({ uploads: [card, ...get().uploads] }),
		// removeUpload: id => set({ uploads: get().uploads.filter(u => u.id !== id) }),
		clear: () => set({ uploads: [] }),
	}),
);
