import { FunnelPlus, RotateCcw, Share } from 'lucide-react';
import React from 'react';

import Field from './Field';

export default function Header() {
	return (
		<div className='flex flex-col gap-3'>
			<Field />
			<div className='flex items-center gap-3 text-sm'>
				<button className='flex itens-center gap-2 rounded bg-white px-2 py-1 shadow shadow-neutral-400 transition-colors hover:bg-neutral-400/20'>
					<FunnelPlus size={20} /> Filters
				</button>
				<button className='flex gap-2 rounded bg-white px-2 py-1 shadow shadow-neutral-400 transition-colors hover:bg-neutral-400/20'>
					<RotateCcw size={20}/>
				</button>
				<button className='flex items-center gap-2 rounded bg-white px-2 py-1 shadow shadow-neutral-400 transition-colors hover:bg-neutral-400/20'>
					<Share size={20}/> Share
				</button>
			</div>
		</div>
	);
}
