#version 300 es

precision highp float;

uniform vec3 color1;
uniform vec3 color2;
uniform vec3 color3;
uniform vec3 color4;
uniform float colorSize;
uniform float colorSpacing;
uniform float colorRotation;
uniform float colorSpread;
uniform float displacement;
uniform float zoom;
uniform float spacing;
uniform float seed;
uniform vec2 viewportSize;
uniform vec2 colorOffset;
uniform vec2 transformPosition;
uniform float noiseSize;
uniform float noiseIntensity;
  
in vec2 vPosition;

out vec4 fragColor;
  
  
// The MIT License
// Copyright © 2017 Inigo Quilez
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


// Computes the analytic derivatives of a 3D Gradient Noise. This can be used for example to compute normals to a
// 3d rocks based on Gradient Noise without approximating the gradient by having to take central differences. More
// info here: http://iquilezles.org/www/articles/gradientnoise/gradientnoise.htm


// Value    Noise 2D, Derivatives: https://www.shadertoy.com/view/4dXBRH
// Gradient Noise 2D, Derivatives: https://www.shadertoy.com/view/XdXBRH
// Value    Noise 3D, Derivatives: https://www.shadertoy.com/view/XsXfRH
// Gradient Noise 3D, Derivatives: https://www.shadertoy.com/view/4dffRH
// Value    Noise 2D             : https://www.shadertoy.com/view/lsf3WH
// Value    Noise 3D             : https://www.shadertoy.com/view/4sfGzS
// Gradient Noise 2D             : https://www.shadertoy.com/view/XdXGW8
// Gradient Noise 3D             : https://www.shadertoy.com/view/Xsl3Dl
// Simplex  Noise 2D             : https://www.shadertoy.com/view/Msf3WH


vec3 gradientDerivativesNoise3DHash( vec3 p ) {
	p = fract(p * vec3(.1031, .1030, .0973));
	p += dot(p, p.yxz+33.33);
	return fract((p.xxy + p.yxx)*p.zyx);
}

// return value noise (in x) and its derivatives (in yzw)
vec4 gradientDerivativesNoise3D( in vec3 x ) {
	// grid
	vec3 p = floor(x);
	vec3 w = fract(x);
	
	#if 1
	// quintic interpolant
	vec3 u = w*w*w*(w*(w*6.0-15.0)+10.0);
	vec3 du = 30.0*w*w*(w*(w-2.0)+1.0);
	#else
	// cubic interpolant
	vec3 u = w*w*(3.0-2.0*w);
	vec3 du = 6.0*w*(1.0-w);
	#endif    
	
	// gradients
	vec3 ga = gradientDerivativesNoise3DHash( p+vec3(0.0,0.0,0.0) );
	vec3 gb = gradientDerivativesNoise3DHash( p+vec3(1.0,0.0,0.0) );
	vec3 gc = gradientDerivativesNoise3DHash( p+vec3(0.0,1.0,0.0) );
	vec3 gd = gradientDerivativesNoise3DHash( p+vec3(1.0,1.0,0.0) );
	vec3 ge = gradientDerivativesNoise3DHash( p+vec3(0.0,0.0,1.0) );
	vec3 gf = gradientDerivativesNoise3DHash( p+vec3(1.0,0.0,1.0) );
	vec3 gg = gradientDerivativesNoise3DHash( p+vec3(0.0,1.0,1.0) );
	vec3 gh = gradientDerivativesNoise3DHash( p+vec3(1.0,1.0,1.0) );
	
	// projections
	float va = dot( ga, w-vec3(0.0,0.0,0.0) );
	float vb = dot( gb, w-vec3(1.0,0.0,0.0) );
	float vc = dot( gc, w-vec3(0.0,1.0,0.0) );
	float vd = dot( gd, w-vec3(1.0,1.0,0.0) );
	float ve = dot( ge, w-vec3(0.0,0.0,1.0) );
	float vf = dot( gf, w-vec3(1.0,0.0,1.0) );
	float vg = dot( gg, w-vec3(0.0,1.0,1.0) );
	float vh = dot( gh, w-vec3(1.0,1.0,1.0) );

	// interpolations
	return vec4( va + u.x*(vb-va) + u.y*(vc-va) + u.z*(ve-va) + u.x*u.y*(va-vb-vc+vd) + u.y*u.z*(va-vc-ve+vg) + u.z*u.x*(va-vb-ve+vf) + (-va+vb+vc-vd+ve-vf-vg+vh)*u.x*u.y*u.z,    // value
				ga + u.x*(gb-ga) + u.y*(gc-ga) + u.z*(ge-ga) + u.x*u.y*(ga-gb-gc+gd) + u.y*u.z*(ga-gc-ge+gg) + u.z*u.x*(ga-gb-ge+gf) + (-ga+gb+gc-gd+ge-gf-gg+gh)*u.x*u.y*u.z +   // derivatives
				du * (vec3(vb,vc,ve) - va + u.yzx*vec3(va-vb-vc+vd,va-vc-ve+vg,va-vb-ve+vf) + u.zxy*vec3(va-vb-ve+vf,va-vb-vc+vd,va-vc-ve+vg) + u.yzx*u.zxy*(-va+vb+vc-vd+ve-vf-vg+vh) ));
}


float hash(vec2 p) {
	p = 50.0 * fract(p * 0.3183099 + vec2(0.71, 0.113));
	return -1.0 + 2.0 * fract(p.x * p.y * (p.x + p.y));
}

float computeNoise(in vec2 p) {
	vec2 i = floor(p);
	vec2 f = fract(p);

	vec2 u = f * f * (3.0 - 2.0 * f);

	return mix(mix(hash(i + vec2(0.0, 0.0)),
	hash(i + vec2(1.0, 0.0)), u.x),
	mix(hash(i + vec2(0.0, 1.0)),
	hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

vec2 rotate(vec2 v, float a) {
	float s = sin(a);
	float c = cos(a);
	mat2 m = mat2(c, -s, s, c);
	return m * v;
}

void main() {
	vec2 position = vPosition;
	position.x *= min(1., viewportSize.x / viewportSize.y);
	position.y *= min(1., viewportSize.y / viewportSize.x);
	position /= zoom;
	position += transformPosition;

	vec2 noiseLocalPosition = position * .5 + .5;
	vec3 displacementNoise = gradientDerivativesNoise3D(vec3(noiseLocalPosition, seed)).xyz;

	float noise = computeNoise(vPosition * viewportSize / noiseSize);

	position += displacementNoise.xz * displacement;

	vec2 offsetedPosition = position;
	offsetedPosition -= colorOffset;
	offsetedPosition = mod(offsetedPosition - spacing, vec2(spacing * 2.)) - spacing;
	offsetedPosition = rotate(offsetedPosition, -colorRotation);
	offsetedPosition /= vec2(colorSize, colorSize);
	offsetedPosition *= vec2(1. / colorSpread, 1.);
	vec3 color = vec3(0.);
	color = mix(color1, color, smoothstep(0., 1., distance(offsetedPosition, vec2(0., colorSpacing * 1.5))));
	color = mix(color2, color, smoothstep(0., 1., distance(offsetedPosition, vec2(0., colorSpacing * .5))));
	color = mix(color3, color, smoothstep(0., 1., distance(offsetedPosition, vec2(0., -colorSpacing * .5))));
	color = mix(color4, color, smoothstep(0., 1., distance(offsetedPosition, vec2(0., -colorSpacing * 1.5))));

	color += noise * noiseIntensity;
	color = clamp(color, 0., 1.);

	fragColor = vec4(color, 1.);
}