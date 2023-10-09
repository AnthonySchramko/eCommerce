import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.icon} src="../../../CC-Icon.png" alt="" />
      <nav className={styles.textWrapper}>
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
