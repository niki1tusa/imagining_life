import { create } from 'zustand';

import { TPhoto } from '@/types/photo.types';

interface IMyPhotoState {
	uploads: TPhoto[];
	// actions
	setUploads: (list: TPhoto[]) => void;
	addUpload: (card: TPhoto) => void;
	clear: () => void;
}

export const useMyPhotoStore = create<IMyPhotoState>()(
	(set, get) => ({
		uploads: [],
		setUploads: list => set({ uploads: list }),
		addUpload: card => set({ uploads: [card, ...get().uploads] }),
		clear: () => set({ uploads: [] }),
	}),
);
