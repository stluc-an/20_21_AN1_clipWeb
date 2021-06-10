var fond;
//var perso
var chara;
//var bulles
var bulles;
//var fleurs roses
var fleurrose1;
var fleurrose2;
var fleurrose3;
var fleurrose4;
var fleurrose5;
var fleurrose6;
//fleurs bleues
var fleurbleue1;
var fleurbleue2;
var fleurbleue3;
var fleurbleue4;
var fleurbleue5;
//fleurs oranges
var fleurorange1;
var fleurorange2;
var fleurorange3;
var fleurorange4;
//var nuages
var nuage1;
var nuage2;
var nuage3;
var nuage4;
var nuage5;
var nuage6;
let audiopath = "./high.mp3";
let sequencer
function preload(){

	fond = loadImage("fond.png");
	//personnage
	chara = new ImgDisplayer("chara.png",-500,0,1110,900);
	//bulles
	bulles = new ImgDisplayer("bulles-couleur.png", 450,250, 576,200);
	//fleurs roses
	fleurrose1 = new ImgDisplayer("fleur-1.png", 0, 0, 288, 100);
	fleurrose2 = new ImgDisplayer("fleur-1.png",250,250, 288,100);
	fleurrose3 = new ImgDisplayer("fleur-1.png",130,400,288,100);
	fleurrose4 = new ImgDisplayer("fleur-1.png",1600,300,288,100);
	fleurrose5 = new ImgDisplayer("fleur-1.png",1300,50,288,100);
	fleurrose6 = new ImgDisplayer("fleur-1.png",1000,400,288,100);
	//fleurs oranges
	fleurorange1 = new ImgDisplayer("fleur-2.png",50,200,288,100);
	fleurorange2 = new ImgDisplayer("fleur-2.png",1350,250,288,100);
	fleurorange3 = new ImgDisplayer("fleur-2.png",1200,450,288,100);
	fleurorange4 = new ImgDisplayer("fleur-2.png",1650,50,288,100);
	//fleurs bleues
	fleurbleue1 = new ImgDisplayer("fleur-3.png",400,380,288,100);
	fleurbleue2 = new ImgDisplayer("fleur-3.png",25,500,288,100);
	fleurbleue3 = new ImgDisplayer("fleur-3.png",150,50,288,100);
	fleurbleue4 = new ImgDisplayer("fleur-3.png",1100,100,288,100);
	fleurbleue5 = new ImgDisplayer("fleur-3.png",1550,475,288,100);
	//nuages
    nuage1 = new ImgDisplayer("nuage-1.png", 0, 650,500, 120);
	nuage2 = new ImgDisplayer("nuage-2.png", 15 ,800,500,120);
	nuage3 = new ImgDisplayer("nuage-1.png",1500,850,500,120);
	nuage4 = new ImgDisplayer("nuage-2.png",1500,700,500,120);
	nuage5 = new ImgDisplayer("nuage-1.png",0,750,500,120);
	nuage6 = new ImgDisplayer("nuage-1.png",1550,600,500,120);

}

