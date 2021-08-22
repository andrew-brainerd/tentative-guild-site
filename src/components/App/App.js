import React from 'react';
import { isMobile } from 'react-device-detect';
import Header from '../Header/Header';
import guildLogo from '../../img/guild-logo.png';
import discordLogo from '../../img/discord-logo.svg';
import warcraftLogsLogo from '../../img/warcraft-logs-logo.png';
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <section className={styles.content}>
        <img
          className={styles.guildLogo}
          src={guildLogo}
          alt="Guild Logo" />
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
    </div>
  );
};

export default App;
