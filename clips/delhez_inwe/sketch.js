let audioPath = "./assets/audio/banshee_fuckwithawitch.mp3";
let sequencer;
let pentagone;
let bougie;
let mind;
let door;
let eye;
let anim;
let rodger;
let bruit;
let badrod;
let bruit2;
let pig;
let bc;
let penta;

let bgBlack;
let bgRed;
let bgColor;

function preload(){
    pentagone = new ImagesDiplayer("./assets/image/export/p_NUMBER_.PNG", 6, 700, 700);
    bougie = new ImagesDiplayer("./assets/image/export/b_NUMBER_.PNG", 14, 700, 700);
    mind = new ImagesDiplayer("./assets/image/export/m_NUMBER_.PNG", 4, 700, 700);
    door = new ImagesDiplayer("./assets/image/export/d_NUMBER_.PNG", 14, 700, 700);
    eye = new ImagesDiplayer("./assets/image/export/e_NUMBER_.PNG", 8, 700, 700);
    anim = new ImagesDiplayer("./assets/image/export/_NUMBER_.jpg", 109, 1333, 1000);
    rodger = new ImagesDiplayer("./assets/image/export/rodger_NUMBER_.png", 1, 759, 426);
    bruit = new ImagesDiplayer("./assets/image/export/bruit_NUMBER_.jpg", 1, 833, 469);
    badrod = new ImagesDiplayer("./assets/image/export/badrodger_NUMBER_.jpg", 1, 781, 440);
    bruit2 = new ImagesDiplayer("./assets/image/export/bruit_NUMBER_.jpg", 1, 833, 469);
    pig = new ImagesDiplayer("./assets/image/export/pig_NUMBER_.PNG", 6, 700, 700);
    bc = new ImagesDiplayer("./assets/image/export/bc_NUMBER_.jpg", 1, 1235, 413);
    penta = new ImagesDiplayer("./assets/image/export/p_NUMBER_.PNG", 6, 700, 700);
}



function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
    bgBlack = color(0,0,0);
    bgRed = color(255,0,0);

    bgColor = bgRed;

    sequencer = new Sequencer(audioPath, 118, true);
    sequencer.registerSequence({
        name : "introduction",
        start : 1,
        onStart : (event) => {
           pentagone.isPlaying = true;
        },
        stop : 34,
        onStop : () => {
            console.log("stop");

           pentagone.isPlaying = false;
        },
        steps : [1, 1+1/3, 1+2/3],
        onStep : (event) =>{
           pentagone.nextFrame();
           if(bgColor == bgBlack){
             bgColor = bgRed
           }else{
             bgColor = bgBlack
           }






        }
    });
    
    sequencer.registerSequence({
        name : "bougie",
        start : 34,
        onStart : (event) => {
           bougie.isPlaying = true;
        },
        stop : 42,
        onStop : () => {
            console.log("stop");

            bougie.isPlaying = false;
        },
        steps : [1, 1+1/3, 1+2/3],
        onStep : (event) =>{
           bougie.nextFrame();
           if(bgColor == bgBlack){
             bgColor = bgRed
           }else{
             bgColor = bgBlack
             }  
        } 
    });
    
        sequencer.registerSequence({
        name : "mind",
        start : 42,
        onStart : (event) => {
           mind.isPlaying = true;
        },
        stop : 45,
        onStop : () => {
            console.log("stop");

            mind.isPlaying = false;
        },
        steps : [1, 1+1/3, 1+2/3],
        onStep : (event) =>{
           mind.nextFrame();
           if(bgColor == bgBlack){
             bgColor = bgRed
           }else{
             bgColor = bgBlack
              }
        }
    });
        
        sequencer.registerSequence({
        name : "door",
        start : 45,
        onStart : (event) => {
           door.isPlaying = true;
        },
        stop : 49,
        onStop : () => {
            console.log("stop");

            door.isPlaying = false;
        },
        steps : [1, 1+1/3, 1+2/3],
        onStep : (event) =>{
           door.nextFrame();
           if(bgColor == bgBlack){
             bgColor = bgRed
           }else{
             bgColor = bgBlack
              }
        }
    });

        sequencer.registerSequence({
        name : "eye",
        start : 49,
        onStart : (event) => {
           eye.isPlaying = true;
        },
        stop : 63,
        onStop : () => {
            console.log("stop");

            eye.isPlaying = false;
        },
        steps : [1, 1+1/3, 1+2/3],
        onStep : (event) =>{
           eye.nextFrame();
           if(bgColor == bgBlack){
             bgColor = bgRed
           }else{
             bgColor = bgBlack
              }
        }
    });

        sequencer.registerSequence({
        name : "anim",
        start : 63,
        onStart : (event) => {
           anim.isPlaying = true;
        },
        stop : 94,
        onStop : () => {
            console.log("stop");

            anim.isPlaying = false;
        },
        steps : [1, 1+1/3, 1+2/3],
        onStep : (event) =>{
           anim.nextFrame();
        }
    });
    
     sequencer.registerSequence({
        name : "rodger",
        start : 95,
        onStart : (event) => {
           rodger.isPlaying = true;
        },
        stop : 114,
        onStop : () => {
            console.log("stop");

            rodger.isPlaying = false;
        },
        steps : [1, 1+1/3, 1+2/3],
        onStep : (event) =>{
           rodger.nextFrame();
        }
    });

