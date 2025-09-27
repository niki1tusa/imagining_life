import { SearchIcon } from '../animate-ui/icons/search';

interface Props {
	query: string;
	setQuery: (e: string) => void;
	type?: 'text' | 'file';
	placeholder?: string;
	isSearch?: boolean;
}
export default function Field({
	query,
	setQuery,
	type = 'text',
	placeholder,
	isSearch = false,
}: Props) {
	return (
		<span className='relative max-w-[400px] 2xl:max-w-[600px]'>
			<input
				value={query}
				onChange={e => setQuery(e.target.value)}
				type={type}
				placeholder={placeholder}
				className='w-full rounded bg-white px-3 py-2 shadow ring-1 shadow-neutral-400 ring-transparent focus:shadow-red-300 focus:ring-red-300'
			/>
			{isSearch && (
				<SearchIcon
					size={22}
					className='pointer-events-none absolute top-[50%] right-2 -translate-y-[50%] transform'
				/>
			)}
		</span>
	);
}
