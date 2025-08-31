import FloatingPopover from "./FloatingPopover";

export default function HamburgerMenu({
  setIsHamburgerMenuVisible,
  setIsInitialRender,
  setGameData,
}) {
  function handleReset() {
    setIsHamburgerMenuVisible(false);
    setIsInitialRender(true);
    setGameData({
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
  }

  return (
    <>
      <FloatingPopover>
        <button>Home</button>
        <button onClick={handleReset}>Reset Game</button>
        <button>Settings</button>
      </FloatingPopover>
    </>
  );
}
