import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Line from "../components/Line";
import { useAppSelector } from "../lib/hooks";
import TitlePage from "../components/TitlePage";
import BlockButtons from "../components/BlockButtons";
import Toolbar from "../components/Toolbar";

const Home: NextPage = () => {
	const { blocks, metadata } = useAppSelector((state) => state);

	return (
		<>
			<Head>
				<title>Beckett</title>
				<meta
					name="description"
					content="A minimal editor for creating and formatting stageplays."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="flex flex-col w-screen min-h-screen sm:flex-row">
				<Toolbar />
				<div className="font-mono text-xl font-light flex-1 bg-gray-50 print:text-[12pt]">
					<TitlePage metadata={metadata} />
					<ul className="w-full p-8 sm:p-16 print:p-[1in] print:leading-4 print:block overflow-y-scroll">
						{blocks.map((block, i) => (
							<li key={i} className="mb-4 print:m-0">
								<Line />
							</li>
						))}
						<BlockButtons />
					</ul>
				</div>
			</main>

			<footer></footer>
		</>
	);
};

export default Home;
