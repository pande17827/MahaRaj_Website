import React from "react";
import styles from "./food.module.css";

import dish1 from "../assets/image/food.png"; // Paneer curry
import dish2 from "../assets/image/food.png"; // Chicken biryani
import dish3 from "../assets/image/food.png"; // Dal makhani
import dish4 from "../assets/image/food.png"; // Pav bhaji

const Food = () => {
  const dishes = [
    { src: dish1, alt: "Paneer curry in wooden bowl" },
    { src: dish2, alt: "Chicken biryani with fried leg piece" },
    { src: dish3, alt: "Dal makhani with cream swirl and butter" },
    { src: dish4, alt: "Pav bhaji with toasted buns" },
  ];

  return (
    <section className={styles.foodRow} aria-label="Popular Indian dishes">
      <div className={styles.grid}>
        {dishes.map((d, i) => (
          <div key={i} className={styles.dish}>
            <img src={d.src} alt={d.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Food;
