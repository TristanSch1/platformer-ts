import { Player } from "./Player";
import { IGame } from "./interfaces/IGame";
import { InputHandler } from "./InputHandler";
import { Decor } from "./Decor";
import { GAME_IMAGES } from "./utils/images";

export class Game implements IGame {
  player: Player;
  readonly gravity: number;
  readonly gameWidth: number;
  readonly gameHeight: number;
  foreground: Decor;
  background: Decor;
  constructor(gameWidth: number, gameHeight: number) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.gravity = 0.5;
    this.foreground = new Decor(this, GAME_IMAGES.foreground);
    this.background = new Decor(this, GAME_IMAGES.background);
    new InputHandler(this);
    this.player = new Player(this);
  }
  draw = (ctx: CanvasRenderingContext2D) => {
    this.background.draw(ctx);
    this.player.draw(ctx);
    this.foreground.draw(ctx);
  };

  update = () => {
    this.player.update();
  };
}
