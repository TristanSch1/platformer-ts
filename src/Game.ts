import { Player } from "./player/Player";
import { IGame } from "./interfaces/IGame";
import { InputHandler } from "./handlers/InputHandler";
import { Decor } from "./Decor";
import { GAME_IMAGES } from "./utils/images";
import { gameConfig } from "./_config/gameConfig";

export class Game implements IGame {
  player: Player;
  readonly gravity: number;
  readonly gameWidth: number;
  readonly gameHeight: number;
  readonly gameConfig = gameConfig;
  foreground: Decor;
  background: Decor;
  constructor(gameWidth: number, gameHeight: number) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.gravity = gameConfig.gravity;
    this.foreground = new Decor(this, GAME_IMAGES.foreground, true);
    this.background = new Decor(this, GAME_IMAGES.background, true);
    new InputHandler(this);
    this.player = new Player(this);
  }
  handleParallax = () => {
    const { background, foreground, limits } = this.gameConfig.parallax;
    if (this.player.rightSide >= limits.right && this.player.velocity.x > 0) {
      this.background.position.x -= background.speed;
      this.foreground.position.x -= foreground.speed;
    } else if (
      this.player.leftSide <= limits.left &&
      this.player.velocity.x < 0 &&
      this.background.position.x < 0
    ) {
      this.foreground.position.x += foreground.speed;
      this.background.position.x += background.speed;
    }
  };
  draw = (ctx: CanvasRenderingContext2D) => {
    this.background.draw(ctx);
    this.player.draw(ctx);
    this.foreground.draw(ctx);
  };

  update = () => {
    this.handleParallax();
    this.player.update();
  };
}
