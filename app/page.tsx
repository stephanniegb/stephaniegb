import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Project from "./components/Project";

export default function Home() {
  return (
    <main className="h-full grid grid-cols-2">
      <section className="p-20 flex flex-col h-screen sticky top-0 justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-6xl mb-4">Stephanie Egbuonu</h1>
          <h2 className="text-xl">Frontend Engineer</h2>
          <p>help lorem lorrmm gjnf</p>
        </div>
        <Contact />
      </section>
      <section className="pt-20  w-full h-full">
        <div className="w-full flex flex-col gap-28 pr-20">
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
          <div className="flex-col gap-4">
            <Experience
              start="2024"
              end="present"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ducimus rem ratione et voluptatibus eaque at quo neque, optio culpa nisi molestias autem hic consequuntur inventore fuga? Mollitia, voluptates ut."
              title="lore"
              techs={["react", "next", "starknet js"]}
              url=""
            />
            <Experience
              start="2024"
              end="present"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ducimus rem ratione et voluptatibus eaque at quo neque, optio culpa nisi molestias autem hic consequuntur inventore fuga? Mollitia, voluptates ut."
              title="lore"
              techs={["react", "next", "starknet js"]}
              url=""
            />
            <Experience
              start="2024"
              end="present"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ducimus rem ratione et voluptatibus eaque at quo neque, optio culpa nisi molestias autem hic consequuntur inventore fuga? Mollitia, voluptates ut."
              title="lore"
              techs={["react", "next", "starknet js"]}
              url=""
            />
          </div>

          <div className="flex-col gap-4">
            <Project
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ducimus rem ratione et voluptatibus eaque at quo neque, optio culpa nisi molestias autem hic consequuntur inventore fuga? Mollitia, voluptates ut."
              title="lore"
              techs={["react", "next", "starknet js"]}
              url=""
              img="./projects/image-3.jpg"
            />
            <Project
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ducimus rem ratione et voluptatibus eaque at quo neque, optio culpa nisi molestias autem hic consequuntur inventore fuga? Mollitia, voluptates ut."
              title="lore"
              techs={["react", "next", "starknet js"]}
              url=""
              img="./projects/image-1.jpg"
            />
            <Project
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ducimus rem ratione et voluptatibus eaque at quo neque, optio culpa nisi molestias autem hic consequuntur inventore fuga? Mollitia, voluptates ut."
              title="lore"
              techs={["react", "next", "starknet js"]}
              url=""
              img="./projects/image-2.jpg"
            />
          </div>
          <div>ARTICLES</div>
        </div>

        <div></div>
      </section>
    </main>
  );
}
