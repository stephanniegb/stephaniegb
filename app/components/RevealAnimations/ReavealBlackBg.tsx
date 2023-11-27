"use client";

import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useRef,
} from "react";
interface Props {
  children: React.ReactNode;
  intersectionRoot: MutableRefObject<null>;
  setState: Dispatch<SetStateAction<number>>;
}
const ReavealBlackBg = ({ children, intersectionRoot, setState }: Props) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setState(2);
          }
        });
      },
      {
        root: intersectionRoot.current,
        threshold: 0.5,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section className={`RevealBgColor`} ref={ref}>
      {children}
    </section>
  );
};

export default ReavealBlackBg;
