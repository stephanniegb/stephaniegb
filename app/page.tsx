"use client";

import { useEffect, useRef, useState } from "react";

import Loader from "./components/loader/Loader";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import SceneCanvas from "./components/scene/SceneCanvas";

export default function Home() {
  const [preLoader, setPreLoader] = useState(true); // change this to true for it to work
  const [timer, setTimer] = useState(2);
  const pageRef = useRef(null);

  const clear = () => {
    clearInterval(pageRef.current);
    setPreLoader(false);
  };
  useEffect(() => {
    pageRef.current = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }, []);
  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  return (
    <>
      {preLoader ? (
        <Loader />
      ) : (
        <>
          <section className="grid place-content-center min-h-screen relative">
            <Navbar />
            <SceneCanvas />
          </section>
        </>
      )}
    </>
  );
}
