import { useEffect, useRef, useState } from "react";
import Textarea from "react-autosize-textarea";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { add, remove } from "../lib/reducers/blocks";

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
		<div className="flex items-start justify-between gap-20">
			<button className="inline-block px-2 bg-transparent rounded appearance-none cursor-pointer ">
				<ul>
					{characters.map((person, id) => (
						<li key={id} value={person} className="apperance-none">
							{person}:
						</li>
					))}
				</ul>
			</button>
			<Textarea
				ref={inputRef}
				className="flex-1 py-1 bg-transparent border-b-2 resize-none print:p-0 focus:outline-none focus:border-black print:border-none"
				onKeyDown={keyHandler}
				onChange={handleChange}
				placeholder="Line..."
				autoFocus={true}
			/>
		</div>
	);
};

export default Line;
