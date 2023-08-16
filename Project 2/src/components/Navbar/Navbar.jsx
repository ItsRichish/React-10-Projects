import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className="container">
      <div className={styles.logo}>
        <img src="/images/logo.png" alt="logo img" />
      </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
