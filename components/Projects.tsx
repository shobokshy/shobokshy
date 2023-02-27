import { Box, Heading } from "@cayro/ui-core";
import { FC } from "react";
import { Content, Wrapper } from "./layout";
import { Item } from "./Item";
import { heading, projects } from "./Projects.css";

interface ProjectsProps {}

export const Projects: FC<ProjectsProps> = (props) => {
	return (
		<Wrapper>
			<Content>
				<Heading level={2} className={heading}>
					Projects
				</Heading>
				<Box className={projects}>
					<Item title="Cayro UI" description="An open source React component library for building beautiful enterprise applications" href="https://ui.cay.ro/" />
					<Item title="Spotifly" description="A React clone of the Spotify frontend" href="https://spotifly.shobokshy.com/" />
					<Item title="RPM Editor" description="A React wrapper for the ProseMirror API" href="https://github.com/shobokshy/rpm-editor" />
				</Box>
			</Content>
		</Wrapper>
	);
};
