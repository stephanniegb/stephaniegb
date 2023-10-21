"use client";
import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

const Sphere = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshLambertMaterial color={"#00ff83"} />
    </mesh>
  );
};
function MyStar() {
  const refStar = useRef<Mesh>(null);

  useFrame(() => {
    if (refStar.current) {
      refStar.current.rotation.x += 0.001;
    }
  });
  return <Stars ref={refStar} />;
}
const StarCanvas = () => {
  return (
    <div className="star-canvas">
      <Canvas camera={{ position: [0, 0, 700] }}>
        <perspectiveCamera fov={75} />
        <OrbitControls
          enableDamping={true}
          enablePan={false}
          enableZoom={false}
        />
        <ambientLight intensity={0.5} />
        <pointLight color={"0xffffff"} position={[10, 10, 10]} />
        <MyStar />
      </Canvas>
    </div>
  );
};

export default StarCanvas;
