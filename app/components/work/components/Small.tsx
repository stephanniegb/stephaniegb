import UpRightArrow from "@/svg/UpRightArrow";
import Image from "next/image";

const Small = () => {
  return (
    <>
      <section className="z-[1]  relative px-4 bg-[#D9D9D9] ">
        <div className="flex flex-col py-16 gap-12 ">
          <figure className="w-[90vw] max-w-[700px] h-[50vw] max-h-[420px] my-0 mx-auto">
            <Image
              src={"/Screenshot 2023-10-22 at 8.34.54 PM.png"}
              alt=""
              height={100}
              width={100}
              className="w-full h-full object-cover"
            />
            <figcaption>
              <h4 className="flex items-center">
                Scissors{" "}
                <span>
                  <UpRightArrow />
                </span>
              </h4>
            </figcaption>
          </figure>
          {/* 
          <figure className="w-[] h-[] rounded-[25px] my-0 mx-auto">
            <Image
              src={"/Screenshot 2023-10-22 at 8.34.54 PM.png"}
              alt=""
              height={100}
              width={100}
              className="w-full h-full object-cover rounded-[25px]"
            />
          </figure>
          <figure className="w-[350px] h-[320px] rounded-[25px] my-0 mx-auto">
            <Image
              src={"/Screenshot 2023-10-22 at 8.34.54 PM.png"}
              alt=""
              height={100}
              width={100}
              className="w-full h-full object-cover rounded-[25px]"
            />
          </figure>
          <figure className="w-[350px] h-[320px] rounded-[25px] my-0 mx-auto">
            <Image
              src={"/Screenshot 2023-10-22 at 8.34.54 PM.png"}
              alt=""
              height={100}
              width={100}
              className="w-full h-full object-cover rounded-[25px]"
            />
          </figure>
          <figure className="w-[350px] h-[320px] rounded-[25px] my-0 mx-auto">
            <Image
              src={"/Screenshot 2023-10-22 at 8.34.54 PM.png"}
              alt=""
              height={100}
              width={100}
              className="w-full h-full object-cover rounded-[25px]"
            />
          </figure> */}
        </div>
        <div className="pt-12">
          <h3 className="text-center">Archive</h3>
          <div className="flex flex-col justify-center uppercase">
            <a
              className="underline text-[1.1em] w-fit mx-auto my-0  flex gap-4 items-center "
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              Some link
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
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
            </a>
            <a
              className="underline text-[1.1em] w-fit mx-auto my-0  flex gap-4 items-center "
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              Some link
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="m218.83 130.83l-72 72a4 4 0 0 1-5.66-5.66L206.34 132H40a4 4 0 0 1 0-8h166.34l-65.17-65.17a4 4 0 0 1 5.66-5.66l72 72a4 4 0 0 1 0 5.66"
                />
              </svg>
            </a>
            <a
              className="underline text-[1.1em] w-fit mx-auto my-0  flex gap-4 items-center "
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              Some link
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="m218.83 130.83l-72 72a4 4 0 0 1-5.66-5.66L206.34 132H40a4 4 0 0 1 0-8h166.34l-65.17-65.17a4 4 0 0 1 5.66-5.66l72 72a4 4 0 0 1 0 5.66"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
      <svg
        className="z-[1] relative"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#d9d9d9"
          fill-opacity="1"
          d="M0,224L80,234.7C160,245,320,267,480,282.7C640,299,800,309,960,309.3C1120,309,1280,299,1360,293.3L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};

export default Small;
