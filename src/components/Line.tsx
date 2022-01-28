import { useEffect, useRef, useState } from "react";
import Textarea from "react-autosize-textarea";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { add, remove } from "../lib/reducers/blocks";
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
				if (blocks.length > 1 && inputRef.current?.value === "")
					dispatch(remove());
				break;
			}
		}
	};

	//FIXME: this doesnt work
	const handleChange = (e: any) => {
		if (!inputRef.current) return;
		inputRef.current.value = inputRef.current.value.replace(/\[(.+?)\]/g, (c) =>
			c.toUpperCase()
		);
	};

	return (
		<div className="flex items-start justify-between">
			<div className="w-[2in]">
				<Dropdown<string> options={characters} />
			</div>
			<Textarea
				ref={inputRef}
				className="flex-1 px-5 py-3 bg-transparent bg-gray-200 rounded resize-none focus:ring-2 ring-sky-500 focus:shadow-lg print:p-0 focus:outline-none focus:bg-white placeholder:text-neutral-400"
				onKeyDown={keyHandler}
				onChange={handleChange}
				placeholder="Line..."
				autoFocus={true}
			/>
		</div>
	);
};

export default Line;
