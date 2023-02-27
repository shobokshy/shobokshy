import { style, vars } from "@cayro/ui-style";

export const content = style({
	display: "flex",
	flexDirection: "column",
	gap: vars.space[3],
	width: "100%",
	zIndex: 1,
	paddingLeft: vars.space[2],
	paddingRight: vars.space[2],
});
