let audioPath = "./assets/audio/full-circle.mp3";
let sequencer;

let particules = [];
let snowflakes = [];

 let NUMSINES = 20; 
let sines = new Array(NUMSINES);
let rad; 
let i;


let fund = 0.005; 
let ratio = 1; 
let alpha = 50; 

let trace = false; 

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
    
  sequencer = new Sequencer(audioPath, 55, true);
  sequencer.registerSequence({
      
      name : "introduction",
      start : 3,
      onStart : () => {
          
          console.log("start");
      }, 
      stop : 150,
      onStop : () => {
          console.log("stop");
      },
      onStep : (event) =>{
          console.log(event);
          particules.push(new Ellipse(random(width), random(height)) );
      } 
  });
    
    rad = height / 4; 
  

  for (let i = 0; i<sines.length; i++) {
    sines[i] = PI;
  }
}

function draw() {
    sequencer.update();
    background(0);
    
    for(let particule of particules){
        particule.draw();
    }
    
     let t = frameCount / 60; 

  
  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); 
  }

  
  for (let flake of snowflakes) {
    flake.update(t); 
    flake.display();
  }
    
    if (!trace) {
    stroke(200, 200, 200);
    noFill(); 
  } 
  push();
  translate(width / 2, height / 2); 

  for (let i = 0; i < sines.length; i++) {
    let erad = 0; 
    
    if (trace) {
      stroke(0, 0, 255 * (float(i) / sines.length), alpha);
      fill(0, 0, 255, alpha / 2); 
      erad = 5.0 * (1.0 - float(i) / sines.length);
    }
    let radius = rad / (i + 1); 
    rotate(sines[i]); 
    if (!trace) ellipse(0, 0, radius * 2, radius * 2); 
    push(); 
    translate(0, radius);
    if (!trace) ellipse(0, 0, 5, 5); 
    if (trace) ellipse(0, 0, erad, erad); 
    pop(); 
    translate(0, radius); 
    sines[i] = (sines[i] + (fund + (fund * i * ratio))) % TWO_PI; 
  }

  pop();
}

function keyReleased() {
  if (key==' ') {
    trace = !trace;
    background(255);
  }
}

function snowflake() {
  
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

 
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    
    let w = 0.6; 
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

   
    this.posY += pow(this.size, 0.5);

    
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}

class Ellipse{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.size = 25;
    }
draw(){
    noFill();
    stroke(200, 200, 200);
    ellipse(this.x, this.y, this.size);
    } 
}