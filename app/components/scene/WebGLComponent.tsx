import * as THREE from "three";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import fragmentShader from "./shaders/fragment";
import vertexShader from "./shaders/vertex";
import { ShaderContext } from "@/app/context/ShaderContext";

const Texture = ({ texture }: { texture: THREE.Texture }) => {
  const { isHovered } = useContext(ShaderContext);
  const mesh = useRef(null);

  const [offset, setOffset] = useState({
    x: 0,
    y: 0,
  });

  const uniforms = useMemo(
    () => ({
      u_intensity: {
        value: 0.3,
      },
      u_time: {
        value: 0.0,
      },

      u_Alpha: {
        value: 0.0,
      },
      u_offset: {
        value: new THREE.Vector2(0.0, 0.0),
      },
      u_texture: {
        type: "t",
        value: new THREE.TextureLoader().load(texture),
      },
    }),
    []
  );

  useEffect(() => {
    console.log("Uniforms:", uniforms);
  }, [uniforms.u_offset]);

  useFrame(({ mouse, clock }) => {
    setOffset({
      x: THREE.MathUtils.lerp(offset.x, mouse.x, 0.1),
      y: THREE.MathUtils.lerp(offset.y, mouse.y, 0.1),
    });
    mesh.current.material.uniforms.u_time.value = 0.0;
    mesh.current.material.uniforms.u_offset.value = new THREE.Vector2(
      mouse.x - offset.x * 0.0005,
      -mouse.y - offset.y * 0.0005
    );
    mesh.current.material.uniforms.u_Alpha.value = isHovered
      ? THREE.MathUtils.lerp(uniforms.u_Alpha.value, 1.0, 0.1)
      : THREE.MathUtils.lerp(uniforms.u_Alpha.value, 0.0, 0.1);
    mesh.current.material.uniforms.u_texture.value =
      new THREE.TextureLoader().load(texture);

    mesh.current.material.uniforms.u_time.value = 0.4 * clock.getElapsedTime();

    mesh.current.material.uniforms.u_intensity.value = THREE.MathUtils.lerp(
      mesh.current.material.uniforms.u_intensity.value,
      0.85,
      0.02
    );
  });

  return (
    <mesh ref={mesh} position={[offset.x, offset.y * 2.9, 0]}>
      <planeGeometry attach="geometry" args={[1.3, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        uniforms={uniforms}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
};
const WebGLComponent = ({ url }: { url: string }) => {
  const texture = useMemo(() => new THREE.TextureLoader().load(url), [url]);
  return <Texture texture={texture} />;
};

export default WebGLComponent;
