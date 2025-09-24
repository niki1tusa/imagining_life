import {create} from 'zustand'

type TModal = 'uploadPhoto' | null
interface IModalState {
	type: TModal;
	payload?: any;
	open: (type: TModal, payload?: any) => void;		
	close: () => void;
}

export const useModalStore = create<IModalState>(set => ({
	type: null,
	payload: undefined,
	open: (type, payload) => set({ type, payload }),
	close: () => set({ type: null, payload: undefined }),
}));