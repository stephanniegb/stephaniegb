"use client";
import styles from "./Work.module.css";
import Project from "../projects/Projects";
import RevealBgColor from "../RevealAnimations/RevealBgColor";

const Work = () => {
  return (
    <section className="overflow-hidden ">
      <section id="work" className="text-white">
        <h2 className="text-[12vw] p-12 font-Holiday_Sunday">Projects</h2>
        <section className={styles.ProjectsWrapper}>
          <div className="flex flex-col w-[80%] my-0 mx-auto">
            <Project
              id="project1"
              styles={styles}
              techs={["React", "TypeScript", "Nodejs", "Express"]}
              projTitle="Scissors"
              imgUrl="/Screenshot 2023-10-22 at 8.43.49 PM.png"
              images={[
                "/Screenshot 2023-10-22 at 8.43.49 PM.png",
                "/Screenshot 2023-11-10 at 4.13.47 PM.png",
                "/Screenshot 2023-11-10 at 4.14.13 PM.png",
              ]}
            />
            <Project
              id="project2"
              styles={styles}
              techs={["VueJs", "Javascript", "Sass"]}
              projTitle="goShop"
              imgUrl="/IMG_6522 Background Removed.png"
              images={[
                "/Screenshot 2023-11-10 at 4.27.31 PM.png",
                "/Screenshot 2023-11-10 at 4.28.55 PM.png",
                "/Screenshot 2023-11-10 at 4.29.56 PM.png",
              ]}
            />

            <Project
              id="project2"
              styles={styles}
              techs={["VueJs", "Javascript", "Sass"]}
              projTitle="goShop"
              imgUrl="/IMG_6522 Background Removed.png"
              images={[
                "/Screenshot 2023-11-10 at 4.27.31 PM.png",
                "/Screenshot 2023-11-10 at 4.28.55 PM.png",
                "/Screenshot 2023-11-10 at 4.29.56 PM.png",
              ]}
            />

            <Project
              id="project2"
              styles={styles}
              techs={["VueJs", "Javascript", "Sass"]}
              projTitle="goShop"
              imgUrl="/IMG_6522 Background Removed.png"
              images={[
                "/Screenshot 2023-11-10 at 4.27.31 PM.png",
                "/Screenshot 2023-11-10 at 4.28.55 PM.png",
                "/Screenshot 2023-11-10 at 4.29.56 PM.png",
              ]}
            />
            <Project
              id="project2"
              styles={styles}
              techs={["VueJs", "Javascript", "Sass"]}
              projTitle="goShop"
              imgUrl="/IMG_6522 Background Removed.png"
              images={[
                "/Screenshot 2023-11-10 at 4.27.31 PM.png",
                "/Screenshot 2023-11-10 at 4.28.55 PM.png",
                "/Screenshot 2023-11-10 at 4.29.56 PM.png",
              ]}
            />
            <Project
              id="project2"
              styles={styles}
              techs={["VueJs", "Javascript", "Sass"]}
              projTitle="goShop"
              imgUrl="/IMG_6522 Background Removed.png"
              images={[
                "/Screenshot 2023-11-10 at 4.27.31 PM.png",
                "/Screenshot 2023-11-10 at 4.28.55 PM.png",
                "/Screenshot 2023-11-10 at 4.29.56 PM.png",
              ]}
            />
            <Project
              id="project2"
              styles={styles}
              techs={["VueJs", "Javascript", "Sass"]}
              projTitle="goShop"
              imgUrl="/IMG_6522 Background Removed.png"
              images={[
                "/Screenshot 2023-11-10 at 4.27.31 PM.png",
                "/Screenshot 2023-11-10 at 4.28.55 PM.png",
                "/Screenshot 2023-11-10 at 4.29.56 PM.png",
              ]}
            />
          </div>
        </section>
      </section>

      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#273036"
          fill-opacity="1"
          d="M0,256L80,250.7C160,245,320,235,480,213.3C640,192,800,160,960,170.7C1120,181,1280,235,1360,261.3L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg> */}

      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#273036"
          fill-opacity="1"
          d="M0,128L80,138.7C160,149,320,171,480,186.7C640,203,800,213,960,192C1120,171,1280,117,1360,90.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg> */}
      {/* <svg
        className="w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="white"
          fill-opacity="1"
          d="M0,128L80,122.7C160,117,320,107,480,117.3C640,128,800,160,960,181.3C1120,203,1280,213,1360,218.7L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg> */}

      {/* <svg
        className="w-full"
        width="500"
        height="80"
        viewBox="0 0 500 80"
        preserveAspectRatio="none"
      >
        <path d="M0,0 L0,40 Q250,100 500,40 L500,0 Z" fill="white" />
      </svg> */}
    </section>
  );
};

export default Work;
