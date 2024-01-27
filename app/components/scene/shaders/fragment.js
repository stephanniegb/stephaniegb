const fragmentShader = `
precision mediump float;
  uniform vec3 uColor;
  uniform sampler2D uTexture;
  varying vec2 vUv;

  void main() {
    vec3 texture = texture2D(uTexture,vUv).rgb;
    vec3 adjustedColor = texture * 1.2; 
    gl_FragColor = vec4(adjustedColor, 1.0);
  }

`;

export default fragmentShader;
