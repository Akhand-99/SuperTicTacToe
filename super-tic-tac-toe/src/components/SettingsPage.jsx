// filepath: c:\Personal Projects\SuperTicTacToeJS\SuperTicTacToe\super-tic-tac-toe\src\components\SettingsPage.jsx
import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

export default function SettingsPage({
  onBack,
  settingsInfo,
  setSettingsInfo,
}) {
  const nameInputBox = useRef(null);
  function handleSave() {
    if (nameInputBox.current) {
      let playerName = nameInputBox.current.value;
      let playerID = uuidv4();
      // let newSettingsInfo = { playerName: playerName, playerID: playerID };
      setSettingsInfo({
        ...settingsInfo,
        playerName: playerName,
        playerID: playerID,
      });
      alert("Saved!");
    }
  }
  return (
    <div className="settings-page">
      <div className="settings-card">
        <div className="settings-header">
          <h2 className="settings-title">Settings</h2>
          <div>
            <button className="btn btn-secondary" onClick={onBack}>
              Back
            </button>
          </div>
        </div>

        <section className="settings-section">
          <h3>Player Details</h3>
          <div className="players-grid">
            <label className="label-column">
              <span>Your Name</span>
              <input
                className="settings-input"
                placeholder="Player X"
                ref={nameInputBox}
                defaultValue={settingsInfo?.playerName}
              />
            </label>
            {/* <label className="label-column">
              <span>Player O Name</span>
              <input className="settings-input" placeholder="Player O" />
            </label> */}
          </div>
        </section>

        <section className="settings-section">
          <h3>Game</h3>
          <div className="settings-grid">
            <label className="checkbox-row">
              <input type="checkbox" disabled />
              <span>Enable Chaos Mode (placeholder)</span>
            </label>
            <label className="checkbox-row">
              <input type="checkbox" disabled />
              <span>Allow Overwrites (placeholder)</span>
            </label>
          </div>
        </section>

        <div className="settings-actions">
          <button className="btn btn-secondary">Reset Defaults</button>
          <button className="btn btn-primary" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
