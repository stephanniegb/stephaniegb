import RightArrow from "@/svg/RightArrow";
import UpRightArrow from "@/svg/UpRightArrow";
import Tech from "../components/Tech";
import projects from "../../data/projects.json";
import Link from "next/link";

type Project = {
  year: number;
  name: string;
  techStack: string[];
  link: string;
  where?: string;
};

// ProjectRow component
const ProjectRow = ({ project }: { project: Project }) => {
  return (
    <div className="lg:grid-cols-15 grid grid-cols-11 border-b-[.5px] border-[#e0e0e0b3] py-4 md:grid-cols-10 md:text-sm">
      <p className="col-span-2 px-4 md:col-span-1">{project.year}</p>
      <div className="col-span-9 px-4 md:col-span-4">
        <p className="hidden font-semibold text-[#e0e0e0] md:block md:text-base">
          {project.name}
        </p>
        <a
          className="group flex items-center gap-[2px] text-[#e0e0e0] text-[var(--primary-foreground)] md:hidden"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.name}
          <UpRightArrow className="inline-block transition-all duration-500 group-hover:translate-x-[0.3rem] group-hover:translate-y-[-0.2rem] group-focus:translate-x-[0.3rem] group-focus:translate-y-[-0.2rem]" />
        </a>
      </div>
      <p className="col-span-2 hidden px-4 lg:block">{project.where || ""}</p>
      <div className="col-span-4 hidden px-4 lg:block">
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, index) => (
            <Tech tech={tech} key={`${tech}-${index}-${project.name}`} />
          ))}
        </div>
      </div>
      <div className="col-span-5 hidden px-4 md:block lg:col-span-4">
        <a
          className="group flex items-center gap-[2px] text-[var(--primary-foreground)] hover:text-white"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="max-w-[90%] truncate">{project.link}</span>
          <UpRightArrow className="inline-block transition-all duration-500 group-hover:translate-x-[0.3rem] group-hover:translate-y-[-0.2rem] group-focus:translate-x-[0.3rem] group-focus:translate-y-[-0.2rem]" />
        </a>
      </div>
    </div>
  );
};

const page = () => {
  return (
    <div className="relative z-10 mx-auto max-w-[1200px] px-4 py-20 md:px-8">
      <div className="mb-8">
        <Link
          href={"/"}
          className="group flex items-center gap-1 text-[var(--accent)]"
        >
          <RightArrow className="inline-block rotate-180 transition-all duration-300 group-hover:-translate-x-1" />
          Stephanie Egbuonu
        </Link>

        <h1 className="mt-4 text-3xl font-bold md:text-5xl">All Projects</h1>
      </div>

      {/* Table Header */}
      <div className="lg:grid-cols-15 grid grid-cols-11 border-b-[.5px] border-[#e0e0e0b3] py-3 text-white md:grid-cols-10">
        <div className="col-span-2 px-4 md:col-span-1">Year</div>
        <div className="col-span-9 px-4 md:col-span-4">Project</div>
        <div className="col-span-2 hidden px-4 lg:block">Made at</div>
        <div className="col-span-4 hidden px-4 lg:block">Built with</div>
        <div className="col-span-4 hidden px-4 md:block lg:col-span-4">
          Link
        </div>
      </div>

      {/* Project Rows */}
      {projects.map((project, index) => (
        <ProjectRow key={index} project={project} />
      ))}
    </div>
  );
};

export default page;
