import Player from "./player.js";
import bulletController from "./BulletController.js";
import Enemy from "./Enemy.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d")
canvas.width = 550;
canvas.height = 590;
const bulletcontroller = new bulletController(canvas);
const enemies = [
    new Enemy (50,20,"green",5),
    new Enemy (150,20,"red", 5),
    new Enemy (250,20,"gold",2),
    new Enemy (350,20,"green",2),
    new Enemy (450,20,"gold",10),
    new Enemy (50,100,"green",5),
    new Enemy (150,100,"red",5),
    new Enemy (250,100,"gold",2),
    new Enemy (350,100,"green",2),
    new Enemy (450,100,"gold",20),
];
const player = new Player(canvas.width/5,canvas.height/1.3,bulletcontroller);
function gameLoop() {
    setCommonstyle();
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    player.draw(ctx);
    bulletcontroller.draw(ctx);
    enemies.forEach((Enemy)=>{
        Enemy.draw(ctx)
    });
    

}


function setCommonstyle(){
    ctx.shadowColor = "#d53";
    ctx.shadowBlur = 20;
    ctx.lineWidth = 5;
}
setInterval(gameLoop, 1000 / 60);