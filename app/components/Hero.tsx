"use client";
import Reveal from "./Reveal";

const Hero = () => {
  return (
    <section className="intro">
      <div className="intro-div">
        <Reveal>
          <p>Hi, my name is</p>
          <h1 className="intro-heading">
            Stephanie Egbuonu <br /> I <span id="typewriter"></span>
            <span id="typewriter-cursor">|</span> Elevate Web Experiences and
            this is my Odyssey
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            fugiat est delectus, ea quas iste non, magni accusantium labore
            libero, culpa quae atque esse facere eveniet rem quis repudiandae
            aliquid!
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
