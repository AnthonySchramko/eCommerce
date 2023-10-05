import React from "react";
import styles from "./Landing.module.scss";
const Landing = () => {
  return (
    <div className={styles.wrapper}>
      <section classname={styles.title}>
        <h1>
          Commanders Corner - Quick and cheap singles perfect for EDH decks
        </h1>
      </section>
    </div>
  );
};

export default Landing;
