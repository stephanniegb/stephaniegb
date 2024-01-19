import { AnimatePresence, motion as m } from "framer-motion";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
const Loader = ({
  loader,
  setLoader,
}: {
  loader: boolean;
  setLoader: Dispatch<SetStateAction<boolean>>;
}) => {
  const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <AnimatePresence mode="wait">
      <m.div className="h-screen w-screen grid place-content-center relative z-[10] bg-black">
        <div
          style={{
            width: "clamp(13rem, 20vmax, 18.7rem)",
            height: "clamp(18rem, 22vmax, 25rem)",
          }}
        >
          <Image
            onClick={() => setLoader((prev) => !prev)}
            className="h-full w-full"
            alt="stephanie shot"
            width={300}
            height={400}
            src={"/hala-al-asadi-lqb0Mqq8RSM-unsplash.jpg"}
          />
        </div>
        <div>
          <m.span
            key={"soan"}
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={transition}
            className="text-[.75rem]"
          >
            stephani.egb
          </m.span>
        </div>
      </m.div>
    </AnimatePresence>
  );
};

export default Loader;
