import { Heading, Stack } from "@cayro/ui-core";
import { FC } from "react";
import { Content } from "./Content";
import { Item } from "./Item";
import { NowListening } from "./NowListening";
import { Wrapper } from "./Wrapper";

interface MusicProps {}

export const Music: FC<MusicProps> = (props) => {
	return (
		<Wrapper>
			<Content>
				<Heading level={2} css={{ fontWeight: "lighter", fontSize: "$3" }}>
					Music
				</Heading>
				<Stack
					direction="column"
					css={{
						gap: "$3",
					}}>
					<Item title="Lost" description="Single" date={new Date(2015, 7, 28)} href="https://open.spotify.com/album/5y273rXfkOlEf44JfTqH1v?si=r3ZOgT-LTgClr79sGTqDzw" />
					<Item title="Unwind" description="EP" date={new Date(2014, 10, 2)} href="https://open.spotify.com/album/1jt80IGimLomRgVLNYugEg?si=MYiZo6QiR3ayy_1HK7fgiQ" />
					<NowListening />
				</Stack>
			</Content>
		</Wrapper>
	);
};
