import { Text } from "@cayro/ui-core";
import { FC } from "react";
import { Content } from "./Content";
import { Wrapper } from "./Wrapper";

interface FooterProps {}

export const Footer: FC<FooterProps> = (props) => {
	return (
		<Wrapper as="footer">
			<Content
				css={{
					justifyContent: "space-between",
					flexDirection: "row",
					alignItems: "center",
					marginTop: "$4",
					marginBottom: "$3",
				}}>
				<Text>shobokshy</Text>
			</Content>
		</Wrapper>
	);
};
