import Enemy from "./Enemy.js";
export default class Bullet {
    constructor(x, y, speed, damage) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.damage = damage;
        this.width = 5;
        this.height = 15;
        this.color = "red"
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        this.y -= this.speed;
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
    collideWidth(Enemy){
        if (this.x < Enemy.x + Enemy.width && this.x +
            this.width > Enemy.x && this.y < Enemy.y +
            Enemy.height && this.y + this.height > Enemy.y) {
            return true;
        }
        return false;
    }

}