"use client";
import { useRef } from "react";
import Reveal from "../Reveal";

const Hero = () => {
  const rootRef = useRef(null);
  return (
    <div className="h-screen w-screen  grid place-content-center relative">
      <Reveal intersectionRoot={rootRef}>
        <h1 className="text-[8vw] text-center font-serif">Stephanie Egbuonu</h1>
        <p className="">Front End Software Engineer </p>
      </Reveal>
    </div>
  );
};

export default Hero;
// "use client";
// import Software from "@/svg/Software";
// import Reveal from "../Reveal";
// import styles from "./Hero.module.css";
// import { useEffect } from "react";

// const Hero = () => {
//   useEffect(() => {
//     const stickySection = document.querySelectorAll(".sticky");
//     const transform = (section: Element) => {
//       const parent = section.parentElement;
//       if (parent) {
//         const offSetTop = parent.offsetTop;
//         const scrollSection = section.querySelector(
//           ".scroll_section"
//         ) as HTMLElement;
//         let percentage =
//           ((window.scrollY - offSetTop) / window.innerHeight) * 100;
//         percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage;
//         scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
//       }
//     };
//     const handleScroll = () => {
//       for (let i = 0; i < stickySection.length; i++) {
//         transform(stickySection[i]);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
//   return (
//     <div className="sticky_parent">
//       <div className="sticky">
//         <div className=" scroll_section">
//           <div className="flex">
//             <Reveal>
//               <h1 className={styles.introName}>Stephanie Egbuonu</h1>
//             </Reveal>
//             <div>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
//               excepturi repellendus ab amet laboriosam ipsam corporis
//               repudiandae modi praesentium aliquid, aliquam nostrum? Esse eius
//               nisi illum iste dolor deserunt ipsum.
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
