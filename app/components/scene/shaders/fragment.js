const fragmentShader = `
uniform float u_Alpha;
uniform float u_time;

varying vec2 vUv;
varying float vDisplacement;

void main() {
  float distort = 2.0 * vDisplacement * u_Alpha;

  vec3 color = vec3(abs(vUv - 0.5) * 2.0  * (1.0 - distort), 1.0);
  
  gl_FragColor = vec4(0.0,0.4,1.0,u_Alpha);
}

`;

export default fragmentShader;
