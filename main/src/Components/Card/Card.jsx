import React from "react";
import { NavLink, useParams } from "react-router-dom";
import styles from "./Card.module.scss";
const Card = ({ id, name, img, price, desc }) => {
  return (
    <NavLink to={`/cards/${id}`}>
      <div className={styles.cardWrapper}>
        <h4>{name}</h4>
        <img className={styles.imageWrapper} src={img} />
        <div className={styles.textWrapper}>
          <p>${price}</p>
        </div>
      </div>
    </NavLink>
  );
};

export default Card;
