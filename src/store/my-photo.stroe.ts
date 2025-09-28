import {create} from 'zustand'

type UploadCard = {
	id: number; 
	title: string;
	previewUrl: string; 
	fileName: string;
	createdAt: number;
};

interface IMyPhotoState {
    uploads: UploadCard[]
    setUploads: (arg: UploadCard)=> void
}

export const useMyPhotoStore = create<IMyPhotoState>(set => ({
uploads: [],
setUploads: (card)=>{}
}))