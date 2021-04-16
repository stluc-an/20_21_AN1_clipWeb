



let audioPath = "Charlie Cunningham - Permanent Way2.mp3";
let sequencer;
let particlues = [];
let squareSize;
let lineWidth;
let obed=5;
let plus = 2;
let circleR = 0;
let cam;
let x=1;
let rectX = 0;
let fr = 15; 
let clr;


function setup() {


frameRate(fr);
//frameRate(30);
  colorMode(RGB);
  clr = color(255, 0, 50);

  createCanvas(window.innerWidth, window.innerHeight); 
 //  cam = createCamera();
  //cam.setPosition(-200, 0,1000);
  //cam.lookAt(-200, 0, 0);
  //setCamera(cam);

sequencer = new Sequencer(audioPath, 100, false);
sequencer.registerSequence({

  name: "aucomencement",
  start : 0,
  onStart : () => {
  	console.log("start");
   

},

stop :50,
onStart : () => {
  	console.log("start");
},
onStep : (event)=>{
	console.log(event);
	particlues.push(new Rectangle( random(width,obed), random(height,obed+fr*2)));

}


});

sequencer.registerSequence({

  name: "aucomencementh",
  start : 30,
  onStart : () => {
    console.log("start");
},

stop :210,
onStart : () => {
    console.log("start");
},
onStep : (event)=>{
  console.log(event);
  particlues.push(new Rectangle( random(width), random(height)));

}

});

sequencer.registerSequence({

  name: "aucomencement2",
  start : 50,
  onStart : () => {
    console.log("start");
},

stop :100,
onStart : () => {
    console.log("start");
},
onStep : (event)=>{
  console.log(event);
  particlues.push(new Rectangle( random(width+fr), random(obed+fr*6)));

}

});


sequencer.registerSequence({

  name: "aucomencement3",
  start : 225,
  onStart : () => {
    console.log("start");
},

stop :226,
onStart : () => {
    console.log("start");
},
onStep : (event)=>{
  console.log(event);
  particlues.push(new Rectangle2( random(width,fr), random(height,obed+12)));

}

});





}

function draw() {

  obed = rectX + 1 * (deltaTime /50);
  
  
  
  


rectMode();
  sequencer.update();
lineWidth = random(1,48,12);
  squareSize = random(1,350);
  
  

  background(50,20,98);
  for(let particlue of particlues){
  	 particlue.draw();

 
 
      push();
      noStroke();
      strokeWeight(squareSize);
     fill(202,215,80);
     rect(500,rectX,300,squareSize);
     pop();

 push();
      stroke(125,0,0);
      strokeWeight(squareSize);
     fill(250,0,0);
     rect(fr,400,200,200);
     pop();

     push();
   stroke(125,0,0);
     fill(29,81,208);
     rect(300,900,425,squareSize)
     pop()

 push();


 translate(0,0,-100);
stroke(125,0,0);
     fill(255,204,0);
     rect(800,600,squareSize,300);
     pop();
 push();stroke(250,0,0);
     noStroke();
     rect(squareSize,800,250,fr);
     translate(2,2);
     pop();

      push()
      stroke(125,0,0);
     fill(0,250,0);
     rect(0,400,lineWidth,plus);
     pop();
  push();
  noStroke();
     fill(29,82,209);
     rect(850,400,lineWidth,40);
     pop();

      push();
      noStroke();
     fill(0,250,0);
     rect(600,940,850,squareSize);
     pop();

      push();
      noStroke();
     fill(250,250,250);
     rect(0,0,550,squareSize);
     pop();

        push();
      stroke(125,201,0);
     fill(250,250,250);
     rect(850,120,550,squareSize);
     pop();
     push();
      noStroke();
     fill(250,250,250);
     rect(400,200,window.innerHeight,squareSize);
     pop();

       stroke(125,200,0);
     fill(250,250,250);
     rect(1200,40,window.innerHeight,squareSize);
     pop();

       stroke(75,0,0);
     fill(250,250,250);
     rect(1000,400,100,squareSize);
     pop();

      push();
      noStroke();
      strokeWeight(squareSize);
     fill(24,232,150);
     rect(750,0,squareSize,window.innerWidth);
     pop();

     push();
      noStroke();
      strokeWeight(squareSize);
     fill(250,250,250);
     rect(800,0,squareSize,window.innerWidth);
     pop();

      push();
      noStroke();
      strokeWeight(squareSize);
      stroke(10, 10, 40);
     fill(250,250,250);
     rect(400,0,squareSize,800);
     pop();

     push();
      noStroke();
      strokeWeight(squareSize);
     fill(0,0,250);
     rect(0,0,squareSize,350);
     pop();

     push();
      noStroke();
      strokeWeight(squareSize);
     fill(232,205,24);
     rect(300,600,squareSize,350);
     pop();

     push();
      noStroke();
      strokeWeight(squareSize);
     fill(224,137,232);
     rect(1500,squareSize,squareSize,650);
     pop();

      push();
      noStroke();
      
      ;
      strokeWeight(squareSize);
     fill(202,215,88);
     
     rect(1500,200,squareSize,250);
     pop();

     push();
      noStroke();
      strokeWeight(squareSize);
     fill(250,250,250);
     rect(20,555,300,squareSize);
    pop();

       noStroke();
       strokeWeight(squareSize);
     fill(0,0,250);
     stroke(250,0,0,);
     rect(951,600,400,squareSize);
     pop();


  noStroke();
       strokeWeight(squareSize);
     fill(0,200,250);
     stroke(250,0,0,);
     rect(1051,600,400,squareSize);
     pop();


      noStroke();
     strokeWeight(squareSize);
     fill(255,204,0);
     stroke(255, 200,100);
     rect(900,0,250,squareSize);
     pop();


     noStroke();
     strokeWeight(squareSize);
     stroke(0, 10, 40);
     fill(250,250,250);
     rect(0,400,window.innerHeight,squareSize);
     pop();




}
}
  class Rectangle {
  	constructor(x,y){
     this.x = obed;
     this.y =lineWidth;
     this.squareSize=50*150;
     
 }
draw(){
	push();
  //rectMode(CENTER);
  fill(250,130,0);
  strokeWeight(squareSize);
  stroke(1, 211, 4);
  translate(this.x, this.plus);
 
	rect(this.x, obed, this.lineWidth);
pop()
}

}