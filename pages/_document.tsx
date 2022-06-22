import { getCssText } from "@cayro/ui-primitives";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<title>shobokshy</title>

				<meta name="theme-color" content="#000" />

				<style id="cayro-ui" dangerouslySetInnerHTML={{ __html: getCssText() }} />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}