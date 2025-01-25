import { useState } from "react";
import SmallBoardCell from "./SmallBoardCell";
import numberToCellBorderMap from "./utils/numberToCellBorderMap";

export default function SmallBoard({
  number,
  currentMarkerToPlace,
  setCurrentMarkerToPlace,
}) {
  const [boardState, setBoardState] = useState({
    boardCellList: [null, null, null, null, null, null, null, null, null],
    wonBy: null,
    isPlayable: true,
  });

  function handleOnMarkerPlace(number) {
    if (!boardState.wonBy) {
      let newBoardCellList = [...boardState.boardCellList];
      newBoardCellList[number - 1] = currentMarkerToPlace;
      let newWonBy = checkWinAndReturnMarker(
        number,
        currentMarkerToPlace,
        newBoardCellList
      );
      let newIsPlayable =
        newWonBy || !newBoardCellList.includes(null) ? false : true;
      let newBoardState = {
        ...boardState,
        boardCellList: newBoardCellList,
        wonBy: newWonBy,
        isPlayable: newIsPlayable,
      };
      setBoardState(newBoardState);
      setCurrentMarkerToPlace(currentMarkerToPlace === "X" ? "O" : "X");
    } else {
      alert(
        "This game has already been won. For now, this will be an alert later we can make this more appealing and also include better thought out UX elements."
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

  return (
    <>
      <div className={`${"main-grid-cell " + numberToCellBorderMap[number]}`}>
        <div className="small-grid-container">
          <SmallBoardCell
            number={1}
            cellValue={boardState.boardCellList[0]}
            onMarkerPlace={handleOnMarkerPlace}
            currentMarkerToPlace={currentMarkerToPlace}
            isPlayable={boardState.isPlayable}
          ></SmallBoardCell>
          <SmallBoardCell
            number={2}
            cellValue={boardState.boardCellList[1]}
            onMarkerPlace={handleOnMarkerPlace}
            currentMarkerToPlace={currentMarkerToPlace}
            isPlayable={boardState.isPlayable}
          ></SmallBoardCell>
          <SmallBoardCell
            number={3}
            cellValue={boardState.boardCellList[2]}
            onMarkerPlace={handleOnMarkerPlace}
            currentMarkerToPlace={currentMarkerToPlace}
            isPlayable={boardState.isPlayable}
          ></SmallBoardCell>
          <SmallBoardCell
            number={4}
            cellValue={boardState.boardCellList[3]}
            onMarkerPlace={handleOnMarkerPlace}
            currentMarkerToPlace={currentMarkerToPlace}
            isPlayable={boardState.isPlayable}
          ></SmallBoardCell>
          <SmallBoardCell
            number={5}
            cellValue={boardState.boardCellList[4]}
            onMarkerPlace={handleOnMarkerPlace}
            currentMarkerToPlace={currentMarkerToPlace}
            isPlayable={boardState.isPlayable}
          ></SmallBoardCell>
          <SmallBoardCell
            number={6}
            cellValue={boardState.boardCellList[5]}
            onMarkerPlace={handleOnMarkerPlace}
            currentMarkerToPlace={currentMarkerToPlace}
            isPlayable={boardState.isPlayable}
          ></SmallBoardCell>
          <SmallBoardCell
            number={7}
            cellValue={boardState.boardCellList[6]}
            onMarkerPlace={handleOnMarkerPlace}
            currentMarkerToPlace={currentMarkerToPlace}
            isPlayable={boardState.isPlayable}
          ></SmallBoardCell>
          <SmallBoardCell
            number={8}
            cellValue={boardState.boardCellList[7]}
            onMarkerPlace={handleOnMarkerPlace}
            currentMarkerToPlace={currentMarkerToPlace}
            isPlayable={boardState.isPlayable}
          ></SmallBoardCell>
          <SmallBoardCell
            number={9}
            cellValue={boardState.boardCellList[8]}
            onMarkerPlace={handleOnMarkerPlace}
            currentMarkerToPlace={currentMarkerToPlace}
            isPlayable={boardState.isPlayable}
          ></SmallBoardCell>
          {/* <div className="overlay-small-board">X</div> */}
          {boardState.wonBy ? (
            <div
              className={
                "overlay-small-board " +
                `${
                  boardState.wonBy === "X"
                    ? "marker-X-overlay"
                    : "marker-O-overlay"
                }`
              }
            >
              {boardState.wonBy}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
