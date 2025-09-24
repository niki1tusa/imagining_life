import clsx from 'clsx';
import React from 'react';

interface Props {
	children: React.ReactNode;
	className?: string;
	heading?: 'sm' | 'lg' | 'xl';
}
export default function Title({ children, className, heading = 'xl' }: Props) {
	return (
		<div
			className={clsx(
				className,
				heading === 'xl'
					? 'font-archivo text-xl 2xl:text-2xl font-extrabold'
					: heading === 'lg'
						? 'font-montserrat text-lg font-bold'
						: 'font-montserrat text-sm font-bold'
			)}
		>
			{children}
		</div>
	);
}
