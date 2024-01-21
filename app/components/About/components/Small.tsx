import GlobalContext from "@/app/context/GlobalContext";
import SwigglyStroke from "@/svg/SwigglyStroke";
import { useEffect, useRef, useContext } from "react";

const Small = () => {
  const { setTextColor } = useContext(GlobalContext);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTextColor("text-[#d0d0c5]");
          }
        });
      },
      { threshold: 0 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
  return (
    <section
      ref={containerRef}
      className="z-[1] text-[#d0d0c5] min-h-[50vh] max-h-[600px]   bg-black relative px-8 md:px-32 py-16 flex place-content-center flex-col gap-16"
    >
      <div>
        <h3 className="uppercase">About myself</h3>
        <SwigglyStroke />
      </div>
      <h2 className="text-pFS  uppercase">
        I am Stephanie Egbuonu Lorem, ipsum dolor sit amet{" "}
        <span className="text-lemon">consectetur</span> adipisicing elit.
        Distinctio eos labore aliquam laborum doloribus atque quod harum,!
      </h2>

      <div>
        <a className="flex items-center gap-2" href="mailto:">
          <span className="p-2 rounded-full bg-offWhite text-brown">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M3 20.59L6.59 17H18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2zM3 22H2V6a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H7z"
              />
            </svg>
          </span>

          <span className="underline">contact me</span>
        </a>
      </div>
    </section>
  );
};

export default Small;
