import React, { useEffect, useState } from "react";
import CardContainer from "../CardContainer/CardContainer";
import { getAllCards } from "../../Services/cards";
import { generateCard } from "../../Services/import";

const Products = ({ searchTerm, searched }) => {
  const [cards, setCards] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const wrapper = async () => {
      try {
        const allCards = await getAllCards();
        setCards(allCards);
        allCards.map(async (card) => generateCard(card));
        setLoading(false);
      } catch (error) {
        console.error("Error");
        setLoading(false);
      }
    };
    wrapper();
  }, []);
  let filteredCards = cards;
  if (searched) {
    if (searched) {
      filteredCards = cards.filter(
        (card) =>
          typeof searchTerm === "string" &&
          card.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }
  return (
    <div>
      {loading ? <p>Loading...</p> : <CardContainer cards={filteredCards} />}
    </div>
  );
};

export default Products;
