import { IEntity } from "./IEntity";
import { ENTITY_DIRECTION } from "../_config/gameConfig";

export interface IMovableEntity extends IEntity {
  direction: ENTITY_DIRECTION;
  speed: number;
  velocity: { x: number; y: number };
  draw(ctx: CanvasRenderingContext2D): void;
  update(): void;
}
