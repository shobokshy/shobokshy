import { Box, Stack, Text } from "@cayro/ui-core";
import { FC } from "react";
import * as styles from "./Item.css";

export interface ItemProps {
    title: string;
    description: string;
    date?: string;
    href: string;
}

export const Item: FC<ItemProps> = ({ title, description, date, href }) => {
    return (
        <Box className={styles.item} as="a" href={href} target="_blank">
            <Stack flexDirection="column" gap="1" zIndex="1">
                <Text className={styles.heading}>{title}</Text>
                <Text>{description}</Text>
                {date && <Text className={styles.date}>{date}</Text>}
            </Stack>
        </Box>
    );
};
