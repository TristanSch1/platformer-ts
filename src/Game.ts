import { Player } from "./Player";
import { IGame } from "./interfaces/IGame";
import { InputHandler } from "./InputHandler";

export class Game implements IGame {
  player: Player;
  readonly gravity: number;
  readonly gameWidth: number;
  readonly gameHeight: number;

  constructor(gameWidth: number, gameHeight: number) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.gravity = 0.5;
    new InputHandler(this);
    this.player = new Player(this);
  }
  draw = (ctx: CanvasRenderingContext2D) => {
    this.player.draw(ctx);
  };

  update = () => {
    this.player.update();
  };
}
