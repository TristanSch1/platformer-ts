import { Game } from "./Game";

export class InputHandler {
  constructor(game: Game) {
    document.addEventListener("keydown", (event) => {
      console.log(event.key);
      switch (event.key) {
        //LEFT key
        case "a":
          game.player.moveLeft();
          break;
        //RIGHT key
        case "d":
          game.player.moveRight();
          break;
        //SPACE key
        case " ":
        case "w":
          if (game.player.velocity.y === 0) game.player.jump();
          break;
        //DOWN key
        case "s":
          break;
        //ENTER key
        case "Enter":
          break;
        //ESC key
        case "Escape":
          break;
      }
    });

    document.addEventListener("keyup", (event) => {
      switch (event.key) {
        //LEFT key
        case "a":
          if (game.player.velocity.x < 0) game.player.stop();
          break;
        //RIGHT key
        case "d":
          if (game.player.velocity.x > 0) game.player.stop();
          break;
        //UP key
        case "w":
          break;
        //DOWN key
        case "s":
          game.player.direction = 4;
          break;
      }
    });
  }
}
