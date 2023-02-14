import { Stack } from "@cayro/ui-core";
import { FC } from "react";
import { Content, Wrapper } from "./layout";
import { Sun } from "./sun";

interface HeaderProps {}

export const Header: FC<HeaderProps> = (props) => {
	return (
		<Wrapper as="header">
			<Content>
				<Stack marginTop="3" verticalAlign="center">
					<Sun />
				</Stack>
			</Content>
		</Wrapper>
	);
};
