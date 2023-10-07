import { useState } from "react";
import Card from "../Card/Card";
import styles from "./Carousel.module.scss";

const Carousel = ({ cards }) => {
  const [index, setIndex] = useState([0, 1, 2, 3]);

  const updateIndex = (step) => {
    const newIndex = index.map((item) => {
      let newItem = (item + step) % cards.length;
      if (newItem < 0) {
        newItem += cards.length;
      }
      return newItem;
    });
    setIndex(newIndex);
  };

  return (
    <div className={styles.carousel}>
      {cards.length > 3 && (
        <img
          src="../../../public/left-arrow.png"
          onClick={() => updateIndex(-1)}
          className={styles.button}
        />
      )}
      {index.map((cardIndex) => {
        return (
          <Card
            key={cards[cardIndex].id}
            name={cards[cardIndex].name}
            img={cards[cardIndex].img}
            price={cards[cardIndex].price}
            rarity={cards[cardIndex].rarity}
            colours={cards[cardIndex].colours}
            id={cards[cardIndex].id}
            desc={cards[cardIndex].desc}
          />
        );
      })}
      {cards.length > 3 && (
        <img
          src="../../../public/right-arrow.png"
          onClick={() => updateIndex(1)}
          className={styles.button}
        />
      )}
    </div>
  );
};

export default Carousel;
