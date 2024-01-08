import Large from "./components/Large";
import useScreenSize from "@/hooks/useScreenSize";
import Small from "./components/Small";

const About = () => {
  const screenSize = useScreenSize();

  return <>{screenSize.width <= 768 ? <Small /> : <Large />}</>;
};

export default About;
