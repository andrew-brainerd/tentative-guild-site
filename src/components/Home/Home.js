import React from 'react';
import { isMobile } from 'react-device-detect';
import guildLogo from '../../img/guild-logo.png';
import discordLogo from '../../img/discord-logo.svg';
import warcraftLogsLogo from '../../img/warcraft-logs-logo.png';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <section className={styles.content}>
      <img
        className={styles.guildLogo}
        src={guildLogo}
        alt="Guild Logo"
      />
      <h1>
        &lt;Tentative&gt;
      </h1>
      <section className={styles.guildButtons}>
        <a
          href="https://discord.gg/ZGnM9BxRNw"
          className={[
            styles.button,
            !isMobile ? styles.animate : ''
          ].join(' ')}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={styles.discordLogo}
            src={discordLogo}
            alt="Discord Logo"
          />
        </a>
        <a
          href="https://classic.warcraftlogs.com/guild/id/610120"
          className={[
            styles.button,
            styles.warcraftLogsButton,
            !isMobile ? styles.animate : ''
          ].join(' ')}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={styles.warcraftLogsLogo}
            src={warcraftLogsLogo}
            alt="Warcraft Logs Logo"
          />
          <span className={styles.buttonText}>Warcraft Logs</span>
        </a>
      </section>
    </section>
  );
};

export default Home;
