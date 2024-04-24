// @ts-nocheck
import { shaderMaterial } from "@react-three/drei";
import { extend, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { useContext, useMemo, useRef } from "react";
import { ShaderContext } from "@/app/context/ShaderContext";
import fragmentShader from "./shaders/fragment";
import vertexShader from "./shaders/vertex";
import { GlobalContext } from "@/app/context/GlobalContext";

const ImageShader = shaderMaterial(
  {
    uOffset: new THREE.Vector2(0.0, 0.0),
    uTexture: new THREE.Texture(),
  },
  vertexShader,
  fragmentShader
);

extend({ ImageShader });

function ImageMesh({ url }: { url: string }) {
  const { offset, mouse } = useContext(ShaderContext);
  const { cursor } = useContext(GlobalContext);

  const mesh = useRef(null);
  const [texture] = useMemo(() => useLoader(THREE.TextureLoader, [url]), [url]);

  return (
    <mesh position={[mouse.x * 2.9, mouse.y * 4, 0]}>
      <planeGeometry attach="geometry" args={[2.8, 1.8, 16, 16]} />
      <imageShader
        ref={mesh}
        attach="material"
        uOffset={[
          (cursor.x - offset.x) * 0.0005,
          -(cursor.y - offset.y) * 0.0005,
        ]}
        uTexture={texture}
      />
    </mesh>
  );
}

export default ImageMesh;
