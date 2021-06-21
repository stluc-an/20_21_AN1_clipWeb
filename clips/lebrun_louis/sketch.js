var i=0
var audioPath ="./assets/audio/Jemon&Moska/RIKANKA.mp3";
//var imgPath = "./assets/BG_Test_01.gif";
var sequencer;
let particules = [];
let lineArray = [];
let orderOfRotation;
let orderSlider;
let weightSlider;
let xoff = 0;
let yoff = 0;
let hu = xoff * 255;   
let angle;

let view;
function setup() {

  createCanvas(window.innerWidth,window.innerHeight, WEBGL);
  view= new Noir();
  sequencer = new Sequencer(audioPath,128, false);


  sequencer.registerSequence({
      name : "Noir",
      start : 0,
      onStart : () => {
        console.log ("start");
      },
      stop : 16,
      onStop : () => { 
        view= new Line1();
      },
      steps: [1,1+1/4, 1+2/4,1+3/4],
      onStep : (event) => {
        console.log (event);
        view.speed += 0.1
      }
  });
  sequencer.registerSequence({
      name : "Drop1",
      start : 65,
      onStart : () => { view= new Line2();
      },
      stop : 129,
      onStop : () => { view= new Bump1();
    },
        steps: [1,1+1/4, 1+2/4,1+3/4],
      onStep : (event) => {
        console.log (event);
        view.speed += 0.1
      }
    })
    sequencer.registerSequence({
      name : "Drop2",
      start : 178,
      onStart : () => { view= new Line2();
      },
      stop : 208,
      onStop : () => { view= new Line3();
    },
        steps: [1,1+1/4, 1+2/4,1+3/4],
      onStep : (event) => {
        console.log (event);
        view.speed += 0.1
      }
    })

  sequencer.registerSequence({
      name : "Bridge",
      start : 274,
      onStart : () => {view = new Bump1()},
      stop : 340 ,
      onStop : () => {view= new Kick1()},
        steps: [1,1+1/2, 1+1/4],
      onStep : (event) => {
        console.log (event);
        view.speed += 0.08
}
})
  sequencer.registerSequence({
      name : "Kick1",
      start : 406,
      onStart : () => {view = new Bump2()},
      stop : 436 ,
      onStop : () => {view= new Kick1()},
        steps: [1,1+1/2, 1+1/4],
      onStep : (event) => {
        console.log (event);
        view.speed += 0.08
}
})
  sequencer.registerSequence({
      name : "Kick1",
      start : 500,
      onStart : () => {view = new Noir()},
      stop : 501,
      onStop : () => {view= new Noir()},
        steps: [1,1+1/2, 1+1/4],
      onStep : (event) => {
        console.log (event);
        view.speed += 0.08
    }
  })
}

function draw() {
 view.draw();
 i++;
  sequencer.update();

 }


function keyPressed(){
    
      if(key == '0'){
        view = new Noir();
    }

    if(key == '1'){
        view = new Line1();
    }
    if(key == '2'){
        view = new Line2();
    }
    if(key == '3'){
        view = new Line3();
    }
    if(key == '4'){
        view = new Kick1();
    }
       if(key == '25'){
        view = new Noise2D();
    }
         if(key == '6'){
        view = new Bump1();
    }
             if(key == '7'){
        view = new Bump2();
    }

  }

class Noise2D{
    constructor(){
        this.cam = createCamera();
        this.cam.setPosition(180,180,0);
        this.cam.lookAt(0,0,0);
        this.cam.perspective(PI*0.08, width/height);
        setCamera(this.cam);
    }
    draw(){
        background(20,20,20);
        stroke(hu, 0, 0, 0);
       
        let speed = frameCount *0.01;
        rotateX(PI/3);
        rotateY(PI/12);
        rotateZ(180);
        for(let y = -10 ; y<10 ; y++){
            for(let x = -10 ; x<10 ; x++){
                    push();
                let z = noise(x*0.1 + speed,y*0.03+ speed);
                let color= (10000,10);
                z=lerp(-50,100,z);
                noStroke();
                translate(x,y,z);
                plane(5);
            pop();
            }
        }
    }
}



