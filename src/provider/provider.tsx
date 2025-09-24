'use client';

import ModalProvider from './modal.provider';

export default function MainProvider({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<ModalProvider />
			{children}
		</div>
	);
}
