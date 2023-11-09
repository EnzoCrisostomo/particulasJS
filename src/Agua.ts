import { Particula } from "./Particula";
import { Graphics } from "pixi.js";

export class Agua extends Particula {
    wind: number;
    size: number;

    constructor(x: number, y: number, lifeTime: number = 10, wind: number = 0) {
        super(x, y, lifeTime);
        this.wind = ((Math.random() * 2) - 1 + wind) / 5;

        this.size = 1 + Math.random();

        this.object = new Graphics();
        this.object.beginFill({r: 204, g: 255, b: 255});
        this.object.drawCircle(x, y, 2);
    }

    override update(deltaTime: number) {
        if (this.object.y + this.offset.y > 800) {
            this.object.y = 0;
            this.speed.y = 0;
            this.speed.x = 0;
            if (this.object.x - this.offset.x < 0 || this.object.x - this.offset.x > 1500) {
                this.object.x = -500 + Math.random() * 2000;
            }
        }

        this.speed.y += this.size * 9.8 * deltaTime / 1000;
        this.speed.x += this.wind * deltaTime / 1000 / this.size;

        this.object.x += (Math.random() * 2 - 1) / 10 + this.speed.x;
        this.object.y += this.speed.y;

        this.lifeTime -= deltaTime / 10;

        if (this.lifeTime <= 0) {
            this.isDead = true;
        }
    }
}