const RightArrow = ({
  width = "24",
  height = "24",
}: {
  width: string;
  height: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={height}
      height={height}
      viewBox="0 0 24 24"
    >
      <g transform="rotate(180 12 12)">
        <path
          fill="none"
          stroke="currentColor"
          d="M8 5c0 .742-.733 1.85-1.475 2.78c-.954 1.2-2.094 2.247-3.401 3.046C2.144 11.425.956 12 0 12m0 0c.956 0 2.145.575 3.124 1.174c1.307.8 2.447 1.847 3.401 3.045C7.267 17.15 8 18.26 8 19m-8-7h24"
        />
      </g>
    </svg>
  );
};

export default RightArrow;
