import { MetaData } from "../lib/reducers/metadata";

interface Props {
	metadata: MetaData;
}

const TitlePage = ({ metadata: { title, author, email, phone } }: Props) => {
	return (
		<div className="items-center justify-center hidden w-full h-screen print:flex break-after-page">
			<div className="text-center ">
				<h1 className="underline uppercase">{title}</h1>
				<p>
					by
					<br />
					{author}
				</p>
			</div>
		</div>
	);
};

export default TitlePage;
