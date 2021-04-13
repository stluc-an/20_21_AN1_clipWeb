
let audioPath = "./flp/track08 ep.mp3";
let sequencer;
let boxes = [];
let red = 0;
let green = 0;
let blue = 0;
let col = {
 		r: 255,
 		g: 50,
 		b: 100,
		};
let colors = [];
let heart;
let noiseSphere;
let colo = {
		 r: 100,
		 g: 50,
		 b: 255,
		};
let noiseSphere2;
let noiseSphere3;


function setup() {
	createCanvas(window.innerWidth, window.innerHeight, WEBGL);
	cam = createCamera();
	cam.setPosition(0, 150, 1700);
	cam.lookAt(0, 0, 0);
	setCamera(cam); 

	
	sequencer = new Sequencer(audioPath, 80, true);

		sequencer.registerSequence({
		name : "box appear",
		start : 0,
		onStart : () => {
			console.log("bobobox");
			},
		stop : 19,
		onStop : () => {
			console.log("end1");
		},
		
		onStep : (Event) => {
			boxes.push( new BOX);
			
			
		},

	});

		sequencer.registerSequence({
		name : "first intro",
		start : 7,
		onStart : () => {
			console.log("vasy donne tout");
		},
		stop: 100,

		onStep : (Event) => {
			colors.push( new Smooth);

		}
	});

		sequencer.registerSequence({
		name : "heartBeat",
		start : 51,
		onStart : () => {
			console.log("beatbox");
			heart = new Heart(0, 0);
			},
		stop : 117,
		onStop : () => {
			console.log("end beatbox");
			heart = undefined;
		},
		steps : [1, 1+1/4],
		onStep : (Event) => {
			console.log("step");
			heart.state = 1 - heart.state;
		},

	});

		sequencer.registerSequence({
		name : "noiseS",
		start : 66,
		onStart : () => {
			noiseSphere = new Noise2D();
			console.log("refrain")
			},
		stop : 117,
		onStop : () => {
			console.log("fin refrain");
			noiseSphere = undefined;
		},
		steps : [1, 1+1/4],
		onStep : (Event) => {
			noiseSphere.heartLeft.state = 1 - noiseSphere.heartLeft.state;
			noiseSphere.heartRight.state = 1 - noiseSphere.heartRight.state;
		},

	});

		sequencer.registerSequence({
		name : "noiseS2",
		start : 163,
		onStart : () => {
			noiseSphere2 = new Noise2D2();
			console.log("refrain2")
			},
		stop : 211,
		onStop : () => {
			console.log("fin refrain 2");
			noiseSphere2 = undefined;
		},
		steps : [1, 1+1/4],
		onStep : (Event) => {
			noiseSphere2.heartLeft.state = 1 - noiseSphere2.heartLeft.state;
			noiseSphere2.heartRight.state = 1 - noiseSphere2.heartRight.state;
		},

	});

		sequencer.registerSequence({
		name : "heartBeat2",
		start : 243,
		onStart : () => {
			console.log("beatbox2");
			heart = new Heart(0, 0);
			},
		stop : 307,
		onStop : () => {
			console.log("end beatbox2");
			heart = undefined;
		},
		steps : [1, 1+1/4],
		onStep : (Event) => {
			console.log("step");
			heart.state = 1 - heart.state;
		},

	});

		sequencer.registerSequence({
		name : "noiseS3",
		start : 275,
		onStart : () => {
			noiseSphere3 = new Noise2D3();
			console.log("refrain3")
			},
		stop : 400,
		onStop : () => {
			console.log("fin refrain 3");
			noiseSphere3 = undefined;
		},
		steps : [1, 1+1/4],
		onStep : (Event) => {
			noiseSphere3.heartLeft.state = 1 - noiseSphere3.heartLeft.state;
			noiseSphere3.heartRight.state = 1 - noiseSphere3.heartRight.state;
		},

	});

}	

function draw() {
	sequencer.update();
	
	for(let color of colors){
		color.draw();
	}

	for(let box of boxes){
		box.draw();
	}

	if(heart != undefined){
		heart.draw();
	}
	if(noiseSphere != undefined){
		noiseSphere.draw();
	}
	if(noiseSphere2 != undefined){
		noiseSphere2.draw();
	}
	if(noiseSphere3 != undefined){
		noiseSphere3.draw();
	}


}

class BOX {
	constructor(x, y){
		this.x = 500;
		this.y = 500;

	}
		

	draw() {
		push();
		rotateX(frameCount*0.001);
  		rotateY(frameCount*0.001);
		noFill();
		stroke(255);
		box(this.x, this.y);
		pop();

	}
}

class Heart {
	constructor(x, y){
		this.x = x;
		this.y = y;
		this.minsize = 100;
		this.maxsize = 350;
		this.sizeLimiter = 150;
		this.state = 0;
		this.size = this.minsize;
	}
		

