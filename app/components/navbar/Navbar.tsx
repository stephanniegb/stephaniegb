"use client";
import { useEffect, useState } from "react";
import styles from "./navbar.module.css";
const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    // className={`navbar ${isVisible ? 'visible' : 'hidden'}`}
    <header className={isVisible ? styles.header : styles.hidden}>
      <span className={styles.logo}>stephani.egb</span>
      <nav className={styles.navContainer}>
        <ul className={styles.navLinksContainer}>
          <a href="http://google.com">
            <li>About</li>
          </a>
          <li>Work</li>
          <li>Resume</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
