let audioPath = "./assets/audio/DOOMROAR - Night Stories - 05 Horizon.mp3";
let sequencer;
let amp = 7;
let particlues = [];

function setup(){
    createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    sequencer = new Sequencer(audioPath, 220, true);
    view5 = new vibration5();
    view4 = new vibration4();
    view3 = new vibration3();
    view2 = new vibration2();
    view = new vibration1();
    onde1 = new onde1();
    sequencer.registerSequence({
		name : "intro",
		start : 1,
		onStart : () => {
			view.isVisible = true;
			
		},
		stop : 202,
		onStop : () => {
			view.isVisible = false;
		},

	});	

	sequencer.registerSequence({
		name : "ondulation2",
		start : 101,
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
		start : 202,
		onStart : () => {
			onde1.isVisible = true;
			
		},
		stop : 369,
		onStop : () => {
			onde1.isVisible = false;
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
		stop : 604,
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
		stop : 800,
		onStop : () => {
			view.isVisible = false;
		},

	});

	
				}       

function draw(){
	sequencer.update();
    background(0);
    for(let particlue of particlues){
        particlue.draw(); 
    								}

	view.draw();
	view2.draw();
	view3.draw();
	view4.draw();
	view5.draw();
	onde1.draw();
	
				}      

function windowResized(){
resizeCanvas(window.innerWidth, window.innerHeight);
                        }


