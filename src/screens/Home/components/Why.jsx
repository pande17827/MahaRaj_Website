import React from 'react';
import styles from './Why.module.css';

// Placeholder images - Replace these with your actual image files
// Example: import professionalChefs from '../../assets/chefs.jpg';
const professionalChefs = 'https://images.pexels.com/photos/3217157/pexels-photo-3217157.jpeg?auto=compress&cs=tinysrgb&w=600';
const flexibleService = 'https://images.pexels.com/photos/4252136/pexels-photo-4252136.jpeg?auto=compress&cs=tinysrgb&w=600';
const hygienicMeals = 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600';
const easyBooking = 'https://images.pexels.com/photos/4389667/pexels-photo-4389667.jpeg?auto=compress&cs=tinysrgb&w=600';


// Array of feature data to create cards dynamically
const features = [
  {
    image: professionalChefs,
    title: 'Professional Chefs',
  },
  {
    image: flexibleService,
    title: 'Flexible Service',
  },
  {
    image: hygienicMeals,
    title: 'Hygienic Meals',
  },
  {
    image: easyBooking,
    title: 'Easy Booking',
  },
];

const Why = () => {
  return (
    <section className={styles.whySection}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          Why Choose <span>Maharaj?</span>
        </h2>
        <p className={styles.subtitle}>
          Getting your perfect cook is just three simple steps away
        </p>
      </div>

      <div className={styles.featuresContainer}>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div className={styles.card} key={index}>
              <img src={feature.image} alt={feature.title} className={styles.cardImage} />
              <h3 className={styles.cardTitle}>{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;