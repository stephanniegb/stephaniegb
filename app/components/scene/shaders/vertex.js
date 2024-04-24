const vertexShader = `
varying vec2 vUv;
uniform vec2 uOffset;
float M_PI = 3.141529;

vec3 deformationCurve(vec3 position, vec2 uv, vec2 offset){
    vec3 deformedPosition = position;
    deformedPosition.x = position.x + sin(uv.y * M_PI) * offset.x;
    deformedPosition.y = position.y + sin(uv.x * M_PI) * offset.y;
    return deformedPosition;
}

void main() {
    vUv = uv;
    vec3 pos = deformationCurve(position, uv, uOffset);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`;

export default vertexShader;
