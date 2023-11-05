import styles from "./About.module.css";
const About = () => {
  return (
    <section id="about" className={styles.aboutContainer}>
      <h2 className={styles.header}>
        About me...
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="50"
          viewBox="0 0 200 50"
        >
          <path
            d="M0 30 C 20 20, 40 40, 60 30 S 100 20, 120 30 S 160 20, 200 30"
            fill="none"
            stroke="#000000"
            stroke-width="3"
          />
        </svg>
      </h2>
      <div className={styles.mainAbout}>
        <article className={styles.aboutArticleContainer}>
          <h2 className={styles.aboutArticle}>
            I am stephanie Egbuonu i build beautiful things
          </h2>
        </article>
        <div className={styles.stephImgDiv}>
          <img
            className={styles.stephImg}
            src="/IMG_6522 Background Removed.png"
            alt="Stephanie working"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