function setup(){
	createCanvas(windowWidth, windowHeight);
	//séquenceur
	sequencer = new Sequencer(audiopath , 40 , true);
	sequencer.registerSequence({
		name : "bulles",
		start : 8+1/2,
		onStart : () => {
			bulles.isVisible = true ; 
		},
		stop : 127,
		onStop : () => {
			console.log("stop");
			bulles.isVisible = false ;
	    },

	});
	sequencer.registerSequence({
		name : "chara",
		start : 1,
		onStart : () => {
			chara.isVisible = true ; 
		},
		stop : 130,
		onStop : () => {
			console.log("stop");
			chara.isVisible = false ;
	    },

	});
	sequencer.registerSequence({
		name : "fleurrose1",
		start : 12,
		onStart : () => {
			fleurrose1.isVisible = true ; 
		},
		stop : 65,
		onStop : () => {
			console.log("stop");
			fleurrose1.isVisible = false ;
	    },

	});
	sequencer.registerSequence({
		name : "fleurrose2",
		start : 13+1/2,
		onStart : () => {
			fleurrose2.isVisible = true ; 
		},
		stop : 66,
		onStop : () => {
			console.log("stop");
			fleurrose2.isVisible = false ;
	    },

	});
	sequencer.registerSequence({
		name : "fleurrose3",
		start : 19,
		onStart : () => {
			fleurrose3.isVisible = true ; 
		},
		stop : 67,
		onStop : () => {
			console.log("stop");
			fleurrose3.isVisible = false ;
	    },

	});
	sequencer.registerSequence({
		name : "fleurrose4",
		start : 20+1/2,
		onStart : () => {
			fleurrose4.isVisible = true ; 
		},
		stop : 68,
		onStop : () => {
			console.log("stop");
			fleurrose4.isVisible = false ;
	    },

	});
	sequencer.registerSequence({
		name : "fleurrose5",
		start : 24+1/2,
		onStart : () => {
			fleurrose5.isVisible = true ; 
		},
		stop : 69,
		onStop : () => {
			console.log("stop");
			fleurrose5.isVisible = false ;
	    },

	});
	sequencer.registerSequence({
		name : "fleurrose6",
		start : 26+1/2,
		onStart : () => {
			fleurrose6.isVisible = true ; 
		},
		stop : 70,
		onStop : () => {
			console.log("stop");
			fleurrose6.isVisible = false ;
	    },

	});
	sequencer.registerSequence({
		name : "fleurorange1",
		start : 29+1/2,
		onStart : () => {
			fleurorange1.isVisible = true ; 
		},
		stop : 71,
		onStop : () => {
			console.log("stop");
			fleurorange1.isVisible = false ;
	    },

	});
	sequencer.registerSequence({
		name : "fleurorange2",
		start : 33+1/2,
		onStart : () => {
			fleurorange2.isVisible = true ; 
		},
		stop : 72,
		onStop : () => {
			console.log("stop");
			fleurorange2.isVisible = false ;
	    },

	});
	sequencer.registerSequence({
		name : "fleurorange3",
		start : 37+1/2,
		onStart : () => {
			fleurorange3.isVisible = true ; 
		},
		stop : 73,
		onStop : () => {
			console.log("stop");
			fleurorange3.isVisible = false ;
	    },

	});
	sequencer.registerSequence({
		name : "fleurorange4",
		start : 44+1/2,
		onStart : () => {
			fleurorange4.isVisible = true ; 
		},
		stop : 74,
		onStop : () => {
			console.log("stop");
			fleurorange4.isVisible = false ;
	    },

	});
	sequencer.registerSequence({
		name : "fleurbleue1",
		start : 46+1/2,
		onStart : () => {
			fleurbleue1.isVisible = true ; 
		},
		stop : 75,
		onStop : () => {
			console.log("stop");
			fleurbleue1.isVisible = false ;
	    },

	});
	sequencer.registerSequence({
		name : "fleurbleue2",
		start : 52,
		onStart : () => {
			fleurbleue2.isVisible = true ; 
		},
		stop : 76,
		onStop : () => {
			console.log("stop");
			fleurbleue2.isVisible = false ;
	    },

	});
	sequencer.registerSequence({
		name : "fleurbleue3",
		start : 56+1/2,
		onStart : () => {
			fleurbleue3.isVisible = true ; 
		},
		stop : 77,
		onStop : () => {
			console.log("stop");
			fleurbleue3.isVisible = false ;
	    },

	});
	sequencer.registerSequence({
		name : "fleurbleue4",
		start : 59,
		onStart : () => {
			fleurbleue4.isVisible = true ; 
		},
		stop : 78,
		onStop : () => {
			console.log("stop");
			fleurbleue4.isVisible = false ;
	    },

	});
	sequencer.registerSequence({
		name : "fleurbleue5",
		start : 62+1/2,
		onStart : () => {
			fleurbleue5.isVisible = true ; 
		},
		stop : 79,
		onStop : () => {
			console.log("stop");
			fleurbleue5.isVisible = false ;
	    },

	});
	sequencer.registerSequence({
		name : "nuage1",
		start : 81,
		onStart : () => {
			nuage1.isVisible = true ; 
		},
		stop : 127,
		onStop : () => {
			console.log("stop");
			nuage1.isVisible = false ;
	    },

	});
	sequencer.registerSequence({
		name : "nuage3",
		start : 88,
		onStart : () => {
			nuage3.isVisible = true ; 
		},
		stop : 127,
		onStop : () => {
			console.log("stop");
			nuage3.isVisible = false ;
	    },

	});
	sequencer.registerSequence({
		name : "nuage5",
		start : 95,
		onStart : () => {
			nuage5.isVisible = true ; 
		},
		stop : 127,
		onStop : () => {
			console.log("stop");
			nuage5.isVisible = false ;
	    },

	});
	sequencer.registerSequence({
		name : "nuage2",
		start : 100,
		onStart : () => {
			nuage2.isVisible = true ; 
		},
		stop : 127,
		onStop : () => {
			console.log("stop");
			nuage2.isVisible = false ;
	    },

	});
	sequencer.registerSequence({
		name : "nuage4",
		start : 103,
		onStart : () => {
			nuage4.isVisible = true ; 
		},
		stop : 127,
		onStop : () => {
			console.log("stop");
			nuage4.isVisible = false ;
	    },

	});
	sequencer.registerSequence({
		name : "nuage6",
		start : 106,
		onStart : () => {
			nuage6.isVisible = true ; 
		},
		stop : 127,
		onStop : () => {
			console.log("stop");
			nuage6.isVisible = false ;
	    },

	});
	//vitesse bulles
	bulles.speedY = -1;
	//rotation fleurs roses
	fleurrose1.speedR = 0.05;
    fleurrose2.speedR = 0.04;
    fleurrose3.speedR = 0.06;
    fleurrose4.speedR = 0.04;
    fleurrose5.speedR = 0.055;
    fleurrose6.speedR = 0.065;
    //rotation fleurs oranges
    fleurorange1.speedR = 0.01;
    fleurorange2.speedR = 0.02;
    fleurorange3.speedR = 0.015;
    fleurorange4.speedR = 0.03;
    //rotation fleurs bleues
    fleurbleue1.speedR = -0.05;
    fleurbleue2.speedR = 0.05;
    fleurbleue3.speedR = 0.035;
    fleurbleue4.speedR = -0.065;
    fleurbleue5.speedR = 0.045;
	//vitesse nuages
	nuage1.speedX = 1.5;
	nuage2.speedX = 1.8;
	nuage3.speedX = -2;
	nuage4.speedX = -1.5;
	nuage5.speedX = 1.5;
	nuage6.speedX = -1;
	//vitesse perso
	chara.speedX = 2.5;
}

