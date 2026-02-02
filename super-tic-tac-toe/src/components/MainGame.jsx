import { useState } from "react";
import LocalMultiplayer from "./LocalMultiplayer";
import OnlineMultiplayer from "./OnlineMultiplayer";

export default function MainGame({ gameMode }) {
  const [gameData, setGameData] = useState({
    mainBoardCellList: [null, null, null, null, null, null, null, null, null],
    smallBoards: [
      {
        boardCellList: [null, null, null, null, null, null, null, null, null],
        wonBy: null,
      },
      {
        boardCellList: [null, null, null, null, null, null, null, null, null],
        wonBy: null,
      },
      {
        boardCellList: [null, null, null, null, null, null, null, null, null],
        wonBy: null,
      },
      {
        boardCellList: [null, null, null, null, null, null, null, null, null],
        wonBy: null,
      },
      {
        boardCellList: [null, null, null, null, null, null, null, null, null],
        wonBy: null,
      },
      {
        boardCellList: [null, null, null, null, null, null, null, null, null],
        wonBy: null,
      },
      {
        boardCellList: [null, null, null, null, null, null, null, null, null],
        wonBy: null,
      },
      {
        boardCellList: [null, null, null, null, null, null, null, null, null],
        wonBy: null,
      },
      {
        boardCellList: [null, null, null, null, null, null, null, null, null],
        wonBy: null,
      },
    ],
    currentMarkerToPlace: "X",
    wonBy: null, //"X" || "O" || "None" || null. If null, game is not finished.
    activeBoardNumber: 0, // 0 means, marker can be placed on any board (For initial move and moves where the board to be played on is full, or already won)
  });

  let gameModeViewObject = {
    local: (
      <LocalMultiplayer
        gameData={gameData}
        setGameData={setGameData}
      ></LocalMultiplayer>
    ),
    online: <OnlineMultiplayer></OnlineMultiplayer>,
  };

  return <>{gameModeViewObject[gameMode]}</>;
}
