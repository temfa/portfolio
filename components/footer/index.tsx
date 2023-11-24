import React from "react";
import styles from "./styles.module.css";

const Footer = () => {
  let newDate = new Date();
  return (
    <div className={styles.footerContainer}>
      <p>© {newDate.getFullYear()} Tema Digital Designs - All Rights Reserved</p>
    </div>
  );
};

export default Footer;
