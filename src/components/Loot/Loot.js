import React from 'react';
import DiscordLink from '../DiscordLink/DiscordLink';
import styles from './Loot.module.scss';

const Loot = () => {
  return (
    <div className={styles.content}>
      <h1>Our Loot System</h1>
      <div className={styles.loot}>
        <div className={styles.phase}>
          <h2>Phase 1</h2>
          <h3>10 Man Raids</h3>
          <p>Single SR, then MS &gt; OS</p>
          <h3>25 Man Raids</h3>
          <p>MS &gt; OS</p>
        </div>
        <div className={styles.phase}>
          <h2>Phase 2</h2>
          <p>Vote now for your preferred loot system in our <DiscordLink /></p>
        </div>
      </div>
    </div>
  );
};

export default Loot;
