import type { NextPage } from "next";
import Head from "next/head";
import Line from "../components/Line";
import { useAppSelector } from "../lib/hooks";
import TitlePage from "../components/TitlePage";
import BlockButtons from "../components/BlockButtons";
import Toolbar from "../components/Toolbar";
import StatusBar from "../components/StatusBar";

const Home: NextPage = () => {
	const { blocks, metadata } = useAppSelector((state) => state);

	return (
		<>
			<Head>
				<title>{metadata.title} - Beckett</title>
				<meta
					name="description"
					content="A minimal editor for creating and formatting stageplays."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Toolbar />

			<main className="content-area">
				<div className="font-mono text-lg font-light flex-1 print:text-[12pt] flex justify-center print:block">
					<TitlePage metadata={metadata} />

					<div className="w-full p-8 print:p-[1in] print:leading-4  max-w-3xl print:max-w-none">
						<ul className="mb-8">
							{blocks.map((block, i) => (
								<li key={i} className="mb-4 print:mb-4">
									<Line />
								</li>
							))}
						</ul>
						<BlockButtons />
					</div>
				</div>
			</main>

			<StatusBar />
		</>
	);
};

export default Home;
