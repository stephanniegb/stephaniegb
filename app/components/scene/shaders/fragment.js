const fragmentShader = `
  uniform sampler2D uTexture;
  varying vec2 vUv;

  void main() {
    vec4 texture = texture2D(uTexture,vUv);
    gl_FragColor = texture;
    #include <colorspace_fragment>
  }

`;

export default fragmentShader;
