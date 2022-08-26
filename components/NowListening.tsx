import { Box, Flex, Stack, Text } from "@cayro/ui-core";
import { keyframes } from "@stitches/react";
import { FC, Fragment, useEffect, useState } from "react";
import { NowPlaying } from "../types";
import { Content } from "./Content";
import { Wrapper } from "./Wrapper";

interface NowListeningProps {}

export const NowListening: FC<NowListeningProps> = () => {
	const [hasError, setHasError] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [state, setState] = useState<NowPlaying | null>(null);

	const getNowPlaying = async () => {
		try {
			const response = await fetch(`/api/now-playing`);
			const nowPlaying = (await response.json()) as NowPlaying;
			setState(nowPlaying);
			setIsLoading(false);
		} catch (error) {
			console.error(error);
			setHasError(true);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getNowPlaying();
	}, []);

	if (hasError) return null;

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
					{isLoading ? (
						<Text css={{ fontWeight: "lighter", padding: 0, fontSize: "$2" }}>Looking through library...</Text>
					) : (
						<Fragment>
							{state?.isPlaying ? (
								<Stack gap="small" verticalAlign="center">
									{playing}
									<Text css={{ fontWeight: "lighter", padding: 0, fontSize: "$2" }}>Now listening</Text>
								</Stack>
							) : (
								<Text css={{ fontWeight: "lighter", padding: 0, fontSize: "$2" }}>Offline. Last played</Text>
							)}
						</Fragment>
					)}

					<Fragment>
						<Box
							as="a"
							href={state?.track.externalUrl}
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
							{state?.track.name}
						</Box>
						<Text>{state?.track.artists.map((a) => a.name).join(", ")}</Text>
					</Fragment>
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