	draw() {
		push();
		translate(this.x, this.y);
		fill(135, 254, 152);
		stroke(0);

		if(this.state == 0 ){
			this.size += (this.minsize - this.size) *0.01;
		}else{
			this.size += (this.maxsize - this.size) *0.01;
		}
		this.size = min(this.size, this.sizeLimiter);
		sphere(this.size);
		pop();
	}
}

class Smooth {
	constructor(){
		}

	draw(){
		background(red, green, blue);

		let speed = frameCount*0.01;

		
			
		let z = noise(speed, 2, 3);
		let z1 = noise(speed, 2, 4);
		blue = lerp(0, 255, z);
		red = lerp(0, 255, z1);

	}
}


 class Noise2D{
 	constructor(){
			this.heartLeft = new Heart(-700, 0);
			this.heartRight = new Heart(700, 0);
 	}

 	draw(){
 		background(col.r, col.g, col.b);
 		push();
 		let speed = frameCount * 0.1;
 		rotateX(PI/5);
 		

 		for(let y = -10; y < 10; y++){
 			for(let x = -10; x < 10; x++){
 				let col = {
 					r: 250,
 					g: 128,
 					b: 200,
 					};
 				
 				push();
 				
 				let z = noise(x * 0.03 * speed, y, 1);
 				let c = lerp(0, 255, z); //probleme d'echelle de col

 				let z1 = noise(x * 0.03 * speed, y, 2);
 				let c1 = lerp(0, 255, z1); //probleme d'echelle de col

 				let z2 = noise(x * 0.03 * speed, y, 3);
 				let c2 = lerp(0, 255, z2); //probleme d'echelle de col

 				z = lerp(-10, 10, z);
 				col.r = c;
 				col.g = c1;
 				col.b = c2;


 				rotateX(frameCount*0.01);
 				rotateY(frameCount*0.0002);
 				fill(col.r, col.g, col.b);
 				noStroke(2);
 				translate(x *190, y*190, z*190);
 				sphere(15);
 				pop();

 			}
 		}
 		pop();
 		this.heartLeft.draw();
 		this.heartRight.draw();





 	}
 }

  class Noise2D2{
 	constructor(){
			this.heartLeft = new Heart(-700, 0);
			this.heartRight = new Heart(700, 0);
 	}

 	draw(){
 		background(colo.r, colo.g, colo.b);
 		push();
 		let speed = frameCount * 0.1;
 		rotateX(PI/5);
 		

 		for(let y = -10; y < 10; y++){
 			for(let x = -10; x < 10; x++){
 				let kol = {
 					r: 255,
 					g: 50,
 					b: 50,
 					};
 				
 				push();
 				
 				let z = noise(x * 0.03 * speed, y, 1);
 				let c = lerp(0, 255, z); //probleme d'echelle de col

 				let z1 = noise(x * 0.03 * speed, y, 2);
 				let c1 = lerp(0, 255, z1); //probleme d'echelle de col

 				let z2 = noise(x * 0.03 * speed, y, 3);
 				let c2 = lerp(0, 255, z2); //probleme d'echelle de col

 				z = lerp(-10, 10, z);
 				kol.r = c;
 				kol.g = c1;
 				kol.b = c2;


 				rotateX(frameCount*0.01);
 				rotateY(frameCount*0.0002);
 				fill(kol.r, kol.g, kol.b);
 				noStroke(2);
 				translate(x *190, y*190, z*190);
 				sphere(18);
 				pop();

 			}
 		}
 		pop();
 		this.heartLeft.draw();
 		this.heartRight.draw();





 	}


 }


  class Noise2D3{
 	constructor(){
			this.heartLeft = new Heart(-700, 0);
			this.heartRight = new Heart(700, 0);
 	}

 	draw(){
 		background(0);
 		push();
 		let speed = frameCount * 0.1;
 		rotateX(PI/5);
 		

 		for(let y = -10; y < 10; y++){
 			for(let x = -10; x < 10; x++){
 				let khol = {
 					r: 45,
 					g: 250,
 					b: 68,
 					};
 				
 				push();
 				
 				let z = noise(x * 0.03 * speed, y, 1);
 				let c = lerp(0, 255, z); //probleme d'echelle de col

 				let z1 = noise(x * 0.03 * speed, y, 2);
 				let c1 = lerp(0, 255, z1); //probleme d'echelle de col

 				let z2 = noise(x * 0.03 * speed, y, 3);
 				let c2 = lerp(0, 255, z2); //probleme d'echelle de col

 				z = lerp(-10, 10, z);
 				khol.r = c;
 				khol.g = c1;
 				khol.b = c2;


 				rotateX(frameCount*0.01);
 				rotateY(frameCount*0.0002);
 				fill(khol.r, khol.g, khol.b);
 				noStroke(2);
 				translate(x *190, y*190, z*190);
 				sphere(18);
 				pop();

 			}
 		}
 		pop();
 		this.heartLeft.draw();
 		this.heartRight.draw();





 	}

 	
 }


