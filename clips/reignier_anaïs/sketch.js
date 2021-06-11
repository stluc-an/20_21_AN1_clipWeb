let audioPath = "./assets/audio/nintendo.mp3";
let sequencer;

let particlues = [];
let colors = [];
let disco = [];

let camzoom;

let col = {
    r: 200,
    g: 100,
    b: 0,
};

function setup(){
    createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    
   disco = new Sphere;
    
    camzoom = new CustomCamera()
    camzoom.setPosition(0, 0, 500);
    sequencer = new Sequencer(audioPath, 64, true);
    sequencer.registerSequence({
        name : "part1",
        start : 5,
        onStart : () => {
            console.log("start");
        },
        stop : 10,
        onStop : () => {
            console.log("stop");  
        },
        onStep : (event)=>{
            console.log(event);
           particlues.push(new Ellipse( random(-width/2, width/2), random(-height/2, height/2) ) );
          
            for(let particlue of particlues){
              particlue.rond = true; 
            }
        }
        
    });
    
    sequencer.registerSequence({
        name : "part2",
        start : 10,
        onStart : () => {
            console.log("start");
        },
        stop : 20,
        onStop : () => {
            console.log("stop");  
        },
        onStep : (event)=>{
            console.log(event);
           particlues.push(new Ellipse( random(-width/2, width/2), random(-height/2, height/2) ) );
          
            for(let particlue of particlues){
              particlue.rond = false; 
            }
        }
        
    });
    
     sequencer.registerSequence({
        name : "part3",
        start : 20,
        onStart : () => {
            console.log("start");
        },
        stop : 30,
        onStop : () => {
            console.log("stop");  
        },
        onStep : (event)=>{
            console.log(event);
          particlues.push(new Ellipse( random(-width/2, width/2), random(-height/2, height/2) ) );
          
            for(let particlue of particlues){
              particlue.rond = true; 
            }
        }
        
    });
    
    
      sequencer.registerSequence({
        name : "part4",
        start : 30,
        onStart : () => {
            console.log("start");
        },
        stop : 40,
        onStop : () => {
            console.log("stop");  
        },
        onStep : (event)=>{
            console.log(event);
            particlues.push(new Ellipse( random(-width/2, width/2), random(-height/2, height/2) ) );
          
            for(let particlue of particlues){
              particlue.rond = false; 
            }
        }
        
    });
    
    sequencer.registerSequence({
        name : "couleurbg",
        start : 5,
        onStart : () => {
            console.log("yolo");
            colors.push(new Background());
        },
        stop : 10,
        onStep : (event)=>{
            console.log(event);
            for(let color of colors){
              color.status = true; 
            }
        }
    });
    
    
    sequencer.registerSequence({
        name : "go",
        start : 10,
        onStart : () => {
            console.log("c'est parti");
            colors.push(new Background());
        },
        stop : 20,
        onStep : (event)=>{
            console.log(event);
            for(let color of colors){
              color.status = false; 
            }
        }
    });
    
     sequencer.registerSequence({
        name : "allez",
        start : 20,
        onStart : () => {
            console.log("c'est parti");
            colors.push(new Background());
        },
        stop : 30,
        onStep : (event)=>{
            console.log(event);
            for(let color of colors){
              color.status = true; 
            }
        }
    });
    
    
     sequencer.registerSequence({
        name : "zou",
        start : 30,
        onStart : () => {
            console.log("c'est parti");
            colors.push(new Background());
        },
        stop : 40,
        onStop : ()=>{
            particlues = [];
        },
        onStep : (event)=>{
            console.log(event);
            for(let color of colors){
              color.status = false; 
            }
        }
    });
    

     sequencer.registerSequence({
        name : "refrain",
        start : 40,
        onStart : () => {
            console.log("zouu");
        },
        stop : 146,
         onStop : ()=>{
            disco = [];
        },
        onStep : (event)=>{
            console.log(event);
           disco.hasToDraw = true;
        }
    });
    
    
    sequencer.registerSequence({
        name : "part8",
        start : 70,
        onStart : () => {
            console.log("start");
        },
        stop : 80,
        onStop : () => {
            console.log("stop");  
        },
        onStep : (event)=>{
            console.log(event);
           particlues.push(new Ellipse( random(-width/2, width/2), random(-height/2, height/2) ) );
          
            for(let particlue of particlues){
              particlue.rond = false; 
            }
        }
        
    });
   
     sequencer.registerSequence({
        name : "part9",
        start : 80,
        onStart : () => {
            console.log("start");
        },
        stop : 89,
        onStop : () => {
            console.log("stop"); 
            particlues = [];
        },
         
        onStep : (event)=>{
            console.log(event);
           particlues.push(new Ellipse( random(-width/2, width/2), random(-height/2, height/2) ) );
          
            for(let particlue of particlues){
              particlue.rond = true; 
            }
        }
        
    }); 
    
    sequencer.registerSequence({
        name : "zou",
        start : 40,
        onStart : () => {
            console.log("c'est parti");
            colors.push(new Background());
        },
        stop : 57,
        onStep : (event)=>{
            console.log(event);
            for(let color of colors){
              color.status = true; 
            }
        }
    });
    

    sequencer.registerSequence({
        name : "zou",
        start : 57,
        onStart : () => {
            console.log("c'est parti");
            colors.push(new Background());
        },
        stop : 80,
        onStep : (event)=>{
            console.log(event);
            for(let color of colors){
              color.status = false; 
            }
        }
    });
    
    sequencer.registerSequence({
        name : "zou",
        start : 80,
        onStart : () => {
            console.log("c'est parti");
            colors.push(new Background());
        },
        stop : 89,
        onStep : (event)=>{
            console.log(event);
            for(let color of colors){
              color.status = true; 
            }
        }
    });
    
    sequencer.registerSequence({
        name : "refrain",
        start : 89,
        onStart : () => {
            console.log("zouu");
        },
        stop : 146,
         onStop : ()=>{
            disco = [];
        },
        onStep : (event)=>{
            console.log(event);
           disco.hasToDraw = false;
        }
    });
     
        sequencer.registerSequence({
        name : "refrain",
        start : 106,
        onStart : () => {
            console.log("zouu");
        },
        stop : 148,
         onStop : ()=>{
            disco = [];
        },
        onStep : (event)=>{
            console.log(event);
           disco.hasToDraw = true;
        }
    });
    
    sequencer.registerSequence({
        name : "Fin",
        start : 112,//100
        stop : 148,//146
        steps :  (new Array(24)).fill(0).map((v, key)=>1+key/24),
        onStart : () => {
            //camzoom.setPosition(0 , 0, 300);
            camzoom.move(0, 0,-300);
        },
        onStep : (event) => {
               camzoom.setAmount(event.amount);
        },
    });
    

}


