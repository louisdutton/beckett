import { useEffect, useRef, useState } from "react";
import Textarea from "react-autosize-textarea";
import { useBlocks } from "./BlockContext";

const people = ["LUIZ", "CASILDA", "DUKE"];

interface Props {}

const Line = () => {
	const { blocks, addBlock, removeBlock } = useBlocks();

	const keyHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		switch (e.code) {
			case "Enter": {
				addBlock();
				e.preventDefault();
				break;
			}
			case "Backspace": {
				if (e.metaKey && blocks.length > 1) removeBlock();
				break;
			}
		}
	};

	const handleChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
		const text = e.currentTarget.value;
		e.currentTarget.value.replace(/\[(.+?)\]/g, (c) => c.toUpperCase());
	};

	return (
		<div className="flex items-start justify-between gap-20">
			<select className="inline-block px-2 bg-transparent rounded appearance-none cursor-pointer ">
				{people.map((person, id) => {
					// const name = person.toUpperCase();
					return <option key={id} value={person} label={person + ":"} />;
				})}
			</select>
			<Textarea
				className="flex-1 bg-transparent border-b-2 resize-none focus:outline-none focus:border-black print:border-none"
				onKeyDown={keyHandler}
				onChange={handleChange}
				placeholder="Line..."
				autoFocus={true}
			/>
		</div>
	);
};

export default Line;
