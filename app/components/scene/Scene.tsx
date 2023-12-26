import * as THREE from "three";
import { useContext, useLayoutEffect, useMemo, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { ShaderContext } from "@/app/context/ShaderContext";

const Texture = ({ texture }: { texture: THREE.Texture }) => {
  const { setIsHovered, isHovered, setOffset, offset } =
    useContext(ShaderContext);
  // const [offset, setOffset] = useState({
  //   x: 0,
  //   y: 0,
  // });

  // useFrame(({ mouse }) => {
  //   setOffset({
  //     x: THREE.MathUtils.lerp(offset.x, mouse.x, 0.1),
  //     y: THREE.MathUtils.lerp(offset.y, mouse.y, 0.1),
  //   });
  // });

  return (
    <mesh position={[offset.x, offset.y * 2.9, 0]}>
      <planeGeometry attach="geometry" args={[1.3, 2]} />

      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  );
};
const ImageMesh = ({ url }: { url: string }) => {
  const texture = useMemo(() => new THREE.TextureLoader().load(url), [url]);
  return <Texture texture={texture} />;
};
export default ImageMesh;
