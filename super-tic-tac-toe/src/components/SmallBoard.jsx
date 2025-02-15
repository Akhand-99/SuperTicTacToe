import { useState } from "react";
import SmallBoardCell from "./SmallBoardCell";
import numberToCellBorderMap from "./utils/numberToCellBorderMap";
import checkWinAndReturnMarker from "./utils/checkWinAndReturnMarker";

export default function SmallBoard({
  number,
  currentMarkerToPlace,
  setCurrentMarkerToPlace,
  setMainBoardState,
  handleSmallBoardVictory,
  isActive,
}) {
  const [boardState, setBoardState] = useState({
    boardCellList: [null, null, null, null, null, null, null, null, null],
    wonBy: null, //"X" || "O" || "None" || null. If null, game is not finished.
  });

  function handleOnMarkerPlace(smallBoardCellNumber) {
    if (isActive) {
      let newBoardCellList = [...boardState.boardCellList];
      newBoardCellList[smallBoardCellNumber - 1] = currentMarkerToPlace;
      let newWonBy = checkWinAndReturnMarker(
        smallBoardCellNumber,
        currentMarkerToPlace,
        newBoardCellList
      );

      // Condition to check for a Draw
      if (!newWonBy && !newBoardCellList.includes(null)) {
        newWonBy = "None";
      }

      let newBoardState = {
        ...boardState,
        boardCellList: newBoardCellList,
        wonBy: newWonBy,
      };
      setBoardState(newBoardState);
      setCurrentMarkerToPlace(currentMarkerToPlace === "X" ? "O" : "X");

      if (newWonBy) {
        handleSmallBoardVictory(number, newWonBy);
      }

      setMainBoardState((prev) => {
        if (prev.wonBy) {
          return { ...prev, activeBoardNumber: -1 };
        }
        return {
          ...prev,
          activeBoardNumber: !prev.boardCellList[smallBoardCellNumber - 1]
            ? smallBoardCellNumber
            : 0,
        };
      });
    } else if (boardState.wonBy) {
      if (boardState.wonBy === "None") {
        // I think this condition is never met because, if game is draw, there are no empty cells and the "This cell is not empty" alert will be triggered from SmallBoardCell component
        alert(
          `This game has already been finished (Draw). For now, this will be an alert later we can make this more appealing and also include better thought out UX elements.`
        );
      } else {
        alert(
          `This game has already been finished (Won by ${boardState.wonBy}). For now, this will be an alert later we can make this more appealing and also include better thought out UX elements.`
        );
      }
    } else {
      alert(
        `This board is inactive, marker can be placed on the active (highlighted) board only`
      );
    }
  }

  let overlayContent = null;
  if (boardState.wonBy === "X") {
    overlayContent = (
      <div className={`overlay-small-board marker-X-overlay`}>X</div>
    );
  } else if (boardState.wonBy === "O") {
    overlayContent = (
      <div className={`overlay-small-board marker-O-overlay`}>O</div>
    );
  }

  return (
    <>
      <div className={`${"main-grid-cell " + numberToCellBorderMap[number]}`}>
        <div
          className={`small-grid-container ${
            !isActive ? "inactive-board" : ""
          }`}
        >
          <SmallBoardCell
            number={1}
            cellValue={boardState.boardCellList[0]}
            onMarkerPlace={handleOnMarkerPlace}
            currentMarkerToPlace={currentMarkerToPlace}
            isActive={isActive}
          ></SmallBoardCell>
          <SmallBoardCell
            number={2}
            cellValue={boardState.boardCellList[1]}
            onMarkerPlace={handleOnMarkerPlace}
            currentMarkerToPlace={currentMarkerToPlace}
            isActive={isActive}
          ></SmallBoardCell>
          <SmallBoardCell
            number={3}
            cellValue={boardState.boardCellList[2]}
            onMarkerPlace={handleOnMarkerPlace}
            currentMarkerToPlace={currentMarkerToPlace}
            isActive={isActive}
          ></SmallBoardCell>
          <SmallBoardCell
            number={4}
            cellValue={boardState.boardCellList[3]}
            onMarkerPlace={handleOnMarkerPlace}
            currentMarkerToPlace={currentMarkerToPlace}
            isActive={isActive}
          ></SmallBoardCell>
          <SmallBoardCell
            number={5}
            cellValue={boardState.boardCellList[4]}
            onMarkerPlace={handleOnMarkerPlace}
            currentMarkerToPlace={currentMarkerToPlace}
            isActive={isActive}
          ></SmallBoardCell>
          <SmallBoardCell
            number={6}
            cellValue={boardState.boardCellList[5]}
            onMarkerPlace={handleOnMarkerPlace}
            currentMarkerToPlace={currentMarkerToPlace}
            isActive={isActive}
          ></SmallBoardCell>
          <SmallBoardCell
            number={7}
            cellValue={boardState.boardCellList[6]}
            onMarkerPlace={handleOnMarkerPlace}
            currentMarkerToPlace={currentMarkerToPlace}
            isActive={isActive}
          ></SmallBoardCell>
          <SmallBoardCell
            number={8}
            cellValue={boardState.boardCellList[7]}
            onMarkerPlace={handleOnMarkerPlace}
            currentMarkerToPlace={currentMarkerToPlace}
            isActive={isActive}
          ></SmallBoardCell>
          <SmallBoardCell
            number={9}
            cellValue={boardState.boardCellList[8]}
            onMarkerPlace={handleOnMarkerPlace}
            currentMarkerToPlace={currentMarkerToPlace}
            isActive={isActive}
          ></SmallBoardCell>
          {/* If this board is won, the winning marker is displayed as a big overlay on the board */}
          {overlayContent}
        </div>
      </div>
    </>
  );
}
