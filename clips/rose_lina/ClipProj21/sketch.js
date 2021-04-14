let audioPath ="./assets/audio/SAMO_VinceStaples.mp3";
let sequencer;


let particules = [];

function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
    sequencer = new Sequencer(audioPath, 78, false);
    sequencer.registerSequence({
        name :"rec",
        start : 17,
        onStart : () => {            console.log("start");
    },
    stop : 300,
    onStop : () => {
        console.log("stop"); 
    },
    onStep : (event)=>{
        console.log(event);
        particules.push( new Rectangle( random(width), random(height) ) );
        }       
    }); 

    sequencer.BPM=153;
    sequencer.registerSequence({
        name :"rose",
        start:1,
        onStart : () => {
            console.log("start");
 },
 stop : 17,
 onStop : () => {
    console.log("stop");
 },
 onStep : (event)=>{
    console.log (event);
    particules.push( new Rectangle( random(width), random(height) ) );
 }
    });

   
}

function draw(){
    sequencer.update();

    for(let particule of particules){
        particule.draw();
    }
}


class Rectangle{
    constructor(x, y){
        this.x=x;
        this.y=y;
        this.size= 90;
        
    }

    draw(){
        fill(300, 200, 200);
        rect(this.x, this.y, this.size);
        noStroke();
        
    }
}

new class Rectangle{
    constructor(x, y){
        this.x=x;
        this.y=y;
        this.size = 90;
    }

    draw (){
        fill(255);
        rect(this.x, this.y, this.size);
    }
}