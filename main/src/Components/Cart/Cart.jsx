import { useState, useEffect } from "react";
import { getCart } from "../../Services/cards";
import styles from "./Cart.module.scss";
const Cart = ({ name, price, id, desc, img }) => {
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.imageWrapper} src={img} />
      </div>

      <div className={styles.textWrapper}>
        <h4>{name}</h4>
        <p>Price: ${price}</p>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Cart;
