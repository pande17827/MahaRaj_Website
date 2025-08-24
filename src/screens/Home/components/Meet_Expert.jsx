import React, { useRef } from "react";
import styles from "./Meet_Expert.module.css";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// --- ACTION REQUIRED ---
// Replace these placeholders with your actual, unique chef images.
// Ensure they have transparent backgrounds (e.g., .png format).
import chef1 from "../assets/image/chef.png";
import chef2 from "../assets/image/chef.png";
import chef3 from "../assets/image/chef.png";
import chef4 from "../assets/image/chef.png";

const CHEFS = [
  {
    id: 1,
    name: "Maria Rodriguez",
    cuisine: "Italian & Mediterranean",
    rate: 45,
    rating: 4.9,
    reviews: 127,
    blurb:
      "Specialized in authentic Italian cuisine with 8+ years experience",
    img: chef1,
  },
  {
    id: 2,
    name: "Chef David Kim",
    cuisine: "Asian Fusion",
    rate: 55,
    rating: 4.8,
    reviews: 83,
    blurb:
      "Creative Asian fusion dishes with modern presentation techniques",
    img: chef2,
  },
  {
    id: 3,
    name: "Sarah Johnson",
    cuisine: "Farm-to-Table",
    rate: 65,
    rating: 4.5,
    reviews: 56,
    blurb:
      "Organic ingredients and sustainable cooking practices",
    img: chef3,
  },
  {
    id: 4,
    name: "Carlos Mendez",
    cuisine: "Mexican & Latin",
    rate: 40,
    rating: 4.7,
    reviews: 69,
    blurb:
      "Traditional Mexican recipes passed down through generations",
    img: chef4,
  },
];

const Meet_Expert = () => {
  const trackRef = useRef(null);

  const scrollByCards = (dir = 1) => {
    const track = trackRef.current;
    if (!track) return;
    // Scroll by roughly one card + gap
    const card = track.querySelector(`.${styles.card}`);
    const delta = (card?.clientWidth || 320) + 24;
    track.scrollBy({ left: dir * delta, behavior: "smooth" });
  };

  return (
    <section className={styles.wrapper} aria-label="Meet Our Expert Cooks">
      <div className={styles.header}>
        <h2 className={styles.title}>Meet Our Expert Cooks</h2>
        <p className={styles.subtitle}>
          Browse through our carefully vetted professional cooks and find your perfect match
        </p>
      </div>

      <div className={styles.carousel}>
        <button
          className={`${styles.nav} ${styles.prev}`}
          onClick={() => scrollByCards(-1)}
          aria-label="Previous"
        >
          <FaChevronLeft />
        </button>

        <ul className={styles.track} ref={trackRef}>
          {CHEFS.map((c) => (
            <li key={c.id} className={styles.card}>
              <div className={styles.media}>
                <div className={styles.mediaBg} />
                <img
                  src={c.img}
                  alt={`${c.name} - ${c.cuisine}`}
                  className={styles.photo}
                  loading="lazy"
                />
              </div>

              <div className={styles.content}>
                <div className={styles.nameRow}>
                  <div>
                    <h3 className={styles.name}>{c.name}</h3>
                    <div className={styles.cuisine}>{c.cuisine}</div>
                  </div>
                  <div className={styles.rate}>
                    <strong>${c.rate}</strong>
                    <span className={styles.per}>/hr</span>
                  </div>
                </div>

                <div className={styles.ratingRow}>
                  <FaStar className={styles.star} aria-hidden />
                  <span className={styles.rating}>{c.rating}</span>
                  <span className={styles.reviews}>({c.reviews})</span>
                </div>

                <p className={styles.blurb}>{c.blurb}</p>

                <div className={styles.actions}>
                  <button className={styles.book}>Book Now</button>
                  <button className={styles.profile}>View Profile</button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <button
          className={`${styles.nav} ${styles.next}`}
          onClick={() => scrollByCards(1)}
          aria-label="Next"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Meet_Expert;