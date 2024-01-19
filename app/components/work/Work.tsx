import useWindowSize from "@/hooks/useWindowSize";
import Large from "./components/Large";
import Small from "./components/Small";

const Work = () => {
  const windowSize = useWindowSize();

  return <>{windowSize.width < 1024 ? <Small /> : <Large />}</>;
};

export default Work;
