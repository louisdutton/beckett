import { useState } from "react";
import Character from "./Character";
import Textarea from "react-autosize-textarea";

interface Props {}

const Line = () => {
	const keyHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.code === "Enter") {
			e.preventDefault();
		}
	};

	return (
		<div className="flex gap-20">
			<Character />
			<Textarea
				className="flex-1 px-4 py-3 bg-transparent border-b-2 resize-none focus:outline-none focus:border-black"
				onKeyDown={keyHandler}
			/>
		</div>
	);
};

export default Line;
