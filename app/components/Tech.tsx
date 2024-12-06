const Tech = ({ tech }: { tech: string }) => {
  return (
    <p className="capitalize rounded-full bg-[#29120c78] text-sm w-fit py-1 px-3">
      {tech}
    </p>
  );
};

export default Tech;
