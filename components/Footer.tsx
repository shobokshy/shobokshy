import { Text } from "@cayro/ui-core";
import { FC } from "react";
import { Content, Wrapper } from "./layout";

interface FooterProps {}

export const Footer: FC<FooterProps> = (props) => {
	return (
		<Wrapper as="footer">
			<Content>
				<Text>shobokshy</Text>
			</Content>
		</Wrapper>
	);
};
