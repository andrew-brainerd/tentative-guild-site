import React from 'react';
import { desktopAppLink } from '../../constants/links';
import styles from './Addons.module.scss';

const Addons = () => {
  return (
    <div className={styles.content}>
      <h1>Our Addons</h1>
      <p>All addons are automatically downloaded and updated through our desktop software</p>
      <a href={desktopAppLink}>&lt;Tentative&gt; Guild Mate</a>
      {/* <div className={styles.addons}>
        <div className={styles.addon}>
          <h2>GuildMate</h2>
          <h3>Tracks roster changes</h3>
        </div>
        <div className={styles.addon}>
          <h2>GearMate</h2>
          <h3>Tracks gear changes</h3>
        </div>
        <div className={styles.addon}>
          <h2>SpellMate</h2>
          <h3>Tracks spellbook changes</h3>
        </div>
        <div className={styles.addon}>
          <h2>CraftMate</h2>
          <h3>Tracks crafting changes</h3>
        </div>
      </div> */}
    </div>
  );
};

export default Addons;
