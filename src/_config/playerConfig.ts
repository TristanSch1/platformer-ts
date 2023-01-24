import { ENTITY_DIRECTION } from "./gameConfig";

export const playerConfig = {
  initial: {
    position: { x: 10, y: 10 },
    size: { width: 50, height: 50 },
    direction: ENTITY_DIRECTION.RIGHT,
    speed: 5,
    velocity: { x: 0, y: 0 },
  },
};
