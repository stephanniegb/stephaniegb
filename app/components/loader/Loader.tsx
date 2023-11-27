import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
const Loader = () => {
  const loaderRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to("#logo", {
        opacity: 1,
        x: 0, // Move to the left
        y: 0, // Move to the top
      });
    }, loaderRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={loaderRef}
      className="absolute top-0 left-0 w-screen h-screen grid place-content-center"
    >
      <span
        style={{
          transform: `translateY(30px)`,
        }}
        id="logo"
        className="font-cursive text-5xl opacity-0"
      >
        stephani.egb
      </span>
    </div>
  );
};

export default Loader;
