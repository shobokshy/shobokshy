import { breakpoints, vars, style } from "@cayro/ui-style";
import { pageWidth } from "./Page.css";

export const wrapper = style({
    width: "100%",
	maxWidth: pageWidth,
	alignSelf: "center",
	zIndex: 1,
    "@media": {
        [breakpoints.tablet]: {
            padding: 0,
            paddingTop: vars.space[3],
            paddingBottom: vars.space[3]
        }
    }
})