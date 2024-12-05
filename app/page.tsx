import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="h-full grid grid-cols-2">
      <section className="p-20 flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-6xl mb-4">Stephanie Egbuonu</h1>
          <h2 className="text-xl">Frontend Engineer</h2>
          <p>help lorem lorrmm gjnf</p>
        </div>
        <Contact />
      </section>
      <section className="pt-20  w-full h-full  overflow-y-auto">
        <div className="w-full h-[200vh] flex flex-col gap-20 pr-20">
          <div className="flex flex-col gap-6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              ducimus rem ratione et voluptatibus eaque at quo neque, optio
              culpa nisi molestias autem hic consequuntur inventore fuga?
              Mollitia, voluptates ut.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              ducimus rem ratione et voluptatibus eaque at quo neque, optio
              culpa nisi molestias autem hic consequuntur inventore fuga?
              Mollitia, voluptates ut.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              ducimus rem ratione et voluptatibus eaque at quo neque, optio
              culpa nisi molestias autem hic consequuntur inventore fuga?
              Mollitia, voluptates ut.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              ducimus rem ratione et voluptatibus eaque at quo neque, optio
              culpa nisi molestias autem hic consequuntur inventore fuga?
              Mollitia, voluptates ut.
            </p>
          </div>
          <div>EXPERIENCE</div>
          <div>PROJECTS</div>
          <div>ARTICLES</div>
        </div>

        <div></div>
      </section>
    </main>
  );
}
