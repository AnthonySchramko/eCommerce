import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ProductLoader from "../../Containers/ProductLoader/ProductLoader";

const ProductWrapper = () => {
  const [searchData, setSearchData] = useState(null);

  const onSearchSubmit = async (e) => {
    setSearchData(data);
  };
  return (
    <div>
      <SearchBar handleSubmit={onSearchSubmit} />
      {/* <ProductLoader searchData={searchData} /> */}
    </div>
  );
};

export default ProductWrapper;
