"use client";
import { Scroll, ScrollControls, Stars, Environment } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import Html from "../Html";
import { Dispatch, SetStateAction } from "react";
import Footer from "../footer/Footer";
import { Objects } from "./Object";

function Scene() {
  useFrame(({ mouse, camera }) => {
    // camera.position.x = THREE.MathUtils.lerp(
    //   camera.position.x,
    //   mouse.x * 0.5,
    //   0.03
    // );
    // camera.position.y = THREE.MathUtils.lerp(
    //   camera.position.y,
    //   mouse.y * 0.8,
    //   0.01
    // );
    // camera.position.z = THREE.MathUtils.lerp(
    //   camera.position.z,
    //   Math.max(4, Math.abs(mouse.x * mouse.y * 8)),
    //   0.01
    // );
    // camera.rotation.y = THREE.MathUtils.lerp(
    //   camera.rotation.y,
    //   mouse.x * -Math.PI * 0.025,
    //   0.001
    // );
  });

  return (
    // <ScrollControls pages={5}>
    //   <Scroll>
    //     <Objects />
    <Stars />
    //   </Scroll>
    //   <Scroll html>
    //     <Html setBackgroundStyles={setBackgroundStyles} />
    //   </Scroll>
    // </ScrollControls>
  );
}

export { Scene };
