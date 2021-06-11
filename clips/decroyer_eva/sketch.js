let view; 
let audioPath = "./assets/audio/thereality.mp3";
let sequencer;
let particlues = [];
let hasToRotate = false;
let angle = 0;

let frameOne;
let frameTwo;
let currentFrame;

function switchBG(url){
    if(currentFrame == frameOne){
        currentFrame = frameTwo;
    }else{
        currentFrame = frameOne
    }
    document.body.classList.toggle("firstHide");
    currentFrame.style.backgroundImage = url;
}


function setup() 
{
	createCanvas(window.innerWidth, window.innerHeight, WEBGL);
	view = new Noise1D();


    frameOne = document.querySelector(".frame.one");
    frameTwo = document.querySelector(".frame.two");
    currentFrame = frameOne;

	sequencer = new Sequencer(audioPath, 118, false );
    sequencer.registerSequence({
        name : "introduction",
        start : 1,
        onStart : () => {
            console.log("start");
        },

        

        onStep : (event) =>{
        	if(event.step == 38){
                switchBG("url(./assets/backgrounds/background12.jpg)");
        	}

    		if(event.step == 73){
        		switchBG("url(./assets/backgrounds/background4.jpg)");
        	}

			if(event.step == 90){
        		switchBG("url(./assets/backgrounds/background9.jpg)");
        	}

			if(event.step == 107){
        		switchBG("url(./assets/backgrounds/background2.jpg)");
        	}

        	if(event.step == 141){
        		switchBG("url(./assets/backgrounds/background11.jpg)");
        	}

        	if(event.step == 176){
        		switchBG("url(./assets/backgrounds/background6.jpg)");
        	}

        	if(event.step == 193){
        		switchBG("url(./assets/backgrounds/background8.jpg)");
        	}

        	if(event.step == 212){
        		switchBG("url(./assets/backgrounds/background3.jpg)");
        	}

        	if(event.step == 228){
        		switchBG("url(./assets/backgrounds/background7.jpg)");
        	}


        	if(event.step == 37){
        		hasToRotate = true;
        	}

            console.log(event);
           
        },

        stop : 244,
        onStop : () => {
            console.log("stop");
        },

    });
}

function draw() 
{
	
	 sequencer.update();
    background(0);
	if(hasToRotate){
		angle += 0.01;
		rotate(angle);
	}
    
	view.draw();



    for(let particlue of particlues){
        particlue.draw();
	}
}

class Noise1D
{
	constructor(){
		this.cam = createCamera();
		this.cam.setPosition(0, 0, 100);
		this.cam.lookAt(0,0,0);
		this.cam.perspective(PI * 0.07, width/height);
		setCamera(this.cam);
	}
	draw()
	{
		
		clear();
		noFill();

		let speed = frameCount * 0.01;



		for(let x = -23 ; x < 23 ; x++) {
			let y1 = noise ( x * 0.03 + speed);
			y1 = lerp (-5, 5, y1);
			let y2 = noise ( (x+1) * 0.03 + speed );
			y2 = lerp (-5, 5, y2);
			let y3 = (x+0)*(x+0)  - 5
			let y4 = (x+1)*(x+1)  - 5
			y1 = min(y1 , y3);
			y2 = min(y2 , y4);
			strokeWeight(5);
			stroke(0,0,0);
			beginShape();
			vertex(x, y1);
			vertex(x+1, y2);
			endShape();

		} 
	}
}


