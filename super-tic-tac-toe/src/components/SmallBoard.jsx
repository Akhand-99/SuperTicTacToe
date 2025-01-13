import { useState } from "react";
import SmallBoardCell from "./SmallBoardCell";

export default function SmallBoard({
  number,
  currentMarkerToPlace,
  setCurrentMarkerToPlace,
}) {
  const [boardState, setBoardState] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const numberToMainCellBorderMap = {
    1: "border-right border-bottom",
    2: "border-right border-bottom",
    3: "border-bottom",
    4: "border-right border-bottom",
    5: "border-right border-bottom",
    6: "border-bottom",
    7: "border-right",
    8: "border-right",
    9: "",
  };

  function handleOnMarkerPlace(number) {
    let newBoardState = [...boardState];
    newBoardState[number - 1] = currentMarkerToPlace;
    setBoardState(newBoardState);
    setCurrentMarkerToPlace(currentMarkerToPlace === "X" ? "O" : "X");
  }

  return (
    <>
      <div
        className={`${"main-grid-cell " + numberToMainCellBorderMap[number]}`}
      >
        <div className="small-grid-container">
          <SmallBoardCell
            number={1}
            cellValue={boardState[0]}
            onMarkerPlace={handleOnMarkerPlace}
          ></SmallBoardCell>
          <SmallBoardCell
            number={2}
            cellValue={boardState[1]}
            onMarkerPlace={handleOnMarkerPlace}
          ></SmallBoardCell>
          <SmallBoardCell
            number={3}
            cellValue={boardState[2]}
            onMarkerPlace={handleOnMarkerPlace}
          ></SmallBoardCell>
          <SmallBoardCell
            number={4}
            cellValue={boardState[3]}
            onMarkerPlace={handleOnMarkerPlace}
          ></SmallBoardCell>
          <SmallBoardCell
            number={5}
            cellValue={boardState[4]}
            onMarkerPlace={handleOnMarkerPlace}
          ></SmallBoardCell>
          <SmallBoardCell
            number={6}
            cellValue={boardState[5]}
            onMarkerPlace={handleOnMarkerPlace}
          ></SmallBoardCell>
          <SmallBoardCell
            number={7}
            cellValue={boardState[6]}
            onMarkerPlace={handleOnMarkerPlace}
          ></SmallBoardCell>
          <SmallBoardCell
            number={8}
            cellValue={boardState[7]}
            onMarkerPlace={handleOnMarkerPlace}
          ></SmallBoardCell>
          <SmallBoardCell
            number={9}
            cellValue={boardState[8]}
            onMarkerPlace={handleOnMarkerPlace}
          ></SmallBoardCell>
          {/* <div className="overlay-small-board">X</div> */}
        </div>
      </div>
    </>
  );
}
