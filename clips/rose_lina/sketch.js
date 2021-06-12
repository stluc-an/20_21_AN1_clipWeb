var i=0;
let audioPath ="./assets/audio/SAMO_VinceStaples.mp3";
let sequencer;
let particules = [];
let Ellipses = [];


let view;
function setup() {
    createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    view = new Cube1();
    sequencer = new Sequencer(audioPath, 150, false);


    sequencer.registerSequence({
        name : "intro",
        start : 0,
        onStart : () => {
            console.log ("start");
        },
        stop : 32,
        onStop : () => { 
            view= new Cube2();
        },
        steps: [1,1+1/4, 1+2/4,1+3/4],
        onStep : (event) => {
            console.log (event);
            view.speed += 0.1
        }
    });

    sequencer.registerSequence({
        name : "gloubi",
        start : 33,
        onStart : () => {
            console.log ("start");
        },
        stop : 81,
        onStop : () => { 
            view= new Cube3();
        },
        steps: [1,1+1/4, 1+2/4,1+3/4],
        onStep : (event) => {
            console.log (event);
            view.speed += 0.1
        }
    });

    sequencer.registerSequence({
        name : "clap1",
        start : 81,
        onStart : () => { view= new Clap1();
            console.log ("start");
        },
        stop : 84,
        onStop : () => { 
        },
        steps: [1,1+1/4, 1+2/4,1+3/4],
        onStep : (event) => {
            console.log (event);
            view.speed += 0.1
        }
    });

sequencer.registerSequence({
        name : "preverse",
        start : 84,
        onStart : () => { view= new preverse();
            console.log ("start");
        },
        stop : 94,
        onStop : () => { 
        },
        steps: [1,1+1/4, 1+2/4,1+3/4],
        onStep : (event) => {
            console.log (event);
            view.speed += 0.1
        }
    });
sequencer.registerSequence({
        name : "preverse1",
        start : 94,
        onStart : () => { view= new preverse1();
            console.log ("start");
        },
        stop : 112,
        onStop : () => { 
        },
        steps: [1,1+1/4, 1+2/4,1+3/4],
        onStep : (event) => {
            console.log (event);
            view.speed += 0.1
        }
    });
sequencer.registerSequence({
        name : "Clap2",
        start : 111,
        onStart : () => { view= new Clap2();
            console.log ("start");
        },
        stop : 112,
        onStop : () => { 
        },
        steps: [1,1+1/4, 1+2/4,1+3/4],
        onStep : (event) => {
            console.log (event);
            view.speed += 0.1
        }
    });
sequencer.registerSequence({
        name : "preverse2",
        start : 111,
        onStart : () => { view= new preverse2();
            console.log ("start");
        },
        stop : 156,
        onStop : () => { 
        },
        steps: [1,1+1/4, 1+2/4,1+3/4],
        onStep : (event) => {
            console.log (event);
            view.speed += 0.1
        }
    });
sequencer.registerSequence({
        name : "refrain",
        start : 156,
        onStart : () => { view= new refrain();
            console.log ("start");
        },
        stop : 196,
        onStop : () => { 
        },
        steps: [1,1+1/4, 1+2/4,1+3/4],
        onStep : (event) => {
            console.log (event);
            view.speed += 0.1
        }
    });
sequencer.registerSequence({
        name : "saame",
        start : 186,
        onStart : () => { view= new saame();
            console.log ("start");
        },
        stop : 190,
        onStop : () => { 
        },
        steps: [1,1+1/4, 1+2/4,1+3/4],
        onStep : (event) => {
            console.log (event);
            view.speed += 0.1
        }
    });
sequencer.registerSequence({
        name : "refrain1",
        start : 190,
        onStart : () => { view= new refrain1();
            console.log ("start");
        },
        stop : 202,
        onStop : () => { 
        },
        steps: [1,1+1/4, 1+2/4,1+3/4],
        onStep : (event) => {
            console.log (event);
            view.speed += 0.1
        }
    });
sequencer.registerSequence({
        name : "saame1",
        start :201,
        onStart : () => { view= new saame1();
            console.log ("start");
        },
        stop : 206,
        onStop : () => { 
        },
        steps: [1,1+1/4, 1+2/4,1+3/4],
        onStep : (event) => {
            console.log (event);
            view.speed += 0.1
        }
    });
sequencer.registerSequence({
        name : "refrain2",
        start : 206,
        onStart : () => { view= new refrain2();
            console.log ("start");
        },
        stop : 217,
        onStop : () => { 
        },
        steps: [1,1+1/4, 1+2/4,1+3/4],
        onStep : (event) => {
            console.log (event);
            view.speed += 0.1
        }
    });
sequencer.registerSequence({
        name : "verse1",
        start :217,
        onStart : () => { view= new verse1();
            console.log ("start");
        },
        stop : 264,
        onStop : () => { 
        },
        steps: [1,1+1/4, 1+2/4,1+3/4],
        onStep : (event) => {
            console.log (event);
            view.speed += 0.1
        }
    });
sequencer.registerSequence({
        name : "Clap3",
        start : 266,
        onStart : () => { view= new Clap3();
            console.log ("start");
        },
        stop : 268,
        onStop : () => { 
        },
        steps: [1,1+1/4, 1+2/4,1+3/4],
        onStep : (event) => {
            console.log (event);
            view.speed += 0.1
        }
    });
 sequencer.registerSequence({
        name : "smooth",
        start : 278,
        onStart : () => { view= new smooth();
            console.log ("start");
        },
        stop : 309,
        onStop : () => { 
            
        },
        steps: [1,1+1/4, 1+2/4,1+3/4],
        onStep : (event) => {
            console.log (event);
            view.speed += 0.1
        }
    });
 sequencer.registerSequence({
        name : "refrain3",
        start : 309,
        onStart : () => { view= new refrain3();
            console.log ("start");
        },
        stop : 340,
        onStop : () => { 
            
        },
        steps: [1,1+1/4, 1+2/4,1+3/4],
        onStep : (event) => {
            console.log (event);
            view.speed += 0.1
        }
    });
 sequencer.registerSequence({
        name : "saame3",
        start :340,
        onStart : () => { view= new saame3();
            console.log ("start");
        },
        stop : 344,
        onStop : () => { 
        },
        steps: [1,1+1/4, 1+2/4,1+3/4],
        onStep : (event) => {
            console.log (event);
            view.speed += 0.1
        }
    });
 sequencer.registerSequence({
        name : "refrain4",
        start : 344,
        onStart : () => { view= new refrain4();
            console.log ("start");
        },
        stop : 355,
        onStop : () => { 
        },
        steps: [1,1+1/4, 1+2/4,1+3/4],
        onStep : (event) => {
            console.log (event);
            view.speed += 0.1
        }
    });
 sequencer.registerSequence({
        name : "saame4",
        start : 355,
        onStart : () => { view= new saame4();
            console.log ("start");
        },
        stop : 359,
        onStop : () => { 
        },
        steps: [1,1+1/4, 1+2/4,1+3/4],
        onStep : (event) => {
            console.log (event);
            view.speed += 0.1
        }
    });
 sequencer.registerSequence({
        name : "outro",
        start : 400,
        onStart : () => { view= new outro();
            console.log ("start");
        },
        stop : 440,
        onStop : () => { 
        },
        steps: [1,1+1/4, 1+2/4,1+3/4],
        onStep : (event) => {
            console.log (event);
            view.speed += 0.1
        }
    });
  sequencer.registerSequence({
        name : "fondNoir",
        start : 440,
        onStart : () => { view= new fondNoir();
            console.log ("start");
        },
        stop : 600,
        onStop : () => { 
        },
        steps: [1,1+1/4, 1+2/4,1+3/4],
        onStep : (event) => {
            console.log (event);
            view.speed += 0.1
        }
    });
}

