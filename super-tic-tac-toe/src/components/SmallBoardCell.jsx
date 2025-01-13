export default function SmallBoardCell({ number, cellValue, onMarkerPlace }) {
  const numberToSmallCellBorderMap = {
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

  function placeMarker() {
    if (!cellValue) {
      onMarkerPlace(number);
    } else {
      alert(
        "Sorry, that cell is not empty. For now basic browser alert will be shown, later we can make this notification to user more appealing"
      );
    }
  }
  return (
    <>
      <div
        className={`${"small-grid-cell " + numberToSmallCellBorderMap[number]}`}
        onClick={placeMarker}
      >
        {`${cellValue ? cellValue : ""}`}
      </div>
    </>
  );
}
