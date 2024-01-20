"use client";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.5,
        smoothTouch: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
import React, { ReactNode } from "react";

export default SmoothScroll;