class Line1{
    constructor(){
        this.cam = createCamera();
        this.cam.setPosition(0,0,150);
        this.cam.lookAt(0,0,0);
        this.cam.perspective(PI*0.03, width/height);
        setCamera(this.cam);
    }
    draw(){
     background(0,0,0);
        noFill();
        let speed = frameCount*0.009;

        for(let x = -10; x<10;x++){
            let y1 = noise(x*0.03+ speed);
            let color= random(1);
            y1 = lerp(-10,10,y1)
            let y2= noise((x+1)*0.03+speed);
            y2= lerp(-10,10,y2)
        
         //plane(random(80));
            stroke(100,100,500);
          
            strokeWeight(25);
            beginShape();
            vertex(x,y1);
            vertex(x,y2);
            endShape();
          }



    }   
    }
    class Kick1{
    constructor(){
        this.cam = createCamera();
        this.cam.setPosition(0,0,150);
        this.cam.lookAt(0,0,0);
        this.cam.perspective(PI*0.03, width/height);
        setCamera(this.cam);
    }
    draw(){
      background(0,0,0);
      noFill();
      noStroke()
      colorMode(HSB,255,255,255,255);
       let hu = noise(xoff)*random(500); 
        stroke(hu, 512, 256, 500);
      strokeWeight(random(10));
      plane(random(50));
    }

}
     class Noir {
    constructor(){
        this.cam = createCamera();
        this.cam.setPosition(0,0,150);
        this.cam.lookAt(0,0,0);
        this.cam.perspective(PI*0.03, width/height);
        setCamera(this.cam);
    }
    draw(){
      background(0,0,0);
    }
  }



  class Line2 {
    constructor(){
        this.cam = createCamera();
        this.cam.setPosition(0,0,150);
        this.cam.lookAt(0,0,0);
        this.cam.perspective(PI*0.03, width/height);
        setCamera(this.cam);
    }
    draw(){
       background(0,0,0);
        noFill();
        let speed = frameCount*0.009;

        for(let x = -10; x<10;x++){
            let y1 = noise(x*0.03+ speed);
            let color= random(10);
            y1 = lerp(-10,10,y1)
            let y2= noise((x+1)*0.03+speed);
            y2= lerp(-1,1,y2);
            colorMode (HSB,255,255,255,255);
            yoff+=0.005;
            let hu = lerp(180, 255, noise(x, yoff , 100));
            let sat =  lerp(180, 255, noise(x, yoff));
            let bri = lerp(180,2550, noise(x, yoff,  100)); 
            stroke(hu, sat, bri, 255);
         // colorMode (HSB,255,2,2,0);
            strokeWeight(15,1000);
            beginShape();
            vertex(x,y1);
            vertex(x,y2);
            endShape();
          }
    }
  }



    class Line3 {
    constructor(){
        this.cam = createCamera();
        this.cam.setPosition(0,0,150);
        this.cam.lookAt(0,0,0);
        this.cam.perspective(PI*0.03, width/height);
        setCamera(this.cam);
    }
    draw(){
       background(0,0,0);
        noFill();
        let speed = frameCount*0.018;

        for(let x = -20; x<10;x++){
            let y1 = noise(x*0.07+ speed);
            let color= random(1);
            y1 = lerp(-10,10,y1)
            let y2= noise((x+1)*0.03+speed);
            y2= lerp(-1,1,y2)
        
        ;
        let hu = noise(xoff)*random(500); 
        colorMode (HSB,255,255,255);
        stroke(hu, 255, 255, 255);
            strokeWeight(15,1000);
            beginShape();
            vertex(x,y1);
            vertex(x,y2);
            endShape();
          }
    }
  }
     class Bump1 {
    constructor(){
        this.cam = createCamera();
        this.cam.setPosition(0,0,150);
        this.cam.lookAt(0,0,0);
        this.cam.perspective(PI*0.03, width/height);
        setCamera(this.cam);
    }
    draw(){
        background(0,0,0);
        noFill();
        colorMode (HSB,255,255,255);
        stroke(hu, 255, 255, 255);
            strokeWeight(15,1000);
     stroke(255, 50, 100);
      strokeWeight(random(150));
     plane(1);
    } 
  }
    class Bump2 {
    constructor(){
        this.cam = createCamera();
        this.cam.setPosition(0,0,150);
        this.cam.lookAt(0,0,0);
        this.cam.perspective(PI*0.03, width/height);
        setCamera(this.cam);
    }
    draw(){
        background(0,0,0);
        noFill();
        noStroke();
     stroke(hu, 512, 256, 500);
      strokeWeight(random(5));
     plane(1.5);

rotateX (random(270));
    } 
  }