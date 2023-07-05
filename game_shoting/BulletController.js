import Enemy from "./Enemy.js";
import Bullet from "./Bullet.js";
export default class bulletController {
    bullets = [];
    timerTillNextBullet = 0;
    constructor(canvas) {
        this.canvas = canvas;
    }
    shoot(x, y, speed, damage, delay) {
        if (this.timerTillNextBullet <= 0) {
            this.bullets.push(new Bullet(x, y, speed, damage))
            this.timerTillNextBullet = delay;
        }
        this.timerTillNextBullet--;
    }
    draw(ctx) {
        this.bullets.forEach((bullet) => bullet.draw(ctx))
    }
    collideWidt(Enemy) {
        return this.bullets.some(bullet => {
            if (bullet.collideWidt(Enemy)) {
                this.bullets.slice(this.bullets.indexOf(bullet),1);
                return true;
            }
            return false;
        });
        
    }
    
}