import { darkTheme, SSRProvider, ThemeProvider } from "@cayro/ui-core";
import localFont from "@next/font/local";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Fragment } from "react";

const mainFont = localFont({
    src: "../public/fonts/Satoshi.woff2",
    style: "oblique 0deg 15deg",
    weight: "300 1000",
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Fragment>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
            </Head>
            <ThemeProvider fontStyle={mainFont.className} theme={darkTheme}>
                <SSRProvider>
                    <Component {...pageProps} />
                </SSRProvider>
            </ThemeProvider>
        </Fragment>
    );
}

export default MyApp;
