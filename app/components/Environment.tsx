import { BackSide } from "three";

const Environment = () => {
  return (
    <mesh>
      <sphereGeometry args={[60, 50, 50]} />
      <meshBasicMaterial side={BackSide} color={"pink"} />
    </mesh>
  );
};

export default Environment;
