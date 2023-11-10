import { useContext } from "react";
import RevealBgColor from "../RevealAnimations/RevealBgColor";
import RevealSection from "../RevealAnimations/RevealSection";
import "./write.css";
import { BackgroundColorcontext } from "@/context/BackgroundContext";

const Write = () => {
  const BgColor = useContext(BackgroundColorcontext);
  return (
    <RevealBgColor>
      <section className={`writeContainer ${BgColor?.isBgWhite ? "show" : ""}`}>
        <h3>Somtimes I write....</h3>
      </section>
    </RevealBgColor>
  );
};

export default Write;
