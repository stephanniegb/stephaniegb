"use client";
import { useIntersect, useScroll } from "@react-three/drei";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import React, { useMemo, useRef } from "react";
import * as THREE from "three";

function Objects() {
  const { height, width } = useThree((state) => state.viewport);
  const { scene } = useLoader(GLTFLoader, "./moon.glb");

  return (
    <>
      <Item position={[0, 2, -10]}>
        <primitive object={scene} children-0-castShadow />
      </Item>
    </>
  );
}

function Item({ position, children }) {
  const visible = useRef();
  const ref = useIntersect((isVisible) => (visible.current = isVisible));
  const [xRandomFactor, yRandomFactor] = useMemo(
    () => [(0.5 - Math.random()) * 0.5, (0.5 - Math.random()) * 0.5],
    []
  );

  const scroll = useScroll();
  console.log(scroll);

  useFrame(({ clock }, delta) => {
    const elapsedTime = clock.getElapsedTime();

    ref.current.rotation.x = elapsedTime * xRandomFactor;
    ref.current.rotation.y = elapsedTime * yRandomFactor;
    // ref.current.position.y = -10;
    // ref.current.position.x = 5;

    const scale = THREE.MathUtils.damp(
      ref.current.scale.x,
      visible.current ? 1.5 : 0.2,
      5,
      delta
    );
    ref.current.scale.set(scale, scale, scale);
  });

  return (
    <mesh ref={ref} position={position}>
      {children}
    </mesh>
  );
}

export { Objects };
