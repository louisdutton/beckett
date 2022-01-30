interface Props {
	children: React.ReactNode;
}

const IconButton = ({ children }: Props) => {
	return (
		<button className="flex items-center justify-center p-2 transition-colors rounded-lg text-primary-300 hover:bg-primary-400 hover:text-primary-200">
			{children}
		</button>
	);
};

export default IconButton;
