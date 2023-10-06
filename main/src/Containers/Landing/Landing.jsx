import React from "react";
import styles from "./Landing.module.scss";
import ProductWrapper from "../../Components/ProductWrapper/ProductWrapper";
const Landing = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <h1>
          Commanders Corner - Quick and cheap singles perfect for EDH decks
        </h1>
        <div>Carousel goes here</div>
      </div>
      <div className={styles.gallery}>
        <ProductWrapper />
      </div>
    </div>
  );
};

export default Landing;
