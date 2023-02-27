import { breakpoints, style, vars } from "@cayro/ui-style";
import { globalStyle } from "@vanilla-extract/css";

globalStyle("html, body", {
    backgroundColor: "#000",
});

export const contentWrapper = style({
    display: "flex",
    flexDirection: "column",
    margin: vars.space[3],
    "@media": {
        [breakpoints.mobile]: {
            margin: vars.space[1],
        },
    },
    zIndex: 1,
});

export const backgroundWrapper = style({
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
});

export const pageWrapper = style({
    vars: {
        //#EEBA64"
        [vars.colors.primary]: "#FD3F76",
    },
    "::selection": {
        background: vars.colors.primary,
    },
});
