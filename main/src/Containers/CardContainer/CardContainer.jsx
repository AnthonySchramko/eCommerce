import React from "react";
import Card from "../../Components/Card/Card";
import { useParams } from "react-router-dom";
const CardContainer = ({ cards }) => {
  const { id } = useParams();

  return (
    <div>
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
            />
          );
        })}
    </div>
  );
};

export default CardContainer;
