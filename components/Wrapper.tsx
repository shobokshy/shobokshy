import { Box, styled } from "@cayro/ui-core";

//@ts-ignore
export const Wrapper = styled(Box, {
	width: "100%",
	maxWidth: "$$pageWidth",
	alignSelf: "center",
	zIndex: 1,
	"@bp2": {
		padding: "0 $3",
	},
});
