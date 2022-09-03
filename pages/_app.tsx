//@ts-nocheck
import { SSRProvider, ThemeProvider } from "@cayro/ui-core";
import { ColorScheme } from "@cayro/ui-primitives";
import "@cayro/ui-primitives/dist/fonts/fonts.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Fragment } from "react";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Fragment>
			<Head>
				<title>shobokshy</title>
			</Head>
			<SSRProvider>
				<ThemeProvider preferdColorScheme={ColorScheme.Dark as any}>
					<Component {...pageProps} />
				</ThemeProvider>
			</SSRProvider>
		</Fragment>
	);
}

export default MyApp;
