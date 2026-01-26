// filepath: c:\Personal Projects\SuperTicTacToeJS\SuperTicTacToe\super-tic-tac-toe\src\components\HomeScreen.jsx
export default function HomeScreen({ onSelect }) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      gap: "16px",
      color: "white"
    }}>
      <h1 style={{ margin: 0, marginBottom: 8 }}>Super Tic-Tac-Toe</h1>
      <p style={{ marginTop: 0, opacity: 0.9 }}>Choose a game mode</p>
      <div style={{ display: "flex", gap: 12 }}>
        <button onClick={() => onSelect("local")}>Local Multiplayer</button>
        <button onClick={() => onSelect("online")}>Online Multiplayer</button>
        <button onClick={() => onSelect("computer")}>Vs Computer</button>
      </div>
      <small style={{ opacity: 0.7, marginTop: 12 }}>Quick prototype: local uses current game logic.</small>
    </div>
  );
}
