import { shaderMaterial } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import React, { useRef, useState } from "react";

const vertexShader = /* glsl */ `
precision mediump float;
varying vec2 vUv;
uniform float uTime;
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
const fragmentShader = /* glsl */ `
precision mediump float;
  uniform vec3 uColor;
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    gl_FragColor = vec4(uColor, 1.0);
  }
`;

const ImageShader = shaderMaterial(
  {
    uColor: new THREE.Color(1.0, 0.0, 0.0),
    uOffset: new THREE.Vector2(0.0, 0.0),
    uTime: 0,
  },
  vertexShader,
  fragmentShader
);

extend({ ImageShader });

export function Thing() {
  const mesh = useRef(null);

  const [offset, setOffset] = useState({
    x: 0,
    y: 0,
  });
  useFrame(({ mouse, clock }) => {
    setOffset({
      x: THREE.MathUtils.lerp(offset.x, mouse.x, 0.1),
      y: THREE.MathUtils.lerp(offset.y, mouse.y, 0.1),
    });
    mesh.current.uTime = clock.getElapsedTime();
    mesh.current.uOffset = [
      (mouse.x - 987.9999993023055) * 0.0005,
      -(mouse.y - 11.00000015045426) * 0.0005,
    ];

    console.log(mesh.current.uOffset);
  });

  return (
    <mesh position={[offset.x * 1.5, offset.y * 2.9, 0]}>
      <planeGeometry attach="geometry" args={[1.3, 2, 16, 16]} />
      <imageShader ref={mesh} attach="material" uColor={[0.0, 1.0, 0.0]} />
    </mesh>
  );
}
