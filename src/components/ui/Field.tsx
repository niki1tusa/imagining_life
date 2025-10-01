import { motion } from 'framer-motion';
import { CircleChevronRight } from 'lucide-react';

import { SearchIcon } from '../animate-ui/icons/search';

interface Props {
	query: string;
	setQuery: (e: string) => void;
	type?: 'text' | 'mail';
	placeholder?: string;
	isSearch?: boolean;
	error?: string;
}
export default function Field({
	query,
	setQuery,
	type = 'text',
	placeholder,
	isSearch = false,
	error,
}: Props) {
	return (
		<span className='relative flex max-w-[400px] flex-col gap-1 2xl:max-w-[600px]'>
			<input
				value={query}
				onChange={e => setQuery(e.target.value)}
				type={type}
				placeholder={placeholder}
				className='bg-light-white w-full rounded px-3 py-2 shadow ring-1 shadow-neutral-400 ring-transparent focus:shadow-red-300 focus:ring-red-300'
			/>
			{isSearch && (
				<SearchIcon
					size={22}
					className='pointer-events-none absolute top-[50%] right-2 -translate-y-[50%] transform'
				/>
			)}
			{type === 'mail' && (
				<motion.div
					initial={{ x: 0 }}
					whileHover={{ x: 5 }}
					transition={{ type: 'spring', stiffness: 300 }}
					className='absolute top-[50%] right-2 -translate-y-[50%] transform'
				>
					<CircleChevronRight size={22} />
				</motion.div>
			)}
			{error && <span className='text-sm text-red-500'>{error}</span>}
		</span>
	);
}
