import React from "react";
import styles from "./index.module.scss";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}></div>
      <h1 className={styles.siteTitle}>Aquarium</h1>
    </div>
  );
}

export default Header;
