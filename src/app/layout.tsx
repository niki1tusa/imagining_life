import type { Metadata } from 'next';
import { Archivo, Archivo_Black, Montserrat } from 'next/font/google';

import { SITE_NAME } from '@/constants/seo.constants';

import MainProvider from '@/provider/Provider';

import './globals.css';

const montserratSans = Montserrat({
	variable: '--font-montserrat-sans',
	subsets: ['latin'],
});

const archivoSans = Archivo({
	variable: '--font-archivo-sans',
	subsets: ['latin'],
});
const archivoBlackSans = Archivo_Black({
	weight: ['400'],
	variable: '--font-archivo-black-sans',
});

export const metadata: Metadata = {
	title: SITE_NAME,
	icons: {
		icon: '/favicon/favicon.ico',
		shortcut: '/favicon/favicon.ico',
	},
	description: 'A photo sharing platform where users can discover, upload, and interact with beautiful images from around the world.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${montserratSans.variable} ${archivoSans.variable} ${archivoBlackSans.variable} antialiased`}
			>
				<MainProvider>{children}</MainProvider>
			</body>
		</html>
	);
}
