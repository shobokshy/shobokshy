import { defaultStyle, getCssText, globalCss } from "@cayro/ui-primitives";
import { Head, Html, Main, NextScript } from "next/document";

const globalStyles = globalCss({
	"*": { margin: 0, padding: 0 },
	html: {
		scrollBehavior: "smooth",
	},
	body: {
		fontSize: "100%",
		fontFamily: "$body",
		color: "$text",
		backgroundColor: "$background",
	},
});

const darkThemeClassName = defaultStyle.darkScheme.theme.className;

export default function Document() {
	globalStyles();
	return (
		<Html lang="en">
			<Head>
				<title>shobokshy</title>

				<meta name="theme-color" content="#000" />

				<style id="cayro-ui" dangerouslySetInnerHTML={{ __html: getCssText() }} />
			</Head>
			<body className={darkThemeClassName}>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
