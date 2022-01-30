import { useEffect, useRef, useState } from "react";
import Textarea from "react-autosize-textarea";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { add, remove } from "../lib/reducers/blocks";
import metadata from "../lib/reducers/metadata";
import Dropdown from "./Dropdown";

const Line = () => {
	const {
		blocks,
		metadata: { characters },
	} = useAppSelector((state) => state);
	const dispatch = useAppDispatch();
	const inputRef = useRef<HTMLTextAreaElement>(null);

	const keyHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		switch (e.code) {
			case "Enter": {
				dispatch(add());
				e.preventDefault();
				break;
			}
			case "Backspace": {
				if (blocks.length > 1 && e.metaKey) dispatch(remove());
				break;
			}
			// TODO: implement charcter switching key bindings
			case "ArrowUp": {
				if (e.altKey) console.log("");
				break;
			}
			case "ArrowDown": {
				if (e.altKey) console.log("");
				break;
			}
		}
	};

	//FIXME: this doesnt work
	// const handleChange = (e: any) => {
	// 	if (!inputRef.current) return;
	// 	inputRef.current.value = inputRef.current.value.replace(/\[(.+?)\]/g, (c) =>
	// 		c.toUpperCase()
	// 	);
	// };

	return (
		<div className="relative">
			{/* <div className="w-[1.5in] print:w-[2in] peer-focus:bg-black">
				<Dropdown<string> options={characters} />
			</div> */}
			<fieldset className="transition-all border-2 rounded-lg group border-slate-200 bg-slate-100 character-field focus-within:border-primary-500 focus-within:scale-[103%] ease-in-out focus-within:bg-white">
				<legend className="px-2 ml-4 font-bold uppercase text-slate-400 group-focus-within:text-primary-500">
					{characters[0]}
				</legend>
				<Textarea
					ref={inputRef}
					className="flex-1 w-full px-5 pb-1 bg-transparent resize-none focus:outline-none print:p-0 placeholder:text-slate-400"
					onKeyDown={keyHandler}
					// onChange={handleChange}
					placeholder="Line..."
					autoFocus={true}
				/>
			</fieldset>
		</div>
	);
};

export default Line;
