const Wave2 = () => {
  return (
    <svg
      className="z-[1] relative "
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      style={{
        width: "100%",
        height: "auto",
      }}
    >
      <path
        fill="#e7e5e5"
        fillOpacity="1"
        d="M0,224L80,234.7C160,245,320,267,480,282.7C640,299,800,309,960,309.3C1120,309,1280,299,1360,293.3L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        filter="url(#noiseFilter)"
        clipPath="url(#the-object)"
      ></path>
    </svg>
  );
};

export default Wave2;
