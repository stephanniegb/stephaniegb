import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
const Loader = () => {
  const loaderRef = useRef(null);

  useEffect(() => {
    const el = loaderRef.current;
    gsap.fromTo(
      el,
      {
        opacity: 1,
        duration: 5,
      },
      {
        opacity: 0,
        duration: 5,
      }
    );
  }, []);

  return (
    <div
      ref={loaderRef}
      className="absolute top-0 left-0 w-screen h-screen grid place-content-center bg-white"
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
