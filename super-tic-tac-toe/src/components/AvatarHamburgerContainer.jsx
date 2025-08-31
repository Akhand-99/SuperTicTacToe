import { useState } from "react";
import X_Avatar from "../assets/X_Avatar.png";
import O_Avatar from "../assets/O_Avatar.png";
import Hamburger_White from "../assets/menu_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg";
import HamburgerMenu from "./HamburgerMenu";

export default function AvatarHamburgerContainer({
  currentMarkerToPlace,
  setIsInitialRender,
  setGameData,
}) {
  const [isHamburgerMenuVisible, setIsHamburgerMenuVisible] = useState(false);

  function handleHamburgerClick() {
    setIsHamburgerMenuVisible(!isHamburgerMenuVisible);
  }

  return (
    <>
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
      {isHamburgerMenuVisible ? (
        <HamburgerMenu
          setIsHamburgerMenuVisible={setIsHamburgerMenuVisible}
          setIsInitialRender={setIsInitialRender}
          setGameData={setGameData}
        ></HamburgerMenu>
      ) : null}
    </>
  );
}
