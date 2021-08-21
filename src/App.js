import guildLogo from './guild-logo.png';
import discordLogo from './discord-logo.svg';
import './App.css';

function App() {
  return (
    <div className="app">
      <header>
        <img src={guildLogo} className="guild-logo" alt="Guild Logo" />
        <h1>
          &lt;Tentative&gt;
        </h1>
        <a href="https://discord.gg/ZGnM9BxRNw" target="_blank" rel="noreferrer">
          <img src={discordLogo} className="discord-logo" alt="Discord Logo" />
        </a>
      </header>
    </div>
  );
}

export default App;
