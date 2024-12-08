import UpRightArrow from "@/svg/UpRightArrow";
import Tech from "./Tech";

const Project = ({
  img,
  description,
  title,
  url,
  techs,
}: {
  img: string;
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
      className="group flex w-full cursor-pointer flex-col-reverse gap-4 rounded-md px-0 py-8 transition-[background-color] duration-500 focus:outline-none md:grid md:grid-cols-10 md:p-8 md:hover:bg-[--accent-hover] md:focus:bg-[--accent-hover]"
    >
      <div className="col-span-3">
        <div className="h-[100px] max-w-[200px] rounded-sm md:max-w-[150px]">
          <img
            src={img}
            className="w-full rounded-sm object-cover"
            alt={`screenshot of ${title}`}
          />
        </div>
      </div>
      <div className="col-span-7 flex flex-col gap-3">
        <div className="flex items-center gap-1">
          <h3 className="text-base capitalize group-hover:text-[--accent] group-focus:text-[--accent]">
            {title}
          </h3>
          <span className="inline-block transition-all duration-500 group-hover:translate-x-[0.3rem] group-hover:translate-y-[-0.2rem] group-focus:translate-x-[0.3rem] group-focus:translate-y-[-0.2rem]">
            <UpRightArrow />
          </span>
        </div>
        <p className="text-sm text-[--primary-foreground] first-letter:uppercase group-hover:text-[--secondary-foreground] group-focus:text-[--secondary-foreground]">
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

export default Project;
