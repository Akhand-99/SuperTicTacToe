import SmallBoardCell from "./SmallBoardCell";

export default function SmallBoard({ number }) {
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
  return (
    <>
      <div
        className={`${"main-grid-cell " + numberToMainCellBorderMap[number]}`}
      >
        <div className="small-grid-container">
          <SmallBoardCell number={1}></SmallBoardCell>
          <SmallBoardCell number={2}></SmallBoardCell>
          <SmallBoardCell number={3}></SmallBoardCell>
          <SmallBoardCell number={4}></SmallBoardCell>
          <SmallBoardCell number={5}></SmallBoardCell>
          <SmallBoardCell number={6}></SmallBoardCell>
          <SmallBoardCell number={7}></SmallBoardCell>
          <SmallBoardCell number={8}></SmallBoardCell>
          <SmallBoardCell number={9}></SmallBoardCell>
          {/* <div className="overlay-small-board">X</div> */}
        </div>
      </div>
    </>
  );
}
