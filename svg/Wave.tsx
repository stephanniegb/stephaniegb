const Wave = () => {
  return (
    <svg
      className="z-[1] relative "
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <defs>
        <clipPath id="the-object">
          <path
            fill="#eae7e7"
            fillOpacity="1"
            d="M0,224L80,234.7C160,245,320,267,480,282.7C640,299,800,309,960,309.3C1120,309,1280,299,1360,293.3L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </clipPath>
        <filter id="gggrain-filter" width="140%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="4.22"
            numOctaves="2"
            stitchTiles="stitch"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="turbulence"
          />
          <feColorMatrix
            type="saturate"
            values="0"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="turbulence"
            result="colormatrix"
          ></feColorMatrix>
          <feComponentTransfer
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="colormatrix"
            result="componentTransfer"
          ></feComponentTransfer>
          <feBlend mode="multiply" in="SourceGraphic" />
        </filter>
      </defs>
      <path
        fill="#e7e5e5"
        fillOpacity="1"
        d="M0,224L80,234.7C160,245,320,267,480,282.7C640,299,800,309,960,309.3C1120,309,1280,299,1360,293.3L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        filter="url(#gggrain-filter)"
        clipPath="url(#the-object)"
      ></path>
    </svg>
  );
};

export default Wave;
