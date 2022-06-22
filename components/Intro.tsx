import { Heading, Text } from "@cayro/ui-core";
import { FC } from "react";
import { Content } from "./Content";
import { Wrapper } from "./Wrapper";

interface IntroProps {}

export const Intro: FC<IntroProps> = (props) => {
	return (
		<Wrapper>
			<Content>
				<Heading css={{ fontSize: "$3" }}>Ahmed Elshobokshi</Heading>
				<Text>I am a full-stack developer interested in user & developer experience and building polished software. Making people feel empowered and productive yet joyful is what energises and wakes me up everyday.</Text>
			</Content>
		</Wrapper>
	);
};
