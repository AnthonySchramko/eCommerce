import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Products from "../../Containers/Products/Products";
import styles from "./ProductWrapper.module.scss";
const ProductWrapper = () => {
  const [searchData, setSearchData] = useState("");
  const [searched, setSearched] = useState(false);

  const onSearchSubmit = (data) => {
    setSearchData(data);
  };
  return (
    <div className={styles.wrapper}>
      <SearchBar handleSubmit={onSearchSubmit} setSearchState={setSearched} />
      <Products searchTerm={searchData} searched={searched} />
    </div>
  );
};

export default ProductWrapper;
