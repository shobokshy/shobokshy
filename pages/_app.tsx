import { SSRProvider, ThemeProvider } from "@cayro/ui-core";
import { ColorScheme } from "@cayro/ui-primitives";
import "@cayro/ui-primitives/dist/fonts/fonts.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		//@ts-ignore
		<SSRProvider>
			<ThemeProvider preferdColorScheme={ColorScheme.Dark}>
				<Component {...pageProps} />
			</ThemeProvider>
		</SSRProvider>
	);
}

export default MyApp;
