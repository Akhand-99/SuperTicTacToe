import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import "./css/styles1.css";
import MainBoard from "./components/MainBoard";
import X_Avatar from "./assets/X_Avatar.png";
import O_Avatar from "./assets/O_Avatar.png";

function App() {
  const [currentMarkerToPlace, setCurrentMarkerToPlace] = useState("X");

  return (
    <>
      {/* <h1>Super Tic-Tac-Toe</h1> */}
      <img
        src={X_Avatar}
        alt="X-Avatar"
        id="player-x-avatar"
        className={currentMarkerToPlace === "X" ? "" : "dim"}
      ></img>
      <img
        src={O_Avatar}
        alt="O-Avatar"
        id="player-o-avatar"
        className={currentMarkerToPlace === "O" ? "" : "dim"}
      ></img>
      <MainBoard
        currentMarkerToPlace={currentMarkerToPlace}
        setCurrentMarkerToPlace={setCurrentMarkerToPlace}
      ></MainBoard>
    </>
  );
}

export default App;
