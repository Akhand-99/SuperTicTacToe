import { useRef } from "react";
import axios from "axios";
export default function CreateRoom({ setRoomID }) {
  const roomNameInputRef = useRef(null);
  const roomPasswordInputRef = useRef(null);
  async function handleCreateRoomAndJoin() {
    if (roomNameInputRef.current && roomPasswordInputRef.current) {
      let roomName = roomNameInputRef.current.value;
      let roomPassword = roomPasswordInputRef.current.value;
      const response = await axios.post("http://127.0.0.1:8000/room_creation", {
        room_name: roomName,
        room_password: roomPassword,
      });
      console.log(response.data);
      console.log(response.data.room_id);
      setRoomID(response.data.room_id);
    }
  }
  return (
    <div className="settings-row">
      <div className="settings-card">
        <div className="settings-header">
          <h2 className="settings-title">Create Room</h2>
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
              <span>Room Name</span>
              <input
                ref={roomNameInputRef}
                className="settings-input"
                name="room_name"
                placeholder="e.g. fun-room-123"
              />
            </label>

            <label className="label-column">
              <span>Room Password</span>
              <input
                ref={roomPasswordInputRef}
                className="settings-input"
                name="room_password"
                placeholder="password"
              />
            </label>
          </div>
        </section>

        <div className="settings-actions">
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleCreateRoomAndJoin}
          >
            Create Room
          </button>
        </div>
      </div>
    </div>
  );
}
