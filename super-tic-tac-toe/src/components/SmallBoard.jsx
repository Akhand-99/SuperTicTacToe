import { useState } from "react";
import SmallBoardCell from "./SmallBoardCell";
import numberToCellBorderMap from "./utils/numberToCellBorderMap";

export default function SmallBoard({
  number,
  currentMarkerToPlace,
  setCurrentMarkerToPlace,
  mainBoardState,
  setMainBoardState,
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

      let newMainBoardState;
      if (newWonBy) {
        let newMainBoardCellList = [...mainBoardState.boardCellList];
        newMainBoardCellList[number - 1] = newWonBy;

        newMainBoardState = {
          ...mainBoardState,
          boardCellList: newMainBoardCellList,
        };
        setMainBoardState(newMainBoardState); //Instead of this can we call a func like onSmallBoardVictory() which updates
        // the mainBoardState as well as calls checkWinAndReturnMarker() in mainBoard to determine main board victory?
      }

      let newActiveBoardNumber = !mainBoardState.boardCellList[
        smallBoardCellNumber - 1
      ]
        ? smallBoardCellNumber
        : 0;
      setMainBoardState((prev) => {
        return { ...prev, activeBoardNumber: newActiveBoardNumber };
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

  function checkWinAndReturnMarker(number, marker, boardCellListToCheck) {
    switch (number) {
      case 1: {
        if (
          boardCellListToCheck[1] === marker &&
          boardCellListToCheck[2] === marker
        ) {
          return marker;
        } else if (
          boardCellListToCheck[3] === marker &&
          boardCellListToCheck[6] === marker
        ) {
          return marker;
        } else if (
          boardCellListToCheck[4] === marker &&
          boardCellListToCheck[8] === marker
        ) {
          return marker;
        }
        return null;
      }
      case 2: {
        if (
          boardCellListToCheck[0] === marker &&
          boardCellListToCheck[2] === marker
        ) {
          return marker;
        } else if (
          boardCellListToCheck[4] === marker &&
          boardCellListToCheck[7] === marker
        ) {
          return marker;
        }
        return null;
      }
      case 3: {
        if (
          boardCellListToCheck[0] === marker &&
          boardCellListToCheck[1] === marker
        ) {
          return marker;
        } else if (
          boardCellListToCheck[5] === marker &&
          boardCellListToCheck[8] === marker
        ) {
          return marker;
        } else if (
          boardCellListToCheck[4] === marker &&
          boardCellListToCheck[6] === marker
        ) {
          return marker;
        }
        return null;
      }
      case 4: {
        if (
          boardCellListToCheck[0] === marker &&
          boardCellListToCheck[6] === marker
        ) {
          return marker;
        } else if (
          boardCellListToCheck[4] === marker &&
          boardCellListToCheck[5] === marker
        ) {
          return marker;
        }
        return null;
      }
      case 5: {
        if (
          boardCellListToCheck[0] === marker &&
          boardCellListToCheck[8] === marker
        ) {
          return marker;
        } else if (
          boardCellListToCheck[2] === marker &&
          boardCellListToCheck[6] === marker
        ) {
          return marker;
        } else if (
          boardCellListToCheck[1] === marker &&
          boardCellListToCheck[7] === marker
        ) {
          return marker;
        } else if (
          boardCellListToCheck[3] === marker &&
          boardCellListToCheck[5] === marker
        ) {
          return marker;
        }
        return null;
      }
      case 6: {
        if (
          boardCellListToCheck[2] === marker &&
          boardCellListToCheck[8] === marker
        ) {
          return marker;
        } else if (
          boardCellListToCheck[3] === marker &&
          boardCellListToCheck[4] === marker
        ) {
          return marker;
        }
        return null;
      }
      case 7: {
        if (
          boardCellListToCheck[0] === marker &&
          boardCellListToCheck[3] === marker
        ) {
          return marker;
        } else if (
          boardCellListToCheck[7] === marker &&
          boardCellListToCheck[8] === marker
        ) {
          return marker;
        } else if (
          boardCellListToCheck[4] === marker &&
          boardCellListToCheck[2] === marker
        ) {
          return marker;
        }
        return null;
      }
      case 8: {
        if (
          boardCellListToCheck[6] === marker &&
          boardCellListToCheck[8] === marker
        ) {
          return marker;
        } else if (
          boardCellListToCheck[4] === marker &&
          boardCellListToCheck[1] === marker
        ) {
          return marker;
        }
        return null;
      }
      case 9: {
        if (
          boardCellListToCheck[6] === marker &&
          boardCellListToCheck[7] === marker
        ) {
          return marker;
        } else if (
          boardCellListToCheck[2] === marker &&
          boardCellListToCheck[5] === marker
        ) {
          return marker;
        } else if (
          boardCellListToCheck[0] === marker &&
          boardCellListToCheck[4] === marker
        ) {
          return marker;
        }
        return null;
      }
      default: {
        return null;
      }
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
