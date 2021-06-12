
let audioPath = "./asset/audio/Vindicta/Vindicta - BRINN FÖR HELVETE.wav"
let sequencer; 
let view;
function setup(){
  createCanvas(window.innerWidth, window.innerHeight, WEBGL)
    sequencer = new Sequencer(audioPath,221, false);

  sequencer.registerSequence({
      name : "Intro",
      start : 0,
      onStart : () => {console.log ("start");},
      stop : 144 ,
      onStop : () => {console.log ("stop");},
        steps: [1,1+1/4, 1+2/4,1+3/4],
      onStep : (event) => {
        console.log (event);
        view.speed += 0.1
      }
    })
    sequencer.registerSequence({
      name : "Intro2",
      start : 0,
      onStart : () => {console.log ("start");},
      stop : 144 ,
      onStop : () => {console.log ("stop");},
        steps: [1],
      onStep : (event) => {
        console.log (event);
        view.nextColor();
      }
    })
  sequencer.registerSequence({
      name : "Drop",
      start : 144,
      onStart : () => {console.log ("start");},
      stop : 209 ,
      onStop : () => {console.log ("stop");},
        steps: [1,1+1/4, 1+2/4,1+3/4],
      onStep : (event) => {
        console.log (event);
        view.speed += 0.2
      }})
  sequencer.registerSequence({
      name : "first part",
      start : 209,
      onStart : () => {console.log ("start");
},
      stop : 287 ,
      onStop : () => {console.log ("stop");},
        steps: [1,1+1/4, 1+2/4,1+3/4],
      onStep : (event) => {
        console.log (event);
        view.speed += 0.1
                view.nextColor();

      }})
  sequencer.registerSequence({
      name : "Small Breaker",
      start : 287,
      onStart : () => {console.log ("start");
       },
      stop : 383,
      onStop : () => {console.log ("stop");},
        steps: [1,1+1/4, 1+2/4,1+3/4],
      onStep : (event) => {
        console.log (event);
        view.speed += 0.1
        view.color.setRed(166);
        view.bg.setRed(0);
        view.bg.setGreen(0);
        view.bg.setBlue(0);
                view.nextColor();

      }})
  sequencer.registerSequence({
      name : "Last part",
      start : 383,
      onStart : () => {console.log ("start");},
      stop : 462,
      onStop : () => {console.log ("stop");},
        steps: [1,1+1/4, 1+2/4,1+3/4],
      onStep : (event) => {
        console.log (event);
        view.speed += 0.1

                        view.nextColor();

      }})
  sequencer.registerSequence({
      name : "2nd half",
      start : 462,
      onStart : () => {console.log ("start");},
      stop : 602,
      onStop : () => {console.log ("stop");},
        steps: [1,1+1/4, 1+2/4,1+3/4],
      onStep : (event) => {
        console.log (event);
        view.speed += 0.1

                view.nextColor();

      }})
  sequencer.registerSequence({
      name : "Final Part",
      start : 602,
      onStart : () => {console.log ("start");},
      stop : 634,
      onStop : () => {console.log ("stop");},
        steps: [1, 1+1/4, 1+3/4,1+2/4],
      onStep : (event) => {
        console.log (event);
                view.speed += 0.1

        
                view.nextColor();

      }})
  sequencer.registerSequence({
      name : "Outro",
      start : 634,
      onStart : () => {console.log ("start");
   },
      stop : 865,
      onStop : () => {console.log ("stop");},
        steps: [1,1+1/4, 1+2/4,1+3/4],
      onStep : (event) => {
        console.log (event);
                view.speed += 0.1
        view.nextColor();

      }})
    sequencer.registerSequence({
      name : "Lastlastpart",
      start : 865,
      onStart : () => {console.log ("start");},
      stop : 950,
      onStop : () => {console.log ("stop");},
        steps: [1,1+1/4, 1+2/4,1+3/4],
      onStep : (event) => {
        console.log (event);
        view.speed += 0.1;
        view.nextColor();

      }})
      sequencer.registerSequence({
      name : "Part4",
      start : 950,
      onStart : () => {console.log ("start");
     },
      stop : 999,
      onStop : () => {console.log ("stop");},
        steps: [1, 1+1/4, 1+3/4,1+2/4],
      onStep : (event) => {
        console.log (event);
        view.speed += 0.1

                view.nextColor();

      }})
        sequencer.registerSequence({
      name : "Part5",
      start : 999,
      onStart : () => {console.log ("start");
  },
      stop : 1105,
      onStop : () => {console.log ("stop");},
        steps: [1,1+1/4, 1+2/4,1+3/4],
      onStep : (event) => {
        console.log (event);
        view.speed += 0.1;
        view.nextColor();
      
      }})
          sequencer.registerSequence({
      name : "Part6",
      start : 1105,
      onStart : () => {console.log ("start");
      },
      stop : 1414,
      onStop : () => {console.log ("stop");},
        steps: [1,1+1/4, 1+2/4,1+3/4],
      onStep : (event) => {
        console.log (event);
        view.speed += 0.1
         view.nextColor();

      }})
      sequencer.registerSequence({
      name : "Part7",
      start : 1414,
      onStart : () => {console.log ("start");
       },
      stop : 1482,
      onStop : () => {console.log ("stop");},
        steps: [1,1+1/4, 1+2/4,1+3/4],
      onStep : (event) => {
        console.log (event);
        view.speed += 0.1
                view.nextColor();

      }})
      sequencer.registerSequence({
      name : "End",
      start : 1482,
      onStart : () => {console.log ("start");
},
      stop : 1635,
      onStop : () => {console.log ("stop");},
        steps: [1,1+1/4, 1+2/4,1+3/4],
      onStep : (event) => {
        console.log (event);
        view.speed += 0.04;
              view.nextColor();

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
    this.speed = 2;
    this.rot = 0;
    this.colors = [color(134, 1, 17), color(231, 30, 2), color(248, 164, 47), color(255, 70, 5), color(255, 215, 41)];
    this.colorsBG = [color(59,5,5), color(95,5,5), color(127,59,8), color(166,102,11), color(187,159,12)];
    this.cursor = 0;
    this.color = color(134, 1, 17);
    this.bg = color (59,5,5)
  }

  nextColor(){
     this.cursor++;
     if( this.cursor >= this.colors.length ){
      this.cursor = 0;
     }
  }

  draw(){
    background(this.colorsBG[this.cursor])
    rotateX(PI/3);
    rotateZ(this.rot/1.6);

    for(let y = -10; y < 10; y++){
      for(let x = -10; x < 10; x++){
        push();
        let z = noise(x * 0.03 + this.speed, y*0.03 + this.speed);
        fill(this.colors[this.cursor])
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
    this.color = color(134, 1, 17);
    this.speed = 0;
    this.bg= color(59,5,5)
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
            this.color.setRed (lerp(250, 121, w))
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