function draw() {
 view.draw();
 i++;
 sequencer.update();

}

function keyPressed(){
    
    if(key == '1'){
        view = new Cube1();
    }
    if(key == '2'){
        view = new Cube2();
    }
    if(key == '3'){
        view = new Cube3 ();
    }
    if(key == '4'){
        view = new Clap1 ();
    }
    if(key == '5'){
        view = new preverse ();
    }
    if(key == '6'){
        view = new preverse1 ();
    }
    if(key == '7'){
        view = new Clap2 ();
    }
    if(key == '8') {
        view = new preverse2 ();
    }
    if(key == '9'){
        view = new refrain ();
    }
    if(key == '0'){
        view = new saame ();
    }
    if(key == 'a'){
        view = new refrain1 ();
    }
     if(key == 'q'){
        view = new saame1 ();
    }
    if(key == 'w'){
        view = new refrain2 ();
    }
    if(key == 'z'){
        view = new verse1 ();
    }
    if(key == 's'){
        view = new Clap3();
    }
    if(key == 'x'){
        view = new smooth ();
    }
    if(key == 'e'){
        view = new refrain3 ();
    }
    if(key == 'd'){
        view = new saame3 ();
    }
    if(key == 'c'){
        view = new refrain4 ();
    }
    if(key == 'r'){
        view = new saame4 ();
    }
    if(key == 'f'){
        view = new outro ();
    }
    if(key == 'v'){
        view = new fondNoir ();
    }


}


