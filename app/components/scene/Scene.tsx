"use client";
import { Stars } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Scene() {
  useFrame(({ mouse, camera }) => {
    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      mouse.x * 2,
      0.05
    );
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      mouse.y * 2,
      0.05
    );
    camera.position.z = THREE.MathUtils.lerp(
      camera.position.z,
      Math.max(4, Math.abs(mouse.x * mouse.y * 8)),
      0.01
    );
    camera.rotation.y = THREE.MathUtils.lerp(
      camera.rotation.y,
      mouse.x * -Math.PI * 0.025,
      0.001
    );
  });

  return <Stars />;
}

export { Scene };
