import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useMemo, useState } from "react";
import * as THREE from "three";
import fragmentShader from "../scene/shaders/fragment";
import vertexShader from "../scene/shaders/vertex";

const WorkHtml = () => {
  const [offset, setOffset] = useState({
    x: 0,
    y: 0,
  });
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });
  useFrame(({ mouse }) => {
    setOffset({
      /* current position of the mesh, where i  want it to go to, percentage of transfromation */
      x: THREE.MathUtils.lerp(offset.x, mouse.x, 0.1),
      y: THREE.MathUtils.lerp(offset.y, mouse.y, 0.1),
    });
  });
  const uniforms = useMemo(
    () => ({
      u_Alpha: {
        value: 0.3,
      },
      u_time: {
        value: 0.0,
      },
    }),
    []
  );
  return (
    <section>
      <Canvas>
        <OrbitControls enableZoom={false} />
        <Suspense fallback={null}>
          <mesh position={[offset.x, offset.y * 2.9, 0]}>
            <planeGeometry attach="geometry" args={[1.3, 2]} />
            <shaderMaterial
              fragmentShader={fragmentShader}
              vertexShader={vertexShader}
              uniforms={uniforms}
              wireframe={false}
            />
          </mesh>
        </Suspense>
      </Canvas>
      <section></section>
    </section>
  );
};

export default WorkHtml;
