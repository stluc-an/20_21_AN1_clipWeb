let audioPath = "./assets/audio/freakey.mp3";
let sequencer;
let player;
let cam;
let displayImage1 = false;
let displayImage2 = false;
let displayImage3 = false;
let displayImage4 = false;
let displayImage5 = false;
let displayImage6 = false;
let displayImage7 = false;
let displayImage8 = false;
let displayImage9 = false;
let displayImage10 = false;
let image1;
let image2;
let image3;
let image4;
let image5;
let image6;
let image7;
let image8;
let image9;
let image10;



function preload(){
	image1 = loadImage("./assets/image/ovni1.png");
	image2 = loadImage("./assets/image/ovni2.png");
	image3 = loadImage("./assets/image/nuage1.png");
	image4 = loadImage("./assets/image/nuage2.png");
	image5 = loadImage("./assets/image/rayon.png");
	image6 = loadImage("./assets/image/rayon2.png");
	image7 = loadImage("./assets/image/bulle.png");
	image8 = loadImage("./assets/image/bulle2.png");
	image9 = loadImage("./assets/image/truc.png");
	image10 = loadImage("./assets/image/truc2.png");

}


function setup() {
	createCanvas(window.innerWidth, window.innerHeight, WEBGL);

	player = new Player();


	calque = createGraphics(width, height, WEBGL);

	//cam = createCamera();
	//cam.setPosition(0, 0, 100);
	//cam.lookAt(0, 0, 0);
	//cam.perspective(PI * 0.07, width/height);
	//calque.setCamera(cam);

	sequencer = new Sequencer(audioPath, 140, false);
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

		}

	});

	sequencer.registerSequence({
		name : "start",
		start : 34,
		onStart : () => {
			displayImage1 = true;
		
		},
		stop : 98,
		onStop : () => {
			console.log("stop");
	
		},
		onStep : (event)=>{
			console.log(event);


			
		}

	});

		sequencer.registerSequence({
		name : "secondpart",
		start : 99,
		onStart : () => {
			displayImage2 = true;
		},
		stop : 130,
		onStop : () => {
			console.log("stop");
		},
		onStep : (event)=>{
			console.log(event);

			
		}

	});

		sequencer.registerSequence({
		name : "thirdpart",
		start : 131,
		onStart : () => {
			displayImage3 = true;
		},
		stop : 139,
		onStop : () => {
			console.log("stop");
		},
		onStep : (event)=>{
			console.log(event);

			
		}

	});

		sequencer.registerSequence({
		name : "fourpart",
		start : 140,
		onStart : () => {
			displayImage4 = true;
		},
		stop : 164,
		onStop : () => {
			console.log("stop");
		},
		onStep : (event)=>{
			console.log(event);

			
		}

	});

	sequencer.registerSequence({
		name : "cinq",
		start : 165,
		onStart : () => {
			displayImage5 = true;
		},
		stop : 196,
		onStop : () => {
			console.log("stop");
		},
		onStep : (event)=>{
			console.log(event);

			
		}

	});


	sequencer.registerSequence({
		name : "six",
		start : 197,
		onStart : () => {
			displayImage6 = true;
		},
		stop : 229,
		onStop : () => {
			console.log("stop");
		},
		onStep : (event)=>{
			console.log(event);

			
		}

	});

	sequencer.registerSequence({
		name : "sept",
		start : 230,
		onStart : () => {
			displayImage7 = true;
		},
		stop : 261,
		onStop : () => {
			console.log("stop");
		},
		onStep : (event)=>{
			console.log(event);

			
		}

	});


	sequencer.registerSequence({
		name : "huit",
		start : 262,
		onStart : () => {
			displayImage8 = true;
		},
		stop : 293,
		onStop : () => {
			console.log("stop");
		},
		onStep : (event)=>{
			console.log(event);

			
		}

	});

		sequencer.registerSequence({
		name : "neuf",
		start : 294,
		onStart : () => {
			displayImage9 = true;
		},
		stop : 330,
		onStop : () => {
			console.log("stop");
		},
		onStep : (event)=>{
			console.log(event);

			
		}

	});


	sequencer.registerSequence({
		name : "fin",
		start : 331,
		onStart : () => {
			displayImage10 = true;
		},
		stop : 423,
		onStop : () => {
			console.log("stop");
		},
		onStep : (event)=>{
			console.log(event);

			
		}

	});


}




function draw() {

	background(0);
	sequencer.update();

	//player.draw();
	
	calque.push();
	calque.clear();
	calque.noFill();
	calque.stroke(255);
	calque.scale(10);

	let speed = frameCount * 0.015;
	for(let x = -10 ; x < 10 ; x++){
		let y1 = noise( x +
		 0.03 + speed);
		y1 = lerp(-10, 10, y1);
		let y2 = noise( (x+1) + 0.03 + speed );
		y2 = lerp(-10, 10, y2);
		calque.beginShape();
		calque.vertex (x, y1);
		calque.vertex(x+1, y2);
		calque.endShape();
	}

	calque.pop();
	tint(200, 0, 100);
	image(calque, -1 * width/2,10 -1 * height/2);
	tint(150, 0, 200);
	image(calque, -1 * width/2, -1 * height/2);
	tint(200, 0, 150);
	image(calque,10 -1 * width/2, -1 * height/2);
	//noTint();


	if(displayImage1){
		image(image1, -700, 150);	
	}

	if(displayImage2){
		image(image2, 500, 150);	
	}

		if(displayImage3){
		image(image3, -1000, -400);	
	}

		if(displayImage4){
		image(image4, 0, -400);	
	}

		if(displayImage5){
		image(image5, -600, -200);	
	}

		if(displayImage6){
		image(image6, 300, -300);	
	}

		if(displayImage7){
		image(image7, 200, -400);	
	}
	
		if(displayImage8){
		image(image8, -700, -400);	
	}

		if(displayImage9){
		image(image9, -200, -30);	
	}

		if(displayImage10){
		image(image10, 100, -30);	
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

