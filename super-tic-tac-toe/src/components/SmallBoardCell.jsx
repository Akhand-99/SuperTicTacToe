import { useRef } from "react";

export default function SmallBoardCell({
  number,
  cellValue,
  onMarkerPlace,
  currentMarkerToPlace,
  isPlayable,
}) {
  const cellRef = useRef(null);
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

  function onMarkerAboutToPlace() {
    if (!cellRef.current.innerHTML && isPlayable) {
      cellRef.current.innerHTML = currentMarkerToPlace;
      cellRef.current.className = cellRef.current.className.replace(
        "marker-null",
        `marker-${currentMarkerToPlace} transparent`
      );
    }
  }

  function onMarkerAboutToPlaceReject() {
    if (cellRef.current.className.includes("transparent")) {
      cellRef.current.innerHTML = null;
      cellRef.current.className = cellRef.current.className.replace(
        `marker-${currentMarkerToPlace} transparent`,
        "marker-null"
      );
    }
  }
  return (
    <>
      <div
        ref={cellRef}
        className={`${
          "small-grid-cell " +
          numberToSmallCellBorderMap[number] +
          " marker-" +
          cellValue
        } `}
        onClick={placeMarker}
        onMouseEnter={onMarkerAboutToPlace}
        onMouseLeave={onMarkerAboutToPlaceReject}
      >
        {/* {`${cellValue ? cellValue : ""}`} */}
        {cellValue}
      </div>
    </>
  );
}
