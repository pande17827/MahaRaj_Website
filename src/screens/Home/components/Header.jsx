import React from "react";
import styles from "./Header.module.css";
import logo from "../assets/icons/logo.png"; // replace with your logo path

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Logo Section */}
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>

      {/* Navigation Links */}
      <nav className={styles.nav}>
        <a href="#about">About us</a>
        <a href="#book">Book Now</a>
        <a href="#partner">Partner</a>
        <a href="#contact">Contact us</a>
      </nav>
    </header>
  );
};

export default Header;
