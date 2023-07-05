import Bullet from "./Bullet.js";
export default class Enemy {
    constructor(x, y, color, health) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.health = health;
        this.height = 50;
        this.widt = 50;
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        if (this.health > 1) {
            ctx.strokeStyle = "white";
        }
        else {
            ctx.strokeStyle = this.color;
        }
        ctx.fillRect(this.x, this.y, this.widt, this.height)
        ctx.strokeRect(this.x, this.y, this.widt, this.height)
        ctx.fillStyle = "black";
        ctx.font = "25px Arial";
        ctx.fillText(`${this.health}`, this.x+this.widt/3, this.y+30);
        ctx.fillText(this.health, this.x + this.widt / 3.5, this.t + this.health / 1.5);
    } 
    takeDamage(color){
        this.health -= damage;
    }
}

