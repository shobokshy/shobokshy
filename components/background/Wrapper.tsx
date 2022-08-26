import { FC } from "react";
import { Canvas } from "react-ogl";
import { Gradient } from "./Gradient";

interface WrapperProps {}

const Wrapper: FC<WrapperProps> = (props) => {
	return (
		<Canvas
			camera={{ position: [0, 0, 8] }}
			renderer={{
				alpha: true,
				antialias: true,
				powerPreference: "low-power",
				dpr: 0.2 * window.devicePixelRatio,
				premultipliedAlpha: false,
				depth: false,
			}}>
			<Gradient />
		</Canvas>
	);
};

export default Wrapper;
