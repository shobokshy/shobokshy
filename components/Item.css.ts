import { calc, style, vars } from "@cayro/ui-style";

export const item = style({
    position: "relative",
    cursor: "pointer",
    color: vars.colors.text,
    textDecoration: "none",
    selectors: {
        ":hover&::before": {
            opacity: 1,
            transform: "scale(1)",
        },
        "&:focus-visible": {
            outline: "none",
        },
        "&:focus-visible&::before": {
            opacity: 1,
            transform: "scale(1)",
            border: "2px solid",
            borderColor: vars.colors.primary,
        },
    },
    "::before": {
        content: "''",
        opacity: 0,
        position: "absolute",
        backgroundImage: `linear-gradient(48deg, transparent, ${vars.colors.primary})`,
        inset: calc.multiply(vars.space[2], -1),
        zIndex: -1,
        borderRadius: vars.radii.default,
        padding: vars.space[2],
        transition: "all 0.2s ease-in-out",
        transform: "scale(0.8)",
    },
});

export const date = style({
    fontWeight: "lighter",
    fontSize: vars.fontSizes[2],
});

export const heading = style({
    fontWeight: "bold",
});
