import { ReactNode, useState } from "react";
import { CaretDown } from "phosphor-react";

const people = ["LUIZ", "CASILDA", "DUKE"];

const classNames = (...classes: string[]) => {
	return classes.filter(Boolean).join(" ");
};

interface Props {}

const Character = () => {
	const [selected, setSelected] = useState(people[0]);
	const [open, setOpen] = useState(false);

	return (
		<select className="inline-block px-2 bg-transparent rounded appearance-none cursor-pointer ">
			{people.map((person, id) => {
				const name = person.toUpperCase();
				return <option key={id} value={person} label={person + ":"} />;
			})}
		</select>
	);
};

export default Character;
