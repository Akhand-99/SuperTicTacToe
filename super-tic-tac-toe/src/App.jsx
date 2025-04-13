import { useEffect, useState } from "react";
import "./css/styles1.css";
import MainBoard from "./components/MainBoard";
import AvatarHamburgerContainer from "./components/AvatarHamburgerContainer";

function App() {
  const [currentMarkerToPlace, setCurrentMarkerToPlace] = useState("X");
  const [isInitialRender, setIsInitialRender] = useState(true);
  // Adding resetcount state here and passing it as key prop to
  // MainBoard so that, we can reset whole game state by re-mounting it.... for now
  // Check on custom hooks, and if we can use a useGameState hook to manage state. or we can defer that too, once multiplayer is
  // implemented. Give it a thought next time you code.
  //Storing state in local storage can be deferred, once multiplayer is implemented, because how the boardState is used and defined
  // may change with multiplayer feature. Plus, FE was not the only learning objective too. High time we dive into multiplayer to
  // explore BE concepts. We can come back to refining FE later.
  const [resetCount, setResetCount] = useState(0);

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

  return (
    <>
      <AvatarHamburgerContainer
        currentMarkerToPlace={currentMarkerToPlace}
        setResetCount={setResetCount}
        setIsInitialRender={setIsInitialRender}
        setCurrentMarkerToPlace={setCurrentMarkerToPlace}
      ></AvatarHamburgerContainer>
      <div
        className={`turn-indicator-div x-turn ${
          currentMarkerToPlace === "X" ? "visible" : "hidden"
        }`}
      ></div>
      <div
        className={`turn-indicator-div o-turn ${oTurnIndicatorClsName}`}
        style={{ display: `${isInitialRender ? "none" : "unset"}` }}
      ></div>
      <MainBoard
        key={resetCount}
        currentMarkerToPlace={currentMarkerToPlace}
        setCurrentMarkerToPlace={setCurrentMarkerToPlace}
      ></MainBoard>
    </>
  );
}

export default App;
