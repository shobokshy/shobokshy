import { Box, Stack, Text } from "@cayro/ui-core";
import { FC, Fragment, useEffect, useState } from "react";
import { NowPlaying } from "../types";
import { musicBar, musicBars, text, track, playKeyFrames } from "./NowListening.css";

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
		<Box className={musicBars}>
			<Box className={musicBar} style={{ animation: `${playKeyFrames} 1.75s infinite ease` }} />
			<Box className={musicBar} style={{ animation: `${playKeyFrames} 0.94s infinite ease` }} />
			<Box className={musicBar} style={{ animation: `${playKeyFrames} 0.7s infinite ease` }} />
			<Box className={musicBar} style={{ animation: `${playKeyFrames} 1.8s infinite ease` }} />
		</Box>
	);

	return (
		<Stack gap="1" flexDirection="column" css={{ width: "fit-content" }}>
			{isLoading ? (
				<Text className={text}>Looking through library...</Text>
			) : (
				<Fragment>
					{state?.isPlaying ? (
						<Stack gap="1" alignItems="center">
							{playing}
							<Text className={text}>Now listening</Text>
						</Stack>
					) : (
						<Text className={text}>Offline. Last played</Text>
					)}
				</Fragment>
			)}

			<Fragment>
				<Box
					as="a"
					href={state?.track.externalUrl}
					target="_blank"
					className={track}
				>
					{state?.track.name}
				</Box>
				<Text>{state?.track.artists.map((a) => a.name).join(", ")}</Text>
			</Fragment>
		</Stack>
	);
};