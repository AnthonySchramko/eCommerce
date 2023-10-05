import React, { useEffect, useState } from "react";
import CardContainer from "../CardContainer/CardContainer";
import { getAllCards } from "../../Services/cards";
const Products = () => {
  const [cards, setCards] = useState(null);
  useEffect(() => {
    const wrapper = async () => {
      const allCards = await getAllCards();
      setCards(allCards);
    };
    wrapper();
  }, []);
  return (
    <div>
      <h1>All Products</h1>
      <CardContainer cards={cards} />
    </div>
  );
};

export default Products;
