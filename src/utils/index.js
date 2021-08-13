const collision = (mapArr, futureEntityCoords) => {
  if (mapArr[futureEntityCoords[0]][futureEntityCoords[1]] === 1) {
    return 0;
  } else {
    return 1;
  }
};

const crateCheck = (crateCoords, futureManipCrate) => {
  let canMove = true;
  crateCoords.map((crate) => {
    if (crate[0] === futureManipCrate[0] && crate[1] === futureManipCrate[1]) {
      canMove = false;
    }
    return canMove;
  });
  return canMove;
};

const crateCollision = (
  mapArr,
  direction,
  futureEntityCoords,
  crateState,
  setCrateState
) => {
  let isCrate = false;
  let manipCrate;
  let crateCoords = crateState;
  let canMove = true;
  crateState.map((crate, i) => {
    if (
      crate[0] === futureEntityCoords[0] &&
      crate[1] === futureEntityCoords[1]
    ) {
      isCrate = true;
      manipCrate = crate;
      let movement;
      if (isCrate) {
        if (direction === 0) {
          movement = collision(mapArr, [manipCrate[0], manipCrate[1] + 1]);
          if (crateCheck(crateState, [manipCrate[0], manipCrate[1] + 1])) {
            manipCrate[1] += movement;
            crateCoords[i] = manipCrate;
            canMove = true;
          } else {
            canMove = false;
          }
        } else if (direction === 0.25) {
          movement = collision(mapArr, [manipCrate[0] + 1, manipCrate[1]]);
          if (
            crateCheck(crateState, [manipCrate[0] + 1, manipCrate[1]]) &&
            movement > 0
          ) {
            manipCrate[0] += movement;
            crateCoords[i] = manipCrate;
            canMove = true;
          } else {
            canMove = false;
          }
        } else if (direction === 0.5) {
          movement = collision(mapArr, [manipCrate[0], manipCrate[1] - 1]);
          if (
            crateCheck(crateState, [manipCrate[0], manipCrate[1] - 1]) &&
            movement > 0
          ) {
            manipCrate[1] -= movement;
            crateCoords[i] = manipCrate;
            canMove = true;
          } else {
            canMove = false;
          }
        } else if (direction === 0.75) {
          movement = collision(mapArr, [manipCrate[0] - 1, manipCrate[1]]);
          if (
            crateCheck(crateState, [manipCrate[0] - 1, manipCrate[1]]) &&
            movement > 0
          ) {
            manipCrate[0] -= movement;
            crateCoords[i] = manipCrate;
            canMove = true;
          } else {
            canMove = false;
          }
        }
      }
      if (movement === 0) {
        canMove = false;
      }
    }
    return canMove;
  });
  setCrateState(crateCoords);
  return canMove;
};

export const winCondition = (mapArr, crates, setWin) => {
  let crateCount = 0;
  crates.map((crate, index) => {
    if (mapArr[crate[0]][crate[1]] === 3) {
      crateCount += 1;
    }
    return crateCount;
  });
  if (crateCount === crates.length) {
    setWin(true);
  }
};

export const gameLoop = async (
  e,
  currentMap,
  cratePositions,
  setCratePositions,
  setPlayerDirection,
  playerX,
  setPlayerX,
  playerY,
  setPlayerY
) => {
  let canMove = true;
  if (e.key === "a" || e.key === "ArrowLeft") {
    await setPlayerDirection(0.5);
    if (playerX > 0) {
      canMove = crateCollision(
        currentMap,
        0.5,
        [playerY, playerX - 1],
        cratePositions,
        setCratePositions
      );
      if (canMove) {
        setPlayerX(playerX - collision(currentMap, [playerY, playerX - 1]));
      }
    }
  } else if (e.key === "d" || e.key === "ArrowRight") {
    await setPlayerDirection(0);
    if (playerX < currentMap[0].length) {
      canMove = crateCollision(
        currentMap,
        0,
        [playerY, playerX + 1],
        cratePositions,
        setCratePositions
      );
      if (canMove) {
        setPlayerX(playerX + collision(currentMap, [playerY, playerX + 1]));
      }
    }
  } else if (e.key === "s" || e.key === "ArrowDown") {
    await setPlayerDirection(0.25);
    if (playerY < currentMap.length) {
      canMove = crateCollision(
        currentMap,
        0.25,
        [playerY + 1, playerX],
        cratePositions,
        setCratePositions
      );
      if (canMove) {
        setPlayerY(playerY + collision(currentMap, [playerY + 1, playerX]));
      }
    }
  } else if (e.key === "w" || e.key === "ArrowUp") {
    await setPlayerDirection(0.75);
    if (playerY > 0) {
      canMove = crateCollision(
        currentMap,
        0.75,
        [playerY - 1, playerX],
        cratePositions,
        setCratePositions
      );
      if (canMove) {
        setPlayerY(playerY - collision(currentMap, [playerY - 1, playerX]));
      }
    }
  }
};
