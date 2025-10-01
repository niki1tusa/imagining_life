interface Props {
	children: React.ReactNode;
	onClick?: () => void;
	type?: 'button' | 'submit';
	disabled?: boolean
}
export default function Button({ children, onClick, type = 'button', disabled = false }: Props) {
	return (
		<button
			type={type}
			onClick={onClick}
			className='bg-primary hover:bg-primary/50 w-full rounded py-1 text-white transition-all max-w-[400px] 2xl:max-w-[600px]'
			disabled={disabled}
		>
			{children}
		</button>
	);
}