function draw() {
	background(fond, width, height);
	//perso
	chara.draw();
	if (chara.x > 370) {
		chara.x = 370;
	}
	//nuage
	nuage1.draw();
	if (nuage1.x > 2000) {
		nuage1.x = 0;
	}
	//bulles
	bulles.draw();
	if (bulles.y < -150 ) {
		bulles.y = 250;
	}
	//fleurs roses
	fleurrose1.draw();
	fleurrose2.draw();
	fleurrose3.draw();
	fleurrose4.draw();
	fleurrose5.draw();
	fleurrose6.draw();
	//fleurs oranges 
    fleurorange1.draw();
    fleurorange2.draw();
    fleurorange3.draw();
    fleurorange4.draw();
	//fleurs bleues
    fleurbleue1.draw();
    fleurbleue2.draw();
    fleurbleue3.draw();
    fleurbleue4.draw();
    fleurbleue5.draw();
	//nuages
	nuage1.draw();
	if (nuage1.x > 2000) {
		nuage1.x = 0;
	}
	nuage2.draw();
	if (nuage2.x > 2000) {
		nuage2.x = 0;
	}
    nuage3.draw();
    if (nuage3.x < -500) {
    	nuage3.x = 1500;
    }
    nuage4.draw();
    if (nuage4.x < -500) {
    	nuage4.x = 1500;
    }
    nuage5.draw();
    if (nuage5.x > 2000) {
    	nuage5.x = 0;
    }
    nuage6.draw();
    if (nuage6.x < -500) {
    	nuage6.x = 1500;
    }
    sequencer.update();
  }

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class ImgDisplayer{
	constructor(path, x, y, w, h){
		this.img = loadImage(path);
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.r = 0;
		this.speedX = 0;
		this.speedY = 0;
		this.speedR = 0;
		this.isVisible = false;
	}
	draw(){
		if (this.isVisible) {
		this.x += this.speedX;
		this.y += this.speedY;
		this.r += this.speedR;
		push();
		translate(this.x, this.y);
		translate(this.w/2, this.h/2);
		rotate(this.r);
		translate(-this.w/2, -this.h/2);
		translate(-this.x, -this.y);
		
		image(this.img, this.x, this.y,this.w,this.h);
		pop();
	   }	
	}
}
