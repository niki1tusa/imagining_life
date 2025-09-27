interface Props {
	children: React.ReactNode;
    onClick?: ()=> void
}
export default function Button({ children, onClick }: Props) {
	return (
		<button onClick={onClick} className='bg-primary hover:bg-primary/50 w-full rounded py-1 text-white transition-all '>
			{children}
		</button>
	);
}
