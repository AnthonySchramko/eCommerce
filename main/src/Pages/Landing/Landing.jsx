import React, { useEffect, useState } from "react";
import styles from "./Landing.module.scss";
import ProductWrapper from "../../Containers/ProductWrapper/ProductWrapper";
import { getAllCards } from "../../Services/cards";
import Carousel from "../../Components/Carousel/Carousel";
const Landing = () => {
  const [cards, setCards] = useState(null);

  useEffect(() => {
    getAllCards().then((cards) => setCards(cards));
  }, []);

  const getFeatured = (cards) => {
    return cards ? cards.filter((card) => card.featured) : [];
  };

  return (
    <div className={styles.body}>
      <div className={styles.wrapper}>
        <h1>
          Commanders Corner - Quick and cheap singles perfect for EDH decks
        </h1>
        <h2>Featured Cards</h2>
        {cards && <Carousel cards={getFeatured(cards)} />}
      </div>
      <div className={styles.gallery}>
        <ProductWrapper />
      </div>
    </div>
  );
};

export default Landing;
