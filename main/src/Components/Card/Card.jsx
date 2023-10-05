import React from "react";
import { NavLink, useParams } from "react-router-dom";
import styles from "./Card.module.scss";
const Card = ({ id, name, img, price, mana }) => {
  return (
    <div>
      <NavLink to={`/cards/${id}`}>
        <div>
          <h3>{name}</h3>
          <img src={img} />
          <h4>$ {price} </h4>
        </div>
      </NavLink>
    </div>
  );
};

export default Card;
