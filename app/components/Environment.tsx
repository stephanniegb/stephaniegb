import { BackSide } from "three";

const Environment = () => {
  return (
    <mesh>
      <sphereGeometry args={[60, 50, 50]} />
      <meshBasicMaterial side={BackSide} />
    </mesh>
  );
};

export default Environment;
