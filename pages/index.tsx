import { Box, Stack } from "@cayro/ui-core";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useRef } from "react";
import { Header, Music, Page } from "../components";
import { Intro } from "../components/Intro";
import { Projects } from "../components/Projects";
import * as styles from "../components/styles/Index.css";

const Background = dynamic(() => import("../components/background/Wrapper"), { ssr: false });

interface HomeProps {}

const Home: NextPage<HomeProps> = () => {
    return (
        <Page className={styles.pageWrapper}>
            <Box className={styles.contentWrapper}>
                <Header />
                <Stack as="main" flexDirection="column" gap="4" paddingTop="5" marginBottom="5">
                    <Intro />
                    <Projects />
                    <Music />
                </Stack>
            </Box>
            <Box className={styles.backgroundWrapper}>
                <Background />
            </Box>
        </Page>
    );
};

export default Home;
