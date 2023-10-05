import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ProductLoader from "../../Containers/ProductLoader/ProductLoader";
import CardContainer from "../../Containers/CardContainer/CardContainer";
import Products from "../../Containers/Products/Products";

const ProductWrapper = () => {
  const [searchData, setSearchData] = useState(null);

  const onSearchSubmit = async (e) => {
    setSearchData(data);
  };
  return (
    <div>
      <SearchBar handleSubmit={onSearchSubmit} />
      <Products />
    </div>
  );
};

export default ProductWrapper;
