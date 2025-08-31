import SmallBoardCell from "./SmallBoardCell";
import numberToCellBorderMap from "./utils/numberToCellBorderMap";

export default function SmallBoard({
  number,
  boardData,
  currentMarkerToPlace,
  placeMarker,
  isActive,
}) {
  function handleSmallBoardCellClick(smallBoardCellNumber) {
    console.log("About to call placeMarker() from SmallBoard");
    // Check if board is won or drawn
    if (boardData.wonBy) {
      if (boardData.wonBy === "None") {
        alert(
          `This game has already been finished (Draw). You cannot place a marker here.`
        );
      } else {
        alert(
          `This game has already been finished (Won by ${boardData.wonBy}). You cannot place a marker here.`
        );
      }
      return;
    }
    if (isActive) {
      placeMarker(number, smallBoardCellNumber, currentMarkerToPlace);
    } else {
      alert(
        `This board is inactive, marker can be placed on the active (highlighted) board only`
      );
    }
  }

  let overlayContent = null;
  if (boardData.wonBy === "X") {
    overlayContent = (
      <div className={`overlay-small-board marker-X-overlay`}>X</div>
    );
  } else if (boardData.wonBy === "O") {
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
            cellValue={boardData.boardCellList[0]}
            currentMarkerToPlace={currentMarkerToPlace}
            handleSmallBoardCellClick={handleSmallBoardCellClick}
            isActive={isActive}
          ></SmallBoardCell>
          <SmallBoardCell
            number={2}
            cellValue={boardData.boardCellList[1]}
            currentMarkerToPlace={currentMarkerToPlace}
            handleSmallBoardCellClick={handleSmallBoardCellClick}
            isActive={isActive}
          ></SmallBoardCell>
          <SmallBoardCell
            number={3}
            cellValue={boardData.boardCellList[2]}
            currentMarkerToPlace={currentMarkerToPlace}
            handleSmallBoardCellClick={handleSmallBoardCellClick}
            isActive={isActive}
          ></SmallBoardCell>
          <SmallBoardCell
            number={4}
            cellValue={boardData.boardCellList[3]}
            currentMarkerToPlace={currentMarkerToPlace}
            handleSmallBoardCellClick={handleSmallBoardCellClick}
            isActive={isActive}
          ></SmallBoardCell>
          <SmallBoardCell
            number={5}
            cellValue={boardData.boardCellList[4]}
            currentMarkerToPlace={currentMarkerToPlace}
            handleSmallBoardCellClick={handleSmallBoardCellClick}
            isActive={isActive}
          ></SmallBoardCell>
          <SmallBoardCell
            number={6}
            cellValue={boardData.boardCellList[5]}
            currentMarkerToPlace={currentMarkerToPlace}
            handleSmallBoardCellClick={handleSmallBoardCellClick}
            isActive={isActive}
          ></SmallBoardCell>
          <SmallBoardCell
            number={7}
            cellValue={boardData.boardCellList[6]}
            currentMarkerToPlace={currentMarkerToPlace}
            handleSmallBoardCellClick={handleSmallBoardCellClick}
            isActive={isActive}
          ></SmallBoardCell>
          <SmallBoardCell
            number={8}
            cellValue={boardData.boardCellList[7]}
            currentMarkerToPlace={currentMarkerToPlace}
            handleSmallBoardCellClick={handleSmallBoardCellClick}
            isActive={isActive}
          ></SmallBoardCell>
          <SmallBoardCell
            number={9}
            cellValue={boardData.boardCellList[8]}
            currentMarkerToPlace={currentMarkerToPlace}
            handleSmallBoardCellClick={handleSmallBoardCellClick}
            isActive={isActive}
          ></SmallBoardCell>
          {/* If this board is won, the winning marker is displayed as a big overlay on the board */}
          {overlayContent}
        </div>
      </div>
    </>
  );
}
