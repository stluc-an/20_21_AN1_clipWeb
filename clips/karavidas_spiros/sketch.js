
let audioPath = "./asset/audio/Vindicta/Lost Trauma.wav"
let sequencer; 
let view;

function setup(){
  createCanvas(window.innerWidth, window.innerHeight, WEBGL)
    sequencer = new Sequencer(audioPath,105, false);

  sequencer.registerSequence({
      name : "Intro",
      start : 0,
      onStart : () => {console.log ("start");},
      stop : 113 ,
      onStop : () => {console.log ("stop");},
        steps: [1,1+1/2, 1+1/4],
      onStep : (event) => {
        console.log (event);
        view.speed += 0.04
        view.color.setRed(240)
        view.color.setBlue(250)
        view.color.setGreen(50)
      }})
  sequencer.registerSequence({
      name : "Drop",
      start : 44,
      onStart : () => {console.log ("start");},
      stop : 113 ,
      onStop : () => {console.log ("stop");},
        steps: [1,1+1/2, 1+1/4],
      onStep : (event) => {
        console.log (event);
        view.color.setRed(226)
        view.speed += 0.04
      }})
  sequencer.registerSequence({
      name : "first part",
      start : 113,
      onStart : () => {console.log ("start");
},
      stop : 161 ,
      onStop : () => {console.log ("stop");},
        steps: [1,1+1/2, 1+1/4],
      onStep : (event) => {
        console.log (event);
        view.speed += 0.075
        view.color.setRed(226)
      }})
  sequencer.registerSequence({
      name : "second part",
      start : 162,
      onStart : () => {console.log ("start");},
      stop : 241,
      onStop : () => {console.log ("stop");},
        steps: [1, 1+1/4, 1+3/4],
      onStep : (event) => {
        console.log (event);
        view.speed += 0.08;
        view.color.setRed(256);
        view.color.setGreen(20)
        view.color.setBlue(250)

      }
      })
  sequencer.registerSequence({
      name : "break",
      start : 241,
      onStart : () => {console.log ("start");},
      stop : 273,
      onStop : () => {console.log ("stop");},
        steps: [1, 1+1/4, 1+3/4],
      onStep : (event) => {
        console.log (event);
        view.speed += 0.08;
        view.color.setRed(246);
        view.bg.setRed(20)
        view.bg.setGreen(20)
        view.bg.setBlue(20)


      }})
  sequencer.registerSequence({
      name : "Third part",
      start : 273,
      onStart : () => {console.log ("start");
       sequencer.BPM = 110},
      stop : 369,
      onStop : () => {console.log ("stop");},
        steps: [1, 1+1/4, 1+3/4,1+2/4],
      onStep : (event) => {
        console.log (event);
        view.speed += 0.09;
        view.color.setRed(166);
        view.color.setBlue(250)
        view.bg.setRed(0);
        view.bg.setGreen(0);
        view.bg.setBlue(0);
      }})
  sequencer.registerSequence({
      name : "Small Breaker",
      start : 369,
      onStart : () => {console.log ("start");
       },
      stop : 385,
      onStop : () => {console.log ("stop");},
        steps: [1, 1+1/4, 1+3/4,1+2/4],
      onStep : (event) => {
        console.log (event);
        view.speed += 0.09;
        view.color.setRed(166);
        view.bg.setRed(0);
        view.bg.setGreen(0);
        view.bg.setBlue(0);
      }})
  sequencer.registerSequence({
      name : "Last part",
      start : 385,
      onStart : () => {console.log ("start");},
      stop : 449,
      onStop : () => {console.log ("stop");},
        steps: [1, 1+1/4, 1+3/4,1+2/4],
      onStep : (event) => {
        console.log (event);
        view.speed += 0.09;
        view.color.setRed(164);
        view.color.setBlue(250)
        view.bg.setRed(0);
        view.bg.setGreen(0);
        view.bg.setBlue(0);
      }})
  sequencer.registerSequence({
      name : "2nd half",
      start : 449,
      onStart : () => {console.log ("start");
       view = new Noise3D()},
      stop : 518,
      onStop : () => {console.log ("stop");},
        steps: [1, 1+1/4, 1+3/4,1+2/4],
      onStep : (event) => {
        console.log (event);
        view.color.setRed(240)
        view.color.setBlue(250)
        view.color.setGreen(50)
        view.speed += 0.40;
        view.bg.setRed(0);
        view.bg.setGreen(0);
        view.bg.setBlue(0);
        view.boxSize = 0.80
      }})
  sequencer.registerSequence({
      name : "Final Part",
      start : 518,
      onStart : () => {console.log ("start");},
      stop : 577,
      onStop : () => {console.log ("stop");},
        steps: [1, 1+1/4, 1+3/4,1+2/4],
      onStep : (event) => {
        console.log (event);
        view.speed += 0.5;
        view.bg.setRed(0);
        view.bg.setGreen(0);
        view.bg.setBlue(0);
      }})
  sequencer.registerSequence({
      name : "Outro",
      start : 577,
      onStart : () => {console.log ("start");
       sequencer.BPM = 105
       view = new Noise2D()},
      stop : 641,
      onStop : () => {console.log ("stop");},
        steps: [1, 1+1/4, 1+3/4,1+2/4],
      onStep : (event) => {
        console.log (event);
        view.speed += 0.09;
        view.color.setRed(240)
        view.color.setBlue(250)
        view.color.setGreen(50)
        view.bg.setRed(0);
        view.bg.setGreen(0);
        view.bg.setBlue(0);
      }})
      view = new Noise2D();
}




    
function draw(){
  sequencer.update()
  view.draw();
}

class Noise2D{
  constructor(){
    this.cam = createCamera();
    this.cam.setPosition(0, 0, 100);
    this.cam.lookAt(0,0,0);
    this.cam.perspective(PI * 0.07, width/height)
    setCamera(this.cam);
    this.speed = 0;
    this.rot = 0;
    this.color = color(250,38,160);
    this.bg = color (59,218,221)
  }

  draw(){
    background(this.bg)
    rotateX(PI/3);
    rotateZ(this.rot/1.6);

    for(let y = -10; y < 10; y++){
      for(let x = -10; x < 10; x++){
        push();
        let z = noise(x * 0.03 + this.speed, y*0.03 + this.speed);
        this.color.setBlue(lerp(200, 61, z));
        fill(this.color)
        z = lerp(-10, 10, z);
        noStroke()
        translate(x, y, z);
        plane(0.8);
        pop();
      }
    }


  }
}
class Noise3D{
  constructor(){
    this.cam = createCamera();
    this.cam.setPosition(0, 100, 100);
    this.cam.lookAt(0,0,0);
    this.cam.perspective(PI * 0.07, width/height)
    setCamera(this.cam);
    this.color = color(250,38,160);
    this.speed = 0;
    this.bg= color(59,218,221)
    this.boxSize = 0.85

  }
  draw(){
    background(this.bg);
    rotateX(PI/3);
    rotateZ(this.speed/1.6);
    let traveling = noise(this.speed)
    traveling = lerp (0, 0, traveling)
    this.cam.setPosition(traveling, 100, 100);

    for (let z = -3 ; z < 3; z++){
      for (let y = -3 ; y < 3; y++){
        for (let x = -3 ; x < 3; x++){
            let w = noise(x * 0.02 + this.speed, y *  0.02 + this.speed, z * 0.02 + this.speed)
            this.color.setBlue (lerp(0, 214, w))
            push()
            fill(this.color)
            scale(w * 3)
            translate(x, y, z);
            box(this.boxSize);
            pop();
           }
        } 
    } 

  }
}


