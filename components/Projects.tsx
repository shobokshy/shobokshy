import { Grid, Heading } from "@cayro/ui-core";
import { FC } from "react";
import { Content } from "./Content";
import { Item } from "./Item";
import { Wrapper } from "./Wrapper";

interface ProjectsProps {}

export const Projects: FC<ProjectsProps> = (props) => {
	return (
		<Wrapper>
			<Content>
				<Heading level={2} css={{ fontWeight: "lighter", fontSize: "$3" }}>
					Projects
				</Heading>
				<Grid
					css={{
						gap: "$3",
						gridTemplateColumns: "repeat(3, 1fr)",
						"@bp1": {
							gridTemplateColumns: "repeat(1, 1fr)",
						},
					}}>
					<Item title="Cayro UI" description="An open source React component library for building beautiful enterprise applications" href="https://ui.cay.ro/" />
					<Item title="Spotifly" description="A React clone of the Spotify frontend" href="https://spotifly.shobokshy.com/" />
					<Item title="RPM Editor" description="A React wrapper for the ProseMirror API" href="https://github.com/shobokshy/rpm-editor" />
				</Grid>
			</Content>
		</Wrapper>
	);
};
