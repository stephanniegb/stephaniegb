import Large from "./components/Large";
import useScreenSize from "@/hooks/useWindowSize";
import Small from "./components/Small";

const About = () => {
  const screenSize = useScreenSize();

  return <>{screenSize.width < 1024 ? <Small /> : <Large />}</>;
};

export default About;
