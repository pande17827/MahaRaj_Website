import React from "react";
import styles from "./Footer.module.css";
import googlePlay from "../assets/icons/google.png"; // replace with your actual image
import appStore from "../assets/icons/Apple.png";     // replace with your actual image

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Brand Section */}
      <div className={styles.brand}>
        <h2 className={styles.logo}>Maharaj</h2>
        <p>
          Serving love through home-style cooking. Trusted chefs, hygienic meals,
          and instant bookings – all at your doorstep with Maharaj.
        </p>
      </div>

      {/* Company Section */}
      <div className={styles.column}>
        <h3>Company</h3>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#blogs">Blogs</a></li>
        </ul>
      </div>

      {/* Help Section */}
      <div className={styles.column}>
        <h3>Help</h3>
        <ul>
          <li><a href="#support">Customer Support</a></li>
          <li><a href="#delivery">Delivery Details</a></li>
          <li><a href="#terms">Terms & Conditions</a></li>
          <li><a href="#privacy">Privacy Policy</a></li>
        </ul>
      </div>

      {/* Install App Section */}
      <div className={styles.column}>
        <h3>Install App</h3>
        <div className={styles.appButtons}>
          <img src={googlePlay} alt="Get it on Google Play" />
          <img src={appStore} alt="Download on App Store" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
