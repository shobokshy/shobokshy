import { FC } from "react";
import { Canvas } from "react-ogl";
import { Gradient } from "./Gradient";

interface WrapperProps {}

const Wrapper: FC<WrapperProps> = (props) => {
	return (
		<Canvas
			camera={{ position: [0, 0, 8] }}
			// renderer={(element) =>
			// 	new Renderer({
			// 		canvas: element,
			// 		alpha: true,
			// 		dpr: 0.2 * window.devicePixelRatio,
			// 		premultipliedAlpha: false,
			// 		depth: false,
			// 	}) as any
			// }
		>
			<Gradient />
		</Canvas>
	);
};

export default Wrapper;
