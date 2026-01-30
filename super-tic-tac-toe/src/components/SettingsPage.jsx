// filepath: c:\Personal Projects\SuperTicTacToeJS\SuperTicTacToe\super-tic-tac-toe\src\components\SettingsPage.jsx
import { useRef } from "react";
export default function SettingsPage({ onBack }) {
  const nameInputBox = useRef();
  //   function handleSave() {}
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
          <button className="btn btn-primary" onClick={() => 1}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
