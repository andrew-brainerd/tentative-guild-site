import React from 'react';
import styles from './Loot.module.scss';

const Loot = () => {
  return (
    <div className={styles.content}>
      <h1>Our Loot System</h1>
      <div className={styles.loot}>
        <h2>10 Man Raids</h2>
        <h3>Single SR, then MS &gt; OS</h3>
        <h2>25 Man Raids</h2>
        <h3>MS &gt; OS</h3>
      </div>
    </div>
  );
};

export default Loot;
