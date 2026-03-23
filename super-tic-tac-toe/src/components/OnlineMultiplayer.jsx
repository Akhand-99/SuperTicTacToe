import { useState } from "react";
import CreateRoom from "./CreateRoom";
import JoinRoom from "./JoinRoom";

export default function OnlineMultiplayer({ onBack }) {
  const [roomID, setRoomID] = useState("");
  return (
    <div className="online-multiplayer">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          maxWidth: 980,
          margin: "0 auto 12px",
        }}
      >
        <div>
          <button className="btn btn-secondary" onClick={onBack}>
            Back
          </button>
        </div>
        <div style={{ color: "#f0f0f0", opacity: 0.9 }}>
          Online Multiplayer — Create or Join a room
        </div>
        <div style={{ width: 64 }} />
      </div>

      <div
        className="online-panels-vertical"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          alignItems: "center",
          maxWidth: 560,
          margin: "0 auto",
        }}
      >
        <CreateRoom setRoomID={setRoomID} />
        <JoinRoom />
      </div>
    </div>
  );
}
