import { useState } from "react";
import Card from "../Card/Card";
import styles from "./Carousel.module.scss";

const Carousel = ({ cards }) => {
  const [index, setIndex] = useState([0, 1, 2]);

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
    <div>
      <div className={styles.carousel}>
        {cards.length > 3 && (
          <img
            src="../../../public/left-arrow.png"
            onClick={() => updateIndex(-1)}
            className={styles.button}
          />
        )}
        {index.map((cardIndex) => {
          const card = cards[cardIndex];
          const imgSrc = card.altImg ? card.altImg : card.img;
          return (
            <Card
              key={card.id}
              name={card.name}
              img={imgSrc}
              price={card.price}
              rarity={card.rarity}
              colours={card.colours}
              id={card.id}
              desc={card.desc}
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
    </div>
  );
};

export default Carousel;
