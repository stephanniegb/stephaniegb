import Experience from "./Experience";
import UpRightArrow from "@/svg/UpRightArrow";

const ExperienceSection = () => {
  return (
    <div className="flex-col gap-4">
      <Experience
        start="2025"
        end="present"
        description="Develop and maintain core frontend components for Moniepoint MFB's fintech products, building reliable and scalable dashboards that support high-volume financial operations. Contribute to design discussions, documentation, and code reviews while working within a regulated financial environment."
        title="Moniepoint MFB"
        techs={[
          "typescript",
          "React",
          "Angular",
          "TailwindCSS",
          "Next.js",
        ]}
        url="https://www.moniepoint.com/ng/business"
      />
      <Experience
        start="2024"
        end="2025"
        description="Develop and maintain key frontend components across our products, working closely with designers, developers, and project managers to deliver high-performing and accessible user interfaces. I also integrate smart contracts into the frontend, enabling seamless interaction with the blockchain."
        title="Horus labs"
        techs={["next.js", "starknet.js", "starknet react", "typescript"]}
        url="https://www.horuslabs.co/"
      />
      <Experience
        start="2023"
        end="2024"
        description="Developed, maintained, and delivered essential frontend projects for core components and clients, ensuring high performance and quality. Collaborated with the team in brainstorming sessions, contributed to team-building initiatives, and enhanced internal systems to streamline development processes."
        title="AVVIC Group"
        techs={["react", "next.js", "typescript", "SCSS", "tailwind"]}
        url="https://avvicgroup.com/"
      />
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-8 flex items-center gap-[2px]"
      >
        <span className="group-hover:text-[--accent] group-focus:text-[--accent]">
          View Full Resume{" "}
        </span>
        <UpRightArrow className="inline-block transition-all duration-500 group-hover:translate-x-[0.3rem] group-hover:translate-y-[-0.2rem] group-focus:translate-x-[0.3rem] group-focus:translate-y-[-0.2rem]" />
      </a>
    </div>
  );
};

export default ExperienceSection;

