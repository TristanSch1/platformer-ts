export interface IGame {
  readonly gameWidth: number;
  readonly gameHeight: number;
  readonly gravity: number;
  draw(ctx: CanvasRenderingContext2D): void;
  update(): void;
}