class Cube1{
    constructor(){
         this.cam = createCamera();
        this.cam.setPosition(100,100,100);
        this.cam.lookAt(5,5,5);
        this.cam.perspective(PI*0.009, width/height);
        setCamera(this.cam);
    }
    draw(){
        background(250,0,0);
        let speed = frameCount * 0.008;
        rotateX(PI/1);
        rotateZ(speed);
        
        for(let z = -3; z<3; z++){
        for(let y = -3; y<3; y++){
        for(let x = -3; x<3; x++){
            let s = noise(x * 0.03 + speed,y * 0.03+ speed,z * 0.03+ speed)
            let color= lerp(0,50,s)
            push();
            noStroke();
            fill(0,250,0,color)
            scale(s*4);
            translate(x,y,z);
            
            box(0.20);
            pop(50);
            }
           }
          }
         }
        }

class Cube2{
    constructor(){
         this.cam = createCamera();
        this.cam.setPosition(50,50,50);
        this.cam.lookAt(5,5,5);
        this.cam.perspective(PI*0.020, width/height);
        setCamera(this.cam);
    }
    draw(){
        background(20,4,20);
        let speed = frameCount * 0.004;
        rotateX(PI/1);
        rotateZ(speed);
        
        for(let z = -3; z<3; z++){
        for(let y = -3; y<3; y++){
        for(let x = -3; x<3; x++){
            let s = noise(x * 0.03 + speed,y * 0.03+ speed,z * 0.03+ speed)
            let color= lerp(0,255,s)
            push();
            noStroke();
            fill(256,0,0,color)
            scale(s*5);
            translate(x,y,z);
            
            box(0.53);
            pop();
            }
           }
          }
         }
        }

        class Cube3{
    constructor(){
         this.cam = createCamera();
        this.cam.setPosition(0,150,100);
        this.cam.lookAt(0,0,0);
        this.cam.perspective(PI*0.07, width/height);
        setCamera(this.cam);
    }
    draw(){
        background(0,0,0);
        let speed = frameCount * 0.01;
        rotateX(PI/2);
        rotateZ(speed);
        
        for(let z = -3; z<3; z++){
        for(let y = -3; y<3; y++){
        for(let x = -3; x<3; x++){
            let s = noise(x * 0.03 + speed,y * 0.03+ speed,z * 0.03+ speed)
            let color= lerp(0,255,s)
            push();
            noStroke();
            fill(255,color)
            scale(s*3);
            translate(x,y,z);
            
            box(0.75);
            pop();
            }
           }
          }
         }
        }

    class Clap1{
    constructor(){
         this.cam = createCamera();
        this.cam.setPosition(100,150,100);
        this.cam.lookAt(0,0,0);
        this.cam.perspective(PI*0.07, width/height);
        setCamera(this.cam);
    }
    draw(){
        background(250,250,0);
        let speed = frameCount * 0.06;
        rotateX(PI/5);
        rotateZ(speed);
        
        for(let z = -3; z<3; z++){
        for(let y = -3; y<3; y++){
        for(let x = -3; x<3; x++){
            let s = noise(x * 0.03 + speed,y * 0.03+ speed,z * 0.03+ speed)
            let color= lerp(0,255,s)
            push();
            noStroke();
            fill(255,color)
            scale(s*3);
            translate(x,y,z);
            
            box(0.90);
            pop();
            }
           }
          }
         }
        }

    class preverse{
    constructor(){
         this.cam = createCamera();
        this.cam.setPosition(0,150,100);
        this.cam.lookAt(0,0,0);
        this.cam.perspective(PI*0.07, width/height);
        setCamera(this.cam);
    }
    draw(){
        background(200,0,200);
        let speed = frameCount * 0.02;
        rotateX(PI/3);
        rotateZ(speed);
        
        for(let z = -3; z<3; z++){
        for(let y = -3; y<3; y++){
        for(let x = -3; x<3; x++){
            let s = noise(x * 0.03 + speed,y * 0.03+ speed,z * 0.03+ speed)
            let color= lerp(0,300,s)
            push();
            noStroke();
            fill(50,color)
            scale(s*10);
            translate(x,y,z);
            
            box(1);
            pop();
            }
           }
          }
         }
        }
    class preverse1{
    constructor(){
         this.cam = createCamera();
        this.cam.setPosition(50,50,50);
        this.cam.lookAt(5,5,5);
        this.cam.perspective(PI*0.020, width/height);
        setCamera(this.cam);
    }
    draw(){
        background(0,4,20);
        let speed = frameCount * 0.004;
        rotateX(PI/1);
        rotateZ(speed);
        
        for(let z = -3; z<3; z++){
        for(let y = -3; y<3; y++){
        for(let x = -3; x<3; x++){
            let s = noise(x * 0.03 + speed,y * 0.03+ speed,z * 0.03+ speed)
            let color= lerp(0,255,s)
            push();
            noStroke();
            fill(256,0,0,color)
            scale(s*5);
            translate(x,y,z);
            
            box(0.53);
            pop();
            }
           }
          }
         }
        }
    class Clap2{
    constructor(){
         this.cam = createCamera();
        this.cam.setPosition(100,150,100);
        this.cam.lookAt(0,0,0);
        this.cam.perspective(PI*0.07, width/height);
        setCamera(this.cam);
    }
    draw(){
        background(250,250,0);
        let speed = frameCount * 0.06;
        rotateX(PI/5);
        rotateZ(speed);
        
        for(let z = -3; z<3; z++){
        for(let y = -3; y<3; y++){
        for(let x = -3; x<3; x++){
            let s = noise(x * 0.03 + speed,y * 0.03+ speed,z * 0.03+ speed)
            let color= lerp(0,255,s)
            push();
            noStroke();
            fill(255,color)
            scale(s*3);
            translate(x,y,z);
            
            box(0.90);
            pop();
            }
           }
          }
         }
        }
        class preverse2{
    constructor(){
         this.cam = createCamera();
        this.cam.setPosition(50,50,50);
        this.cam.lookAt(5,5,5);
        this.cam.perspective(PI*0.020, width/height);
        setCamera(this.cam);
    }
    draw(){
        background(0,4,20);
        let speed = frameCount * 0.004;
        rotateX(PI/1);
        rotateZ(speed);
        
        for(let z = -3; z<3; z++){
        for(let y = -3; y<3; y++){
        for(let x = -3; x<3; x++){
            let s = noise(x * 0.03 + speed,y * 0.03+ speed,z * 0.03+ speed)
            let color= lerp(0,255,s)
            push();
            noStroke();
            fill(256,0,0,color)
            scale(s*5);
            translate(x,y,z);
            
            box(0.53);
            pop();
            }
           }
          }
         }
        }

         class refrain{
    constructor(){
         this.cam = createCamera();
        this.cam.setPosition(100,100,100);
        this.cam.lookAt(5,5,5);
        this.cam.perspective(PI*0.020, width/height);
        setCamera(this.cam);
    }
    draw(){
        background(0,200,0);
        let speed = frameCount * 0.002;
        rotateX(PI/5);
        rotateZ(speed);
        
        for(let z = -3; z<3; z++){
        for(let y = -3; y<3; y++){
        for(let x = -3; x<3; x++){
            let s = noise(x * 0.03 + speed,y * 0.03+ speed,z * 0.03+ speed)
            let color= lerp(0,255,s)
            push();
            noStroke();
            fill(0,0,color)
            scale(s*5);
            translate(x,y,z);
            
            box(0.53);
            pop();
            }
           }
          }
         }
        }
    class saame{
    constructor(){
         this.cam = createCamera();
        this.cam.setPosition(100,100,100);
        this.cam.lookAt(5,5,5);
        this.cam.perspective(PI*0.009, width/height);
        setCamera(this.cam);
    }
    draw(){
        background(0,50,100);
        let speed = frameCount * 0.001;
        rotateX(PI/1);
        rotateZ(speed);
        
        for(let z = -3; z<3; z++){
        for(let y = -3; y<3; y++){
        for(let x = -3; x<3; x++){
            let s = noise(x * 0.03 + speed,y * 0.03+ speed,z * 0.03+ speed)
            let color= lerp(0,50,s)
            push();
            noStroke();
            fill(0,250,0,color)
            scale(s*4);
            translate(x,y,z);
            
            box(0.20);
            pop(50);
            }
           }
          }
         }
        }
        class refrain1{
    constructor(){
         this.cam = createCamera();
        this.cam.setPosition(100,100,100);
        this.cam.lookAt(5,5,5);
        this.cam.perspective(PI*0.020, width/height);
        setCamera(this.cam);
    }
    draw(){
        background(0,200,0);
        let speed = frameCount * 0.002;
        rotateX(PI/5);
        rotateZ(speed);
        
        for(let z = -3; z<3; z++){
        for(let y = -3; y<3; y++){
        for(let x = -3; x<3; x++){
            let s = noise(x * 0.03 + speed,y * 0.03+ speed,z * 0.03+ speed)
            let color= lerp(0,255,s)
            push();
            noStroke();
            fill(0,0,color)
            scale(s*5);
            translate(x,y,z);
            
            box(0.53);
            pop();
            }
           }
          }
         }
        }
        class saame1{
    constructor(){
         this.cam = createCamera();
        this.cam.setPosition(100,100,100);
        this.cam.lookAt(5,5,5);
        this.cam.perspective(PI*0.009, width/height);
        setCamera(this.cam);
    }
    draw(){
        background(0,100,50);
        let speed = frameCount * 0.001;
        rotateX(PI/1);
        rotateZ(speed);
        
        for(let z = -3; z<3; z++){
        for(let y = -3; y<3; y++){
        for(let x = -3; x<3; x++){
            let s = noise(x * 0.03 + speed,y * 0.03+ speed,z * 0.03+ speed)
            let color= lerp(0,50,s)
            push();
            noStroke();
            fill(250,0,color)
            scale(s*4);
            translate(x,y,z);
            
            box(0.20);
            pop(50);
            }
           }
          }
         }
        }
        class refrain2{
    constructor(){
         this.cam = createCamera();
        this.cam.setPosition(100,150,100);
        this.cam.lookAt(0,0,0);
        this.cam.perspective(PI*0.07, width/height);
        setCamera(this.cam);
    }
    draw(){
        background(200,100,20);
        let speed = frameCount * 0.02;
        rotateX(PI/3);
        rotateZ(speed);
        
        for(let z = -3; z<3; z++){
        for(let y = -3; y<3; y++){
        for(let x = -3; x<3; x++){
            let s = noise(x * 0.03 + speed,y * 0.03+ speed,z * 0.03+ speed)
            let color= lerp(0,250,s)
            push();
            noStroke();
            fill(50,color)
            scale(s*10);
            translate(x,y,z);
            
            box(1);
            pop();
            }
           }
          }
         }
        }
        class verse1{
    constructor(){
         this.cam = createCamera();
        this.cam.setPosition(50,50,50);
        this.cam.lookAt(5,5,5);
        this.cam.perspective(PI*0.020, width/height);
        setCamera(this.cam);
    }
    draw(){
        background(256,256,20);
        let speed = frameCount * 0.004;
        rotateX(PI/1);
        rotateZ(speed);
        
        for(let z = -3; z<3; z++){
        for(let y = -3; y<3; y++){
        for(let x = -3; x<3; x++){
            let s = noise(x * 0.03 + speed,y * 0.03+ speed,z * 0.03+ speed)
            let color= lerp(0,240,s)
            push();
            noStroke();
            fill(256,0,0,color)
            scale(s*5);
            translate(x,y,z);
            
            box(0.53);
            pop();
            }
           }
          }
         }
        }
        class Clap3{
    constructor(){
         this.cam = createCamera();
        this.cam.setPosition(100,150,100);
        this.cam.lookAt(0,0,0);
        this.cam.perspective(PI*0.07, width/height);
        setCamera(this.cam);
    }
    draw(){
        background(0,250,250);
        let speed = frameCount * 0.06;
        rotateX(PI/5);
        rotateZ(speed);
        
        for(let z = -3; z<3; z++){
        for(let y = -3; y<3; y++){
        for(let x = -3; x<3; x++){
            let s = noise(x * 0.03 + speed,y * 0.03+ speed,z * 0.03+ speed)
            let color= lerp(0,255,s)
            push();
            noStroke();
            fill(255,color)
            scale(s*3);
            translate(x,y,z);
            
            box(0.90);
            pop();
            }
           }
          }
         }
        }
        class smooth{
    constructor(){
         this.cam = createCamera();
        this.cam.setPosition(100,100,100);
        this.cam.lookAt(10,10,10);
        this.cam.perspective(PI*0.009, width/height);
        setCamera(this.cam);
    }
    draw(){
        background(0,700,80);
        let speed = frameCount * 0.001;
        rotateX(PI/1);
        rotateZ(speed);
        
        for(let z = -3; z<3; z++){
        for(let y = -3; y<3; y++){
        for(let x = -3; x<3; x++){
            let s = noise(x * 0.03 + speed,y * 0.03+ speed,z * 0.03+ speed)
            let color= lerp(0,50,s)
            push();
            noStroke();
            fill(250,0,5,color)
            scale(s*5);
            translate(x,y,z);
            
            box(0.20);
            pop(50);
            }
           }
          }
         }
        }
        class refrain3{
    constructor(){
         this.cam = createCamera();
        this.cam.setPosition(100,100,100);
        this.cam.lookAt(5,5,5);
        this.cam.perspective(PI*0.020, width/height);
        setCamera(this.cam);
    }
    draw(){
        background(0,200,0);
        let speed = frameCount * 0.002;
        rotateX(PI/5);
        rotateZ(speed);
        
        for(let z = -3; z<3; z++){
        for(let y = -3; y<3; y++){
        for(let x = -3; x<3; x++){
            let s = noise(x * 0.03 + speed,y * 0.03+ speed,z * 0.03+ speed)
            let color= lerp(0,255,s)
            push();
            noStroke();
            fill(0,0,color)
            scale(s*5);
            translate(x,y,z);
            
            box(0.53);
            pop();
            }
           }
          }
         }
        }
        class saame3{
    constructor(){
         this.cam = createCamera();
        this.cam.setPosition(100,100,100);
        this.cam.lookAt(5,5,5);
        this.cam.perspective(PI*0.009, width/height);
        setCamera(this.cam);
    }
    draw(){
        background(0,100,50);
        let speed = frameCount * 0.001;
        rotateX(PI/1);
        rotateZ(speed);
        
        for(let z = -3; z<3; z++){
        for(let y = -3; y<3; y++){
        for(let x = -3; x<3; x++){
            let s = noise(x * 0.03 + speed,y * 0.03+ speed,z * 0.03+ speed)
            let color= lerp(0,50,s)
            push();
            noStroke();
            fill(250,0,color)
            scale(s*4);
            translate(x,y,z);
            
            box(0.20);
            pop(50);
            }
           }
          }
         }
        }
        class refrain4{
    constructor(){
         this.cam = createCamera();
        this.cam.setPosition(100,100,100);
        this.cam.lookAt(5,5,5);
        this.cam.perspective(PI*0.020, width/height);
        setCamera(this.cam);
    }
    draw(){
        background(0,200,0);
        let speed = frameCount * 0.002;
        rotateX(PI/5);
        rotateZ(speed);
        
        for(let z = -3; z<3; z++){
        for(let y = -3; y<3; y++){
        for(let x = -3; x<3; x++){
            let s = noise(x * 0.03 + speed,y * 0.03+ speed,z * 0.03+ speed)
            let color= lerp(0,255,s)
            push();
            noStroke();
            fill(0,0,color)
            scale(s*5);
            translate(x,y,z);
            
            box(0.53);
            pop();
            }
           }
          }
         }
        }
        class saame4{
    constructor(){
         this.cam = createCamera();
        this.cam.setPosition(100,100,100);
        this.cam.lookAt(5,5,5);
        this.cam.perspective(PI*0.009, width/height);
        setCamera(this.cam);
    }
    draw(){
        background(0,50,100);
        let speed = frameCount * 0.001;
        rotateX(PI/1);
        rotateZ(speed);
        
        for(let z = -3; z<3; z++){
        for(let y = -3; y<3; y++){
        for(let x = -3; x<3; x++){
            let s = noise(x * 0.03 + speed,y * 0.03+ speed,z * 0.03+ speed)
            let color= lerp(0,50,s)
            push();
            noStroke();
            fill(0,250,0,color)
            scale(s*4);
            translate(x,y,z);
            
            box(0.20);
            pop(50);
            }
           }
          }
         }
        }
         class outro{
    constructor(){
         this.cam = createCamera();
        this.cam.setPosition(100,100,100);
        this.cam.lookAt(10,10,10);
        this.cam.perspective(PI*0.009, width/height);
        setCamera(this.cam);
    }
    draw(){
        background(100,0,200);
        let speed = frameCount * 0.004;
        rotateX(PI/1);
        rotateZ(speed);
        
        for(let z = -3; z<3; z++){
        for(let y = -3; y<3; y++){
        for(let x = -3; x<3; x++){
            let s = noise(x * 0.03 + speed,y * 0.03+ speed,z * 0.03+ speed)
            let color= lerp(0,255,s)
            push();
            noStroke();
            fill(50,color)
            scale(s*8);
            translate(x,y,z);
            
            box(1);
            pop();
            }
           }
          }
         }
        }
        class fondNoir{
    constructor(){
         this.cam = createCamera();
        this.cam.setPosition(5,5,5);
        this.cam.lookAt(0,0,0);
        this.cam.perspective(PI*0.009, width/height);
        setCamera(this.cam);
    }
    draw(){
        background(0,0,0);
        let speed = frameCount * 0.004;
        rotateX(PI/1);
        rotateZ(speed);
        
        for(let z = -3; z<3; z++){
        for(let y = -3; y<3; y++){
        for(let x = -3; x<3; x++){
            let s = noise(x * 0.03 + speed,y * 0.03+ speed,z * 0.03+ speed)
            let color= lerp(0,255,s)
            push();
            noStroke();
            fill(0,color)
            scale(s*8);
            translate(x,y,z);
            
            box(1);
            pop();
            }
           }
          }
         }
        }

