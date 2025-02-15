export default function checkWinAndReturnMarker(
  number,
  marker,
  boardCellListToCheck
) {
  switch (number) {
    case 1: {
      if (
        boardCellListToCheck[1] === marker &&
        boardCellListToCheck[2] === marker
      ) {
        return marker;
      } else if (
        boardCellListToCheck[3] === marker &&
        boardCellListToCheck[6] === marker
      ) {
        return marker;
      } else if (
        boardCellListToCheck[4] === marker &&
        boardCellListToCheck[8] === marker
      ) {
        return marker;
      }
      return null;
    }
    case 2: {
      if (
        boardCellListToCheck[0] === marker &&
        boardCellListToCheck[2] === marker
      ) {
        return marker;
      } else if (
        boardCellListToCheck[4] === marker &&
        boardCellListToCheck[7] === marker
      ) {
        return marker;
      }
      return null;
    }
    case 3: {
      if (
        boardCellListToCheck[0] === marker &&
        boardCellListToCheck[1] === marker
      ) {
        return marker;
      } else if (
        boardCellListToCheck[5] === marker &&
        boardCellListToCheck[8] === marker
      ) {
        return marker;
      } else if (
        boardCellListToCheck[4] === marker &&
        boardCellListToCheck[6] === marker
      ) {
        return marker;
      }
      return null;
    }
    case 4: {
      if (
        boardCellListToCheck[0] === marker &&
        boardCellListToCheck[6] === marker
      ) {
        return marker;
      } else if (
        boardCellListToCheck[4] === marker &&
        boardCellListToCheck[5] === marker
      ) {
        return marker;
      }
      return null;
    }
    case 5: {
      if (
        boardCellListToCheck[0] === marker &&
        boardCellListToCheck[8] === marker
      ) {
        return marker;
      } else if (
        boardCellListToCheck[2] === marker &&
        boardCellListToCheck[6] === marker
      ) {
        return marker;
      } else if (
        boardCellListToCheck[1] === marker &&
        boardCellListToCheck[7] === marker
      ) {
        return marker;
      } else if (
        boardCellListToCheck[3] === marker &&
        boardCellListToCheck[5] === marker
      ) {
        return marker;
      }
      return null;
    }
    case 6: {
      if (
        boardCellListToCheck[2] === marker &&
        boardCellListToCheck[8] === marker
      ) {
        return marker;
      } else if (
        boardCellListToCheck[3] === marker &&
        boardCellListToCheck[4] === marker
      ) {
        return marker;
      }
      return null;
    }
    case 7: {
      if (
        boardCellListToCheck[0] === marker &&
        boardCellListToCheck[3] === marker
      ) {
        return marker;
      } else if (
        boardCellListToCheck[7] === marker &&
        boardCellListToCheck[8] === marker
      ) {
        return marker;
      } else if (
        boardCellListToCheck[4] === marker &&
        boardCellListToCheck[2] === marker
      ) {
        return marker;
      }
      return null;
    }
    case 8: {
      if (
        boardCellListToCheck[6] === marker &&
        boardCellListToCheck[8] === marker
      ) {
        return marker;
      } else if (
        boardCellListToCheck[4] === marker &&
        boardCellListToCheck[1] === marker
      ) {
        return marker;
      }
      return null;
    }
    case 9: {
      if (
        boardCellListToCheck[6] === marker &&
        boardCellListToCheck[7] === marker
      ) {
        return marker;
      } else if (
        boardCellListToCheck[2] === marker &&
        boardCellListToCheck[5] === marker
      ) {
        return marker;
      } else if (
        boardCellListToCheck[0] === marker &&
        boardCellListToCheck[4] === marker
      ) {
        return marker;
      }
      return null;
    }
    default: {
      return null;
    }
  }
}
