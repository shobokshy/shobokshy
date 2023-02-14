import { style, createVar } from "@cayro/ui-style";

export const pageWidth = createVar();

export const page = style({
	display: "flex",
    vars: {
        [pageWidth]: "715px",
    },
	flexDirection: "column",
	position: "relative",
	minHeight: "100vh",
	// backgroundColor: "#000",
});
