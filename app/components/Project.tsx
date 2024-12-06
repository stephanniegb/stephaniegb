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
      className="w-full focus:bg-red-800 focus:outline-none gap-4 hover:bg-red-800 p-8 rounded-md grid grid-cols-10 cursor-pointer transition-[background-color] duration-500 group"
    >
      <div className="col-span-3">
        <div className="h-[100px] max-w-[150px]  rounded-sm">
          <img
            src={img}
            className="w-full rounded-sm object-cover"
            alt={`screenshot of ${title}`}
          />
        </div>
      </div>
      <div className="col-span-7 flex flex-col gap-3">
        <div className="flex  items-center  gap-1">
          <h3 className="capitalize">{title}</h3>
          <span className="inline-block transition-all duration-500 group-hover:translate-x-[0.3rem] group-hover:translate-y-[-0.2rem]">
            <UpRightArrow />
          </span>
        </div>
        <p className="first-letter:uppercase text-[--primary-foreground]">
          {description}
        </p>
        <div className="flex gap-2">
          {techs.map((tech) => (
            <Tech key={tech} tech={tech} />
          ))}
        </div>
      </div>
    </a>
  );
};

export default Project;
