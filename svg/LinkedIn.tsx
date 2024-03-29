const LinkedIn = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="clamp(20px, 10vw, 48px)"
      height="clamp(20px, 10vw, 48px)"
      viewBox="0 0 48 48"
      className="group-hover:scale-110"
      style={{
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <circle cx="15.64" cy="13.46" r=".75" fill="currentColor" />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.64 16.93v14.98m17.47 0V22.3a5.83 5.83 0 0 0-5.82-5.82a5.83 5.83 0 0 0-5.83 5.82v9.61m0-9.61v-5.37"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M40.5 5.5h-33a2 2 0 0 0-2 2v33a2 2 0 0 0 2 2h33a2 2 0 0 0 2-2v-33a2 2 0 0 0-2-2z"
      />
    </svg>
  );
};

export default LinkedIn;
