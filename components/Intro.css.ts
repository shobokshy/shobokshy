import { breakpoints, style, vars } from "@cayro/ui-style";

export const heading = style({
    fontSize: 132,
    "@media": {
        [breakpoints.mobile]: {
            fontSize: 94,
        },
    },
    lineHeight: 1,
    marginTop: -32,
    paddingBottom: vars.space[3],
    // backgroundColor: "#FD3F76",
    // backgroundImage: "linear-gradient(45deg, #FD3F76, #FF6665)",
    // WebkitBackgroundClip: "text",
    // WebkitTextFillColor: "transparent",
    // paddingLeft: 5,
    // paddingRight: 5,
    // marginLeft: -5,
    // marginRight: -5
});

export const subHeading = style({
    fontStyle: "italic",
});

export const content = style({
    hangingPunctuation: "allow-end",
});
