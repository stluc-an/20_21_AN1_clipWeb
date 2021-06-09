let audioPath = "./assets/audio/DOOMROAR - Night Stories - 05 Horizon.mp3";
let sequencer;
let amp = 7;
let particlues = [];
let shake = false;
let growth = false;
let oldGrowth = false;
let size ;
function setup(){
    createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    sequencer = new Sequencer(audioPath, 220, false);
    view7 = new vibration7();
    view6 = new vibration6();
    view5 = new vibration5();
    view4 = new vibration4();
    view3 = new vibration3();
    view2 = new vibration2();
    view = new vibration1();
    onde1 = new onde1();
    onde2 = new onde2();
    batterie1 = new batterie1();
    batterie2 = new batterie2();
    batterie3 = new batterie3();
    batterie4 = new batterie4();
    sequencer.registerSequence({
		name : "intro",
		start : 1,
		onStart : () => {
			view.isVisible = true;
			
		},
		stop : 201,
		onStop : () => {
			view.isVisible = false;
		},

	});

	sequencer.registerSequence({
		name : "mvmt1",
		start : 1,
		onStart : () => {
			growth = true;
			
		},
		stop : 102,
		onStop : () => {
			growth = false;
		},

	});

	sequencer.registerSequence({
		name : "ondulation5",
		start : 1,
		onStart : () => {
			view7.isVisible = true;
			
		},
		stop : 201,
		onStop : () => {
			view7.isVisible = false;
		},

	});	

	sequencer.registerSequence({
		name : "bam",
		start : 34,
		onStart : () => {
			batterie1.isVisible = true;
			
		},
		stop : 35,
		onStop : () => {
			batterie1.isVisible = false;
		},

	});	

	sequencer.registerSequence({
		name : "bam2",
		start : 35,
		onStart : () => {
			batterie3.isVisible = true;
			
		},
		stop : 36,
		onStop : () => {
			batterie3.isVisible = false;
		},

	});	

		sequencer.registerSequence({
		name : "bim",
		start : 68,
		onStart : () => {
			batterie2.isVisible = true;
			
		},
		stop : 69,
		onStop : () => {
			batterie2.isVisible = false;
		},

	});	

		sequencer.registerSequence({
		name : "bim2",
		start : 69,
		onStart : () => {
			batterie4.isVisible = true;
			
		},
		stop : 70,
		onStop : () => {
			batterie4.isVisible = false;
		},

	});	

	sequencer.registerSequence({
		name : "bim3",
		start : 77,
		onStart : () => {
			batterie1.isVisible = true;
			
		},
		stop : 78,
		onStop : () => {
			batterie1.isVisible = false;
		},

	});	

	sequencer.registerSequence({
		name : "bam3",
		start : 79,
		onStart : () => {
			batterie2.isVisible = true;
			
		},
		stop : 80,
		onStop : () => {
			batterie2.isVisible = false;
		},

	});	

		sequencer.registerSequence({
		name : "bam4",
		start : 94,
		onStart : () => {
			batterie3.isVisible = true;
			
		},
		stop : 95,
		onStop : () => {
			batterie3.isVisible = false;
		},

	});

		sequencer.registerSequence({
		name : "bim4",
		start : 95,
		onStart : () => {
			batterie4.isVisible = true;
			
		},
		stop : 96,
		onStop : () => {
			batterie4.isVisible = false;
		},

	});	

		sequencer.registerSequence({
		name : "bim5",
		start : 97,
		onStart : () => {
			batterie1.isVisible = true;
			
		},
		stop : 98,
		onStop : () => {
			batterie1.isVisible = false;
		},

	});	

		sequencer.registerSequence({
		name : "bam5",
		start : 98,
		onStart : () => {
			batterie2.isVisible = true;
			
		},
		stop : 99,
		onStop : () => {
			batterie2.isVisible = false;
		},

	});	

		sequencer.registerSequence({
		name : "bim6",
		start : 99,
		onStart : () => {
			batterie3.isVisible = true;
			
		},
		stop : 100,
		onStop : () => {
			batterie3.isVisible = false;
		},

	});

		sequencer.registerSequence({
		name : "bam6",
		start : 100,
		onStart : () => {
			batterie4.isVisible = true;
			
		},
		stop : 101,
		onStop : () => {
			batterie4.isVisible = false;
		},

	});		

	sequencer.registerSequence({
	name : "ondulation2",
	start : 102,
	onStart : () => {
		view2.isVisible = true;
			
	},
	stop : 201,
	onStop : () => {
		view2.isVisible = false;
	},

	});

		sequencer.registerSequence({
		name : "voyage",
		start : 203,
		onStart : () => {
			onde1.isVisible = true;
			
		},
		stop : 369,
		onStop : () => {
			onde1.isVisible = false;
		},

	});

		sequencer.registerSequence({
		name : "onde2",
		start : 370,
		onStart : () => {
			onde2.isVisible = true;
			
		},
		stop : 502,
		onStop : () => {
			onde2.isVisible = false;
		},

	});


		sequencer.registerSequence({
		name : "apparition1",
		start : 270,
		onStart : () => {
			batterie1.isVisible = true;
			
		},
		stop : 271,
		onStop : () => {
			batterie1.isVisible = false;
		},

	});

		sequencer.registerSequence({
		name : "apparition2",
		start : 274,
		onStart : () => {
			batterie2.isVisible = true;
			
		},
		stop : 275,
		onStop : () => {
			batterie2.isVisible = false;
		},

	});

		sequencer.registerSequence({
		name : "apparition3",
		start : 278,
		onStart : () => {
			batterie3.isVisible = true;
			
		},
		stop : 279,
		onStop : () => {
			batterie3.isVisible = false;
		},

	});

		sequencer.registerSequence({
		name : "apparition4",
		start : 282,
		onStart : () => {
			batterie4.isVisible = true;
			
		},
		stop : 283,
		onStop : () => {
			batterie4.isVisible = false;
		},

	});

		sequencer.registerSequence({
		name : "apparition5",
		start : 286,
		onStart : () => {
			batterie1.isVisible = true;
			
		},
		stop : 287,
		onStop : () => {
			batterie1.isVisible = false;
		},

	});

		sequencer.registerSequence({
		name : "apparition6",
		start : 290,
		onStart : () => {
			batterie2.isVisible = true;
			
		},
		stop : 291,
		onStop : () => {
			batterie2.isVisible = false;
		},

	});

		sequencer.registerSequence({
		name : "apparition7",
		start : 294,
		onStart : () => {
			batterie3.isVisible = true;
			
		},
		stop : 295,
		onStop : () => {
			batterie3.isVisible = false;
		},

	});

		sequencer.registerSequence({
		name : "apparition8",
		start : 298,
		onStart : () => {
			batterie4.isVisible = true;
			
		},
		stop : 299,
		onStop : () => {
			batterie4.isVisible = false;
		},

	});

		sequencer.registerSequence({
		name : "apparition9",
		start : 302,
		onStart : () => {
			batterie1.isVisible = true;
			
		},
		stop : 303,
		onStop : () => {
			batterie1.isVisible = false;
		},

	});

		sequencer.registerSequence({
		name : "apparition10",
		start : 306,
		onStart : () => {
			batterie2.isVisible = true;
			
		},
		stop : 307,
		onStop : () => {
			batterie2.isVisible = false;
		},

	});

		sequencer.registerSequence({
		name : "apparition11",
		start : 310,
		onStart : () => {
			batterie3.isVisible = true;
			
		},
		stop : 311,
		onStop : () => {
			batterie3.isVisible = false;
		},

	});

		sequencer.registerSequence({
		name : "apparition12",
		start : 314,
		onStart : () => {
			batterie4.isVisible = true;
			
		},
		stop : 315,
		onStop : () => {
			batterie4.isVisible = false;
		},

	});

		sequencer.registerSequence({
		name : "apparition13",
		start : 318,
		onStart : () => {
			batterie1.isVisible = true;
			
		},
		stop : 319,
		onStop : () => {
			batterie1.isVisible = false;
		},

	});

		sequencer.registerSequence({
		name : "apparition14",
		start : 322,
		onStart : () => {
			batterie2.isVisible = true;
			
		},
		stop : 323,
		onStop : () => {
			batterie2.isVisible = false;
		},

	});

		sequencer.registerSequence({
		name : "apparition15",
		start : 326,
		onStart : () => {
			batterie3.isVisible = true;
			
		},
		stop : 327,
		onStop : () => {
			batterie3.isVisible = false;
		},

	});

		sequencer.registerSequence({
		name : "apparition16",
		start : 330,
		onStart : () => {
			batterie4.isVisible = true;
			
		},
		stop : 331,
		onStop : () => {
			batterie4.isVisible = false;
		},

	});

		sequencer.registerSequence({
		name : "mvmt2",
		start : 337,
		onStart : () => {
			shake = true;
			
		},
		stop : 369,
		onStop : () => {
			shake = false;
		},

	});

	sequencer.registerSequence({
		name : "ondulation3",
		start : 370,
		onStart : () => {
			view3.isVisible = true;
			
		},
		stop : 503,
		onStop : () => {
			view3.isVisible = false;
		},

	});

		sequencer.registerSequence({
		name : "ligne4",
		start : 503,
		onStart : () => {
			view4.isVisible = true;
			
		},
		stop : 570,
		onStop : () => {
			view4.isVisible = false;
		},

	});

		sequencer.registerSequence({
		name : "ligne5",
		start : 571,
		onStart : () => {
			view5.isVisible = true;
			
		},
		stop : 730,
		onStop : () => {
			view5.isVisible = false;
		},

	});

		sequencer.registerSequence({
		name : "lignefinale",
		start : 605,
		onStart : () => {
			view.isVisible = true;
			
		},
		stop : 730,
		onStop : () => {
			view.isVisible = false;
		},

	});

		sequencer.registerSequence({
		name : "ondulation4",
		start : 605,
		onStart : () => {
			view6.isVisible = true;
			
		},
		stop : 730,
		onStop : () => {
			view6.isVisible = false;
		},

	});

			sequencer.registerSequence({
		name : "fin",
		start : 728,
		onStart : () => {
			console.log("start");
			
		},
		stop : 780,
		onStop : () => {
			console.log("stop");
			var Titr = document.getElementById("titre");
			Titr.classList.add("visible");
			var lea = document.getElementById("moi");
			lea.classList.add("visible");
			var Libr = document.getElementById("lib");
			Libr.classList.add("visible");
		},

	});	

			}       

function draw(){
	sequencer.update();
    background(0);
    for(let particlue of particlues){
        particlue.draw(); 
    }
    if(shake){
        let monCercle = document.querySelector(".circle");
        monCercle.style.width = 800 + (noise(frameCount / 1) - 0.5) * 30;
        monCercle.style.height = 800 + (noise(frameCount / 1) - 0.5) * 30;
    }

    if(growth){
    	if(oldGrowth == false){
    		size = 220;
    	}
    	size ++;
        let monCercle = document.querySelector(".circle");
        monCercle.style.width = size;
        monCercle.style.height = size;
    }
    oldGrowth = growth;


	view.draw();
	view2.draw();
	view3.draw();
	view4.draw();
	view5.draw();
	view6.draw();
	view7.draw();
	onde1.draw();
	onde2.draw();
	batterie1.draw();
	batterie2.draw();
	batterie3.draw();
	batterie4.draw();
	
				}      

function windowResized(){
resizeCanvas(window.innerWidth, window.innerHeight);
                        }


