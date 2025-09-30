export default function FieldFile() {
	return (
		<span className='relative max-w-[400px] 2xl:max-w-[600px]'>
			<input
            
				type='file'
				accept='image/*'
				className='bg-light-white w-full rounded px-3 py-2 shadow ring-1 shadow-neutral-400 ring-transparent focus:shadow-red-300 focus:ring-red-300'
			/>
		</span>
	);
}
