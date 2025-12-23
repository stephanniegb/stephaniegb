import Contact from "./Contact";

const Hero = () => {
  return (
    <section className="col-span-3 lg:sticky lg:top-0 lg:h-screen lg:px-12 lg:py-20 xl:col-span-1 xl:px-20">
      <div className="flex h-full max-h-[1280px] flex-col justify-between gap-8">
        <div className="flex flex-col gap-2 transition-all duration-300 hover:text-[var(--secondary-foreground)]">
          <h1 className="mb-4 text-[clamp(1.5rem,8vw,2.5rem)] leading-[2.5rem] md:text-5xl lg:text-4xl xl:text-6xl">
            Stephanie Egbuonu
          </h1>
          <h2 className="text-xl">Frontend Engineer</h2>
          <p className="w-[70%] text-sm">
            Bringing ideas to life with seamless, pixel-perfect web experiences.
          </p>
        </div>
        <Contact />
      </div>
    </section>
  );
};

export default Hero;

