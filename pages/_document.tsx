import { ThemeProvider } from "@cayro/ui-primitives";
import { Head, Html, Main, NextScript } from "next/document";
import { fontStyle } from "../components/styles/fonts.css";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta name="theme-color" content="#000" />
			</Head>
			<body>
				<ThemeProvider fontStyle={fontStyle}>
					<Main />
					<NextScript />
				</ThemeProvider>
			</body>
		</Html>
	);
}
