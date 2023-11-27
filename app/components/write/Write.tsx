import { Dispatch, SetStateAction, useRef } from "react";

import "./write.css";

import ReavealBlackBg from "../RevealAnimations/ReavealBlackBg";

const Write = ({
  setState,
}: {
  setState: Dispatch<SetStateAction<number>>;
}) => {
  const rootRef = useRef(null);

  return (
    <section className="h-screen">
      <ReavealBlackBg setState={setState} intersectionRoot={rootRef}>
        <section>
          <h3>Somtimes I write....</h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eum
          illum eaque in explicabo. Nemo expedita et quia ullam similique porro
          dolores obcaecati vitae distinctio, corporis non a aspernatur vel.
        </section>
      </ReavealBlackBg>
    </section>
  );
};

export default Write;
