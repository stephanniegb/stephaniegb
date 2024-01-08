const Small = () => {
  return (
    <section className="z-[1]  bg-black relative px-4 py-16 flex flex-col gap-4">
      <div>
        <h3>About myself</h3>
      </div>
      <h2 className="text-pFS uppercase font-serif">
        I am Stephanie Egbuonu Lorem, ipsum dolor sit amet{" "}
        <span className="text-lemon">consectetur</span> adipisicing elit.
        Distinctio eos labore aliquam laborum doloribus atque quod harum,!
      </h2>

      <div>
        <a className="flex items-center gap-2" href="mailto:">
          <span className="p-2 rounded-full bg-offWhite text-brown">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M3 20.59L6.59 17H18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2zM3 22H2V6a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H7z"
              />
            </svg>
          </span>

          <span className="underline">contact me</span>
        </a>
      </div>
    </section>
  );
};

export default Small;
