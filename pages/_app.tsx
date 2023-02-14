import { SSRProvider } from "@cayro/ui-core";
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
				<Component {...pageProps} />
			</SSRProvider>
		</Fragment>
	);
}

export default MyApp;
