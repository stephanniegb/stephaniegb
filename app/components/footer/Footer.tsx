import Github from "@/svg/Github";
import Styles from "./Footer.module.css";
import LinkedIn from "@/svg/LinkedIn";
import X from "@/svg/X";
import Instagram from "@/svg/Instagram";
import Envelope from "@/svg/Envelope";

const Footer = () => {
  return (
    <footer className="">
      <p>
        &#169; 2023 Stephanie Egbuonu. All rights reserved.{" "}
        <button className="">Credits</button>
      </p>
      <div className={Styles.linksContainer}>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <Github />
          <span className={Styles.linkText}>@stephanniegb</span>
        </a>

        <a href="http://" target="_blank" rel="noopener noreferrer">
          <X />
          <span className={Styles.linkText}>@Stephanniegb</span>
        </a>

        <a href="http://" target="_blank" rel="noopener noreferrer">
          <LinkedIn />
          <span className={Styles.linkText}>Stephanie Egbuonu</span>
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <Envelope />
          <span className={Styles.linkText}>egbuonustephanie@gmail.com</span>
        </a>
      </div>
    </footer>
    // <footer className={Styles.footerContainer}>
    //   <div className={Styles.mainFooter}>
    //     <div className={Styles.headingsContainer}>
    //       <h2>Lets talk about what we can build together</h2>

    //     </div>
    //     <form action="" className={Styles.form}>
    //       <input
    //         type="text"
    //         placeholder="name"
    //         className={Styles.footerInput}
    //       />
    //       <input
    //         type="text"
    //         placeholder="email"
    //         className={Styles.footerInput}
    //       />

    //       <textarea
    //         name=""
    //         id=""
    //         cols={30}
    //         rows={10}
    //         className={Styles.footerTextarea}
    //         placeholder="write me a message..."
    //       />
    //       <button type="submit">Send</button>
    //     </form>
    //   </div>

    //   <div className={Styles.rightsDiv}>

    //   </div>
    //   <div className={Styles.rights}></div>
    // </footer>
  );
};

export default Footer;
