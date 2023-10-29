import styles from "./Work.module.css";
import Carousel from "../projects/Carousel";
import Project from "../projects/Projects";

const Work = () => {
  return (
    <section id="work" className={styles.workContainer}>
      <h2 className={styles.header}>
        check out my work...{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="50"
          viewBox="0 0 200 50"
        >
          <path
            d="M0 30 C 20 20, 40 40, 60 30 S 100 20, 120 30 S 160 20, 200 30"
            fill="none"
            stroke="#f2e9ce"
            stroke-width="3"
          />
        </svg>
      </h2>
      <section className={styles.projectsSection}>
        <div className={styles.left}>
          <ul className={styles.listOfProjects}>
            <li className={styles.projectTitle}>
              <span className={styles.indicator}></span>
              <span className={styles.projectName}>Projrct title</span>
            </li>
            <li className={styles.projectTitle}>
              <span className={styles.indicator}></span>
              <span className={styles.projectName}>Projrct title</span>
            </li>
            <li className={styles.projectTitle}>
              <span className={styles.indicator}></span>
              <span className={styles.projectName}>Projrct title</span>
            </li>
            <li className={styles.projectTitle}>
              <span className={styles.indicatorActive}></span>
              <span className={styles.projectNameActive}>Projrct title</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                className={styles.icon}
                width="30"
                height="30"
              >
                <path
                  d="M15,3 A12,12 0 0,1 15,27 A12,12 0 0,1 15,3"
                  fill="none"
                  stroke="#dc8f88"
                  stroke-width="2"
                />
              </svg>
            </li>
          </ul>
        </div>

        <div className={styles.right}>
          <Project
            description={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Reiciendis optio dicta est nostrum rem necessitatibus fugit"
            }
            url={"/Screenshot 2023-10-22 at 8.43.49 PM.png"}
            techs={["React", "typescript"]}
          />
          {/* <Carousel>
            <figure id="pro1" className={styles.project}>
              <img
                src="/Screenshot 2023-10-22 at 8.43.49 PM.png"
                alt=""
                className={styles.projectImg}
              />
              <figcaption>
                <p className={styles.projectDescription}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Reiciendis optio dicta est nostrum rem necessitatibus fugit
                  nam molestias minus nemo ipsa facere, dolores nobis animi
                  ullam ducimus perferendis corrupti sunt.
                </p>
                <div className={styles.captionBottom}>
                  <ul className={styles.techWrapper}>
                    <li className={styles.tech}>Rect</li>
                    <li className={styles.tech}>Ts</li>
                  </ul>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="LearnMoreLink"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      focusable="false"
                      className="icon"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </figcaption>
            </figure>
          </Carousel>
          <Carousel>
            <figure id="pro1" className={styles.project}>
              <img
                src="/Screenshot 2023-10-22 at 8.43.49 PM.png"
                alt=""
                className={styles.projectImg}
              />
              <figcaption>
                <p className={styles.projectDescription}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Reiciendis optio dicta est nostrum rem necessitatibus fugit
                  nam molestias minus nemo ipsa facere, dolores nobis animi
                  ullam ducimus perferendis corrupti sunt.
                </p>
                <div className={styles.captionBottom}>
                  <ul className={styles.techWrapper}>
                    <li className={styles.tech}>Rect</li>
                    <li className={styles.tech}>Ts</li>
                  </ul>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="LearnMoreLink"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      focusable="false"
                      className="icon"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </figcaption>
            </figure>
          </Carousel>
          <Carousel>
            <figure id="pro1" className={styles.project}>
              <img
                src="/Screenshot 2023-10-22 at 8.43.49 PM.png"
                alt=""
                className={styles.projectImg}
              />
              <figcaption>
                <p className={styles.projectDescription}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Reiciendis optio dicta est nostrum rem necessitatibus fugit
                  nam molestias minus nemo ipsa facere, dolores nobis animi
                  ullam ducimus perferendis corrupti sunt.
                </p>
                <div className={styles.captionBottom}>
                  <ul className={styles.techWrapper}>
                    <li className={styles.tech}>Rect</li>
                    <li className={styles.tech}>Ts</li>
                  </ul>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="LearnMoreLink"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      focusable="false"
                      className="icon"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </figcaption>
            </figure>
          </Carousel>
          <Carousel>
            <figure id="pro1" className={styles.project}>
              <img
                src="/Screenshot 2023-10-22 at 8.43.49 PM.png"
                alt=""
                className={styles.projectImg}
              />
              <figcaption>
                <p className={styles.projectDescription}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Reiciendis optio dicta est nostrum rem necessitatibus fugit
                  nam molestias minus nemo ipsa facere, dolores nobis animi
                  ullam ducimus perferendis corrupti sunt.
                </p>
                <div className={styles.captionBottom}>
                  <ul className={styles.techWrapper}>
                    <li className={styles.tech}>Rect</li>
                    <li className={styles.tech}>Ts</li>
                  </ul>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="LearnMoreLink"
                    href="#"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clip-rule="evenodd"
                    ></path>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      focusable="false"
                      className="icon"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </figcaption>
            </figure>
          </Carousel> */}
        </div>
      </section>
    </section>
  );
};

export default Work;
