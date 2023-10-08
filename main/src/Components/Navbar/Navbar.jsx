import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
const Navbar = () => {
  return (
    <div>
      <img className={styles.icon} src="../../../public/CC-Icon.png" alt="" />
      <nav>
        <NavLink to="/">
          <p className={styles.text}>Home |</p>
        </NavLink>
        <NavLink to="/cart">
          <p className={styles.text}> Cart</p>
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
