let audioPath = "./assets/audio/Orion.mp3";
let sequencer;

let particlues = [];
let blinkers = [];


function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    ellipseMode(CENTER);

let ellipse = new Ellipse;
    
    sequencer = new Sequencer(audioPath, 41, false);
    sequencer.registerSequence({
        name : "melodie",
        start : 82,
        onStart : () => {
            sequencer.BPM = 41;
            console.log("start");
        },
        stop : 115,
        onStop : () => {
            console.log("stop");
            
        },
        onStep : (event)=>{
            console.log(event);
            let p = new Ellipse( random(width), random(height) );
            if(particlues.length>0){
                particlues[particlues.length-1 ].target = p;
            }
            particlues.push(p);

        }
        
    })
    
   
        sequencer.registerSequence({
        
        name : "intro",
        start : 1,
        onStart : () => {
            sequencer.BPM = 128;
            console.log("start-intro");
        },
        stop: 79,
        onStep : (event)=>{
        particlues.push( new Ellipse( random(width), random(height) ) )
    }
    
    })
        sequencer.registerSequence({
        
        name : "tilt",
        start : 138,
        onStart : () => {
            console.log("start-mi2");
        },
        stop: 208,
        onStep : (event)=>{  
        console.log("tilt");
        particlues.push( new Ellipse( random(width), random(height) ) )
        translate(p5.Vector.fromAngle(millis() / 500, 20));
                
            }
    
    })

        sequencer.registerSequence({
        name : "boop",
        start : 145,
        onStart : () => {
            sequencer.BPM = 41;
            console.log("start");
        },
        stop : 208,
        onStop : () => {
            console.log("stop");
            
        },
        onStep : (event)=>{
            console.log(event);
            let p = new Ellipse( random(width), random(height) );
            if(particlues.length>0){
                particlues[particlues.length-1 ].target = p;
            }
            particlues.push(p);
            blinkers.push(new twink(random(width), random(height),7, 1));

        }

      })   
   

        sequencer.registerSequence({
        name : "boop2",
        start : 169,
        onStart : () => {
            sequencer.BPM = 41;
            console.log("start");
        },
        stop : 208,
        onStop : () => {
            console.log("stop");
            
        },
        onStep : (event)=>{
            console.log(event);
            let p = new Ellipse( random(width), random(height) );
            if(particlues.length>0){
                particlues[particlues.length-1 ].target = p;
            }
            particlues.push(p);

        }

    })

        sequencer.registerSequence({
        name : "boop3",
        start : 189,
        onStart : () => {
            sequencer.BPM = 41;
            console.log("start");
        },
        stop : 208,
        onStop : () => {
            console.log("stop");
            
        },
        onStep : (event)=>{
            console.log(event);
            let p = new Ellipse( random(width), random(height) );
            if(particlues.length>0){
                particlues[particlues.length-1 ].target = p;
            }
            particlues.push(p);

        }

    })

          sequencer.registerSequence({
        
        name : "end",
        start : 225,
        onStart : () => {
            console.log("start-mi2");
        },
        stop: 243,
        onStep : (event)=>{
            console.log(event);
            let p = new Ellipse( random(width), random(height) );
            if(particlues.length>0){
                particlues[particlues.length-1 ].target = p;
            }
            particlues.push(p);
            }
        
    })
           sequencer.registerSequence({
        
        name : "end2",
        start : 227,
        onStart : () => {
            console.log("start-mi2");
        },
        stop: 230,
        onStep : (event)=>{
            console.log(event);
            let p = new Ellipse( random(width), random(height) );
            if(particlues.length>0){
                particlues[particlues.length-1 ].target = p;
            }
            particlues.push(p);
            }
        
    })
            sequencer.registerSequence({
        
        name : "end3",
        start : 210,
        onStart : () => {
            console.log("start-mi2");
        },
        stop: 243,
        onStep : (event)=>{
            console.log(event);
            blinkers.push(new twink(random(width), random(height),20, 10));
            }
    })
}
    

function draw(){
    sequencer.update();
    background(10); 
    
    
    for(let particlue of particlues){
        particlue.draw();
    }
     for(let blinker of blinkers){
        blinker.draw();
    }
    
    
    
}

class Ellipse{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.size = 3;
        this.target;
        this.bulletX = x;
        this.bulletY = y;
        this.color = color(255);
    
    }
    draw(){
        fill(this.color);
        stroke(0,0,255);
        ellipse(this.x+1, this.y+1, this.size);
        
        if(this.target){
           let dx = this.target.x - this.x;
           let dy = this.target.y - this.y;
            this.bulletX += dx /35;
            this.bulletY += dy /35;
            ellipse(this.bulletX, this.bulletY, 3, 3);    
        }
    
    }
}

class twink{
    constructor(x, y, len, speed = 20){
        this.x = x;
        this.y = y;
        this.len = len/2;
        this.color = color;
        this.dir = true;
        this.counter = 0;
        this.speed = speed;
    }
    draw(){
        stroke(0,128,255);
        if(this.dir){
            line(this.x-this.len, this.y, this.x + this.len, this.y);    
        }
        else{
            line(this.x, this.y-this.len, this.x , this.y + this.len);    
        }

        this.counter ++;
        if(this.counter > this.speed){
           this.dir = !this.dir;    
           this.counter = 0;
        }
        
    }
}


