import UpRightArrow from "@/svg/UpRightArrow";
import Tech from "./Tech";

const Experience = ({
  description,
  end,
  start,
  title,
  url,
  techs,
}: {
  start: string;
  end: string;
  description: string;
  title: string;
  url: string;
  techs: string[];
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full md:focus:bg-[--accent-hover] focus:outline-none gap-4 md:hover:bg-[--accent-hover] flex flex-col py-8 px-0 md:p-8 rounded-md md:grid md:grid-cols-10 cursor-pointer transition-[background-color] duration-500 group"
    >
      <div className="col-span-2 mt-1">
        <p className="text-xs uppercase text-[--primary-foreground] group-focus:text-[--secondary-foreground] group-hover:text-[--secondary-foreground] ">
          {start} - {end}
        </p>
      </div>
      <div className="col-span-8 flex flex-col gap-3">
        <div className="flex  items-center  gap-1">
          <h3 className="capitalize text-base group-focus:text-[--accent] group-hover:text-[--accent]">
            {title}
          </h3>
          <span className="inline-block transition-all duration-500  group-focus:translate-x-[0.3rem] group-focus:translate-y-[-0.2rem] group-hover:translate-x-[0.3rem] group-hover:translate-y-[-0.2rem]">
            <UpRightArrow />
          </span>
        </div>
        <p className="first-letter:uppercase text-[--primary-foreground] group-focus:text-[--secondary-foreground] group-hover:text-[--secondary-foreground]">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {techs.map((tech) => (
            <Tech key={tech} tech={tech} />
          ))}
        </div>
      </div>
    </a>
  );
};

export default Experience;
