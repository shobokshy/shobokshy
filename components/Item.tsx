import { Box, Stack, Text } from "@cayro/ui-core";
import { FC } from "react";
import * as styles from "./Item.css";

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
			className={styles.item}
			as="a"
			href={href}
			target="_blank"
		>
			<Stack
				flexDirection="column"
				gap="1"
				zIndex="1"
			>
				<Text isBold>{title}</Text>
				<Text>{description}</Text>
				{date && <Text className={styles.date}>{formatDate(date)}</Text>}
			</Stack>
		</Box>
	);
};
