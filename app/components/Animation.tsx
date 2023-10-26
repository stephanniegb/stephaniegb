import { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "@react-spring/three";
import { useThree } from "@react-three/fiber";
import { MeshDistortMaterial, Stars } from "@react-three/drei";

const AnimatedMeshDistortMaterial = animated(Stars);

const MyScene = () => {
  const isOver = useRef(false);

  const { width, height } = useThree((state) => state.size);

  const [springs, api] = useSpring(
    () => ({
      scale: 1,
      position: [0, 0],
      rotation: [0, 0, 0],
      config: (key) => {
        switch (key) {
          case "scale":
            return {
              mass: 4,
              friction: 10,
            };
          case "position":
            return { mass: 4, friction: 220 };
          default:
            return {};
        }
      },
    }),
    []
  );

  const handlePointerEnter = () => {
    api.start({
      scale: 1.5,
    });
  };

  const handlePointerLeave = () => {
    api.start({
      scale: 1,
    });
  };

  const handleWindowPointerOver = useCallback(() => {
    isOver.current = true;
  }, []);

  const handleWindowPointerOut = useCallback(() => {
    isOver.current = false;
    api.start({
      position: [0, 0],
    });
  }, []);

  const handlePointerMove = useCallback(
    (e) => {
      if (isOver.current) {
        const x = (e.offsetX / width) * 2 - 1;
        const y = (e.offsetY / height) * -2 + 1;

        api.start({
          position: [x * 5, y * 2],
        });
      }
    },
    [api, width, height]
  );

  useEffect(() => {
    window.addEventListener("pointerover", handleWindowPointerOver);
    window.addEventListener("pointerout", handleWindowPointerOut);
    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointerover", handleWindowPointerOver);
      window.removeEventListener("pointerout", handleWindowPointerOut);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [handleWindowPointerOver, handleWindowPointerOut, handlePointerMove]);

  return (
    <animated.mesh
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      scale={springs.scale}
      position={springs.position.to((x, y) => [x, y, 0])}
    >
      <AnimatedMeshDistortMaterial speed={5} distort={0.5} />
    </animated.mesh>
  );
};
export default MyScene;
