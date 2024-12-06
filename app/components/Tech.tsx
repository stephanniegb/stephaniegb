const Tech = ({ tech }: { tech: string }) => {
  return (
    <p className="capitalize rounded-full bg-[--accent-hover] text-[#00b38b] text-xs w-fit py-1 px-3">
      {tech}
    </p>
  );
};

export default Tech;