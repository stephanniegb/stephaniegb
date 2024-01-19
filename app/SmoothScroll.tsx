"use client";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

function SmoothScroll({ children }: { children: ReactNode }) {
  //   const lenis = useLenis(({ scroll }) => {
  //     // called every scroll
  //   });

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.5,
        smoothTouch: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
import React, { ReactNode } from "react";

export default SmoothScroll;
