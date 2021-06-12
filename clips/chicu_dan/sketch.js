let audioPath = "./audio/again.mp3";
let sequencer;
let part = [];
let analyzer;
let arr = [];
let n = 64;
var pos = 0;
let filter;
let waved = true;
let waveupdown = true;
let wavecounter = 0;
let red = 180;
let green = 30;
let blue = 50;

let xspacing = 16; // Distance between each horizontal location
let w; // Width of entire wave
let theta = 0.0; // Start angle at 0
let amplitude = 0.0; // Height of wave
let period = 500.0; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave



function setup(){
createCanvas(window.innerWidth, window.innerHeight);
  w = width + 16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));

  sequencer = new Sequencer(audioPath, 88, false);
  
  // colorMode(HSB);
  // angleMode(DEGREES);
  //fillArr(arr);

  var dt = new Date();
  document.getElementById("date").innerHTML = dt.toLocaleDateString();
  mySequences();
}

function draw(){
  sequencer.update();
  if(waved == true){
    clear();
    calcWave();
    renderWave();
  }
}

function restart(){
  amplitude = 0;
  waved = true;
  waveupdown = true;
  wavecounter = 0;
  sequencer.pause();
  sequencer.player.audio.currentTime = 0;
  sequencer._tic = 0;
  mySequences();
  sequencer.play();
}

function calcWave() {
  theta += 0.02;
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}

function renderWave() {
  noStroke();
  fill(red, green, blue);
  for (let x = 0; x < yvalues.length; x++) {
    rect(x * xspacing, height, 16, -height / 2 + yvalues[x]);
  }
}

