import SmallBoard from "./SmallBoard";
import { useState } from "react";

export default function MainBoard() {
  const [currentMarkerToPlace, setCurrentMarkerToPlace] = useState("X");
  const [mainBoardState, setMainBoardState] = useState({
    boardCellList: [null, null, null, null, null, null, null, null, null],
    wonBy: null, //"X" || "O" || "None" || null. If null, game is not finished.
    isFinished: false,
    activeBoardNumber: 0, // 0 means, marker can be placed on any board (For initial move and moves where the board to be played on is full, or already won)
  });
  return (
    <>
      <div className="main-grid-container">
        <SmallBoard
          number={1}
          currentMarkerToPlace={currentMarkerToPlace}
          setCurrentMarkerToPlace={setCurrentMarkerToPlace}
          mainBoardState={mainBoardState}
          setMainBoardState={setMainBoardState}
          isActive={
            mainBoardState.activeBoardNumber === 1 ||
            (mainBoardState.activeBoardNumber === 0 &&
              !mainBoardState.boardCellList[0])
              ? true
              : false
          }
        ></SmallBoard>
        <SmallBoard
          number={2}
          currentMarkerToPlace={currentMarkerToPlace}
          setCurrentMarkerToPlace={setCurrentMarkerToPlace}
          mainBoardState={mainBoardState}
          setMainBoardState={setMainBoardState}
          isActive={
            mainBoardState.activeBoardNumber === 2 ||
            (mainBoardState.activeBoardNumber === 0 &&
              !mainBoardState.boardCellList[1])
              ? true
              : false
          }
        ></SmallBoard>
        <SmallBoard
          number={3}
          currentMarkerToPlace={currentMarkerToPlace}
          setCurrentMarkerToPlace={setCurrentMarkerToPlace}
          mainBoardState={mainBoardState}
          setMainBoardState={setMainBoardState}
          isActive={
            mainBoardState.activeBoardNumber === 3 ||
            (mainBoardState.activeBoardNumber === 0 &&
              !mainBoardState.boardCellList[2])
              ? true
              : false
          }
        ></SmallBoard>
        <SmallBoard
          number={4}
          currentMarkerToPlace={currentMarkerToPlace}
          setCurrentMarkerToPlace={setCurrentMarkerToPlace}
          mainBoardState={mainBoardState}
          setMainBoardState={setMainBoardState}
          isActive={
            mainBoardState.activeBoardNumber === 4 ||
            (mainBoardState.activeBoardNumber === 0 &&
              !mainBoardState.boardCellList[3])
              ? true
              : false
          }
        ></SmallBoard>
        <SmallBoard
          number={5}
          currentMarkerToPlace={currentMarkerToPlace}
          setCurrentMarkerToPlace={setCurrentMarkerToPlace}
          mainBoardState={mainBoardState}
          setMainBoardState={setMainBoardState}
          isActive={
            mainBoardState.activeBoardNumber === 5 ||
            (mainBoardState.activeBoardNumber === 0 &&
              !mainBoardState.boardCellList[4])
              ? true
              : false
          }
        ></SmallBoard>
        <SmallBoard
          number={6}
          currentMarkerToPlace={currentMarkerToPlace}
          setCurrentMarkerToPlace={setCurrentMarkerToPlace}
          mainBoardState={mainBoardState}
          setMainBoardState={setMainBoardState}
          isActive={
            mainBoardState.activeBoardNumber === 6 ||
            (mainBoardState.activeBoardNumber === 0 &&
              !mainBoardState.boardCellList[5])
              ? true
              : false
          }
        ></SmallBoard>
        <SmallBoard
          number={7}
          currentMarkerToPlace={currentMarkerToPlace}
          setCurrentMarkerToPlace={setCurrentMarkerToPlace}
          mainBoardState={mainBoardState}
          setMainBoardState={setMainBoardState}
          isActive={
            mainBoardState.activeBoardNumber === 7 ||
            (mainBoardState.activeBoardNumber === 0 &&
              !mainBoardState.boardCellList[6])
              ? true
              : false
          }
        ></SmallBoard>
        <SmallBoard
          number={8}
          currentMarkerToPlace={currentMarkerToPlace}
          setCurrentMarkerToPlace={setCurrentMarkerToPlace}
          mainBoardState={mainBoardState}
          setMainBoardState={setMainBoardState}
          isActive={
            mainBoardState.activeBoardNumber === 8 ||
            (mainBoardState.activeBoardNumber === 0 &&
              !mainBoardState.boardCellList[7])
              ? true
              : false
          }
        ></SmallBoard>
        <SmallBoard
          number={9}
          currentMarkerToPlace={currentMarkerToPlace}
          setCurrentMarkerToPlace={setCurrentMarkerToPlace}
          mainBoardState={mainBoardState}
          setMainBoardState={setMainBoardState}
          isActive={
            mainBoardState.activeBoardNumber === 9 ||
            (mainBoardState.activeBoardNumber === 0 &&
              !mainBoardState.boardCellList[8])
              ? true
              : false
          }
        ></SmallBoard>
      </div>
    </>
  );
}
