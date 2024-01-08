import useScreenSize from "@/hooks/useScreenSize";
import Large from "./components/Large";
import Small from "./components/Small";

const Work = () => {
  const screenSize = useScreenSize();

  return <>{screenSize.width < 1024 ? <Small /> : <Large />}</>;
};

export default Work;
