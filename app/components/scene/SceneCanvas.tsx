"use client";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { Scene } from "./Scene";

const styles = [
  {
    backgroundImage:
      "radial-gradient(ellipse at bottom, #2b5876 0%, #4e4376 70%, #4e4376 100%)",
    // backgroundImage: "linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)",
    transition: "background-image 1.5s ease",
    color: "white",
  },
  {
    backgroundImage: "linear-gradient(-20deg, #021937 0%, #021937 100%)",

    backgroundColor: "black",
    transition: "background-image 1.5s ease",
    color: "white",
  },
  {
    backgroundImage: "linear-gradient(-20deg, #0a0a0a 0%, #000000 100%)",
    transition: "background-image 1.5s ease",
    color: "white",
  },
];

const SceneCanvas = () => {
  const [backgroundStyles, setBackgroundStyles] = useState<number>(0);

  return (
    <div style={styles[backgroundStyles]} className="star-canvas">
      <Canvas camera={{ position: [0, 0, 700] }}>
        {/*   */}
        <perspectiveCamera fov={75} />
        <OrbitControls
          enableDamping={true}
          enablePan={false}
          enableZoom={false}
        />
        <ambientLight intensity={1} />
        <pointLight
          color={"0xffffff"}
          intensity={1.5}
          position={[10, 10, 10]}
        />
        <Suspense fallback={null}>
          {/* <Environment preset="warehouse" /> */}
          <Scene setBackgroundStyles={setBackgroundStyles} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default SceneCanvas;
