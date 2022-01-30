import { FormEvent, useEffect, useRef, useState } from "react";
import Textarea from "react-autosize-textarea";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { add, remove } from "../lib/reducers/blocks";
import metadata from "../lib/reducers/metadata";
import Dropdown from "./Dropdown";

const mod = (a: number, b: number) => {
	return ((a % b) + b) % b;
};

const Line = () => {
	const {
		blocks,
		metadata: { characters },
	} = useAppSelector((state) => state);
	const dispatch = useAppDispatch();
	const inputRef = useRef<HTMLTextAreaElement>(null);
	const [input, setInput] = useState("");
	const [character, setCharacter] = useState(0);

	const keyHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		switch (e.code) {
			case "Enter": {
				e.preventDefault();
				if (inputRef.current?.value !== "") {
					dispatch(add());
				}
				break;
			}
			case "Backspace": {
				if (blocks.length > 1 && e.metaKey) dispatch(remove());
				break;
			}
			case "ArrowUp": {
				if (e.altKey) {
					setCharacter((c) => mod(c - 1, characters.length));
					e.preventDefault();
				}
				break;
			}
			case "ArrowDown": {
				if (e.altKey) {
					setCharacter((c) => mod(c + 1, characters.length));
					e.preventDefault();
				}
				break;
			}
		}
	};

	const handleChange = (e: FormEvent<HTMLTextAreaElement>) => {};

	return (
		<div className="relative">
			<fieldset className="print:hidden transition-all border-2 rounded-lg group border-slate-200 bg-slate-100 character-field  focus-within:scale-[103%] focus-within:shadow-lg ease-in-out focus-within:bg-white focus-within:border-blue-400 text-slate-400 focus-within:text-blue-400">
				<legend className="px-2 ml-4 font-bold uppercase border-black">
					{characters[character].name}
				</legend>
				<Textarea
					ref={inputRef}
					className="flex-1 w-full px-5 pb-1 text-black bg-transparent resize-none focus:outline-none print:p-0 placeholder:text-slate-400"
					onKeyDown={keyHandler}
					onChange={handleChange}
					placeholder="..."
					autoFocus={true}
				/>
			</fieldset>
			{inputRef.current?.value && (
				<div className="hidden print:flex">
					<p className="uppercase w-[2in]">{characters[character].name}:</p>
					<p>{inputRef.current?.value}</p>
				</div>
			)}
		</div>
	);
};

export default Line;
