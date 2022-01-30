interface Props {
	children: React.ReactNode;
}

const IconButton = ({ children }: Props) => {
	return (
		<button className="flex items-center justify-center p-2 transition-colors rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600">
			{children}
		</button>
	);
};

export default IconButton;
