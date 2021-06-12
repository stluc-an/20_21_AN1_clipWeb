let audioPath ="./assets/audio/Micro.mp3";
let sequencer;
let sequencer2;
let particules = [];
let pulse; 
let pulse2;
let pulse3;
let Pulse4;
let pulse5;
let pulse6;
let pulse7; 
let pulse8;
let pulse9;
let Pulse10;
let pulse11;
let pulse12;
let pulse13; 
let pulse14;
let pulse15;
let Pulse16;
let pulse17;
let pulse18;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    sequencer = new Sequencer(audioPath, 37, false);
    sequencer.registerSequence({

        name : "introduction",
        start : 1,
        onStart : () => {

            console.log("start");
        }, 
        stop : 59,
        onStop : () => {
            console.log("stop");
        },
        onStep : (event) =>{
            console.log(event);
            particules.push(new rectangle(random(width), random(height)) );
        } 

    }); 

    pulse = new Pulser(width / 2, height / 2, 250, 250); 
    pulse2 = new Pulser(random(width), random(height), 100, 100); 
    noStroke();
    pulse3 = new Pulser(random(width), random(height), 100, 100); 
    noStroke();
    pulse4 = new Pulser(width / 4, height / 4, 250, 250); 
    pulse5 = new Pulser(random(width), random(height), 200, 200); 
    noStroke();
    pulse6 = new Pulser(random(width), random(height), 100, 100); 
    noStroke();
    pulse7 = new Pulser(width / 2, height / 2, 250, 250); 
    pulse8 = new Pulser(random(width), random(height), 100, 100); 
    noStroke();
    pulse9 = new Pulser(random(width), random(height), 100, 100); 
    noStroke();
    pulse10 = new Pulser(width / 4, height / 4, 250, 250); 
    pulse11 = new Pulser(random(width), random(height), 200, 200); 
    noStroke();
    pulse12 = new Pulser(random(width), random(height), 100, 100); 
    noStroke();
    pulse13 = new Pulser(width / 8, height / 8, 500, 500); 
    pulse14 = new Pulser(random(width), random(height), 100, 100); 
    noStroke();
    pulse15 = new Pulser(random(width), random(height), 100, 100); 
    noStroke();
    pulse16 = new Pulser(width / 6, height / 6, 300, 300); 
    pulse17 = new Pulser(random(width), random(height), 200, 200); 
    noStroke();
    pulse18 = new Pulser(random(width), random(height), 100, 100); 
    noStroke();
}

function draw() {
    sequencer.update();
    background(0);
    stroke(250);
    fill(250);

    for(let particule of particules){
        particule.draw();
        pulse.display(); 
        pulse.move();
        pulse2.display(); 
        pulse2.move();
        pulse3.display(); 
        pulse3.move();
        pulse4.display(); 
        pulse4.move();
        pulse5.display(); 
        pulse5.move();
        pulse6.display(); 
        pulse6.move();
        pulse7.display(); 
        pulse7.move();
        pulse8.display(); 
        pulse8.move();
        pulse9.display(); 
        pulse9.move();
        pulse10.display(); 
        pulse10.move();
        pulse11.display(); 
        pulse11.move();
        pulse12.display(); 
        pulse12.move();
        pulse13.display(); 
        pulse13.move();
        pulse14.display(); 
        pulse14.move();
        pulse15.display(); 
        pulse15.move();
        pulse16.display(); 
        pulse16.move();
        pulse17.display(); 
        pulse17.move();
        pulse18.display(); 
        pulse18.move();
    }
}


class rectangle{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.size = 100;
    }
    draw(){
        noFill();
        stroke(250)
        ellipse(this.x, this.y, this.size);
    } 
}

class Pulser {

    constructor(x, y, w, h) {  
        this.x = x; 
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = "white";
        this.n = random(2); 
        this.p = 0; 
        this.inc = 0.0005; 
    }


    display() {
        fill(250);
        ellipse(this.x, this.y, this.w, this.h);
        this.w += random(-1, 1);
        this.h += random(-1, 1);

    }


    move() {
        this.p = noise(this.n);
        this.x = map(this.p, 0, 1, 0, width);
        this.n = this.n + this.inc;
    }
}


