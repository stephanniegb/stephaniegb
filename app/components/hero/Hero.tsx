"use client";
import Reveal from "../Reveal";
import StarCanvas from "../StarCanvas";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.left}></div>
      <div className={styles.right}></div>
      <section className={styles.intro}>
        <div>
          <span className={styles.hiText}>Hi, i'm</span>
          <Reveal>
            <h1 className={styles.introName}>Stephanie Egbuonu</h1>
          </Reveal>
        </div>
        <div className={styles.nameBase}>
          <p className={styles.nameBaseText}>
            I <span className={styles.topDash}>Build lorem</span> with{" "}
            <span className={styles.btmDash}>Code lorem</span>
          </p>
        </div>

        {/* <div className={styles.nameBase}>
          <video autoPlay loop muted id="bg-video">
            <source
              src="/_import_60dd5a736a4074.96951876_FPpreview.mp4"
              type="video/mp4"
            />
          </video>
        </div> */}
      </section>
    </section>
    // <section>
    //   <StarCanvas />
    //   <section className={styles.intro}>
    //     <div className={styles.introDiv}>
    //       <Reveal>
    //         <p>Hi, my name is</p>
    //         <h1 className={styles.introHeading}>
    //           <br /> I <span id="typewriter"></span>
    //           <span id={styles.typewriterCursor}>|</span> Elevate Web
    //           Experiences and this is my Odyssey
    //         </h1>
    //         <p>
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
    //           fugiat est delectus, ea quas iste non, magni accusantium labore
    //           libero, culpa quae atque esse facere eveniet rem quis repudiandae
    //           aliquid!
    //         </p>
    //       </Reveal>
    //     </div>
    //   </section>
    // </section>
  );
};

export default Hero;
