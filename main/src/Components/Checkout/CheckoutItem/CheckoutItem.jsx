import React from "react";
import { deleteFromCart } from "../../../Services/cards.js";
const CheckoutItem = ({
  id,
  name,
  img,
  price,
  rarity,
  updated,
  setUpdated,
}) => {
  const handleClick = async () => {
    await deleteFromCart(id);
    setUpdated(updated + 1);
  };
  return (
    <div>
      <div>
        <img src={img} alt="" />
        <h3>{name}</h3>
        <h5>{rarity}</h5>
        <h4>$ {price}</h4>
        <button onClick={handleClick}>Remove</button>
      </div>
    </div>
  );
};

export default CheckoutItem;
