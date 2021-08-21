import { isMobile } from 'react-device-detect';
import Header from '../Header/Header';
import guildLogo from '../../img/guild-logo.png';
import discordLogo from '../../img/discord-logo.svg';
import warcraftLogsLogo from '../../img/warcraft-logs-logo.png';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <section className="content">
        <img src={guildLogo} className="guild-logo" alt="Guild Logo" />
        <h1>
          &lt;Tentative&gt;
        </h1>
        <section className="guild-buttons">
          <a
            href="https://discord.gg/ZGnM9BxRNw"
            className={[
              "button",
              !isMobile ? "animate" : ""
            ].join(' ')}
            target="_blank"
            rel="noreferrer"
          >
            <img src={discordLogo} className="discord-logo" alt="Discord Logo" />
          </a>
          <a
            href="https://classic.warcraftlogs.com/guild/id/610120"
            className={[
              "button",
              "warcraft-logs-button",
              !isMobile ? "animate" : ""
            ].join(' ')}
            target="_blank"
            rel="noreferrer"
          >
            <img src={warcraftLogsLogo} className="warcraft-logs-logo" alt="Warcraft Logs Logo" />
            <span className="button-text">Warcraft Logs</span>
          </a>
        </section>
      </section>
    </div>
  );
};

export default App;
