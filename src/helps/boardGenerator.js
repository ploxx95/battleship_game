export function initialBoard() {
  let row = [];
  let column = [];
  let arrcoordinateShips;
  let arrOfShips = shipsRandomCoord();

  for (let r = 0; r <= 9; r++) {
    column = [];
    for (let c = 0; c <= 9; c++) {
      arrcoordinateShips = arrOfShips
        .map((ship) => ship.coord)
        .sort((a, b) => a - b);
      let coordBoard = parseInt(`${c}${r}`);
      if (arrcoordinateShips.flat().includes(coordBoard)) {
        let box = {
          coordinate: coordBoard,
          status: {
            ship: true,
            fired: false,
            status: true,
            isdead: false,
          },
        };
        column.push(box);
      } else {
        let box = {
          coordinate: coordBoard,
          status: {
            ship: false,
            fired: false,
          },
        };
        column.push(box);
      }
    }
    row.push(column);
  }
  console.log(arrcoordinateShips);
  return { row, arrcoordinateShips };
}

function shipsRandomCoord() {
  const arrcoordShips = [];
  const ShipsInfo = [];
  let ShipLength = 3;
  let numberOfShips = 10;
  while (arrcoordShips.length < numberOfShips) {
    if (ShipLength < 0) {
      ShipLength = 3;
    }
    let randomCord = coordRandom(ShipLength);
    let ifNotRepeatCoord = notRepeatCoords(arrcoordShips, randomCord);
    if (ifNotRepeatCoord) {
      ShipsInfo.push({ coord: randomCord, ShipLength: ShipLength + 1 });
      arrcoordShips.push(randomCord);
      ShipLength--;
    }
  }

  return ShipsInfo;
}
function notRepeatCoords(coordShips, coordShipToAdd) {
  return coordShipToAdd.every((coordBox) => {
    let ifRepeat = coordShips.flat().includes(coordBox);

    return !ifRepeat;
  });
}

function coordRandom(ShipLength) {
  let coord = Math.round(Math.random() * (99 - 0) + 0);
  let isVertical = Math.round(Math.random());
  let coordsShip;
  if (isVertical) {
    coordsShip = Horizontal(coord, ShipLength);
  } else {
    coordsShip = Vertical(coord, ShipLength);
  }

  return coordsShip;
}
function Horizontal(coord, ShipLength) {
  let isNotExceedLimit =
    Math.floor(coord / 10) == Math.floor((coord + ShipLength) / 10);
  let arrCoordinateShip = generateSizeShip(isNotExceedLimit, coord, ShipLength);
  return arrCoordinateShip;
}

function Vertical(coord, ShipLength) {
  let isNotExceedLimit = coord + ShipLength * 10 < 100;
  let arrCoordinateShip = generateSizeShip(
    isNotExceedLimit,
    coord,
    ShipLength,
    10
  );
  return arrCoordinateShip;
}

function generateSizeShip(orientation, coord, ShipLength, XorY = 1) {
  let arr = [];
  for (let i = 0; i <= ShipLength; i++) {
    if (orientation) {
      arr.push(coord + i * XorY);
    } else if (!orientation) {
      arr.push(coord - i * XorY);
    }
  }
  return arr;
}
