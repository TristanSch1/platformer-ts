import { Game } from "./Game";

export class Decor {
  game: Game;
  position: { x: number; y: number };
  img: HTMLImageElement;
  constructor(game: Game, src: string) {
    this.game = game;
    this.position = {
      x: 0,
      y: 0,
    };
    this.img = new Image();
    this.img.src = src;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(
      this.img,
      this.position.x,
      this.position.y,
      this.img.width,
      this.game.gameHeight
    );
  }
}
