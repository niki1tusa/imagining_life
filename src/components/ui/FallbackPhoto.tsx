import React from 'react';

export default function FallbackPhoto({ text }: { text: string }) {
	return (
		<div className='flex items-center justify-center rounded border border-dashed p-2 text-neutral-500 mx-4 my-1'>
			{text}
		</div>
	);
}
