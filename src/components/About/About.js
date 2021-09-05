import React from 'react';
import styles from './About.module.scss';

const About = () => {
  return (
    <div className={styles.content}>
      <h1>About Us</h1>
      <div className={styles.about}>
        <h2>Welcome to Tentative! </h2>
        <ul>
          <li>Our current focus is Phase 2 of TBC Classic.</li>
          <li>We are made up of experience players who are always looking to progress.</li>
          <li>We love to hang out in Discord and always have members running normal and heroic dungeons.</li>
          <li>We encourage everyone to work within the guild and to help each other out.</li>
          <li>Everyone loves to play the game with each other and no one is left out.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
