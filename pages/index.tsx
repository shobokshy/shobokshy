import { Box, Stack } from "@cayro/ui-core";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { Header, Music, Page } from "../components";
import { Intro } from "../components/Intro";
import { Projects } from "../components/Projects";

const Background = dynamic(() => import("../components/background/Wrapper"), { ssr: false });

interface HomeProps {}

const Home: NextPage<HomeProps> = () => {
	return (
		<Page>
			<Header />
			<Stack as="main" direction="column" css={{ gap: "$4", paddingTop: "$5", marginBottom: "$5" }}>
				<Intro />
				<Projects />
				<Music />
			</Stack>
			<Box
				css={{
					position: "absolute",
					height: "100%",
					width: "100%",
				}}>
				<Background />
			</Box>
		</Page>
	);
};

export default Home;
