import React from "react";
import styles from "./LinksContainer.module.css";

function LinksContainer() {
  return (
    <div>
      <ul className={styles.unordered}>
        <li className={styles.link_button}>GitHub</li>
        <li className={styles.link_button}>Frontend Mentor</li>
        <li className={styles.link_button}>LinkedIn</li>
        <li className={styles.link_button}>Twitter</li>
        <li className={styles.link_button}>Instagram</li>
      </ul>
    </div>
  );
}

export default LinksContainer;
