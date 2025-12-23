import Hero from "./components/Hero";
import About from "./components/About";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ResourcesSection from "./components/ResourcesSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="mx-auto flex h-full max-w-[850px] flex-col gap-12 px-4 py-20 text-sm md:px-12 lg:grid lg:max-w-[1536px] lg:grid-cols-7 lg:gap-0 lg:p-0 xl:grid-cols-2 xl:text-base">
      <Hero />
      <section className="relative z-10 col-span-4 h-full w-full lg:py-20 xl:col-span-1">
        <div className="flex w-full flex-col gap-28 lg:pr-12 xl:pr-20">
          <About />
          <ExperienceSection />
          <ProjectsSection />
          <ResourcesSection />
          <Footer />
        </div>
      </section>
    </main>
  );
}
