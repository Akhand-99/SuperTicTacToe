import { useEffect, useState } from "react";
import "./css/styles1.css";
import MainBoard from "./components/MainBoard";
import AvatarHamburgerContainer from "./components/AvatarHamburgerContainer";
import checkWinAndReturnMarker from "./components/utils/checkWinAndReturnMarker";

function App() {
  const [isInitialRender, setIsInitialRender] = useState(true);
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

  useEffect(() => {
    if (isInitialRender) {
      if (gameData.currentMarkerToPlace === "O") {
        setIsInitialRender(false);
      }
    }
  }, [gameData, isInitialRender]);

  let oTurnIndicatorClsName = "";
  if (!isInitialRender) {
    oTurnIndicatorClsName =
      gameData.currentMarkerToPlace === "O" ? "visible" : "hidden";
  }

  function placeMarker(
    smallBoardNumber,
    smallBoardCellNumber,
    currentMarkerToPlace
  ) {
    console.log("Inside placeMarker function");
    let newSmallBoardCellList =
      gameData.smallBoards[smallBoardNumber - 1].boardCellList;
    newSmallBoardCellList[smallBoardCellNumber - 1] = currentMarkerToPlace;
    let newSmallBoardWonBy = checkWinAndReturnMarker(
      smallBoardCellNumber,
      currentMarkerToPlace,
      newSmallBoardCellList
    );

    // Condition to check for a Draw
    if (!newSmallBoardWonBy && !newSmallBoardCellList.includes(null)) {
      newSmallBoardWonBy = "None";
    }

    let newSmallBoardData = {
      boardCellList: newSmallBoardCellList,
      wonBy: newSmallBoardWonBy,
    };
    console.log("newSmallBoardData: ", newSmallBoardData);

    let newMainBoardCellList = gameData.mainBoardCellList;
    let newMainBoardWonBy = gameData.wonBy;
    let newActiveBoardNumber = gameData.activeBoardNumber;

    if (newSmallBoardWonBy) {
      console.log("Inside if newSmallBoardWonBy block");
      newMainBoardCellList[smallBoardNumber - 1] = currentMarkerToPlace;
      newMainBoardWonBy = checkWinAndReturnMarker(
        smallBoardNumber,
        currentMarkerToPlace,
        newMainBoardCellList
      );

      // Condition to check for a Draw
      if (!newMainBoardWonBy && !newMainBoardCellList.includes(null)) {
        newMainBoardWonBy = "None";
      }
    }

    // Logic to determine next active board
    if (newMainBoardWonBy) {
      newActiveBoardNumber = -1;
    } else {
      newActiveBoardNumber = !newMainBoardCellList[smallBoardCellNumber - 1]
        ? smallBoardCellNumber
        : 0;
    }

    let newGameData = {
      ...gameData,
      mainBoardCellList: newMainBoardCellList,
      smallBoards: gameData.smallBoards.map((smallBoardData, index) => {
        if (smallBoardNumber - 1 === index) return newSmallBoardData;
        else return smallBoardData;
      }),
      currentMarkerToPlace: currentMarkerToPlace === "X" ? "O" : "X",
      wonBy: newMainBoardWonBy,
      activeBoardNumber: newActiveBoardNumber,
    };
    console.log("newGameData: ", newGameData);
    setGameData(newGameData);
  }

  return (
    <>
      <AvatarHamburgerContainer
        currentMarkerToPlace={gameData.currentMarkerToPlace}
        setIsInitialRender={setIsInitialRender}
        setGameData={setGameData}
      ></AvatarHamburgerContainer>
      <div
        className={`turn-indicator-div x-turn ${
          gameData.currentMarkerToPlace === "X" ? "visible" : "hidden"
        }`}
      ></div>
      <div
        className={`turn-indicator-div o-turn ${oTurnIndicatorClsName}`}
        style={{ display: `${isInitialRender ? "none" : "unset"}` }}
      ></div>
      <MainBoard gameData={gameData} placeMarker={placeMarker}></MainBoard>
    </>
  );
}

export default App;
