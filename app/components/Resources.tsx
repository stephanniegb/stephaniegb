import UpRightArrow from "@/svg/UpRightArrow";

const Resources = ({
  img,
  title,
  year,
  url,
}: {
  img: string;
  url: string;
  title: string;
  year: string;
}) => {
  return (
    <a
      href={url}
      target="_blank"
      className="group grid grid-cols-12 items-center gap-4 rounded-md transition-[background-color] duration-500 focus:outline-none md:p-6 md:hover:bg-[--accent-hover] md:focus:bg-[--accent-hover]"
    >
      <div className="col-span-4 md:col-span-3">
        <div className="max-w-[200px] rounded-sm md:max-w-[150px]">
          <img
            src={img}
            className="w-full rounded-sm object-cover"
            alt={`screenshot of ${title}`}
          />
        </div>
      </div>
      <div className="col-span-8 flex flex-col gap-1 md:col-span-9">
        <p className="text-sm text-[var(--primary-foreground)]">{year}</p>
        <p className="group-hover:text-[--accent] group-focus:text-[--accent]">
          {title}
          <UpRightArrow className="ml-1 inline-block transition-all duration-500 group-hover:translate-x-[0.3rem] group-hover:translate-y-[-0.2rem] group-focus:translate-x-[0.3rem] group-focus:translate-y-[-0.2rem]" />
        </p>
      </div>
    </a>
  );
};

export default Resources;
