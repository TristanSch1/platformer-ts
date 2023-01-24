export const gameConfig = {
  gravity: 0.5,
  parallax: {
    background: {
      speed: 1,
    },
    foreground: {
      speed: 2,
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
