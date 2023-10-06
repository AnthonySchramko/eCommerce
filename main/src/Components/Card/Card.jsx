import React from "react";
import { NavLink, useParams } from "react-router-dom";
import styles from "./Card.module.scss";
const Card = ({ id, name, img, price, desc }) => {
  return (
    <NavLink to={`/cards/${id}`}>
      <div className={styles.cardWrapper}>
        <img className={styles.imageWrapper} src={img} />
        <div className={styles.textWrapper}>
          <h2>{name}</h2>
          <p>{desc}</p>
          <h4>$ {price} </h4>
        </div>
      </div>
    </NavLink>
  );
};

export default Card;
