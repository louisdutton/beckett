import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

const CharacterName = ({ children }: Props) => {
	return <h3 className="uppercase after:content-[':']">{children}</h3>;
};

export default CharacterName;
