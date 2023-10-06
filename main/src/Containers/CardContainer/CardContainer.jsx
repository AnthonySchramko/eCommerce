import React from "react";
import Card from "../../Components/Card/Card";
import { useParams } from "react-router-dom";
import styles from "./CardContainer.module.scss";
const CardContainer = ({ cards }) => {
  const { id } = useParams();

  return (
    <div className={styles.container}>
      {cards &&
        cards.map((card) => {
          return (
            <Card
              key={card.id}
              name={card.name}
              img={card.img}
              price={card.price}
              rarity={card.rarity}
              colours={card.colours}
              id={card.id}
              desc={card.desc}
            />
          );
        })}
    </div>
  );
};

export default CardContainer;
