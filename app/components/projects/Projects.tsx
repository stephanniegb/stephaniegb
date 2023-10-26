import Reveal from "../Reveal";
import styles from "./Projects.module.css";
const Projects = () => {
  return (
    <section>
      <h2 className={styles.heading}>SOME ThINGS IVE BUILT</h2>

      <div className={styles.projectsContainer}>
        <Reveal>
          <figure className={styles.project}>
            <div className={styles.projectImageWrapper}>
              <div className={styles.overlay}>
                <img
                  className={styles.revealImg}
                  src="/Screenshot 2023-10-22 at 8.43.49 PM.png"
                  alt=""
                />
              </div>
              <img
                src="https://colorlib.com/wp/wp-content/uploads/sites/2/14_awesome-websites.jpg"
                alt=""
                className={styles.projectImage}
              />
            </div>
            <figcaption className={styles.projectCaption}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Exercitationem ducimus numquam vel facere neque nihil saepe
                harum eveniet earum quae, sapiente a odio delectus alias
                asperiores voluptates porro dolor labore?
              </p>
              <ul className={styles.techWrapper}>
                <li className={styles.tech}>React</li>
                <li className={styles.tech}>Typescript</li>
                <li className={styles.tech}>React</li>
                <li className={styles.tech}>Typescript</li>
              </ul>
              <div className={styles.linksWrapper}>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <img src="/github.svg" alt="" className={styles.icon} />
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <img src="/openInNew.svg" alt="" className={styles.icon} />
                </a>
              </div>
            </figcaption>
          </figure>
        </Reveal>
        <Reveal>
          <figure className={styles.project}>
            <figcaption className={styles.projectCaption}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Exercitationem ducimus numquam vel facere neque nihil saepe
                harum eveniet earum quae, sapiente a odio delectus alias
                asperiores voluptates porro dolor labore?
              </p>
              <ul className={styles.techWrapper}>
                <li className={styles.tech}>React</li>
                <li className={styles.tech}>Typescript</li>
                <li className={styles.tech}>React</li>
                <li className={styles.tech}>Typescript</li>
              </ul>
              <div className={styles.linksWrapper}>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <img src="/github.svg" alt="" className={styles.icon} />
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <img src="/openInNew.svg" alt="" className={styles.icon} />
                </a>
              </div>
            </figcaption>
            <div className={styles.projectImageWrapper}>
              <div className={styles.overlay}></div>
              <img
                src="https://colorlib.com/wp/wp-content/uploads/sites/2/14_awesome-websites.jpg"
                alt=""
                className={styles.projectImage}
              />
            </div>
          </figure>
        </Reveal>
        <Reveal>
          <figure className={styles.project}>
            <div className={styles.projectImageWrapper}>
              <div className={styles.overlay}></div>
              <img
                src="/Screenshot 2023-10-22 at 8.43.49 PM.png"
                alt=""
                className={styles.projectImage}
              />
            </div>
            <figcaption className={styles.projectCaption}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Exercitationem ducimus numquam vel facere neque nihil saepe
                harum eveniet earum quae, sapiente a odio delectus alias
                asperiores voluptates porro dolor labore?
              </p>
              <ul className={styles.techWrapper}>
                <li className={styles.tech}>React</li>
                <li className={styles.tech}>Typescript</li>
                <li className={styles.tech}>React</li>
                <li className={styles.tech}>Typescript</li>
              </ul>
              <div className={styles.linksWrapper}>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <img src="/github.svg" alt="" className={styles.icon} />
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <img src="/openInNew.svg" alt="" className={styles.icon} />
                </a>
              </div>
            </figcaption>
          </figure>
        </Reveal>
        <Reveal>
          <figure className={styles.project}>
            <figcaption className={styles.projectCaption}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Exercitationem ducimus numquam vel facere neque nihil saepe
                harum eveniet earum quae, sapiente a odio delectus alias
                asperiores voluptates porro dolor labore?
              </p>
              <ul className={styles.techWrapper}>
                <li className={styles.tech}>React</li>
                <li className={styles.tech}>Typescript</li>
                <li className={styles.tech}>React</li>
                <li className={styles.tech}>Typescript</li>
              </ul>
              <div className={styles.linksWrapper}>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <img src="/github.svg" alt="" className={styles.icon} />
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <img src="/openInNew.svg" alt="" className={styles.icon} />
                </a>
              </div>
            </figcaption>
            <div className={styles.projectImageWrapper}>
              <div className={styles.overlay}></div>
              <img
                src="/Screenshot 2023-10-22 at 8.43.49 PM.png"
                alt=""
                className={styles.projectImage}
              />
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
};

export default Projects;
