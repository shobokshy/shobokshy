import { Heading, Stack } from "@cayro/ui-core";
import { FC } from "react";
import { Item } from "./Item";
import { Content, Wrapper } from "./layout";
import { heading } from "./Music.css";
import { NowListening } from "./NowListening";

interface MusicProps {}

export const Music: FC<MusicProps> = (props) => {
    return (
        <Wrapper>
            <Content>
                <Heading level={2} className={heading}>
                    Music
                </Heading>
                <Stack flexDirection="column" gap="3">
                    <Item title="Lost" description="Single" date="28 Aug 2015" href="https://open.spotify.com/album/5y273rXfkOlEf44JfTqH1v?si=r3ZOgT-LTgClr79sGTqDzw" />
                    <Item title="Unwind" description="EP" date="2 Nov 2014" href="https://open.spotify.com/album/1jt80IGimLomRgVLNYugEg?si=MYiZo6QiR3ayy_1HK7fgiQ" />
                    <NowListening />
                </Stack>
            </Content>
        </Wrapper>
    );
};
