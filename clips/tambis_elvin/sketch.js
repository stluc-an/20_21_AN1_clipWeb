let audioPath="./assets/audio/lostSpaces35mm.mp3";
let sequencer;
let cam;
let view;


let cursor = 1;

function setup() {
  
    createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    view= new Noise3D();
    sequencer= new Sequencer(audioPath,100, false); 
    sequencer.registerSequence({
        name:"introduction",
        start :9,
        onStart : ()=> {
            console.log("start");
       cursor = 0;
            },
        stop : 24,
        onStop : ()=> {
            console.log("stop");
            cursor = 1;
        },
        steps:[1,1+1/4,3+1/4],
        onStep : (event)=>{
            console.log(event);
          
           view.speed+=100;
        }
     });
     sequencer.registerSequence({
        name:"firstvocal",
        start:29,
        onStart:()=>{
        console.log("vocal");
            view.cam.setPosition(random(40,50),random(-10,10),random(90,100));
            view.cam.lookAt(random(-10, 10), random(-6, 6),random(0,10));
            view.cam.perspective(PI*random(0.05,0.10) , width/height);
            view.background.setGreen(random(200,255));
            cursor = 0;
            
    },
        stop:32,
        onStop:()=>{
        console.log("fin");
            cursor = 1;
    },
        onStep:(event)=>{
            console.log(event);
           view.speed+=150;
        }
    });
    sequencer.registerSequence({
        name:"second",
        start:37,
        onStart:()=>{
        console.log("vocal");
            
             view.cam.setPosition(random(0,50),random(0,100),random(90,100));
            view.cam.lookAt(random(-10, 10), random(-6, 6),random(0,10));
            view.cam.perspective(PI*random(0.05,0.10) , width/height);
            view.background.setGreen(random(200,255));
    },
        stop:40,
        onStop:()=>{
        console.log("fin");
            
            
    },
        onStep:(event)=>{
            console.log(event);
           view.speed+=150;
            cursor = 0 - event.amount;
            
        }
    }); 
    
    
    sequencer.registerSequence({
        name:"4",
        start:53,
        onStart:()=>{
        console.log("instru");
             view.cam.setPosition(random(-0,50),random(0,100),random(90,100));
            view.cam.lookAt(random(-10, 10), random(-6, 6),random(0,10));
            view.cam.perspective(PI*random(0.05,0.10) , width/height);
            view.background.setGreen(random(200,255));
    },
        stop:56,
        onStop:()=>{
        console.log("fin")
    },
        onStep:(event)=>{
            console.log(event);
           view.speed+=150;
            
        }
    });
    sequencer.registerSequence({
        name:"5",
        start:57,
        onStart:()=>{
        console.log("instru");
             view.cam.setPosition(random(-0,50),random(0,100),random(90,100));
            view.cam.lookAt(random(-10, 10), random(-6, 6),random(0,10));
            view.cam.perspective(PI*random(0.05,0.10) , width/height);
            view.background.setGreen(random(200,255));
    },
        stop:61,
        onStop:()=>{
        console.log("fin")
    },
        onStep:(event)=>{
            console.log(event);
           view.speed+=150;
            
        }
    }); sequencer.registerSequence({
        name:"6",
        start:65,
        onStart:()=>{
        console.log("instru");
            view.cam.setPosition(random(-0,50),random(0,100),random(90,100));
            view.cam.lookAt(random(-10, 10), random(-6, 6),random(0,10));
            view.cam.perspective(PI*random(0.05,0.10) , width/height);
            view.background.setGreen(random(200,255));
    },
        stop:69,
        onStop:()=>{
        console.log("fin")
    },
        onStep:(event)=>{
            console.log(event);
           view.speed+=150;
            
        }
    }); sequencer.registerSequence({
        name:"7",
        start:73,
        onStart:()=>{
        console.log("instru");
            view.cam.setPosition(random(-0,50),random(0,100),random(90,100));
            view.cam.lookAt(random(-10, 10), random(-6, 6),random(0,10));
            view.cam.perspective(PI*random(0.05,0.10) , width/height);
            view.background.setGreen(random(200,255));
    },
        stop:74,
        onStop:()=>{
        console.log("fin")
    },
          
        onStep:(event)=>{
            console.log(event);
           view.speed+=150;
            
        }
    }); sequencer.registerSequence({
        name:"8",
        start:77,
        onStart:()=>{
        console.log("instru");
             view.cam.setPosition(random(-0,50),random(0,100),random(90,100));
            view.cam.lookAt(random(-10, 10), random(-6, 6),random(0,10));
            view.cam.perspective(PI*random(0.05,0.10) , width/height);
            view.background.setGreen(random(200,255));
    },
        stop:78,
        onStop:()=>{
        console.log("fin")
    },
         
        onStep:(event)=>{
            console.log(event);
           view.speed+=100;
            
        }
    }); sequencer.registerSequence({
        name:"9",
        start:81,
        onStart:()=>{
        console.log("instru");
            view.cam.setPosition(53,3,103);
            view.cam.lookAt(13,3,13);
            view.cam.perspective(PI * 0.05, width/height);
            view.background.setGreen(255);
    },
        stop:82,
        onStop:()=>{
        console.log("fin")
    },
          
        onStep:(event)=>{
            console.log(event);
           view.speed+=150;
            
        }
    }); sequencer.registerSequence({
        name:"9bi",
        start:85,
        onStart:()=>{
        console.log("instru");
             view.cam.setPosition(random(-0,50),random(0,100),random(90,100));
            view.cam.lookAt(random(-10, 10), random(-6, 6),random(0,10));
            view.cam.perspective(PI*random(0.05,0.10) , width/height);
            view.background.setGreen(random(200,255));
    },
        stop:86,
        onStop:()=>{
        console.log("fin")
    },
          
        onStep:(event)=>{
            console.log(event);
           view.speed+=150;
            
        }
    });
    sequencer.registerSequence({
        name:"10",
        start:89,
        onStart:()=>{
        console.log("instru");
            cursor = 0;
           view.cam.setPosition(random(-0,50),random(0,100),random(90,100));
            view.cam.lookAt(random(-10, 10), random(-6, 6),random(0,10));
            view.cam.perspective(PI*random(0.05,0.10) , width/height);
            view.background.setGreen(random(200,255));
    },
        stop:121,
        onStop:()=>{
        console.log("fin")
    },
        onStep:(event)=>{
            console.log(event);
           view.speed+=150;
            
        }
    });sequencer.registerSequence({
        name:"11",
        start:137,
        onStart:()=>{
        console.log("instru");
            cursor = 1;
           view.cam.setPosition(random(-0,50),random(0,100),random(90,100));
            view.cam.lookAt(random(-10, 10), random(-6, 6),random(0,10));
            view.cam.perspective(PI*random(0.05,0.10) , width/height);
            view.background.setGreen(random(200,255));
    },
        stop:138,
        onStop:()=>{
        console.log("fin")
    },
        onStep:(event)=>{
            console.log(event);
           view.speed+=150;
            
        }
    });
    sequencer.registerSequence({
        name:"12",
        start:141,
        onStart:()=>{
        console.log("instru");
            cursor = 0;
           view.cam.setPosition(random(-0,50),random(0,100),random(90,100));
            view.cam.lookAt(random(-10, 10), random(-6, 6),random(0,10));
            view.cam.perspective(PI*random(0.05,0.10) , width/height);
            view.background.setGreen(random(200,255));
    },
        stop:145,
        onStop:()=>{
        console.log("fin")
    },
        onStep:(event)=>{
            console.log(event);
           view.speed+=150;
            
        }
    });
    sequencer.registerSequence({
        name:"13",
        start:149,
        onStart:()=>{
        console.log("instru");
            cursor = 1;
           view.cam.setPosition(random(-0,50),random(0,100),random(90,100));
            view.cam.lookAt(random(-10, 10), random(-6, 6),random(0,10));
            view.cam.perspective(PI*random(0.05,0.10) , width/height);
            view.background.setGreen(random(200,255));
    },
        stop:153,
        onStop:()=>{
        console.log("fin")
    },
        onStep:(event)=>{
            console.log(event);
           view.speed+=150;
            
        }
    }); sequencer.registerSequence({
        name:"14",
        start:154,
        onStart:()=>{
        console.log("instru");
            cursor = 0;
           view.cam.setPosition(random(-0,50),random(0,100),random(90,100));
            view.cam.lookAt(random(-10, 10), random(-6, 6),random(0,10));
            view.cam.perspective(PI*random(0.05,0.10) , width/height);
            view.background.setGreen(random(200,255));
    },
        stop:157,
        onStop:()=>{
        console.log("fin")
    },
        onStep:(event)=>{
            console.log(event);
           view.speed+=150;
            
        }
    }); sequencer.registerSequence({
        name:"15",
        start:158,
        onStart:()=>{
        console.log("instru");
            cursor = 1;
           view.cam.setPosition(random(-0,50),random(0,100),random(90,100));
            view.cam.lookAt(random(-10, 10), random(-6, 6),random(0,10));
            view.cam.perspective(PI*random(0.05,0.10) , width/height);
            view.background.setGreen(random(200,255));
    },
        stop:161,
        onStop:()=>{
        console.log("fin")
    },
        onStep:(event)=>{
            console.log(event);
           view.speed+=150;
            
        }
    });sequencer.registerSequence({
        name:"16",
        start:162,
        onStart:()=>{
        console.log("instru");
           view.cam.setPosition(random(-0,50),random(0,100),random(90,100));
            view.cam.lookAt(random(-10, 10), random(-6, 6),random(0,10));
            view.cam.perspective(PI*random(0.05,0.10) , width/height);
            view.background.setGreen(random(200,255));
    },
        stop:165,
        onStop:()=>{
        console.log("fin")
    },
        onStep:(event)=>{
            console.log(event);
           view.speed+=150;
            
        }
    });sequencer.registerSequence({
        name:"17",
        start:162,
        onStart:()=>{
        console.log("instru");
           view.cam.setPosition(random(-0,50),random(0,100),random(90,100));
            view.cam.lookAt(random(-10, 10), random(-6, 6),random(0,10));
            view.cam.perspective(PI*random(0.05,0.10) , width/height);
            view.background.setGreen(random(200,255));
    },
        stop:165,
        onStop:()=>{
        console.log("fin")
    },
        onStep:(event)=>{
            console.log(event);
           view.speed+=150;
            
        }
    });sequencer.registerSequence({
        name:"18",
        start:169,
        onStart:()=>{
        console.log("instru");
            cursor = 0;
           view.cam.setPosition(random(-0,50),random(0,100),random(90,100));
            view.cam.lookAt(random(-10, 10), random(-6, 6),random(0,10));
            view.cam.perspective(PI*random(0.05,0.10) , width/height);
            view.background.setGreen(random(200,255));
    },
        stop:170,
        onStop:()=>{
        console.log("fin")
    },
        onStep:(event)=>{
            console.log(event);
           view.speed+=150;
            
        }
    });sequencer.registerSequence({
        name:"19",
        start:172,
        onStart:()=>{
        console.log("instru");
           view.cam.setPosition(random(-0,50),random(0,100),random(90,100));
            view.cam.lookAt(random(-10, 10), random(-6, 6),random(0,10));
            view.cam.perspective(PI*random(0.05,0.10) , width/height);
            view.background.setGreen(random(200,255));
    },
        stop:174,
        onStop:()=>{
        console.log("fin")
    },
        onStep:(event)=>{
            console.log(event);
           view.speed+=150;
            
        }
    });
    sequencer.registerSequence({
        name:"20",
        start:176,
        onStart:()=>{
        console.log("instru");
           view.cam.setPosition(random(-0,50),random(0,100),random(90,100));
            view.cam.lookAt(random(-10, 10), random(-6, 6),random(0,10));
            view.cam.perspective(PI*random(0.05,0.10) , width/height);
            view.background.setGreen(random(200,255));
    },
        stop:178,
        onStop:()=>{
        console.log("fin")
    },
        onStep:(event)=>{
            console.log(event);
           view.speed+=150;
            
        }
    });
    sequencer.registerSequence({
        name:"21",
        start:180,
        onStart:()=>{
        console.log("instru");
           view.cam.setPosition(random(-0,50),random(0,100),random(90,100));
            view.cam.lookAt(random(-10, 10), random(-6, 6),random(0,10));
            view.cam.perspective(PI*random(0.05,0.10) , width/height);
            view.background.setGreen(random(200,255));
    },
        stop:182,
        onStop:()=>{
        console.log("fin")
    },
        onStep:(event)=>{
            console.log(event);
           view.speed+=150;
            
        }
    }); sequencer.registerSequence({
        name:"22",
        start:184,
        onStart:()=>{
        console.log("instru");
           view.cam.setPosition(random(-0,50),random(0,100),random(90,100));
            view.cam.lookAt(random(-10, 10), random(-6, 6),random(0,10));
            view.cam.perspective(PI*random(0.05,0.10) , width/height);
            view.background.setGreen(random(200,255));
    },
        stop:185,
        onStop:()=>{
        console.log("fin")
    },
        onStep:(event)=>{
            console.log(event);
           view.speed+=150;
            cursor = 0 - event.amount;
            
        }
    });sequencer.registerSequence({
        name:"23",
        start:188,
        onStart:()=>{
        console.log("instru");
           view.cam.setPosition(random(-0,50),random(0,100),random(90,100));
            view.cam.lookAt(random(-10, 10), random(-6, 6),random(0,10));
            view.cam.perspective(PI*random(0.05,0.10) , width/height);
            view.background.setGreen(random(200,255));
    },
        stop:190,
        onStop:()=>{
        console.log("fin")
    },
        onStep:(event)=>{
            console.log(event);
           view.speed+=150;
            
        }
    });sequencer.registerSequence({
        name:"24",
        start:192,
        onStart:()=>{
        console.log("instru");
           view.cam.setPosition(random(-0,50),random(0,100),random(90,100));
            view.cam.lookAt(random(-10, 10), random(-6, 6),random(0,10));
            view.cam.perspective(PI*random(0.05,0.10) , width/height);
            view.background.setGreen(random(200,255));
    },
        stop:194,
        onStop:()=>{
        console.log("fin")
    },
        onStep:(event)=>{
            console.log(event);
           view.speed+=150;
            
        }
    });sequencer.registerSequence({
        name:"25",
        start:196,
        onStart:()=>{
        console.log("instru");
           view.cam.setPosition(random(-0,50),random(0,100),random(90,100));
            view.cam.lookAt(random(-10, 10), random(-6, 6),random(0,10));
            view.cam.perspective(PI*random(0.05,0.10) , width/height);
            view.background.setGreen(random(200,255));
    },
        stop:198,
        onStop:()=>{
        console.log("fin")
    },
        onStep:(event)=>{
            console.log(event);
           view.speed+=150;
            
        }
    });sequencer.registerSequence({
        name:"26",
        start:200,
        onStart:()=>{
        console.log("instru");
           view.cam.setPosition(random(-0,50),random(0,100),random(90,100));
            view.cam.lookAt(random(-10, 10), random(-6, 6),random(0,10));
            view.cam.perspective(PI*random(0.05,0.10) , width/height);
            view.background.setGreen(random(200,255));
    },
        stop:210,
        onStop:()=>{
        console.log("fin")
    },
        onStep:(event)=>{
            console.log(event);
           view.speed+=150;
            
        }
    });
    sequencer.registerSequence({
        name:"27",
        start:212,
        onStart:()=>{
        console.log("instru");
           view.cam.setPosition(random(-0,50),random(0,100),random(90,100));
            view.cam.lookAt(random(-10, 10), random(-6, 6),random(0,10));
            view.cam.perspective(PI*random(0.05,0.10) , width/height);
            view.background.setGreen(random(200,255));
    },
        stop:273,
        onStop:()=>{
        console.log("fin")
    },
        onStep:(event)=>{
            console.log(event);
           view.speed+=150;
            
        }
    });sequencer.registerSequence({
        name:"28",
        start:273,
        onStart:()=>{
        console.log("instru");
           view.cam.setPosition(random(-0,50),random(0,100),random(90,100));
            view.cam.lookAt(random(-10, 10), random(-6, 6),random(0,10));
            view.cam.perspective(PI*random(0.05,0.10) , width/height);
            view.background.setGreen(random(200,255));
    },
        stop:278,
        onStop:()=>{
        console.log("fin")
    },
        steps:[1,1+1/4,3+1/4],
        onStep:(event)=>{
            console.log(event);
           view.speed+=150;
            
        }
    });
    sequencer.registerSequence({
        name:"29",
        start:282,
        onStart:()=>{
        console.log("instru");
           view.cam.setPosition(random(-0,50),random(0,100),random(90,100));
            view.cam.lookAt(random(-10, 10), random(-6, 6),random(0,10));
            view.cam.perspective(PI*random(0.05,0.10) , width/height);
            view.background.setGreen(random(200,255));
    },
        stop:286,
        onStop:()=>{
        console.log("fin")
    },
        steps:[1,1+1/4,3+1/4],
        onStep:(event)=>{
            console.log(event);
           view.speed+=150;
            
        }
    }); sequencer.registerSequence({
        name:"30",
        start:290,
        onStart:()=>{
        console.log("instru");
           view.cam.setPosition(random(-0,50),random(0,100),random(90,100));
            view.cam.lookAt(random(-10, 10), random(-6, 6),random(0,10));
            view.cam.perspective(PI*random(0.05,0.10) , width/height);
            view.background.setGreen(random(200,255));
    },
        stop:294,
        onStop:()=>{
        console.log("fin")
    },
        steps:[1,1+1/4,3+1/4],
        onStep:(event)=>{
            console.log(event);
           view.speed+=150;
            
        }
    });
    sequencer.registerSequence({
        name:"31",
        start:298,
        onStart:()=>{
        console.log("instru");
           view.cam.setPosition(random(-0,50),random(0,100),random(90,100));
            view.cam.lookAt(random(-10, 10), random(-6, 6),random(0,10));
            view.cam.perspective(PI*random(0.05,0.10) , width/height);
            view.background.setGreen(random(200,255));
    },
        stop:302,
        onStop:()=>{
        console.log("fin")
    },
        steps:[1,1+1/4,3+1/4],
        onStep:(event)=>{
            console.log(event);
           view.speed+=150;
            
        }
    });sequencer.registerSequence({
        name:"32",
        start:305,
        onStart:()=>{
        console.log("instru");
           view.cam.setPosition(random(-0,50),random(0,100),random(90,100));
            view.cam.lookAt(random(-10, 10), random(-6, 6),random(0,10));
            view.cam.perspective(PI*random(0.05,0.10) , width/height);
            view.background.setGreen(random(200,255));
    },
        stop:337,
        onStop:()=>{
        console.log("fin")
           
    },
        onStep:(event)=>{
            console.log(event);
           view.speed+=140;
            
        }
    });sequencer.registerSequence({
        name:"32",
        start:338,
        onStart:()=>{
        console.log("instru");
           view.cam.setPosition(0,0,0);
            view.cam.lookAt(0,0,0);
            view.cam.perspective(PI*random(0.05,0.10) , width/height);
            view.background.setRed(random(200,255));
    },
        stop:339,
        onStop:()=>{
        console.log("fin")
           
    },
        onStep:(event)=>{
            console.log(event);
           view.speed+=140;
            
        }
    });
    
    
}



let particlues = [];

function draw(){
    
    sequencer.update();
    
    view.draw();
   
	}

    
    for(let particlue of particlues){
        particlue.draw();
    }
    
class Noise3D{
    constructor(){
    this.cam = createCamera();
    this.cam.setPosition(1, 90, 0);
    this.cam.lookAt(0,0,0)
    this.cam.perspective(PI * 0.07, width/height)
    setCamera(this.cam);
    this.speed = 0.5;
    this.rot = 0;
    this.color = color(255,142,113);
   this.rX = rotateX; 
      this.background=color(173,216,230)
  }
    draw(){
        background(this.background);
        let speed = frameCount * 0.01;
        rotateX(PI/2);
        rotateZ(speed);
        for(let z = -3; z<3; z++){
        for(let y = -3; y<3; y++){
        for(let x = -3; x<3; x++){
            let s = noise(x * 0.03 + speed,y * 0.03+ speed,z * 0.03+ speed)
            let color= lerp(0,255,s)
            push();
           
           fill(150,255,142,113);
            
            let R = lerp(s*3, 1, cursor);
        
    
            scale(R);
            translate(x,y,z);
            
             box(0.9);
            pop();
            }
           }
          }
         }
        }
