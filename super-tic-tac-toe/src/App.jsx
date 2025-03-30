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
  const [resetCount, setResetCount] = useState(0);
  // Adding resetcount state here and passing it as key prop to
  // MainBoard so that, we can reset whole game state by re-mounting it.
  // Also please reset the first 2 state vars of this component too.

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
      {isHamburgerMenuVisible ? (
        <HamburgerMenu
          setResetCount={setResetCount}
          setIsHamburgerMenuVisible={setIsHamburgerMenuVisible}
        ></HamburgerMenu>
      ) : null}
      <MainBoard
        key={resetCount}
        currentMarkerToPlace={currentMarkerToPlace}
        setCurrentMarkerToPlace={setCurrentMarkerToPlace}
      ></MainBoard>
    </>
  );
}

export default App;
