class batterie3{
	constructor(){
		this.cam = createCamera();
		this.cam.setPosition(0, 0, 100);
		this.cam.lookAt(0, 0, 0);
		this.cam.perspective(PI * 0.07, width/height);
		setCamera(this.cam);
		this.speed = 0;
		this.moveEnable = true;
		this.isVisible = false;
							 }
draw(){
		if(this.isVisible){
		noFill();
		strokeWeight(2);
		stroke(140, 0, 255);

		if(this.moveEnable){
			this.speed = frameCount * 0.01;
		 }

		for(let x = 10 ; x < 30 ; x++){
			let y1 = noise( x + this.speed);
			y1 = lerp(-amp, amp + 1, y1);
			let y2 = noise( x + 1 + this.speed);
			y2 = lerp(-amp, amp + 1, y2);
			beginShape();
			vertex(x, y1);
			vertex(x+1, y2);
			endShape();	
			}
		}
	}
}