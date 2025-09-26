'use client';

import { ToastContainer } from 'react-toastify';

import ModalProvider from './ModalProvider';

export default function MainProvider({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<ModalProvider />
			<ToastContainer />
			{children}
		</div>
	);
}
