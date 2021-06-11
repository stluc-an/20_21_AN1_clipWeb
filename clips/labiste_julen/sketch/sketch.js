let audioPath = "./assets/audio/freakey.mp3";
let sequencer;
let cam;
let player


function setup() {
	createCanvas(window.innerWidth, window.innerHeight, WEBGL);

	player = new Player();

	cam = createCamera();
	cam.setPosition(0, 0, 100);
	cam.lookAt(0, 0, 0);
	cam.perspective(PI * 0.07, width/height);
	setCamera(cam);

	sequencer = new Sequencer(audioPath, 140, true);
	sequencer.registerSequence({
		name : "introduction",
		start : 2,
		onStart : () => {
			console.log("start");
		},
		stop : 33,
		onStop : () => {
			console.log("stop");
		},
		onStep : (event)=>{
			console.log(event);
			particlues.push( new Rectangle( random(width), random(height) ) );
		}

	});
}

function draw() {
	background(0);

	player.draw();
	
	noFill();
	stroke(255);

	let speed = frameCount * 0.01;


	for(let x = -10 ; x < 10 ; x++){

		let y1 = noise( x + 0.03 + speed);
		y1 = lerp(-10, 10, y1);

		let y2 = noise( (x+1) + 0.03 + speed );
		y2 = lerp(-10, 10, y2);

		beginShape();
		vertex (x, y1);
		vertex(x+1, y2);
		endShape();



	}
}

class Player {
	constructor(){
		this.posX = 0;
		this.posY = 0;
	}

	draw(){
		fill(0);
		noStroke();
		ellipse(this.posX, this.posY, 100);
	}
}


