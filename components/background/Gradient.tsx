import { Mesh, Vec2, Vec3 } from "ogl";
import { FC, useRef } from "react";
import { useFrame } from "react-ogl";
//@ts-ignore
import vertex from "./vertex.glsl";
//@ts-ignore
import fragment from "./fragment.glsl";

interface GradientProps {}

export const Gradient: FC<GradientProps> = (props) => {
	const mesh = useRef<Mesh>(null);

	useFrame((_, t) => {
		mesh.current!.program.uniforms.seed.value = t * 0.0002;
		//mesh.current!.program.uniforms.displacement.value = t * 0.0008;
	});

	return (
		<transform>
			<mesh {...props} ref={mesh}>
				<triangle />
				<program
					vertex={vertex}
					fragment={fragment}
					transparent
					uniforms={{
						color1: {
							// #47afff
							// #DF5C88
							// value: new Vec3(0.278, 0.686, 1),
							value: new Vec3(0.875, 0.361, 0.533),
						},
						color2: {
							// #5e68e8
							// #BE73CA
							// value: new Vec3(0.369, 0.408, 0.91),
							value: new Vec3(0.745, 0.451, 0.792),
						},
						color3: {
							// #4d24ae
							// value: new Vec3(0.302, 0.141, 0.682),
							// #EEBA64
							value: new Vec3(0.933, 0.729, 0.392),
						},
						color4: {
							// #3957c0
							// #5C80BE
							value: new Vec3(0.361, 0.502, 0.745),
							// value: new Vec3(0.224, 0.341, 0.753),
						},
						colorSize: {
							value: 0.58,
						},
						colorSpacing: {
							value: 0.4,
						},
						colorRotation: {
							value: -0.381592653589793,
						},
						colorSpread: {
							value: 4.52,
						},
						displacement: {
							value: 1.160714285714287,
						},
						zoom: {
							value: 0.72,
						},
						spacing: {
							value: 4.27,
						},
						seed: {
							value: 0.8883248730964464,
						},
						viewportSize: {
							value: new Vec2(window.innerWidth, window.innerHeight),
						},
						colorOffset: {
							value: new Vec2(-0.7741174697875977, -0.20644775390624992),
						},
						transformPosition: {
							value: new Vec2(-0.2816110610961914, -0.43914794921875),
						},
						noiseSize: {
							value: 0.7,
						},
						noiseIntensity: {
							value: 0.08,
						},
					}}
				/>
			</mesh>
		</transform>
	);
};
