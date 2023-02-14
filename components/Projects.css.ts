import { style, vars, breakpoints } from "@cayro/ui-style";

export const heading = style({
    fontWeight: "lighter",
    fontSize: vars.fontSizes[2]
});

export const projects = style({
    display: "grid",
    gap: vars.space[3],
    gridTemplateColumns: "repeat(3, 1fr)",
    "@media": {
        [breakpoints.mobile]: {
            gridTemplateColumns: "repeat(1, 1fr)",
        }
    },
});
