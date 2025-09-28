'use client';

import { ToastContainer } from 'react-toastify';

import ModalProvider from './ModalProvider';
import { ThemeProvider } from './ThemeProvider';

export default function MainProvider({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
				<ModalProvider />
				<ToastContainer />
				{children}
			</ThemeProvider>
		</div>
	);
}
