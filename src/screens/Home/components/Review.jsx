import React from "react";
import styles from "./Review.module.css";
import { FaStar } from "react-icons/fa";

// Replace these with your actual avatar and family image assets
import avatar1 from "../assets/icons/google.png";
import avatar2 from "../assets/icons/google.png";
import avatar3 from "../assets/icons/google.png";
import familyImage from "../assets/icons/google.png";

const reviews = [
  {
    id: 1,
    name: "Jessica Chen",
    role: "Event Planner",
    text: "Maharaj made our corporate event absolutely perfect! The chef was professional, the food was incredible, and our guests couldn't stop talking about it.",
    stars: 5,
    img: avatar1,
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Busy Parent",
    text: "As a working parent, having a professional cook prepare healthy meals for my family has been a game-changer. Highly recommended!",
    stars: 5,
    img: avatar2,
  },
  {
    id: 3,
    name: "Sarah & David",
    role: "Newlyweds",
    text: "Our anniversary dinner was magical! The chef created an intimate dining experience right in our home. It felt like a Michelin-star restaurant.",
    stars: 5,
    img: avatar3,
  },
];

const Review = () => {
  return (
    <section className={styles.reviewSection}>
      {/* Heading */}
      <div className={styles.header}>
        <h2 className={styles.title}>
          What Our <span>Customers</span> Say
        </h2>
        <p className={styles.subtitle}>
          Real stories from real customers who found their perfect cooking experience
        </p>
      </div>

      {/* Content */}
      <div className={styles.container}>
        {/* Left: Reviews */}
        <div className={styles.left}>
          {reviews.map((r) => (
            <div key={r.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.user}>
                  <img src={r.img} alt={r.name} className={styles.avatar} />
                  <div>
                    <h4 className={styles.name}>{r.name}</h4>
                    <p className={styles.role}>{r.role}</p>
                  </div>
                </div>
                <div className={styles.stars}>
                  {[...Array(r.stars)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
              <p className={styles.text}>"{r.text}"</p>
            </div>
          ))}
        </div>

        {/* Right: Family Image */}
        <div className={styles.right}>
          <img
            src={familyImage}
            alt="Happy family enjoying a meal"
            className={styles.familyImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Review;
