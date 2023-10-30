"use client";
import { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <header className={isVisible ? styles.header : styles.hidden}>
      <Link href={"/"}>
        <span className={styles.logo}>stephani.egb</span>
      </Link>
      <nav className={styles.navContainer}>
        <ul className={styles.navLinksContainer}>
          <li>
            <a href={"#about"}>About</a>
          </li>
          <li>
            <a href={"#work"}>Work</a>
          </li>
          <li>
            <Link href={"/resume"}>Resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
