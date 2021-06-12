let audioPath = "./audio/again.mp3";
let sequencer;
let part = [];
let analyzer;

let beatcount = 0;

var s_blocks = window.innerWidth/30;
var h_blocks = window.innerHeight/s_blocks;
var n_blocks = window.innerWidth/s_blocks;
var x_head   =  0;
var y_head   =  0;
var x_speed  =  0;
var y_speed  =  0;
var l_tail   =  2;
var tailblocks = [];
var x_apple  =  0;
var y_apple  =  0;


function setup(){
  createCanvas(window.innerWidth, window.innerHeight);
  sequencer = new Sequencer(audioPath, 88, false);

  
  x_head = 0;
  y_head = floor(h_blocks/2);
  
  
  x_apple = floor(n_blocks/2);
  y_apple = y_head;

  x_speed = 1;
  // colorMode(HSB);
  // angleMode(DEGREES);
  // fillArr(arr);

  var dt = new Date();
  document.getElementById("date").innerHTML = dt.toLocaleDateString();
  sequencer.registerSequence({
    name : "snake",
    start : 1,
    onStart : () => {
      console.log("start");
    },
    stop : 400,
    onStop : () => {
      console.log("stop");
    },
    onStep : (event) => {
      console.log(event);
      clear();
      snek();
    }
  }); 

  sequencer.registerSequence({
    name : "onbeat",
    start : 4,
    onStart : () => {
      console.log("start");
    },
    stop : 400,
    onStop : () => {
      console.log("stop");
    },
    onStep : (event) => {
      console.log(event);
      effect();
      if(beatcount == 4) beatcount = 0;
    }
  });
}

function draw(){
  sequencer.update();
  // vis();
  
}

function effect(){
  if(beatcount == 0){clear();}
  beatcount++;
}

function keyPressed(){
  if( (keyCode === 38 || key == 'z') && y_speed != 1){
    x_speed = 0;
    y_speed = -1;
  }
  if( (keyCode === 37 || key == 'q') && x_speed != 1){
    x_speed = -1;
    y_speed = 0;
  }
  if( (keyCode === 40 || key == 's') && y_speed != -1){
    x_speed = 0;
    y_speed = 1;
  }
  if( (keyCode === 39 || key == 'd') && x_speed != -1){
    x_speed = 1;
    y_speed = 0;
  }
}

function snek(){


  //don't let apple out of grid
  if (x_apple >= n_blocks || y_apple >= h_blocks){
    x_apple = floor(random(0, n_blocks));
    y_apple = floor(random(0, h_blocks-1));
  }

  for(let i = 0; i < tailblocks.length; i++){
    if(x_head + x_speed == tailblocks[i].x && y_head + y_speed == tailblocks[i].y){
      l_tail = 2;
      x_head = n_blocks/2;
      y_head = n_blocks/2;

      x_speed = 0;
      y_speed = 0;
    }
  }

  //background(0); //bg black
  //cut tail
  while(tailblocks.length > l_tail){
    tailblocks.shift();
  }
  //draw tail
  tailblocks.push({x:x_head,y:y_head}); //add previous position to tail
  for(let i = 0; i < tailblocks.length; i++){
    rect(tailblocks[i].x*s_blocks, tailblocks[i].y*s_blocks, s_blocks, s_blocks)
  }
  
  
  //movement
  x_head = x_head + x_speed;
  y_head = y_head + y_speed;
  
  //loop around
  if(x_head < 0){
     x_head = n_blocks - 1;
     }
  if(y_head < 0){
     y_head = h_blocks - 1;
     }
  if(x_head > n_blocks - 1){
     x_head = 0;
     }
  if(y_head > h_blocks - 1){
     y_head = 0;
     }
  //eat
  if(x_head == x_apple && y_head == y_apple){
     x_apple = floor(random(0, n_blocks));
     y_apple = floor(random(0, h_blocks));
     l_tail++;
     }
  //draw apple
  fill(255, 0, 0)
  rect(x_apple*s_blocks,
       y_apple*s_blocks,
       s_blocks,
       s_blocks)
  //draw snake head
  fill(255); 
  rect(x_head*s_blocks,
       y_head*s_blocks,
       s_blocks,
       s_blocks); 
}