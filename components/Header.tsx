import { Stack } from "@cayro/ui-core";
import { FC } from "react";
import { Content } from "./Content";
import { Sun } from "./sun";
import { Wrapper } from "./Wrapper";

interface HeaderProps {}

export const Header: FC<HeaderProps> = (props) => {
	return (
		<Wrapper as="header">
			<Content
				css={{
					justifyContent: "space-between",
					flexDirection: "row",
					alignItems: "center",
					marginTop: "$3",
				}}>
				<Stack verticalAlign="center">
					<Sun />
				</Stack>
				{/* <Nav
					orientation="horizontal"
					css={{
						"@bp2": {
							display: "none",
						},
					}}>
					<Nav.Item>Github</Nav.Item>
					<Nav.Item>Contact</Nav.Item>
				</Nav> */}
			</Content>
		</Wrapper>
	);
};