/*class Noise2D{
    constructor(){
        this.cam = createCamera();
        this.cam.setPosition(0,0,100);
        this.cam.lookAt(0,0,0);
        this.cam.perspective(PI*0.07, width/height);
        setCamera(this.cam);
    }
    draw(){
        background(0,128,128);
        let speed = frameCount *0.01;
        rotateX(PI/3);
        rotateZ(speed);
        for(let y = -10 ; y<10 ; y++){
            for(let x = -10 ; x<10 ; x++){
                    push();
                let z = noise(x*0.03 + speed,y*0.03+ speed);
                let color= lerp(0,255,z);
                z=lerp(-10,10,z);
                noStroke();
                fill(color);
                translate(x,y,z);
                plane(1);
            pop();
            }
        }
    }
}



class Noise1D{
    constructor(){
        this.cam = createCamera();
        this.cam.setPosition(0,0,100);
        this.cam.lookAt(0,0,0);
        this.cam.perspective(PI*0.07, width/height);
        setCamera(this.cam);
    }
    draw(){
         background(128,0,255);
        noFill();
        let speed = frameCount*0.01;
        for(let x = -10; x<10;x++){
            let y1 = noise(x*0.03+ speed);
            let color= lerp(0,255,y1);
            y1 = lerp(-10,10,y1)
            let y2= noise((x+1)*0.03+speed);
            y2= lerp(-10,10,y2)
            stroke(color);
            beginShape();
            vertex(x,y1);
            vertex(x+1,y2);
            endShape();
    }   
    }
} */