sequencer.registerSequence({
        name : "bruit",
        start : 115,
        onStart : (event) => {
           bruit.isPlaying = true;
        },
        stop : 115,
        onStop : () => {
            console.log("stop");

            bruit.isPlaying = false;
        },
        steps : [1, 1+1/3, 1+2/3],
        onStep : (event) =>{
           bruit.nextFrame();
        }
    });

sequencer.registerSequence({
        name : "badrod",
        start : 116,
        onStart : (event) => {
           badrod.isPlaying = true;
        },
        stop : 129,
        onStop : () => {
            console.log("stop");

            badrod.isPlaying = false;
        },
        steps : [1, 1+1/3, 1+2/3],
        onStep : (event) =>{
           badrod.nextFrame();
        }
    });

sequencer.registerSequence({
        name : "bruit2",
        start : 130,
        onStart : (event) => {
           bruit2.isPlaying = true;
        },
        stop : 130,
        onStop : () => {
            console.log("stop");

            bruit2.isPlaying = false;
        },
        steps : [1, 1+1/3, 1+2/3],
        onStep : (event) =>{
           bruit2.nextFrame();
        }
    });

sequencer.registerSequence({
        name : "pig",
        start : 131,
        onStart : (event) => {
           pig.isPlaying = true;
        },
        stop : 157,
        onStop : () => {
            console.log("stop");

            pig.isPlaying = false;
        },
        steps : [1, 1+1/3, 1+2/3],
        onStep : (event) =>{
           pig.nextFrame();
           if(bgColor == bgBlack){
             bgColor = bgRed
           }else{
             bgColor = bgBlack
              }
        }
    });

sequencer.registerSequence({
        name : "bc",
        start : 158,
        onStart : (event) => {
           bc.isPlaying = true;
        },
        stop : 162,
        onStop : () => {
            console.log("stop");

            bc.isPlaying = false;
        },
        steps : [1, 1+1/3, 1+2/3],
        onStep : (event) =>{
           bc.nextFrame();
        }
    });

sequencer.registerSequence({
        name : "penta",
        start : 163,
        onStart : (event) => {
           penta.isPlaying = true;
        },
        stop : 255,
        onStop : () => {
            console.log("stop");

            penta.isPlaying = false;
        },
        steps : [1, 1+1/3, 1+2/3],
        onStep : (event) =>{
           penta.nextFrame();
           if(bgColor == bgBlack){
             bgColor = bgRed
           }else{
             bgColor = bgBlack
              }
        }
    });

        imageMode(CENTER);
}


function draw(){

    sequencer.update();
    background(bgColor);
    pentagone.draw();
    bougie.draw();
    mind.draw();
    door.draw();
    eye.draw();
    anim.draw();
    rodger.draw();
    bruit.draw();
    badrod.draw();
    bruit2.draw();
    pig.draw();
    bc.draw();
    penta.draw();
}


class ImagesDiplayer{
    constructor(seqName, count, w, h){
        this.imgsPath = seqName; 
        this.imgs = [];
        this.cursor =0;
        this.isPlaying = false;
        this.w = w;
        this.h =h;

        for(let i = 1 ; i <= count ; i++){
            let realPath = this.imgsPath.replace("_NUMBER_", i);
            let tempImg = loadImage(realPath);
            this.imgs.push(tempImg);
        }
    }

    draw(){
        if(this.isPlaying == true){
           
            //console.log(this.imgs);
            image(this.imgs[this.cursor], width/2, height/2, this.w, this.h);
        }
    }
    setCursor(amount){
        this.cursor = floor(lerp(0, this.imgs.length -1, amount));
    }
    nextFrame(){
        this.cursor ++;
        if(this.cursor >= this.imgs.length){
            this.cursor = 0;
        }
    }
}