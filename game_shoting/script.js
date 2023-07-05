import Player from "./player.js";
import BulletController from "./BulletController.js";
import Enemy from "./Enemy.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
canvas.width = 550;
canvas.height = 590;
const bulletController = new BulletController(canvas);
const enemies = [
  new Enemy(50, 20, "green", 5),
  new Enemy(150, 20, "red", 5),
  new Enemy(250, 20, "gold", 2),
  new Enemy(350, 20, "green", 2),
  new Enemy(450, 20, "gold", 10),
  new Enemy(50, 100, "green", 5),
  new Enemy(150, 100, "red", 5),
  new Enemy(250, 100, "gold", 2),
  new Enemy(350, 100, "green", 2),
  new Enemy(450, 100, "gold", 20),
];
const player = new Player(canvas.width / 5, canvas.height / 1.3, bulletController);

function isCollision(bullet, enemy) {
  if (
    bullet.x >= enemy.x &&
    bullet.x <= enemy.x + enemy.width &&
    bullet.y >= enemy.y &&
    bullet.y <= enemy.y + enemy.height
  ) {
    return true;
  }
  return false;
}

function gameLoop() {
  setCommonStyle();
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  player.draw(ctx);
  bulletController.draw(ctx);
  let bullets = [...bulletController.bullets];

  const removeElements = [];

  enemies.forEach((enemy) => {
    let index = 0;
    let isBrake = false;
    while (index < bullets.length) {
      const bullet = bullets[index];
      if (isCollision(bullet, enemy)) {
        console.log('hitted', removeElements);
        removeElements.push(bullet);
        enemy.takeDamage(bullet);
        isBrake = true;
        break;
      }
      index++;
    }

    if (isBrake) {
      console.log(index, bullets);
    }

    enemy.draw(ctx);
  });

 
  removeElements.forEach((bullet) => {
    bulletController.removeBullet(bullet);
  });

  enemies.forEach((enemy, index) => {
    if (enemy.isDead()) {
      enemies.splice(index, 1);
    }
  });
}

function setCommonStyle() {
  ctx.shadowColor = "#d53";
  ctx.shadowBlur = 20;
  ctx.lineWidth = 5;
}

setInterval(gameLoop, 1000 / 60);
