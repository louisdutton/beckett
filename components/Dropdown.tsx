import { useRef, useState } from "react";

interface Props<T> {
	options: T[];
}

const Dropdown = <T,>({ options }: Props<T>) => {
	const [current, setCurrent] = useState(options[0]);
	const buttonRef = useRef<HTMLButtonElement>(null);

	const handleSelect = (
		e: React.MouseEvent<HTMLLIElement, MouseEvent>,
		value: T
	) => {
		setCurrent(value);
		buttonRef.current?.blur();
	};

	return (
		<div className="relative">
			<button
				tabIndex={-1}
				ref={buttonRef}
				id="dropdownButton"
				className="w-full px-5 py-3 text-left uppercase bg-transparent rounded-l appearance-none cursor-pointer focus:outline-none print:p-0 group hover:bg-primary-500 hover:text-white">
				{current}:
				<div className="absolute top-0 left-0 right-0 z-10 hidden overflow-hidden bg-white rounded shadow-md group-focus:block ring-2 ring-primary-500">
					<ul aria-labelledby="dropdownButton">
						{options.map((value, i) => (
							<li
								onClick={(e) => handleSelect(e, value)}
								key={i}
								className="px-5 py-3 text-black cursor-pointer apperance-none hover:bg-primary-500 hover:text-white">
								{value}
							</li>
						))}
					</ul>
				</div>
			</button>
		</div>
	);
};

export default Dropdown;
