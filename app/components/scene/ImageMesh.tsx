import { shaderMaterial } from "@react-three/drei";
import { extend, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import React, { useContext, useMemo, useRef, useState } from "react";
import { ShaderContext } from "@/app/context/ShaderContext";
import fragmentShader from "./shaders/fragment";
import vertexShader from "./shaders/vertex";

const ImageShader = shaderMaterial(
  {
    uColor: new THREE.Color(1.0, 0.0, 0.0),
    uOffset: new THREE.Vector2(0.0, 0.0),
    uTexture: new THREE.Texture(),
  },
  vertexShader,
  fragmentShader
);

extend({ ImageShader });

function ImageMesh({ url }: { url: string }) {
  const [canvasOffset, setCanvasOffset] = useState({
    x: 0,
    y: 0,
  });

  const { setOffset, offset, setMouse, mouse } = useContext(ShaderContext);
  const mesh = useRef(null);
  const [texture] = useMemo(() => useLoader(THREE.TextureLoader, [url]), [url]);

  useFrame(({ mouse }) => {
    setCanvasOffset({
      x: THREE.MathUtils.lerp(canvasOffset.x, mouse.x, 0.1),
      y: THREE.MathUtils.lerp(canvasOffset.y, mouse.y, 0.1),
    });
  });

  const why = -(offset.y / innerHeight) * 2 + 1;

  return (
    <mesh position={[0, 0, 0]}>
      {/*[((offset.x / innerWidth) * 2 - 1) * 1.5, why * 2.9, 0] */}
      <planeGeometry attach="geometry" args={[1.3, 2, 16, 16]} />
      <imageShader
        ref={mesh}
        attach="material"
        uColor={[0.0, 1.0, 0.0]}
        uOffset={[
          (mouse.x - offset.x) * 0.0005,
          -(mouse.y - offset.y) * 0.0005,
        ]}
        uTexture={texture}
      />
    </mesh>
  );
}

export default ImageMesh;
