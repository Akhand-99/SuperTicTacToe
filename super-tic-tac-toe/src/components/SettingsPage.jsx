// filepath: c:\Personal Projects\SuperTicTacToeJS\SuperTicTacToe\super-tic-tac-toe\src\components\SettingsPage.jsx
export default function SettingsPage({ onBack }) {
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
          <h3>Players</h3>
          <p className="muted">
            Set display names for players. (Functionality to be implemented.)
          </p>
          <div className="players-grid">
            <label className="label-column">
              <span>Player X Name</span>
              <input className="settings-input" placeholder="Player X" />
            </label>
            <label className="label-column">
              <span>Player O Name</span>
              <input className="settings-input" placeholder="Player O" />
            </label>
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
          <button className="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  );
}
