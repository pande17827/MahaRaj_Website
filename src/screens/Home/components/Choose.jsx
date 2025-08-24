import React from 'react';
import styles from './Choose.module.css';

// Importing icons from the react-icons library
import { FaHome } from "react-icons/fa";
import { IoRestaurantSharp } from "react-icons/io5";
import { LuPartyPopper } from "react-icons/lu";

const Choose = () => {
  return (
    <div className={styles.chooseContainer}>
      {/* Left Section with Service Cards */}
      <div className={styles.leftSection}>
        <div className={`${styles.card} ${styles.card1}`}>
          <div className={styles.iconWrapper}>
            <FaHome className={styles.icon} />
          </div>
          <p>Home Cooking</p>
        </div>
        <div className={`${styles.card} ${styles.card2}`}>
          <div className={styles.iconWrapper}>
            <LuPartyPopper className={styles.icon} />
          </div>
          <p>Event Catering</p>
        </div>
        <div className={`${styles.card} ${styles.card3}`}>
          <div className={styles.iconWrapper}>
            <IoRestaurantSharp className={styles.icon} />
          </div>
          <p>Party Chefs</p>
        </div>
        <div className={`${styles.card} ${styles.card4}`}>
          <div className={styles.iconWrapper}>
            <FaHome className={styles.icon} />
          </div>
          <p>Special Cuisine Experts</p>
        </div>
      </div>

      {/* Right Section with Text Content */}
      <div className={styles.rightSection}>
        <h1>MAHARAJ</h1>
        <h2>Choose Your Perfect Cooking Experience</h2>
        <p>
          From everyday meals to special celebrations, find the right cook for every occasion. Daily meals and weekly meal prep by professional home cooks, Large-scale catering for weddings, corporate events, and gatherings, Interactive cooking experiences and intimate dinner parties, Authentic dishes from around the world by specialized chefs.
        </p>
        <button className={styles.exploreButton}>Explore Now</button>
      </div>
    </div>
  );
};

export default Choose;