const Tech = ({ tech }: { tech: string }) => {
  return (
    <p className="w-fit rounded-full bg-[--accent-hover] px-3 py-1 text-xs text-[#00b38b] first-letter:uppercase">
      {tech}
    </p>
  );
};

export default Tech;
