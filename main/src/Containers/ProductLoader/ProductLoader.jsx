import React, { useState, useEffect } from "react";
import Products from "../Products/Products";

const ProductLoader = ({}) => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchData === null) {
      return;
    }
    const { input: searchTerm, selected: limit } = searchData;
    setLoading(true);
    setError(null);
    getAllCards()
      .then((cards) => setCards(cards))
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div>
      {loading && <h3>Searching...</h3>}
      {!loading && error && <h3>{error.message}</h3>}
      {!loading && cards.totalItems > 0 && <Products data={cards} />}
    </div>
  );
};

export default ProductLoader;
