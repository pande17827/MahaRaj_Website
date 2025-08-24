import React from "react";
import styles from "./HeroSection.module.css";
import chefImg from "../assets/image/chef.png"; // replace with your chef image

import { FaUsers, FaUtensils, FaChartLine } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      {/* Left Content */}
      <div className={styles.left}>
        <span className={styles.badge}>Hire a Cook</span>

        <h1 className={styles.title}>Anytime, Anywhere</h1>

        <p className={styles.description}>
          Find professional cooks for your home, events, and special occasions.
          From intimate dinners to grand celebrations, we've got you covered.
        </p>

        <div className={styles.buttons}>
          <button className={styles.primaryBtn}>Find Cooks</button>
          <button className={styles.secondaryBtn}>Explore More</button>
        </div>
      </div>

      {/* Right Content */}
      <div className={styles.right}>
        <div className={styles.circle}></div>
        <img src={chefImg} alt="Chef" className={styles.chefImage} />

        {/* Floating Cards */}
        <div className={`${styles.card} ${styles.cardTopLeft}`}>
          <MdEventAvailable className={styles.icon} />
          <p>100+ Events Done</p>
        </div>

        <div className={`${styles.card} ${styles.cardTopRight}`}>
          <FaUsers className={styles.icon} />
          <p>50+ Customers</p>
        </div>

        <div className={`${styles.card} ${styles.cardBottomLeft}`}>
          <FaUtensils className={styles.icon} />
          <p>25+ Trusted Cooks</p>
        </div>

        <div className={`${styles.card} ${styles.cardBottomRight}`}>
          <FaChartLine className={styles.icon} />
          <p>Our Success</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
