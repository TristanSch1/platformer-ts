import { Game } from "../Game";
import { IMovableEntity } from "../interfaces/IMovableEntity";
import { ENTITY_DIRECTION, gameConfig } from "../_config/gameConfig";
import { playerConfig } from "../_config/playerConfig";

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

  get leftSide() {
    return this.position.x;
  }

  get rightSide() {
    return this.position.x + this.size.width;
  }

  get topSide() {
    return this.position.y;
  }

  get bottomSide() {
    return this.position.y + this.size.height;
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

  private borderCollisionHandler() {
    const { limits } = gameConfig.parallax;

    if (this.leftSide <= limits.left && this.game.background.position.x < 0) {
      this.position.x = limits.left;
    }

    if (this.rightSide >= limits.right) {
      this.position.x = limits.right - this.size.width;
    }

    if (this.leftSide <= 0) {
      this.position.x = 0;
    }
  }

  private groundCollisionHandler() {
    if (this.bottomSide >= this.game.gameHeight) {
      this.position.y = this.game.gameHeight - this.size.height;
      this.velocity.y = 0;
    }
  }

  private positionHandler() {
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;
  }

  private gravityHandler() {
    this.velocity.y += this.game.gravity;
  }

  private get handlers() {
    return [
      this.positionHandler,
      this.gravityHandler,
      this.groundCollisionHandler,
      this.borderCollisionHandler,
    ];
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "red";
    ctx.fillRect(
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
  }

  update() {
    this.handlers.forEach((handler) => handler.bind(this)());
  }
}
