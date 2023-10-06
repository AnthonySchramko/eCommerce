import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Products from "../../Containers/Products/Products";
import styles from "./ProductWrapper.module.scss";
const ProductWrapper = () => {
  const [searchData, setSearchData] = useState(null);

  const onSearchSubmit = async (e) => {
    setSearchData(data);
  };
  return (
    <div className={styles.wrapper}>
      <SearchBar handleSubmit={onSearchSubmit} />
      <Products />
    </div>
  );
};

export default ProductWrapper;
