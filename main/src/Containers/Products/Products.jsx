import React, { useEffect, useState } from "react";

import CardContainer from "../CardContainer/CardContainer";
const Products = () => {
  return (
    <div>
      <h1>All Products</h1>
      <CardContainer cards={cards} />
    </div>
  );
};

export default Products;
