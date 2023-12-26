const fragmentShader = `
uniform float u_Alpha;
uniform float u_time;
uniform sampler2D u_texture;
uniform vec2 u_offset;

varying vec2 vUv;
varying float vDisplacement;


vec3 rgbShift(sampler2D textureImage, vec2 uv, vec2 offset ){
    float r = texture2D(textureImage, uv + offset).r;
    vec2 gb = texture2D(textureImage, uv).gb;
    return vec3(r, gb);
}



void main() {
  vec3 color = rgbShift(u_texture, vUv, u_offset);
  gl_FragColor = vec4(0.0,0.4,1.0,u_Alpha);
}

`;

export default fragmentShader;
