import React from 'react';
import styles from './Loot.module.scss';

const Loot = () => {
  return (
    <div className={styles.content}>
      <h1>Our Loot System</h1>
      <div className={styles.loot}>
        <h2>10 Man Raids</h2>
        <p>Single SR, then MS &gt; OS</p>
        <h2>25 Man Raids</h2>
        <p>Single SR, then MS &gt; OS</p>
      </div>
    </div>
  );
};

export default Loot;
