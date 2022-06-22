#version 300 es
  
in vec3 position;
out vec2 vPosition;

void main() {
	gl_Position = vec4(position, 1.);
	vPosition = position.xy;
}