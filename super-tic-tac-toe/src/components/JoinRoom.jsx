// filepath: src/components/JoinRoom.jsx
export default function JoinRoom() {
  return (
    <div className="settings-row">
      <div className="settings-card">
        <div className="settings-header">
          <h2 className="settings-title">Join Room</h2>
          <div>
            {/* <button
              className="btn btn-secondary"
              type="button"
              onClick={onBack}
            >
              Back
            </button> */}
          </div>
        </div>

        <section className="settings-section">
          <div className="two-col-grid">
            <label className="label-column">
              <span>Player ID</span>
              <input
                className="settings-input"
                name="player_id"
                placeholder="unique player id (uuid or assigned)"
              />
              <small className="muted">
                Frontend must send `player_id` when joining.
              </small>
            </label>

            <label className="label-column">
              <span>Player Name</span>
              <input
                className="settings-input"
                name="player_name"
                placeholder="Your display name"
              />
            </label>
          </div>

          <div className="two-col-grid" style={{ marginTop: 12 }}>
            <label className="label-column">
              <span>Room ID / Name</span>
              <input
                className="settings-input"
                name="room_id"
                placeholder="Room name or id"
              />
            </label>

            <label className="label-column">
              <span>Room Password (if required)</span>
              <input
                className="settings-input"
                name="room_password"
                placeholder="Room password"
              />
            </label>
          </div>
        </section>

        <div className="settings-actions">
          <button className="btn btn-primary" type="button">
            Join Room
          </button>
        </div>
      </div>
    </div>
  );
}
