import { Heading, Text, Box } from "@cayro/ui-core";
import { FC } from "react";
import { heading, subHeading } from "./Intro.css";
import { Content, Wrapper } from "./layout";
import { heroFontStyle } from "./styles/fonts.css";
import { PaintbrushIcon, HomeIcon, RocketIcon, SmileIcon } from "@cayro/ui-icons";

interface IntroProps {}

export const Intro: FC<IntroProps> = (props) => {
	return (
		<Wrapper>
			<Content>
				<Text className={subHeading}>Hey I'm</Text>
				{/* <svg viewBox="0 0 100 60">
					<defs>
						<mask id="mask" x="0" y="0" width="100" height="50">
							<rect x="0" y="0" width="100" height="40" fill="#fff" />
							<text textAnchor="middle" x="50" y="18" dy="1">Ahmed</text>
						</mask>
					</defs>
					<rect x="5" y="5" width="90" height="30" mask="url(#mask)" fillOpacity="0.5" />
				</svg> */}
				<Heading className={[heading, heroFontStyle]}>Ahmed,</Heading>
				<Text>I'm a full-stack developer living in Brisbane, Australia <HomeIcon />. I'm interested in user & developer experience and building polished software <PaintbrushIcon />. Making people feel empowered and productive <RocketIcon /> yet joyful <SmileIcon /> is what energises and wakes me up everyday.</Text>
			</Content>
		</Wrapper>
	);
};
