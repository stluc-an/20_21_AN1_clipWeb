var i=0
var gif1;
var gif2;
var gif3; 
var gif4;
var gif5;
var gif6;
var gif7;
var gif8;
var gif9;
var gif10;
var gif11;
//var musique;
var audioPath ="./assets/audio/Jemon&Moska/RIKANKA.mp3";
var sequencer;
function preload(){
    
  gif1 = createImg("15_FinalGIF_01.gif");
  gif2 = createImg("15_FinalGIF_02.gif");
  gif3 = createImg("15_FinalGIF_03.gif");
  gif4 = createImg("15_FinalGIF_04.gif");
  gif5 = createImg("15_FinalGIF_05.gif");
  gif6 = createImg("15_FinalGIF_06.gif");
  gif7 = createImg("15_FinalGIF_07.gif");
  gif8 = createImg("15_FinalGIF_08.gif");
  gif9 = createImg("15_FinalGIF_09.gif");
  gif10 = createImg("15_FinalGIF_10.gif");
  gif11 = createImg("15_FinalGIF-11.gif");

  //gif3 = createImg("");
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  sequencer = new Sequencer(audioPath,128, false);

}

function draw() {
	sequencer.update();
  background (12,50)
  i++;
  if(i>=0 && i<1470){
    gif1.position(0,0);
    gif2.position(10000,10000);
    gif3.position(10000,10000);
    gif4.position(10000,10000);
    gif5.position(10000,10000);
    gif6.position(10000,10000);
    gif7.position(10000,10000);
    gif8.position(10000,10000);
    gif9.position(10000,10000);
    gif10.position(10000,10000);
    gif11.position(10000,10000);

//
   }
 if(i>=1470 && i<2960){
  	gif2.position(0,0);
    gif3.position(10000,10000);
    gif4.position(10000,10000);
    gif5.position(10000,10000);
    gif6.position(10000,10000);
    gif7.position(10000,10000);
    gif8.position(10000,10000);
    gif9.position(10000,10000);
    gif10.position(10000,10000);
    gif11.position(10000,10000);
  }

 if(i>=2960 && i<4450){
    gif3.position(0,0);
    gif2.position(10000,10000);
    gif4.position(10000,10000);
    gif5.position(10000,10000);
    gif6.position(10000,10000);
    gif7.position(10000,10000);
    gif8.position(10000,10000);
    gif9.position(10000,10000);
    gif10.position(10000,10000);
    gif11.position(10000,10000);
}
 if(i>=4450 && i<5940){
    gif4.position(0,0);
}
 if(i>=5940 && i<7430){
    gif5.position(0,0);
}
 if(i>=7430 && i<8920){
    gif6.position(0,0);
}

 if(i>=8920 && i<10410){
    gif7.position(0,0);
}
 if(i>=10410 && i<11900){
    gif8.position(0,0);
}
 if(i>=11900 && i<13390){
    gif9.position(0,0);
}
 if(i>=13490 && i<14880){
    gif10.position(0,0);
}
 if(i>=14880 && i<16370){
    gif11.position(0,0);
 
  //	gif1.position(111000000,11000000);

  }
 //
  //if(i>=3345 && i<10000){
  	//gif3.position(0,0);
  }
if(i>=16370) {
	i=0;
}
//}