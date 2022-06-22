import { Box, Stack } from "@cayro/ui-core";
import type { GetServerSidePropsContext, NextPage } from "next";
import dynamic from "next/dynamic";
import { getNowPlaying, NowPlaying } from "../api/spotify";
import { Header, Music, Page } from "../components";
import { Intro } from "../components/Intro";
import { NowListening } from "../components/NowListening";
import { Projects } from "../components/Projects";

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
	const nowPlaying = await getNowPlaying();

	res.setHeader("Cache-Control", "public, s-maxage=10, stale-while-revalidate=59");
	return {
		props: {
			nowPlaying,
		},
	};
}

const Background = dynamic(() => import("../components/background/Wrapper"), { ssr: false });

interface HomeProps {
	nowPlaying: NowPlaying;
}

const Home: NextPage<HomeProps> = ({ nowPlaying }) => {
	return (
		<Page>
			<Header />
			<Stack as="main" direction="column" css={{ gap: "$4", paddingTop: "$5", marginBottom: "$5" }}>
				<Intro />
				<Projects />
				<NowListening state={nowPlaying} />
				<Music nowPlaying={nowPlaying} />
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
