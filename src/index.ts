import { Application } from 'pixi.js'
import { Agua } from './Agua';

const particleCount = 2000;

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1500,
	height: 800
});

let particles: Agua[] = [];

for(let i = 0; i < particleCount; i++){
	particles[i] = new Agua(-500 + Math.random() * 2000, -1600 + Math.random() * 1600, 20, -100);
	app.stage.addChild(particles[i].object);
}

app.ticker.add((delta) => {
    // just for fun, let's rotate mr rabbit a little
    // delta is 1 if running at 100% performance
    // creates frame-independent transformation
	for(let i = 0; i < particleCount; i++){
		particles[i].update(delta);
	}
});