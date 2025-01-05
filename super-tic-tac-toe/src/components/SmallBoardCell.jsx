export default function SmallBoardCell({ number }) {
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
        className={`${"small-grid-cell " + numberToMainCellBorderMap[number]}`}
      >
        X
      </div>
    </>
  );
}
