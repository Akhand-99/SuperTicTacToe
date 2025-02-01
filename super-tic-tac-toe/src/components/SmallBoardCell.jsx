import { useRef } from "react";
import numberToCellBorderMap from "./utils/numberToCellBorderMap";

export default function SmallBoardCell({
  number,
  cellValue,
  onMarkerPlace,
  currentMarkerToPlace,
  isActive,
}) {
  const cellRef = useRef(null);

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
    if (!cellRef.current.innerHTML && isActive) {
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
          numberToCellBorderMap[number] +
          " marker-" +
          cellValue
        } ${!isActive ? "inactive" : ""}`}
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
