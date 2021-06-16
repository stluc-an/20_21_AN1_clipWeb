let audioPath = "./assets/audio/Orion.mp3";
let sequencer;

let particlues = [];
let blinkers = [];
let clings = [];

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
            let p = new Ellipse( random(width), random(height),5 );
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
            sequencer.BPM = 130;
            console.log("start-intro");
        },
        stop: 79,
        onStep : (event)=>{
        particlues.push( new Ellipse( random(width), random(height),10) )
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
        particlues.push( new Ellipse( random(width), random(height),3 ) )
        translate(p5.Vector.fromAngle(millis() / 500, 20));

            blinkers.push(new twink(random(width), random(height),15, 1));
            }
    
    })

        sequencer.registerSequence({
        
        name : "rotations",
        start : 147,
        onStart : () => {
            console.log("start-mi2");
        },
        stop: 160,
        onStep : (event)=>{  
        console.log("tilt");

            blinkers.push(new twink(random(width), random(height),18, 7));
            blinkers.push(new twink(random(width), random(height),13, 1));
            blinkers.push(new twink(random(width), random(height),20, 1));
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
            let p = new Ellipse( random(width), random(height),10 );
            if(particlues.length>0){
                particlues[particlues.length-1 ].target = p;
            }
            particlues.push(p);
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
            let p = new Ellipse( random(width), random(height),3 );
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
            let p = new Ellipse( random(width), random(height),7 );
            if(particlues.length>0){
                particlues[particlues.length-1 ].target = p;
            }
            particlues.push(p);

        }

    })

         sequencer.registerSequence({
        name : "boop4",
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
            let p = new Ellipse( random(width), random(height),7 );
            if(particlues.length>0){
                particlues[particlues.length-1 ].target = p;
            }
            particlues.push(p);

        }

    })

        sequencer.registerSequence({
        name : "boop4",
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
            let p = new Ellipse( random(width), random(height),7 );
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
            let p = new Ellipse( random(width), random(height),5 );
            if(particlues.length>0){
                particlues[particlues.length-1 ].target = p;
            }
            particlues.push(p);
            }
        
    })
        sequencer.registerSequence({
        
        name : "end",
        start : 227,
        onStart : () => {
            console.log("start-mi2");
        },
        stop: 243,
        onStep : (event)=>{
            console.log(event);
            let p = new Ellipse( random(width), random(height),5 );
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
            let p = new Ellipse( random(width), random(height),10 );
            if(particlues.length>0){
                particlues[particlues.length-1 ].target = p;
            }
            particlues.push(p);
            }
        
    })
            sequencer.registerSequence({
        
        name : "end3",
        start : 233,
        onStart : () => {
            console.log("start-mi2");
        },
        stop: 243,
        onStep : (event)=>{
            console.log(event);
            blinkers.push(new twink(random(width), random(height),35, 5));
            }
    })

            sequencer.registerSequence({
        
        name : "close",
        start : 244,
        onStart : () => {
            console.log("start-mi2");
        },
        stop: 253,
        onStep : (event)=>{
            console.log(event);
            clings.push( new pupille(0, 0, innerWidth, 350));
          
        }
    })
    

        sequencer.registerSequence({
        
        name : "close",
        start : 245,
        onStart : () => {
            console.log("start-mi2");
        },
        stop: 253,
        onStep : (event)=>{
            console.log(event);
            clings.push( new pupille(0, 0, innerWidth, 550));
          
        }
    })
        sequencer.registerSequence({
        
        name : "close",
        start : 246,
        onStart : () => {
            console.log("start-mi2");
        },
        stop: 253,
        onStep : (event)=>{
            console.log(event);
            clings.push( new pupille(0, 0, innerWidth, 800));
           
        }
    })
        sequencer.registerSequence({
        
        name : "close",
        start : 247,
        onStart : () => {
            console.log("start-mi2");
        },
        stop: 253,
        onStep : (event)=>{
            console.log(event);
            clings.push( new pupille(0, 0, innerWidth, innerHeight));
           
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
    for(let cling of clings){
        cling.draw();
    }
    
    
}

class Ellipse{
    constructor(x, y, size){
        this.x = x;
        this.y = y;
        this.size = 4;
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
        stroke(55,150,255);
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

class pupille{
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color(0);

    
    }
    draw(){
        fill(this.color);
        stroke(0);
        rect(this.x, this.y, this.width, this.height);
        }
    }

