import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import ImageMesh from "./ImageMesh";

const Scene = ({
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
      className={`absolute transition  duration-300 ease-out h-full w-full ${
        showProj ? "opacity-100 " : "opacity-0"
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

export default Scene;
/*  */
