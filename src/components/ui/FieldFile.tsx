import { Paperclip } from 'lucide-react';
import { ChangeEvent } from 'react';

interface Props {
	onChange: (file: File | null) => void;
	error?: string;
}
export default function FieldFile({ onChange, error }: Props) {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0] ?? null;
		onChange(file);
	};
	return (
		<>
			<label htmlFor='file'>Choice a file:</label>
			<span className='bg-light-white relative flex max-w-[400px] flex-col gap-1 2xl:max-w-[600px]'>
				<input
					id='file'
					type='file'
					accept='image/*'
					onChange={handleChange}
					className='bg-light-white w-full rounded px-3 py-2 shadow ring-1 shadow-neutral-400 ring-transparent focus:shadow-red-300 focus:ring-red-300'
				/>
				<Paperclip
					size={22}
					className='pointer-events-none absolute top-[50%] right-2 -translate-y-[50%] transform'
				/>
			</span>
			{error && <span className='text-sm text-red-500'>{error}</span>}
		</>
	);
}
