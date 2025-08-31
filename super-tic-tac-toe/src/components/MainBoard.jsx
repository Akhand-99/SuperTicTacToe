import SmallBoard from "./SmallBoard";

export default function MainBoard({ gameData, placeMarker }) {
  return (
    <>
      <div className="main-grid-container">
        <SmallBoard
          number={1}
          boardData={gameData.smallBoards[0]}
          currentMarkerToPlace={gameData.currentMarkerToPlace}
          placeMarker={placeMarker}
          isActive={
            gameData.activeBoardNumber === 1 ||
            (gameData.activeBoardNumber === 0 && !gameData.mainBoardCellList[0])
              ? true
              : false
          }
        ></SmallBoard>
        <SmallBoard
          number={2}
          boardData={gameData.smallBoards[1]}
          currentMarkerToPlace={gameData.currentMarkerToPlace}
          placeMarker={placeMarker}
          isActive={
            gameData.activeBoardNumber === 2 ||
            (gameData.activeBoardNumber === 0 && !gameData.mainBoardCellList[1])
              ? true
              : false
          }
        ></SmallBoard>
        <SmallBoard
          number={3}
          boardData={gameData.smallBoards[2]}
          currentMarkerToPlace={gameData.currentMarkerToPlace}
          placeMarker={placeMarker}
          isActive={
            gameData.activeBoardNumber === 3 ||
            (gameData.activeBoardNumber === 0 && !gameData.mainBoardCellList[2])
              ? true
              : false
          }
        ></SmallBoard>
        <SmallBoard
          number={4}
          boardData={gameData.smallBoards[3]}
          currentMarkerToPlace={gameData.currentMarkerToPlace}
          placeMarker={placeMarker}
          isActive={
            gameData.activeBoardNumber === 4 ||
            (gameData.activeBoardNumber === 0 && !gameData.mainBoardCellList[3])
              ? true
              : false
          }
        ></SmallBoard>
        <SmallBoard
          number={5}
          boardData={gameData.smallBoards[4]}
          currentMarkerToPlace={gameData.currentMarkerToPlace}
          placeMarker={placeMarker}
          isActive={
            gameData.activeBoardNumber === 5 ||
            (gameData.activeBoardNumber === 0 && !gameData.mainBoardCellList[4])
              ? true
              : false
          }
        ></SmallBoard>
        <SmallBoard
          number={6}
          boardData={gameData.smallBoards[5]}
          currentMarkerToPlace={gameData.currentMarkerToPlace}
          placeMarker={placeMarker}
          isActive={
            gameData.activeBoardNumber === 6 ||
            (gameData.activeBoardNumber === 0 && !gameData.mainBoardCellList[5])
              ? true
              : false
          }
        ></SmallBoard>
        <SmallBoard
          number={7}
          boardData={gameData.smallBoards[6]}
          currentMarkerToPlace={gameData.currentMarkerToPlace}
          placeMarker={placeMarker}
          isActive={
            gameData.activeBoardNumber === 7 ||
            (gameData.activeBoardNumber === 0 && !gameData.mainBoardCellList[6])
              ? true
              : false
          }
        ></SmallBoard>
        <SmallBoard
          number={8}
          boardData={gameData.smallBoards[7]}
          currentMarkerToPlace={gameData.currentMarkerToPlace}
          placeMarker={placeMarker}
          isActive={
            gameData.activeBoardNumber === 8 ||
            (gameData.activeBoardNumber === 0 && !gameData.mainBoardCellList[7])
              ? true
              : false
          }
        ></SmallBoard>
        <SmallBoard
          number={9}
          boardData={gameData.smallBoards[8]}
          currentMarkerToPlace={gameData.currentMarkerToPlace}
          placeMarker={placeMarker}
          isActive={
            gameData.activeBoardNumber === 9 ||
            (gameData.activeBoardNumber === 0 && !gameData.mainBoardCellList[8])
              ? true
              : false
          }
        ></SmallBoard>
      </div>
    </>
  );
}
