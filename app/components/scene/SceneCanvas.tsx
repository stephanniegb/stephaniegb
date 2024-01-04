import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import ImageMesh from "./ImageMesh";

const SceneCanvas = ({
  imageUrl,
  showProj,
}: {
  imageUrl: string;
  showProj: boolean;
}) => {
  return (
    <div
      style={{
        pointerEvents: "none",
      }}
      className={`absolute z-[2] transition  duration-300 ease-out h-full w-full ${
        showProj ? "opacity-100" : "opacity-100"
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
/*  */
