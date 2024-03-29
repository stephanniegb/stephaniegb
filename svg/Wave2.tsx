const Wave2 = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 200"
      className="z-[1] relative "
      preserveAspectRatio="none"
      fill="#eae7e7"
    >
      <defs>
        <clipPath id="the-object">
          <path
            fill="#eae7e7"
            fillOpacity="1"
            d="M0,224L80,234.7C160,245,320,267,480,282.7C640,299,800,309,960,309.3C1120,309,1280,299,1360,293.3L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </clipPath>
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="4.22"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
          <feBlend in="SourceGraphic" in2="noisy" mode="multiply" />
        </filter>
      </defs>
      <path
        filter="url(#noiseFilter)"
        clipPath="url(#the-object)"
        d="M0,224L80,234.7C160,245,320,267,480,282.7C640,299,800,309,960,309.3C1120,309,1280,299,1360,293.3L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
      ></path>
    </svg>
  );
};

export default Wave2;
