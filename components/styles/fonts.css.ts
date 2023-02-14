import { fontFace, style } from "@vanilla-extract/css";

const degularDisplayBold = fontFace({
    fontDisplay: "swap",
    src: "url('/fonts/DegularDisplayBold.otf') format('opentype')",
});

export const heroFontStyle = style({
    fontFamily: degularDisplayBold
});

const satoshiFont = fontFace({
    fontStyle: "oblique 0deg 15deg",
    fontWeight: " 300 1000",
    fontDisplay: "swap",
    unicodeRange:
        "U+0020-007F, U+00A9, U+2190-2193, U+2018, U+2019, U+201C, U+201D, U+2022",
    src: "url('/fonts/Satoshi.woff2') format('woff2')",
});

export const fontStyle = style({
    fontFamily: satoshiFont
});