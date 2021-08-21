import guildLogo from './guild-logo.png';
import discordLogo from './discord-logo.svg';
import warcraftLogsLogo from './warcraft-logs-logo.png';
import './App.css';

function App() {
  return (
    <div className="app">
      <header>
        <img src={guildLogo} className="guild-logo" alt="Guild Logo" />
        <h1>
          &lt;Tentative&gt;
        </h1>
        <section className="guild-buttons">
          <a href="https://discord.gg/ZGnM9BxRNw" target="_blank" rel="noreferrer">
            <img src={discordLogo} className="discord-logo" alt="Discord Logo" />
          </a>
          <a href="https://classic.warcraftlogs.com/guild/id/610120" className="warcraft-logs-button" target="_blank" rel="noreferrer">
            <img src={warcraftLogsLogo} className="warcraft-logs-logo" alt="Warcraft Logs Logo" />
            <span className="button-text">Warcraft Logs</span>
          </a>
        </section>
      </header>
    </div>
  );
}

export default App;
