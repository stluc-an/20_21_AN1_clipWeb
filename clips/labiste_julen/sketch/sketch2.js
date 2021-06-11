let audioPath = "./assets/audio/freakey.mp3";
let sequencer;
let cam;


function setup() {
	createCanvas(window.innerWidth, window.innerHeight, WEBGL);

	cam = createCamera();
	cam.setPosition(0, 0, 100);
	cam.lookAt(0, 0, 0);
	cam.perspective(PI * 0.07, width/height);
	setCamera(cam);

	sequencer = new Sequencer(audioPath, 140, true);
	sequencer.registerSequence({
		name : "introduction",
		start : 2,
		onStart : () => {
			console.log("start");
		},
		stop : 33,
		onStop : () => {
			console.log("stop");
		},
		onStep : (event)=>{
			console.log(event);
			particlues.push( new Rectangle( random(width), random(height) ) );
		}

	});
}

function draw() {
	background(255, 255, 255);

	
	noFill();


	let speed = frameCount * 0.01;


	for(let x = -10 ; x < 10 ; x++){

		let y1 = noise( x * 0.03 * speed);
		y1 = lerp(-10, 10, y1);

		let y2 = noise( (x*1) * 0.03 * speed );
		y2 = lerp(-10, 10, y2);

		beginShape();
		vertex (x, y1);
		vertex(x+1, y2);
		endShape();
	}
}

var pathEls = document.querySelectorAll('path');
for (var i = 0; i < pathEls.length; i++) {
  var pathEl = pathEls[i];
  var offset = anime.setDashoffset(pathEl);
  pathEl.setAttribute('stroke-dashoffset', offset);
  anime({
    targets: pathEl,
    strokeDashoffset: [offset, 0],
    duration: anime.random(1000, 3000),
    delay: anime.random(0, 0),
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    autoplay: true
  });
}
