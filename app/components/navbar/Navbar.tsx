"use client";
import { motion as m } from "framer-motion";
import Link from "next/link";

const variants = {
  visible: { y: 0 },
  hidden: { y: "-100%" },
};
const Navbar = () => {
  return (
    <m.header
      initial={"hidden"}
      animate={"visible"}
      transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
      variants={variants}
      className={`fixed bg-transparent top-0 flex justify-between items-center w-screen z-[4] px-[2rem] py-[.2rem]`}
    >
      <Link href={"/"}>
        <span className="font-cursive text-[2em]">stephani.egb</span>
      </Link>
      <nav>
        <ul className="flex gap-8">
          <li>
            <Link href={"/resume"}>Resume</Link>
          </li>
          <li>
            <Link href={"/resume"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </m.header>
  );
};

export default Navbar;
