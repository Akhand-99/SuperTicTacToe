import React from "react";

export default function HomeScreen({ onNavigate }) {
  return (
    <div className="home-screen">
      <h1>Super Tic-Tac-Toe</h1>
      <button onClick={() => onNavigate("game")}>Start Game</button>
      <button onClick={() => onNavigate("settings")}>Settings</button>
      {/* Add more navigation buttons as needed */}
    </div>
  );
}
