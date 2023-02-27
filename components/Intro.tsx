import { Heading, Text } from "@cayro/ui-core";
import { HomeIcon, PaintbrushIcon, RocketIcon, SmileIcon } from "@cayro/ui-icons";
import localFont from "@next/font/local";
import { FC } from "react";
import { heading, subHeading } from "./Intro.css";
import { Content, Wrapper } from "./layout";

const heroFont = localFont({
    src: "../public/fonts/DegularDisplayBold.otf",
});

interface IntroProps {}

export const Intro: FC<IntroProps> = (props) => {
    return (
        <Wrapper>
            <Content>
                <Text color="text" className={subHeading}>
                    Hey I&apos;m
                </Text>
                <Heading className={[heading, heroFont.className]}>Ahmed,</Heading>
                <Text color="text">
                    I&apos;m a full-stack developer living in Brisbane, Australia <HomeIcon />. I&apos;m interested in user & developer experience and building polished software{" "}
                    <PaintbrushIcon />. Making people feel empowered and productive <RocketIcon /> yet joyful <SmileIcon /> is what energises and wakes me up everyday.
                </Text>
            </Content>
        </Wrapper>
    );
};
