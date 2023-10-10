import { useState, useEffect } from "react";
import { deleteFromCart, getCart } from "../../Services/cards";
import styles from "./Cart.module.scss";
const Cart = ({ name, price, id, desc, img, selectedWear }) => {
  const handleDeleteClick = () => {
    deleteFromCart(id);
  };
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.imageWrapper} src={img} />
      </div>

      <div className={styles.textWrapper}>
        <h4>{name}</h4>
        <p>
          Price: ${price}
          {selectedWear.map((quantity, index) => {
            if (quantity > 0) {
              switch (index) {
                case 0:
                  return <p key={index}> Quantity: {quantity}x NM</p>;
                case 1:
                  return <p key={index}> Quantity: {quantity}x VG</p>;
                case 2:
                  return <p key={index}> Quantity: {quantity}x LP</p>;
              }
            }
          })}
        </p>
        <p>{desc}</p>
      </div>
      <div className={styles.closeBar}>
        <button onClick={handleDeleteClick}>x</button>
      </div>
    </div>
  );
};

export default Cart;
