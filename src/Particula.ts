import { Vec2 } from "./Vec2";
import { Graphics } from "pixi.js";

export class Particula {
    speed: Vec2;
    object: Graphics;
    lifeTime: number;
    isDead: boolean;
    offset: Vec2;

    constructor(x: number, y: number, lifeTime: number = 10) {
        this.speed = new Vec2(0, 0);
        this.lifeTime = lifeTime;
        this.isDead = false;
        this.offset = new Vec2(x, y);
        
        this.object = new Graphics();
        this.object.x = x;
        this.object.y = y;
        this.object.beginFill('red');
        this.object.drawCircle(x, y, 10);
    }

    update(deltaTime: number) {
        this.object.x += deltaTime;
        this.object.y += deltaTime;
    }
}