// filepath: src/components/CreateRoom.jsx
export default function CreateRoom({ onBack }) {
  return (
    <div className="settings-page">
      <div className="settings-card">
        <div className="settings-header">
          <h2 className="settings-title">Create Room</h2>
          <div>
            <button
              className="btn btn-secondary"
              type="button"
              onClick={onBack}
            >
              Back
            </button>
          </div>
        </div>

        <section className="settings-section">
          <div className="two-col-grid">
            <label className="label-column">
              <span>Room Name</span>
              <input
                className="settings-input"
                name="room_name"
                placeholder="e.g. fun-room-123"
              />
            </label>

            <label className="label-column">
              <span>Room Password</span>
              <input
                className="settings-input"
                name="room_password"
                placeholder="password"
              />
            </label>
          </div>
        </section>

        <div className="settings-actions">
          <button className="btn btn-primary" type="button">
            Create Room
          </button>
        </div>
      </div>
    </div>
  );
}
