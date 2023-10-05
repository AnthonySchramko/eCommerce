import React from "react";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";
import CheckoutItem from "./CheckoutItem/CheckoutItem";
const Checkout = ({ cards, updated, setUpdated }) => {
  const { id } = useParams();

  return (
    <div>
      {cards &&
        cards.map((card) => {
          return (
            <CheckoutItem
              key={card.id}
              name={card.name}
              img={card.img}
              price={card.price}
              rarity={card.rarity}
              id={card.id}
              updated={updated}
              setUpdated={setUpdated}
            />
          );
        })}
    </div>
  );
};

export default Checkout;
