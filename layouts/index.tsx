import React from "react";
import styles from "./styles.module.css";

const Layout = ({ children, type }: { children: React.ReactNode; type: boolean }) => {
  return (
    <div className={type ? styles.layoutWrapper : styles.layoutWrappers}>
      <div className={styles.layoutContainer}>{children}</div>;
    </div>
  );
};

export default Layout;