function draw(){
    sequencer.update();
    camzoom.update();
     background(255, 0, 255, 90);
    
    for(let color of colors){
        color.draw();
    }
    for(let particlue of particlues){
        particlue.draw();
    }
    
    disco.draw();
    
}

class Ellipse{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.size = random(50, 300);
        this.rond = true;
    }
    

    draw(){
       stroke(255, 255, 255, 150);
        strokeWeight(5);
        if(this.rond){
            fill(255, 0, 255, 75);
            ellipse(this.x, this.y, this.size);
        }else{
            fill(0, 255, 255, 75);
            ellipse(this.x, this.y, this.size);
        }
        }
    
    
}

class Background{
    constructor(){
        this.status = true;
    }
    draw(){
        
        background(col.r, col.g, col.b);
        
        
        
        let speed = frameCount/ 30;
        let z = noise(speed, 2, 3);
        let z1 = noise(speed, 2, 4);
        if(this.status){
           col.g = lerp(255, 0, z);
            col.b = 255;
        }else{
            col.b = lerp(0, 255, z);
            col.g = 0;
        }
    
        col.r = lerp(0, 255, z1);   
    }
}

class Sphere{
    constructor(x, y){
        this.x = 50;
        this.y = 50;
        this.hasToDraw = true ;
    }
    
        draw(){
            if(this.hasToDraw){
      translate(10, 0);
      rotateY(frameCount*0.01);
      sphere(200);
      stroke(255, 0, 0);
            }else{
              translate(10, 0);
      rotateY(frameCount*0.01);
      sphere(200);
      stroke(0, 0,255);  
            }
        }
  
}

class CustomCamera{
    constructor(){
        this.myCam = createCamera();
        setCamera(this.myCam);
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.dx = 0;
        this.dy = 0;
        this.dz = 0;
        this.amount = 0;
    }
    setPosition(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.myCam.setPosition(x, y, z);
    }
    lookAt(x, y, z){
        this.myCam.lookAt(x, y, z);
    }
    move(x, y, z){
        this.dx = x;
        this.dy = y;
        this.dz = z;
    }
    setAmount(amount){
         this.amount = amount; 
    }
    update(){
        let _x = lerp(this.x, this.x+this.dx, this.amount);
        let _y = lerp(this.y, this.y+this.dy, this.amount);
        let _z = lerp(this.z, this.z+this.dz, this.amount);
        this.myCam.setPosition(_x, _y, _z);
    }
}


