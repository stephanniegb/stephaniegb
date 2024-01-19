const Loading = () => {
  return (
    <section className="grid bg-black z-[1] text-[#d0d0c5]   relative overflow-hidden">
      <div className="h-screen grid justify-center w-1/5 absolute right-0">
        <p className="text-[8vw] font-extrabold">0</p>
      </div>
      <div className="w-screen h-seventyVH relative grid place-content-center p-4"></div>

      <div className="w-full flex flex-col opacity-0 transform translate-y-[-50vh] gap-4">
        <div
          style={{
            width: "clamp(13rem, 20vmax, 18.7rem)",
            height: "clamp(18rem, 22vmax, 25rem)",
          }}
          className="bg-hero-image  bg-cover bg-center my-0 mx-auto"
        ></div>
        <div>
          <span
            className="text-[.75rem] opacity-0 w-fit block my-0 mx-auto"
            style={{
              width: "clamp(13rem, 20vmax, 18.7rem)",
            }}
          >
            stephani.egb
          </span>
        </div>
      </div>
    </section>
  );
};

export default Loading;
