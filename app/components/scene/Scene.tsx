import * as THREE from "three";
import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { useFrame } from "@react-three/fiber";
import images from "./assets/images";
import { ScrollControls } from "@react-three/drei";
import fragmentShader from "./shaders/fragment";
import vertexShader from "./shaders/vertex";

const doggos = "/Screenshot 2023-10-22 at 8.34.54 PM.png";

const Texture = ({ texture }) => {
  const [offset, setOffset] = useState({
    x: 0,
    y: 0,
  });
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });
  useFrame(({ mouse, camera }) => {
    setOffset({
      /* current position of the mesh, where i  want it to go to, percentage of transfromation */
      x: THREE.MathUtils.lerp(offset.x, mouse.x, 0.1),
      y: THREE.MathUtils.lerp(offset.y, mouse.y, 0.1),
    });
    // camera.position.x = THREE.MathUtils.lerp(
    //   camera.position.x,
    //   mouse.x * .5,
    //   0.03
    // );
  });
  const uniforms = useMemo(
    () => ({
      u_intensity: {
        value: 0.3,
      },
      u_time: {
        value: 0.0,
      },
      uAlpha: {
        value: 1.0,
      },
    }),
    []
  );
  /* to use the mouse coordinates of the window.. we have to normalize it make it 0,0 at the center */

  // console.log(offset);

  // useLayoutEffect(() => {
  //   window.addEventListener("mousemove", (e) => {
  //     setMouse({
  //       x: (e.clientX / innerWidth) * 2 - 1,
  //       y: -(e.clientY / innerHeight) * 2 + 1,
  //     });
  //   });
  //   return () => {};
  // }, []);

  // useEffect(() => {
  //   setOffset({
  //     /* current position of the mesh, where i  want it to go to, percentage of transfromation */
  //     x: THREE.MathUtils.lerp(offset.x, mouse.x, 0.1),
  //     y: THREE.MathUtils.lerp(offset.y, mouse.y, 0.1),
  //   });
  // }, [mouse]);
  console.log(offset);

  /* if you want to use use framer you hav to figure out a way to lerp you mouse coordinates to always be between 0-1 */

  return (
    <mesh position={[offset.x, offset.y * 2.9, 0]}>
      <planeGeometry attach="geometry" args={[1.3, 2]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        wireframe={false}
      />
      {/* <meshBasicMaterial attach="material" map={texture} /> */}
    </mesh>
  );
};
const ImageMesh = ({ url }) => {
  const texture = useMemo(() => new THREE.TextureLoader().load(url), [url]);
  return <Texture texture={texture} />;
};
export default ImageMesh;
// export default function Scene() {
//   return <Image url={images.imageOne} />;
// }

const Scene = () => {};
