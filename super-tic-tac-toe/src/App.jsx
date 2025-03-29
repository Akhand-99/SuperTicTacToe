import { useEffect, useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import "./css/styles1.css";
import MainBoard from "./components/MainBoard";
import X_Avatar from "./assets/X_Avatar.png";
import O_Avatar from "./assets/O_Avatar.png";
import Hamburger_White from "./assets/menu_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg";
import HamburgerMenu from "./components/HamburgerMenu";

function App() {
  const [currentMarkerToPlace, setCurrentMarkerToPlace] = useState("X");
  const [isInitialRender, setIsInitialRender] = useState(true);
  const [isHamburgerMenuVisible, setIsHamburgerMenuVisible] = useState(false);
  // Let us consider adding a key state or resetcounter state here and pass it as key prop to
  // MainBoard so that, we can reset whole game state by re-mounting it. But I also want to
  // learn more on the imperative ref appraoch that allows each component to expose
  // its own reset function to parent, allowing for more fine grained reset abilities.
  // For eg I can reset a particular smallBoard alone, instead of whole game.

  useEffect(() => {
    if (isInitialRender) {
      if (currentMarkerToPlace === "O") {
        setIsInitialRender(false);
      }
    }
  }, [currentMarkerToPlace, isInitialRender]);

  let oTurnIndicatorClsName = "";
  if (!isInitialRender) {
    oTurnIndicatorClsName = currentMarkerToPlace === "O" ? "visible" : "hidden";
  }

  function handleHamburgerClick() {
    setIsHamburgerMenuVisible(!isHamburgerMenuVisible);
  }

  return (
    <>
      {/* <h1>Super Tic-Tac-Toe</h1> */}
      <div className="avatar-hamburger-container">
        <img
          src={X_Avatar}
          alt="X-Avatar"
          id="player-x-avatar"
          className={currentMarkerToPlace === "X" ? "" : "dim"}
        ></img>
        <div
          style={{
            display: "flex",
            gap: "12px",
            alignItems: "center",
            paddingRight: "18px",
          }}
        >
          <img
            src={O_Avatar}
            alt="O-Avatar"
            id="player-o-avatar"
            className={currentMarkerToPlace === "O" ? "" : "dim"}
          ></img>
          <img
            src={Hamburger_White}
            style={{ height: "36px" }}
            onClick={handleHamburgerClick}
          ></img>
        </div>
      </div>
      <div
        className={`turn-indicator-div x-turn ${
          currentMarkerToPlace === "X" ? "visible" : "hidden"
        }`}
      ></div>
      <div
        className={`turn-indicator-div o-turn ${oTurnIndicatorClsName}`}
        style={{ display: `${isInitialRender ? "none" : "unset"}` }}
      ></div>
      {isHamburgerMenuVisible ? <HamburgerMenu></HamburgerMenu> : null}
      <MainBoard
        currentMarkerToPlace={currentMarkerToPlace}
        setCurrentMarkerToPlace={setCurrentMarkerToPlace}
      ></MainBoard>
    </>
  );
}

export default App;
