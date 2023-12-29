const fragmentShader = `
precision mediump float;
  uniform vec3 uColor;
  uniform sampler2D uTexture;
  varying vec2 vUv;

  void main() {
    vec3 texture = texture2D(uTexture,vUv).rgb;
    gl_FragColor = vec4(texture, 1.0);
  }

`;

export default fragmentShader;
