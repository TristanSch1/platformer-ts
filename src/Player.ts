import { Game } from "./Game";
import { IMovableEntity } from "./interfaces/IMovableEntity";
import { ENTITY_DIRECTION } from "./_config/gameConfig";
import { playerConfig } from "./_config/playerConfig";

export class Player implements IMovableEntity {
  private game: Game;
  position: { x: number; y: number };
  size: { width: number; height: number };
  direction: ENTITY_DIRECTION;
  speed: number;
  velocity: { x: number; y: number };

  constructor(game: Game) {
    this.position = playerConfig.initial.position;
    this.size = playerConfig.initial.size;
    this.direction = playerConfig.initial.direction;
    this.speed = playerConfig.initial.speed;
    this.velocity = playerConfig.initial.velocity;
    this.game = game;
  }

  moveLeft() {
    this.velocity.x = -this.speed;
    this.direction = ENTITY_DIRECTION.LEFT;
  }

  moveRight() {
    this.velocity.x = this.speed;
    this.direction = ENTITY_DIRECTION.RIGHT;
  }

  jump() {
    this.velocity.y -= 18;
  }

  stop() {
    this.velocity.x = 0;
  }

  draw = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = "red";
    ctx.fillRect(
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
  };

  update = () => {
    if (this.position.y + this.velocity.y !== 0) {
      this.position.y += this.velocity.y;
    }
    this.velocity.y += this.game.gravity;
    this.position.x += this.velocity.x;

    if (this.position.y >= this.game.gameHeight - this.size.height) {
      this.position.y = this.game.gameHeight - this.size.height;
      this.velocity.y = 0;
    }

    if (this.position.x <= 0) {
      this.position.x = 0;
    }
  };
}
