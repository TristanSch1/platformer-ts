export const GAME_IMAGES = {
  background: "../public/images/background.png",
  foreground: "../public/images/foreground.png",
  // ground: "../public/images/ground.png",
  // highHill: "../public/images/highHill.png",
  // smallHill: "../public/images/smallHill.png",
  // parseGround: "../public/images/parseGround.png",
  // platform: "../public/images/platform.png",
  // reverseIdle: "../public/images/reverseIdle.png",
  // reverseJump: "../public/images/reverseJump.png",
  // reverseParachute: "../public/images/reverseParachute.png",
  // reverseWalk: "../public/images/reverseWalk.png",
  // spriteIdle: "../public/images/spriteIdle.png",
  // spriteJump: "../public/images/spriteJump.png",
  // spriteParachute: "../public/images/spriteParachute.png",
  // spriteWalk: "../public/images/spriteWalk.png",
  // ground_section01: "../public/images/ground_section01.png",
  // ground_section02: "../public/images/ground_section02.png",
};

export const loadImages = (images: string[], onComplete: () => void) => {
  let loaded = 0;

  function onLoad() {
    loaded++;
    if (loaded === images.length) {
      onComplete();
    }
  }

  for (const element in images) {
    let img = new Image();
    img.src = images[element];
    img.addEventListener("load", onLoad);
  }
};
