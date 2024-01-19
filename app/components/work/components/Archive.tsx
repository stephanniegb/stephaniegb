import RightArrow from "@/svg/RightArrow";

const ArchiveLink = ({ text, url }: { text: string; url: string }) => {
  return (
    <a
      className="underline text-[1.1em] w-fit flex gap-4 items-center group"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
      <span className="transition-[transform,color] duration-500 ease-in-out group-hover:text-lemon transform group-hover:-rotate-[30deg]">
        <RightArrow />
      </span>
    </a>
  );
};
const Archive = () => {
  return (
    <div className="w-fit px-8 py-8 my-0 mx-auto z-[1] relative">
      <h3 className="w-fit py-8 text-h3Fs uppercase">Archive</h3>
      <div className="flex flex-col gap-3 justify-center uppercase">
        <ArchiveLink text="Some link" url="http://" />
        <ArchiveLink text="Some link" url="http://" />
        <ArchiveLink text="Some link" url="http://" />
        <ArchiveLink text="Some link" url="http://" />
      </div>
    </div>
  );
};

export default Archive;
