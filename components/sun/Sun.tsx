import { Box } from "@cayro/ui-core";
import { FC } from "react";

interface SunProps {}

export const Sun: FC<SunProps> = () => {
	return (
		<Box
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				aspectRatio: "1/1",
				width: 40,
				gap: 2,
				clipPath: "circle(20px at center)",
			}}>
			{Array(10)
				.fill(null)
				.map((_, i) => (
					<Box
						key={i}
						style={{
							width: "100%",
							height: 2,
							backgroundColor: "#000",
						}}
					/>
				))}
		</Box>
	);
};
