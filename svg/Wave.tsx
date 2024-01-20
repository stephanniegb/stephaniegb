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
{
  /* <svg
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  xmlns:svgjs="http://svgjs.dev/svgjs"
  viewBox="0 0 700 700"
  width="700"
  height="700"
>
  <defs>
    <linearGradient
      gradientTransform="rotate(-150, 0.5, 0.5)"
      x1="50%"
      y1="0%"
      x2="50%"
      y2="100%"
      id="gggrain-gradient2"
    >
      <stop
        stop-color="hsl(194, 83%, 49%)"
        stop-opacity="1"
        offset="-0%"
      ></stop>
      <stop
        stop-color="rgba(255,255,255,0)"
        stop-opacity="0"
        offset="100%"
      ></stop>
    </linearGradient>
    <linearGradient
      gradientTransform="rotate(150, 0.5, 0.5)"
      x1="50%"
      y1="0%"
      x2="50%"
      y2="100%"
      id="gggrain-gradient3"
    >
      <stop stop-color="hsl(227, 100%, 50%)" stop-opacity="1"></stop>
      <stop
        stop-color="rgba(255,255,255,0)"
        stop-opacity="0"
        offset="100%"
      ></stop>
    </linearGradient>
    <filter
      id="gggrain-filter"
      x="-20%"
      y="-20%"
      width="140%"
      height="140%"
      filterUnits="objectBoundingBox"
      primitiveUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.55"
        numOctaves="2"
        seed="2"
        stitchTiles="stitch"
        x="0%"
        y="0%"
        width="100%"
        height="100%"
        result="turbulence"
      ></feTurbulence>
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
      >
        <feFuncR type="linear" slope="3"></feFuncR>
        <feFuncG type="linear" slope="3"></feFuncG>
        <feFuncB type="linear" slope="3"></feFuncB>
      </feComponentTransfer>
      <feColorMatrix
        x="0%"
        y="0%"
        width="100%"
        height="100%"
        in="componentTransfer"
        result="colormatrix2"
        type="matrix"
        values="1 0 0 0 0
          0 1 0 0 0
          0 0 1 0 0
          0 0 0 19 -11"
      ></feColorMatrix>
    </filter>
  </defs>
  <g>
    <rect width="100%" height="100%" fill="hsl(0, 100%, 60%)"></rect>
    <rect width="100%" height="100%" fill="url(#gggrain-gradient3)"></rect>
    <rect width="100%" height="100%" fill="url(#gggrain-gradient2)"></rect>
    <rect
      width="100%"
      height="100%"
      fill="transparent"
      filter="url(#gggrain-filter)"
      opacity="1"
      style="mix-blend-mode: soft-light"
    ></rect>
  </g>
</svg>; */
}
