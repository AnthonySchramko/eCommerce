import React from "react";
import { NavLink, useParams } from "react-router-dom";
import styles from "./Card.module.scss";
const Card = ({ id, name, img, price, desc }) => {
  return (
    <div>
      <NavLink to={`/cards/${id}`}>
        <div>
          <div className={styles.imageWrapper}>
            <img src={img} />
          </div>
          <div className={styles.textWrapper}>
            <h2>{name}</h2>
            <p>{desc}</p>
            <h4>$ {price} </h4>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Card;
