let audioPath = "./audio/song.mp3";
let sequencer;
let part = [];
let first = true;
let second = true;
let third = true;
let fourth = true;

function setup(){ 




  createCanvas (window.innerWidth, window.innerHeight);

  
  
     //document.body.style.background = "url('https://cdn.discordapp.com/attachments/234232108141379584/832675485728899132/musique.jpg')"
  sequencer = new Sequencer(audioPath, 140, false);
  sequencer.registerSequence({
    name : "intro",
    start : 1,
    onStart : () => {
      console.log("start");
    },
    stop : 24,
    onStop : () => {
      console.log("stop");
    },
    onStep : (event) => {
      console.log(event);
      cl();
      part.push(new Rectangle(random(width), random(height)));
    }
  });

  sequencer.registerSequence({
    name : "follow",
    start : 25,
    onStart : () => {
      console.log("start");
    },
    stop : 48,
    onStop : () => {
      console.log("stop");
    },
    onStep : (event) => {
      console.log(event);
      part.push(new Ellipse(random(width), random(height)));
    }
  });





sequencer.registerSequence({
    name : "followup",
    start : 49,
    onStart : () => {
      console.log("start");
    },
    stop : 73,
    onStop : () => {
      console.log("stop");
    },
    onStep : (event) => {
      console.log(event);
      part.push(new Rectangle(random(width), random(height)));
    }
  });


sequencer.registerSequence({
    name : "followsuite",
    start : 80,
    onStart : () => {
      console.log("start");
    },
    stop : 145,
    onStop : () => {
      console.log("stop");
    },
    onStep : (event) => {
      console.log(event);
      part.push(new Rectangle(random(width), random(height)));
    }
  });
  
  sequencer.registerSequence({
    name : "suite",
    start : 146,
    onStart : () => {
      console.log("start");
    },
    stop : 209,
    onStop : () => {
      console.log("stop");
    },
    onStep : (event) => {
      console.log(event);
      part.push(new Ellipse2(random(width), random(height)));
    }
  });




  sequencer.registerSequence({
    name : "suite",
    start : 146,
    onStart : () => {
      console.log("start");
    },
    stop : 209,
    onStop : () => {
      console.log("stop");
    },
    onStep : (event) => {
      console.log(event);
      part.push(new Rectangle2(random(width), random(height)));
    }
  });


  sequencer.registerSequence({
    name : "fin",
    start : 209,
    onStart : () => {
      console.log("start");
    },
    stop : 533,
    onStop : () => {
      console.log("stop");
    },
    onStep : (event) => {
      console.log(event);
      part.push(new Rectangle3(random(width), random(height)));
    }
  });





    sequencer.registerSequence({
    name : "superclear",
    start : 533,
    onStart : () => {
      console.log("start");
    },
    stop : 534,
    onStop : () => {
      console.log("stop");
    },
    onStep : (event) => {
      console.log(event);
     clear();
    }
  });

/*var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");

canvas.width = 903;
canvas.height = 657;


var background = new Image();
background.src = "https://cdn.discordapp.com/attachments/234232108141379584/832675485728899132/musique.jpg";

// Make sure the image is loaded first otherwise nothing will draw.
background.onload = function(){
    ctx.drawImage(background,0,0);*/  
}

function draw(){
  
  sequencer.update();
  //background(0,0,0);

  for(var i = 0; i < part.length; i++){
    part[i].draw();
  }
}

class Rectangle{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.size = 50;
  }
  draw(){
    fill(150,80,220);
    rect(this.x, this.y, this.size);
  }
}
class Ellipse{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.size = 50;
  }
  draw(){
    fill(200,150,200);
    ellipse(this.x, this.y, this.size);
  }
}
class Ellipse2{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.size = 50;
  }
  draw(){
    fill(200,150,250);
    ellipse(this.x, this.y, this.size);
  }
}

class Rectangle2{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.size = 50;
  }
  draw(){
    fill(150,80,280);
    rect(this.x, this.y, this.size);
  }
}
class Rectangle3{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.size = 50;
  }
  draw(){
    fill(150,80,200);
    rect(this.x, this.y, this.size);
  }
}


function cl(){
if(first==true){clear(); 
first = false; 
return; 
}
else if(second==true){clear(); 
second = false; 
return; 
}
else if(third==true){clear(); 
third = false; 
return; 
}
else if(fourth==true){clear(); 
fourth = false; 
return;
}
}