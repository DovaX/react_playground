import React, { PureComponent } from "react";
import { GameEngine } from "react-game-engine";
import { Box,Box2 } from "./renderers";
import { MoveBox } from "./systems"

export default class SimpleGame extends PureComponent {
  render() {
    return (
      <div>

      
      <GameEngine
        style={{ width: 800, height: 600, backgroundColor: "black" }}
        systems={[MoveBox]}
        entities={{
          box1: { x: 200,  y: 200, renderer: <Box />},
          box2: { x: 200,  y: 200, renderer: <Box2 />}
        }}>

      </GameEngine>
      </div>
    );
  }
}