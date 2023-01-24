export const gameConfig = {
  gravity: 0.5,
  parallax: {
    background: {
      speed: 5,
    },
    foreground: {
      speed: 7,
    },
    limits: {
      left: 100,
      right: 400,
    },
  },
};

export enum ENTITY_DIRECTION {
  LEFT,
  RIGHT,
}
