import { Game } from "./Game";

export class Decor {
  position: { x: number; y: number };
  readonly infinite: boolean;
  private readonly game: Game;
  private readonly img: HTMLImageElement;
  constructor(game: Game, src: string, infinite = false) {
    this.game = game;
    this.position = {
      x: 0,
      y: 0,
    };
    this.infinite = infinite;
    this.img = new Image();
    this.img.src = src;
  }

  get width() {
    return this.img.width;
  }

  get height() {
    return this.img.height;
  }

  get rightSide() {
    return this.position.x + this.img.width;
  }

  get leftSide() {
    return this.position.x;
  }

  get topSide() {
    return this.position.y;
  }

  get bottomSide() {
    return this.position.y + this.img.height;
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(
      this.img,
      this.position.x,
      this.position.y,
      this.img.width,
      this.game.gameHeight
    );

    if (this.infinite) {
      ctx.drawImage(
        this.img,
        this.rightSide,
        this.position.y,
        this.img.width,
        this.game.gameHeight
      );

      if (this.rightSide <= 0) {
        this.position.x = 0;
      }
    }
  }
}
