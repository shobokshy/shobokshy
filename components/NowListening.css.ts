import { style, vars, keyframes } from "@cayro/ui-style";

export const musicBar = style({
    backgroundColor: vars.colors.text,
    width: 2,
});

export const musicBars = style({
    display: "flex",
    gap: 2,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
});

export const text = style({
    fontWeight: "lighter",
    padding: 0,
    fontSize: vars.space[2],
});

export const track = style({
    padding: 0,
    fontSize: vars.fontSizes[3],
    fontWeight: "bold",
    textDecoration: "none",
    color: vars.colors.text,
    transition: "color 0.2s ease-in-out",
    ":hover": {
        color: vars.colors.primary,
    },
    ":focus-visible": {
        outline: "none",
        border: "2px solid",
        borderColor: vars.colors.primary
    },
});

export const playKeyFrames = keyframes({
	"0%": { height: "4px" },
	"50%": { height: "14px" },
	"100%": { height: "5px" },
});
