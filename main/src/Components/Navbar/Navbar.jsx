import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink to="/cards">
          <p className={styles.text}>Magic: The Gathering Cards | </p>
        </NavLink>
        <NavLink to="/cart">
          <p className={styles.text}> Cart</p>
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
