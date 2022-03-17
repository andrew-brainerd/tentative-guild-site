import React from 'react';
import styles from './Loot.module.scss';

const Loot = () => {
  return (
    <div className={styles.content}>
      <h1>Our Loot System</h1>
      <div className={styles.loot}>
        <div className={styles.phase}>
          <h2>Phase 3</h2>
          <h3>Guild Runs</h3>
          <h4>EPGP</h4>
          <h3>PUG Runs</h3>
          <h4>MS &gt; OS</h4>
        </div>
      </div>
    </div>
  );
};

export default Loot;
