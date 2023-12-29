import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import ImageMesh from "./ImageMesh";

const SceneCanvas = ({
  imageUrl,
  isHovered,
}: {
  imageUrl: string;
  isHovered: boolean;
}) => {
  return (
    <div
      className={`absolute transition duration-300 ease-out h-full w-full ${
        isHovered ? "opacity-100" : "opacity-0"
      }`}
    >
      <Canvas>
        <ambientLight />
        <Suspense fallback={null}>
          <ImageMesh url={imageUrl} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default SceneCanvas;
