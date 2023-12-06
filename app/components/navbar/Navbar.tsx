"use client";
import { useEffect, useRef } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { gsap } from "gsap";

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    if (navRef.current) {
      gsap.to(navRef.current, {
        y: 0,
        duration: 0.5,
        delay: 0.5,
      });
    }
  }, []);

  return (
    <header ref={navRef} className={`backdrop-blur ${styles.header}`}>
      <Link href={"/"}>
        <span className="font-cursive text-[2.8rem]">stephani.egb</span>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href={"/resume"}>Resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
