import React, { useState, useEffect } from "react";

const ProductLoader = ({}) => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchData === null) {
      return;
    }
  });
  return <div></div>;
};

export default ProductLoader;
