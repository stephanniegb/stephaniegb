import Styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={Styles.footerContainer}>
      <div className={Styles.contactContainer}>
        <div>
          <img src="" alt="" className={Styles.background} />
          <img
            // src="https://png.pngtree.com/png-vector/20190909/ourmid/pngtree-red-heart-icon-isolated-png-image_1726594.jpg"
            alt=""
            className={Styles.popOut}
          />
        </div>
        Want to work with me?
      </div>
    </footer>
  );
};

export default Footer;
