const map1 = {
  layout: [
    [0, 0, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 2, 2, 2, 1, 0],
    [1, 3, 2, 2, 2, 2, 1, 0],
    [1, 1, 1, 2, 2, 3, 1, 0],
    [1, 3, 1, 1, 2, 2, 1, 0],
    [1, 2, 1, 2, 3, 2, 1, 1],
    [1, 2, 2, 3, 2, 2, 3, 1],
    [1, 2, 2, 2, 3, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
  ],
  crates: [
    [2, 3],
    [3, 4],
    [4, 4],
    [6, 1],
    [6, 3],
    [6, 4],
    [6, 5],
  ],
  playerPosition: [2, 2],
};

const map2 = {
  layout: [
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 2, 2, 2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 1],
    [1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 2, 2, 3, 3, 1],
    [0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  crates: [
    [2, 5],
    [4, 5],
    [3, 7],
    [4, 8],
    [7, 2],
    [7, 5],
  ],
  playerPosition: [8, 12],
};

const map3 = {
  layout: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [1, 3, 3, 2, 2, 1, 2, 2, 2, 2, 2, 1, 1, 1],
    [1, 3, 3, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 3, 3, 2, 2, 1, 2, 1, 1, 1, 1, 2, 2, 1],
    [1, 3, 3, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 1],
    [1, 3, 3, 2, 2, 1, 2, 1, 2, 2, 2, 2, 1, 1],
    [1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 2, 2, 2, 1],
    [0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [0, 0, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ],
  crates: [
    [2, 7],
    [2, 10],
    [3, 6],
    [5, 10],
    [6, 9],
    [6, 11],
    [7, 9],
    [7, 11],
    [7, 4],
    [7, 7],
  ],
  playerPosition: [4, 7],
};

const map4 = {
  layout: [
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 1, 2, 2, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2, 1, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 2, 1, 1, 1],
    [1, 3, 3, 3, 3, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 3, 3, 3, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  crates: [
    [2, 10],
    [2, 12],
    [3, 10],
    [3, 13],
    [4, 10],
    [4, 12],
    [5, 10],
    [6, 10],
    [6, 13],
    [7, 9],
    [7, 12],
  ],
  playerPosition: [1, 14],
};

const map5 = {
  layout: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 3, 3, 3, 3, 1],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 3, 3, 1],
    [0, 0, 0, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 1],
    [0, 0, 0, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 3, 3, 3, 3, 1],
    [0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 3, 3, 3, 3, 1],
    [0, 0, 0, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0],
    [1, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 2, 2, 2, 1, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 2, 2, 2, 1, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  crates: [
    [3, 11],
    [3, 13],
    [4, 5],
    [4, 6],
    [4, 7],
    [4, 9],
    [4, 12],
    [5, 6],
    [5, 12],
    [6, 5],
    [6, 6],
    [6, 9],
    [6, 11],
    [6, 13],
    [7, 6],
    [9, 5],
    [10, 2],
    [10, 3],
    [10, 5],
    [10, 6],
  ],
  playerPosition: [10, 8],
};

export const maps = [map1, map2, map3, map4, map5];
