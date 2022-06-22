import { Box, Stack, Text } from "@cayro/ui-core";
import { FC } from "react";

interface ItemProps {
	title: string;
	description: string;
	date?: Date;
	href: string;
}

export const Item: FC<ItemProps> = ({ title, description, date, href }) => {
	const formatDate = (date: Date): string => {
		const { format } = new Intl.DateTimeFormat([], { year: "numeric", month: "short", day: "numeric" });
		return format(date);
	};

	return (
		<Box
			as="a"
			href={href}
			target="_blank"
			css={{
				position: "relative",
				cursor: "pointer",
				color: "$text",
				textDecoration: "none",
				"&:hover": {
					"&::before": {
						opacity: 1,
						transform: "scale(1)",
					},
				},
				"&:focus-visible": {
					outline: "none",
					"&::before": {
						opacity: 1,
						transform: "scale(1)",
						border: "2px solid #EEBA64",
					},
				},
				"&::before": {
					content: "''",
					opacity: 0,
					position: "absolute",
					backgroundImage: "linear-gradient(48deg, transparent, #eeba64c4)",
					inset: "calc($space$2*-1)",
					zIndex: -1,
					borderRadius: "$default",
					padding: "$2",
					transition: "all 0.2s ease-in-out",
					transform: "scale(0.8)",
				},
			}}>
			<Stack
				direction="column"
				gap="small"
				css={{
					zIndex: 1,
				}}>
				<Text css={{ fontWeight: "bold" }}>{title}</Text>
				<Text>{description}</Text>
				{date && <Text css={{ fontWeight: "lighter", fontSize: "$2" }}>{formatDate(date)}</Text>}
			</Stack>
		</Box>
	);
};
