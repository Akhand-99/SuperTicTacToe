import SmallBoard from "./SmallBoard";
import { useState } from "react";

export default function MainBoard() {
  const [currentMarkerToPlace, setCurrentMarkerToPlace] = useState("X");
  const [mainBoardState, setMainBoardState] = useState({
    boardCellList: [null, null, null, null, null, null, null, null, null],
    wonBy: null,
    isFinished: false,
  });
  return (
    <>
      <div className="main-grid-container">
        <SmallBoard
          number={1}
          currentMarkerToPlace={currentMarkerToPlace}
          setCurrentMarkerToPlace={setCurrentMarkerToPlace}
        ></SmallBoard>
        <SmallBoard
          number={2}
          currentMarkerToPlace={currentMarkerToPlace}
          setCurrentMarkerToPlace={setCurrentMarkerToPlace}
        ></SmallBoard>
        <SmallBoard
          number={3}
          currentMarkerToPlace={currentMarkerToPlace}
          setCurrentMarkerToPlace={setCurrentMarkerToPlace}
        ></SmallBoard>
        <SmallBoard
          number={4}
          currentMarkerToPlace={currentMarkerToPlace}
          setCurrentMarkerToPlace={setCurrentMarkerToPlace}
        ></SmallBoard>
        <SmallBoard
          number={5}
          currentMarkerToPlace={currentMarkerToPlace}
          setCurrentMarkerToPlace={setCurrentMarkerToPlace}
        ></SmallBoard>
        <SmallBoard
          number={6}
          currentMarkerToPlace={currentMarkerToPlace}
          setCurrentMarkerToPlace={setCurrentMarkerToPlace}
        ></SmallBoard>
        <SmallBoard
          number={7}
          currentMarkerToPlace={currentMarkerToPlace}
          setCurrentMarkerToPlace={setCurrentMarkerToPlace}
        ></SmallBoard>
        <SmallBoard
          number={8}
          currentMarkerToPlace={currentMarkerToPlace}
          setCurrentMarkerToPlace={setCurrentMarkerToPlace}
        ></SmallBoard>
        <SmallBoard
          number={9}
          currentMarkerToPlace={currentMarkerToPlace}
          setCurrentMarkerToPlace={setCurrentMarkerToPlace}
        ></SmallBoard>
      </div>
    </>
  );
}
