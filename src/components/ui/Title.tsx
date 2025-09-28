import clsx from 'clsx';
import React from 'react';

interface Props {
	children: React.ReactNode;
	className?: string;
	heading?: 'sm' | 'lg' | 'xl' | '2xl';
}
export default function Title({ children, className, heading = 'xl' }: Props) {
	return (
		<div
			className={clsx(
				className,
				heading === '2xl'
					? 'font-archivo-black text-2xl font-extrabold 2xl:text-3xl'
					: heading === 'xl'
						? 'font-archivo text-xl font-extrabold 2xl:text-2xl'
						: heading === 'lg'
							? 'font-montserrat text-lg font-bold'
							: 'font-montserrat text-base font-bold'
			)}
		>
			{children}
		</div>
	);
}
