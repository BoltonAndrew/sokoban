import React, { useState, useEffect } from "react";
import styled from "styled-components";
import wall from "./assets/wall.png";
import floor from "./assets/floor.png";
import dot from "./assets/dot.png";
import empty from "./assets/empty.png";
import player from "./assets/player.png";
import crate from "./assets/crate.png";
import { winCondition, gameLoop } from "./utils";
import { maps } from "./maps";

const App = () => {
  const [playerY, setPlayerY] = useState(maps[0].playerPosition[0]);
  const [playerX, setPlayerX] = useState(maps[0].playerPosition[1]);
  const [playerDirection, setPlayerDirection] = useState(0);
  const [currentMap, setCurrentMap] = useState(maps[0].layout);
  const [cratePositions, setCratePositions] = useState(maps[0].crates);
  const [win, setWin] = useState(false);
  const [newMap, setNewMap] = useState(0);
  const [dropDown, setDropDown] = useState(false);
  const [mapName, setMapName] = useState("Map 1");

  useEffect(() => {
    winCondition(currentMap, cratePositions, setWin);
  }, [currentMap, cratePositions, playerX, playerY]);

  const inputHandler = (e) => {
    gameLoop(
      e,
      currentMap,
      cratePositions,
      setCratePositions,
      setPlayerDirection,
      playerX,
      setPlayerX,
      playerY,
      setPlayerY
    );
  };

  const mapChange = (e) => {
    setPlayerY(maps[newMap].playerPosition[0]);
    console.log(maps[newMap].playerPosition[0], playerY);
    setPlayerX(maps[newMap].playerPosition[1]);
    setCurrentMap(maps[newMap].layout);
    setCratePositions(maps[newMap].crates);
    setWin(false);
  };

  return (
    <Page
      onKeyDown={(e) => {
        inputHandler(e);
      }}
      tabIndex={0}
    >
      <Heading>Code Nation Sokoban</Heading>
      <div>
        <h2 onClick={() => setDropDown(true)}>{mapName}</h2>
        {dropDown ? (
          <div>
            {maps.map((item, index) => {
              return (
                <h2
                  key={index}
                  onClick={() => {
                    setNewMap(index);
                    console.log(index);
                    setMapName(`Map ${index + 1}`);
                    setDropDown(false);
                  }}
                >
                  Map {index + 1}
                </h2>
              );
            })}
          </div>
        ) : null}
      </div>
      <button onClick={mapChange}>Select Level</button>
      {win ? <h1>You Win!!!</h1> : null}
      <Game gameWidth={currentMap[0].length}>
        {currentMap.map((item, y) => {
          return item.map((tile, x) => {
            let image;
            if (tile === 0) {
              image = empty;
            } else if (tile === 1) {
              image = wall;
            } else if (tile === 2) {
              image = floor;
            } else {
              image = dot;
            }
            return (
              <Tile image={image} key={x} gameWidth={currentMap[0].length}>
                {playerX === x && playerY === y && (
                  <Player playerDirection={playerDirection} />
                )}
                {cratePositions.map((crate, index) => {
                  if (crate[0] === y && crate[1] === x) {
                    return <Crate key={index} />;
                  } else {
                    return null;
                  }
                })}
              </Tile>
            );
          });
        })}
      </Game>
    </Page>
  );
};

const Page = styled.div`
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
`;
const Heading = styled.h1`
  width: 100vw;
  text-align: center;
  padding: 0;
  margin: 0;
`;

const Game = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: ${(props) => props.gameWidth * 5}vw;
  padding: 0;
  margin: 0;
`;

const Tile = styled.div`
  width: 5vw;
  height: 5vw;
  background-image: url(${(props) => props.image});
  background-size: contain;
  padding: 0;
  margin: 0;
`;

const Player = styled.div`
  width: 5vw;
  height: 5vw;
  background-image: url(${player});
  background-size: contain;
  padding: 0;
  margin: 0;
  transform: rotate(${(props) => props.playerDirection}turn);
`;

const Crate = styled.div`
  width: 5vw;
  height: 5vw;
  background-image: url(${crate});
  background-size: contain;
  padding: 0;
  margin: 0;
`;

export default App;
