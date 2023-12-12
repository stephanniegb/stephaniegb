import Github from "@/svg/Github";
import Styles from "./Footer.module.css";
import LinkedIn from "@/svg/LinkedIn";
import X from "@/svg/X";
import Instagram from "@/svg/Instagram";
import Envelope from "@/svg/Envelope";

const Footer = () => {
  return (
    <footer className=" flex flex-col gap-40 sticky -z-10 bottom-0  w-screen pt-8">
      <div className="text-center">
        <h3>Lets talk about what we can build together</h3>

        <p className="text-5xl">egbuonustephanie@gmail.com</p>
        <span className="font-cursive text-[2em]">stephani.egb</span>
      </div>

      <div className="grid grid-cols-5 w-[70vw] gap-4 my-0 mx-auto text-[#94948f]">
        <div className="border-[1px] border-solid border-[#2a2a28] h-[120px] w-full p-12 rounded-[15px] grid place-content-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
          >
            <g fill="none">
              <path
                stroke="currentColor"
                d="M3 11c0-3.771 0-5.657 1.172-6.828C5.343 3 7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172C21 5.343 21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828C18.657 21 16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172C3 18.657 3 16.771 3 13v-2Z"
              />
              <circle cx="16.5" cy="7.5" r="1.5" fill="currentColor" />
              <circle cx="12" cy="12" r="3.5" stroke="currentColor" />
            </g>
          </svg>
        </div>
        <div className="border-[1px] border-solid border-[#2a2a28] h-[120px] w-full p-12 rounded-[10px]  grid place-content-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M24 2.5a21.5 21.5 0 0 0-6.8 41.9c1.08.2 1.47-.46 1.47-1v-3.65c-6 1.3-7.24-2.88-7.24-2.88A5.7 5.7 0 0 0 9 33.68c-1.95-1.33.15-1.31.15-1.31a4.52 4.52 0 0 1 3.29 2.22c1.92 3.29 5 2.34 6.26 1.79a4.61 4.61 0 0 1 1.37-2.88c-4.78-.54-9.8-2.38-9.8-10.62a8.29 8.29 0 0 1 2.22-5.77a7.68 7.68 0 0 1 .21-5.69s1.8-.58 5.91 2.2a20.46 20.46 0 0 1 10.76 0c4.11-2.78 5.91-2.2 5.91-2.2a7.74 7.74 0 0 1 .21 5.69a8.28 8.28 0 0 1 2.21 5.77c0 8.26-5 10.07-9.81 10.61a5.12 5.12 0 0 1 1.46 4v5.9c0 .71.39 1.24 1.48 1A21.5 21.5 0 0 0 24 2.5"
            />
          </svg>
        </div>
        <div className="border-[1px] border-solid border-[#2a2a28] h-[120px] w-full p-12 rounded-[10px]  grid place-content-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5.5 40.5a2 2 0 0 0 2 2h33a2 2 0 0 0 2-2m0-33a2 2 0 0 0-2-2h-33a2 2 0 0 0-2 2"
            />
            <circle
              cx="15.329"
              cy="24"
              r="9.068"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <ellipse
              cx="31.198"
              cy="24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              rx="4.269"
              ry="9.068"
            />
            <ellipse
              cx="39.869"
              cy="24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              rx="1.87"
              ry="9.068"
            />
          </svg>
        </div>
        <div className="border-[1px] border-solid border-[#2a2a28]  h-[120px] w-full p-12 rounded-[10px]  grid place-content-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M13.808 10.469L20.88 2h-1.676l-6.142 7.353L8.158 2H2.5l7.418 11.12L2.5 22h1.676l6.486-7.765L15.842 22H21.5l-7.693-11.531Zm-2.296 2.748l-.752-1.107L4.78 3.3h2.575l4.826 7.11l.751 1.107l6.273 9.242h-2.574l-5.12-7.541Z"
            />
          </svg>
        </div>
        <div className="border-[1px] border-solid border-[#2a2a28] h-[120px] w-full p-12 rounded-[10px]  grid place-content-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
          >
            <circle cx="15.64" cy="13.46" r=".75" fill="currentColor" />
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.64 16.93v14.98m17.47 0V22.3a5.83 5.83 0 0 0-5.82-5.82a5.83 5.83 0 0 0-5.83 5.82v9.61m0-9.61v-5.37"
            />
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M40.5 5.5h-33a2 2 0 0 0-2 2v33a2 2 0 0 0 2 2h33a2 2 0 0 0 2-2v-33a2 2 0 0 0-2-2z"
            />
          </svg>
        </div>
      </div>

      <p className="border-t-[.5px] border-t-white border-solid p-8 text-sm">
        &#169; 2023 Stephanie Egbuonu. All rights reserved.{" "}
        <button className="">Credits</button>
      </p>
    </footer>
  );
};

export default Footer;
