import { Box, Flex, Stack, Text } from "@cayro/ui-core";
import { keyframes } from "@stitches/react";
import { FC } from "react";
import { NowPlaying } from "../api/spotify";
import { Content } from "./Content";
import { Wrapper } from "./Wrapper";

interface NowListeningProps {
	state?: NowPlaying;
}

export const NowListening: FC<NowListeningProps> = ({ state }) => {
	if (!state) return null;

	const playing = (
		<Flex css={{ gap: 2, height: 20, justifyContent: "center", alignItems: "center" }}>
			<Box css={{ backgroundColor: "$text", width: 2, animation: `${play} 1.75s infinite ease` }} />
			<Box css={{ backgroundColor: "$text", width: 2, animation: `${play} 0.94s infinite ease` }} />
			<Box css={{ backgroundColor: "$text", width: 2, animation: `${play} 0.7s infinite ease` }} />
			<Box css={{ backgroundColor: "$text", width: 2, animation: `${play} 1.8s infinite ease` }} />
		</Flex>
	);

	return (
		<Wrapper>
			<Content>
				<Stack gap="small" direction="column" css={{ width: "fit-content" }}>
					{state.isPlaying ? (
						<Stack gap="small" verticalAlign="center">
							{playing}
							<Text css={{ fontWeight: "lighter", padding: 0, fontSize: "$2" }}>Now listening</Text>
						</Stack>
					) : (
						<Text css={{ fontWeight: "lighter", padding: 0, fontSize: "$2" }}>Offline. Last played</Text>
					)}
					<Box
						as="a"
						href={state.track.externalUrl}
						target="_blank"
						css={{
							padding: 0,
							fontSize: "$3",
							fontWeight: "bold",
							textDecoration: "none",
							color: "$text",
							transition: "color 0.2s ease-in-out",
							"&:hover": {
								color: "#EEBA64",
							},
							"&:focus-visible": {
								outline: "none",
								border: "2px solid #EEBA64",
							},
						}}>
						{state.track.name}
					</Box>
					<Text>{state.track.artists.map((a) => a.name).join(", ")}</Text>
				</Stack>
			</Content>
		</Wrapper>
	);
};

const play = keyframes({
	"0%": { height: 4 },
	"50%": { height: 14 },
	"100%": { height: 5 },
});
