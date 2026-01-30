import Settings_Icon from "../assets/settings_32dp_FFC47F_FILL0_wght400_GRAD0_opsz40.svg";

export default function HomeScreen({ onSelect }) {
  return (
    <div className="home-screen" style={{ position: "relative" }}>
      {/* Settings icon top right */}
      <div className="settings-icon-wrap">
        <img
          src={Settings_Icon}
          alt="Settings"
          className="settings-icon"
          onClick={() => onSelect("settings")}
        />
      </div>
      <h1 className="home-title">Super Tic-Tac-Toe</h1>
      <p className="home-subtitle">Choose a game mode</p>
      <div className="mode-buttons">
        <button
          className="mode-btn btn-local"
          onClick={() => onSelect("local")}
        >
          Local Multiplayer
        </button>
        <button
          className="mode-btn btn-online"
          onClick={() => onSelect("online")}
        >
          Online Multiplayer
        </button>
        <button
          className="mode-btn btn-computer"
          onClick={() => onSelect("computer")}
        >
          Vs Computer
        </button>
      </div>
      <small className="home-note">
        Quick prototype: local uses current game logic.
      </small>
    </div>
  );
}
