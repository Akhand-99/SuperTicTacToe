import { useRef } from "react";
import numberToCellBorderMap from "./utils/numberToCellBorderMap";

export default function SmallBoardCell({
  number,
  cellValue,
  currentMarkerToPlace,
  handleSmallBoardCellClick,
  isActive,
}) {
  const cellRef = useRef(null);

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
        onClick={() => {
          if (cellValue) {
            alert(
              "Sorry, that cell is not empty. For now basic browser alert will be shown, later we can make this notification to user more appealing"
            );
            return;
          }
          handleSmallBoardCellClick(number);
        }}
        onMouseEnter={onMarkerAboutToPlace}
        onMouseLeave={onMarkerAboutToPlaceReject}
      >
        {cellValue}
      </div>
    </>
  );
}