function mySequences(){
 
  sequencer.registerSequence({
    name : "intro",
    start : 1,
    onStart : () => {
      console.log("start");
      document.body.style.backgroundImage = "url('assets/skate.gif')";
    },
    stop : 9,
    onStop : () => {
      console.log("stop");
    },
    onStep : (event) => {
      console.log(event);
    }
  });
    sequencer.registerSequence({
    name : "phase 2",
    start : 21,
    onStart : () => {
      console.log("phase 2");
      document.body.style.backgroundSize = "cover";
      background(15, 250, 100);
      waved = true;
      
    },
    stop : 36,
    onStop : () => {
      console.log("stop");
    },
    onStep : (event) => {
      console.log(event);
      amplitude += 2;
    }
  });
      sequencer.registerSequence({
    name : "phase 3",
    start : 53,
    onStart : () => {
      console.log("phase 2");
      document.body.style.backgroundSize = "cover";
      background(15, 250, 100);
      waved = true;
      
    },
    stop : 84,
    onStop : () => {
      console.log("stop");
    },
    onStep : (event) => {
      console.log(event);
 
      if(wavecounter == 1 && waveupdown == true){
        amplitude += 30;
        wavecounter = 0;
        waveupdown = false;
      } else if(wavecounter == 1 && waveupdown == false){
        amplitude -= 30;
        wavecounter = 0;
        waveupdown = true;
      }else{wavecounter++;}
      
    }
  });
  sequencer.registerSequence({
    name : "start singing",
    start : 84,
    onStart : () => {
      console.log("start singing");
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundImage = "url('assets/woman.gif')"
      // document.canvas.style.opacity = "0.5";
      background(200, 100, 50);
      red = 50;
      green = 30;
      blue = 250;
    },
    stop : 103,
    onStop : () => {
      console.log("stop");
    },
    onStep : (event) => {
      console.log(event);
    }
  });
    sequencer.registerSequence({
    name : "continue singing",
    start : 102,
    onStart : () => {
      console.log("start singing");
      document.body.style.backgroundSize = "auto";
      // document.canvas.style.opacity = "0.5";
      background(200, 100, 50);

      if(wavecounter == 1 && waveupdown == true){
        amplitude += 30;
        wavecounter = 0;
        waveupdown = false;
      } else if(wavecounter == 1 && waveupdown == false){
        amplitude -= 30;
        wavecounter = 0;
        waveupdown = true;
      }else{wavecounter++;}
    },
    stop : 148,
    onStop : () => {
      console.log("stop");
    },
    onStep : (event) => {
      console.log(event);
    }
  });

    sequencer.registerSequence({
    name : "more singing",
    start : 148,
    onStart : () => {
      waveupdown = true;
      console.log("start singing");
      document.body.style.backgroundSize = "cover";
      // document.canvas.style.opacity = "0.5";
    amplitude += 69;
    },
    stop : 180,
    onStop : () => {
      console.log("stop");
      amplitude -= 39;
    },
    onStep : (event) => {
      console.log(event);
      if(waveupdown){
        if(amplitude > 0){amplitude -= 3;}
        else{waveupdown = false;}
      }
      else{
        if(amplitude < 100){amplitude += 3;}
        else{waveupdown = true;}
      }
    }
  });
  sequencer.registerSequence({
    name : "guy sings",
    start : 182,
    onStart : () => {
      document.body.style.backgroundImage = "url('assets/man.gif')";
      red = 230;
      green = 230;
      blue = 15;
      console.log("guy sings");
      document.body.style.backgroundSize = "auto";
    },
    stop : 212,
    onStop : () => {
      console.log("stop");
    },
    onStep : (event) => {
      console.log(event);
    }
  });
  sequencer.registerSequence({
    name : "guy singsmore",
    start : 211,
    onStart : () => {
      document.body.style.backgroundImage = "url('assets/man.gif')";
      console.log("guy sings");
      document.body.style.backgroundSize = "cover";
    },
    stop : 246,
    onStop : () => {
      console.log("stop");
    },
    onStep : (event) => {
      console.log(event);
      if(waveupdown){
        if(amplitude > 0){amplitude -= 3;}
        else{waveupdown = false;}
      }
      else{
        if(amplitude < 100){amplitude += 3;}
        else{waveupdown = true;}
      }
    }
  });
  sequencer.registerSequence({
    name : "girl again",
    start : 246,
    onStart : () => {
        document.body.style.backgroundImage = "url('assets/woman.gif')";
      console.log("girl again");
      document.body.style.backgroundSize = "cover";
      red = 50;
      green = 30;
      blue = 250;
    },
    stop : 326,
    onStop : () => {
      console.log("stop");
    },
    onStep : (event) => {
      console.log(event);
    }
  });
  sequencer.registerSequence({
    name : "escalating",
    start : 325,
    onStart : () => {
      console.log("escalating");
      document.body.style.backgroundSize = "auto";
      amplitude += 50;
    },
    stop : 354,
    onStop : () => {
      console.log("stop");
      amplitude -= 50;
    },
    onStep : (event) => {
      console.log(event);
      if(waveupdown){
        if(amplitude > 0){amplitude -= 3;}
        else{waveupdown = false;}
      }
      else{
        if(amplitude < 100){amplitude += 3;}
        else{waveupdown = true;}
      }
    }
  });
  sequencer.registerSequence({
    name : "last part",
    start : 354,
    onStart : () => {
      red = 180;
      green = 30;
      blue = 50;
      document.body.style.backgroundImage = "url('assets/skate.gif')";
      console.log("last part");
      document.body.style.backgroundSize = "cover";
    },
    stop : 392,
    onStop : () => {
      console.log("stop");
    },
    onStep : (event) => {
      console.log(event);
        if(wavecounter == 1 && waveupdown == true){
        amplitude += 30;
        wavecounter = 0;
        waveupdown = false;
      } else if(wavecounter == 1 && waveupdown == false){
        amplitude -= 30;
        wavecounter = 0;
        waveupdown = true;
      }else{wavecounter++;}
    }
  });
    sequencer.registerSequence({
    name : "almost",
    start : 354,
    onStart : () => {
      console.log("last part");
      document.body.style.backgroundSize = "cover";
    },
    stop : 392,
    onStop : () => {
      console.log("stop");
    },
    onStep : (event) => {
      if(amplitude > 0){
        amplitude -= 10;
      }
    }

  });
    sequencer.registerSequence({
    name : "end"+Math.random(),
    start : 400,
    onStart : () => {
      amplitude = 0;
      console.log("end");
    },
    stop : 400,
    onStop : () => {
      console.log(event);
      document.body.style.backgroundImage = "url('assets/firstframe.png')"
      let btn = document.createElement("button");
      btn.innerHTML = "again?";
      document.body.appendChild(btn);

      btn.addEventListener("click", function() {
      restart();
      btn.remove();
      }, false);

      // btn.style.position = "relative";
      // btn.style.top = "-80vh";
      btn.style.marginLeft = "33%";
      btn.style.marginTop = "10%";
      btn.style.translateX = "-50%";
      // btn.style.transform = "translateX(-50%)";
      console.log("stop");
    },
    onStep : (event) => {
      

    }
  });  
}

